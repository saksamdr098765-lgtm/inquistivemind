import SITE_CONFIG from "@/app/siteConfig";

export function getCourseSchema(course) {
  const url = `${SITE_CONFIG.url}/courses/${course.slug}`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "@id": `${url}#course`,
      name: course.title,
      description: course.shortDescription || course.description,
      provider: {
        "@type": "EducationalOrganization",
        name: SITE_CONFIG.name,
        sameAs: SITE_CONFIG.url,
      },
      url,
      courseCode: course.code || course.slug,
      educationalCredentialAwarded: course.certification || "Certificate of Completion",
      offers: {
        "@type": "Offer",
        price: course.price || 4999,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_CONFIG.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Courses",
          item: `${SITE_CONFIG.url}/courses`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: course.title,
          item: url,
        },
      ],
    },
  ];

  if (course.faq?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: course.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return schemas;
}
