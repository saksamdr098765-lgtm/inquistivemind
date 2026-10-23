import { notFound } from "next/navigation";
import { getAllCourses, getCourse } from "@/app/data/courses";
import SectionRenderer from "@/components/course/SectionRenderer";
import StickyMobileCTA from "@/components/course/StickyMobileCTA";
import CourseJsonLd from "@/components/course/CourseJsonLd";

export async function generateStaticParams() {
  const courses = getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) {
    return {
      title: "Course Not Found | Inquisitive Mind Academy",
      robots: { index: false, follow: false },
    };
  }

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.inquistivemindacademy.com").replace(/\/$/, "");
  const canonicalUrl = `${siteUrl}/courses/${course.slug}`;

  // CTR Title formula: "[Course] in Chandigarh | [Benefit] | Free Trial Class" (max ~60 chars)
  const metaTitle = course.seo?.titleTemplate || `${course.shortTitle || course.title} in Chandigarh | Free Trial`;
  const metaDescription = course.seo?.description || course.heroSubtitle;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: null,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "Inquisitive Mind Academy",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: `${canonicalUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${course.title} - Inquisitive Mind Academy`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [`${canonicalUrl}/opengraph-image`],
    },
  };
}

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      {/* Course JSON-LD Structured Data */}
      <CourseJsonLd course={course} />

      <main className="relative min-h-screen overflow-hidden overflow-x-clip bg-gradient-to-b from-amber-50/40 via-white to-slate-50/60 text-slate-900">
        {/* Background Architectural Patterns matching Home Page */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(250,204,21,0.18),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Ambient Lighting Orbs */}
        <div className="pointer-events-none absolute left-0 sm:-left-10 top-24 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 sm:-right-10 top-60 h-80 w-80 rounded-full bg-yellow-200/20 blur-3xl" />

        <div className="relative z-10">
          <SectionRenderer course={course} />
        </div>
      </main>

      {/* Mobile Sticky Action Bar */}
      <StickyMobileCTA course={course} />
    </>
  );
}
