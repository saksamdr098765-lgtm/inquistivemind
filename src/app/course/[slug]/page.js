import CourseClient from "./components/CourseClient";
import { coursesData } from "./data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const course = coursesData.find((item) => item.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found | Inquisitive Mind Academy",
    };
  }

  return {
    title: course.seoTitle,
    description: course.seoDescription,

    keywords: course.tags,

    alternates: {
      canonical: `/courses/${course.slug}`,
    },

    openGraph: {
      title: course.seoTitle,
      description: course.seoDescription,
      url: `/courses/${course.slug}`,
      type: "website",
      images: [
        {
          url: course?.thumbnail.url || "/web-app-manifest-512x512.png",
          width: 1200,
          height: 630,
          alt: course.seoTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: course.seoTitle,
      description: course.seoDescription,
      images: [course.thumbnail.url || "/web-app-manifest-512x512.png"],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const course = coursesData.find((item) => item.slug === slug);

  if (!course) {
    notFound()
  }

  return ( 
<>
<>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify([
        // Course Schema
        {
          "@context": "https://schema.org",
          "@type": "Course",
          "@id": `https://www.inquistivemindacademy.com/courses/${course.slug}#course`,
          name: course.seoTitle,
          description: course.seoDescription,
          provider: {
            "@id": "https://www.inquistivemindacademy.com/#organization",
          },
          url: `https://www.inquistivemindacademy.com/courses/${course.slug}`,
          image: `https://www.inquistivemindacademy.com${course.thumbnail.url}`,
        },

        // WebPage Schema
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `https://www.inquistivemindacademy.com/courses/${course.slug}#webpage`,
          url: `https://www.inquistivemindacademy.com/courses/${course.slug}`,
          name: course.seoTitle,
          description: course.seoDescription,
          isPartOf: {
            "@id": "https://www.inquistivemindacademy.com/#website",
          },
          about: {
            "@id": "https://www.inquistivemindacademy.com/#organization",
          },
        },

        // Breadcrumb
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.inquistivemindacademy.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Courses",
              item: "https://www.inquistivemindacademy.com/courses",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: course.seoTitle,
              item: `https://www.inquistivemindacademy.com/courses/${course.slug}`,
            },
          ],
        },
      ]),
    }}
  />
</>
<CourseClient course={course} />
</>
  )
}