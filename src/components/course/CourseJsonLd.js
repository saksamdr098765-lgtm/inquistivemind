export default function CourseJsonLd({ course }) {
  if (!course) return null;

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://inquistivemindacademy.com").replace(/\/$/, "");
  const courseUrl = `${siteUrl}/courses/${course.slug}`;

  // 1. EducationalOrganization Schema (Service-area business; NO street address anywhere)
  const organizationSchema = {
    "@type": "EducationalOrganization",
    "@id": `${siteUrl}/#organization`,
    name: "Inquisitive Mind Academy",
    url: siteUrl,
    logo: `${siteUrl}/web-app-manifest-512x512.png`,
    description: "Language learning and academic excellence academy serving Chandigarh, Mohali, Panchkula, and Zirakpur.",
    areaServed: [
      { "@type": "City", name: "Chandigarh" },
      { "@type": "City", name: "Mohali" },
      { "@type": "City", name: "Panchkula" },
      { "@type": "City", name: "Zirakpur" },
    ],
    sameAs: [
      "https://www.instagram.com/theinquisitivemindacademy",
      "https://wa.me/919878761488",
    ],
  };

  // 2. Course Schema
  const courseSchema = {
    "@type": "Course",
    "@id": `${courseUrl}#course`,
    name: course.title,
    description: course.seo?.description || course.heroSubtitle,
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    courseMode: course.mode === "both" ? ["online", "onsite"] : [course.mode],
    educationalLevel: course.level,
    inLanguage: course.languageOfInstruction,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: course.mode === "both" ? "blended" : course.mode,
      duration: `P${course.durationWeeks}W`,
      instructor: {
        "@type": "Person",
        name: course.instructor?.name || "Inquisitive Mind Academy Faculty",
      },
    },
    ...(course.price?.from
      ? {
          offers: {
            "@type": "Offer",
            price: course.price.from,
            priceCurrency: course.price.currency || "INR",
            availability: "https://schema.org/InStock",
            url: courseUrl,
          },
        }
      : {}),
  };

  // 3. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Courses",
        item: `${siteUrl}/courses`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: course.shortTitle || course.title,
        item: courseUrl,
      },
    ],
  };

  // 4. FAQPage Schema (Only if FAQs exist)
  const faqSchema =
    course.faqs && course.faqs.length > 0
      ? {
          "@type": "FAQPage",
          mainEntity: course.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }
      : null;

  const graph = [organizationSchema, courseSchema, breadcrumbSchema];
  if (faqSchema) graph.push(faqSchema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
