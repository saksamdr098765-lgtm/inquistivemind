import Link from "next/link";
import { FaGraduationCap, FaCheckCircle, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { getAllCourses } from "@/app/data/courses";
import CoursesHubClient from "./components/CoursesHubClient";
import LevelMatcher from "./components/LevelMatcher";
import HubFAQ, { hubFaqs } from "./components/HubFAQ";

export const metadata = {
  title: "Language & Academic Courses in Chandigarh | Inquisitive Mind Academy",
  description:
    "Explore French (A1-C2), English speaking, and school tuition (1-12) courses in Chandigarh. Small batches, certified faculty, and free trial class.",
  keywords: null,
  alternates: {
    canonical: "/courses",
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
    title: "Language & Academic Courses in Chandigarh | Inquisitive Mind Academy",
    description:
      "Explore French (A1-C2), Spoken English, and School Tuition courses in Chandigarh. Certified trainers, interactive classes, and free trial demo.",
    url: "/courses",
    siteName: "Inquisitive Mind Academy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
        alt: "Courses at Inquisitive Mind Academy Chandigarh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Language & Academic Courses in Chandigarh | IMA",
    description: "French (A1-C2), Spoken English, and School Tuition. Small batches & free trial class.",
    images: ["/web-app-manifest-512x512.png"],
  },
};

export default function CoursesHubPage() {
  const allCourses = getAllCourses();
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.inquistivemindacademy.com").replace(/\/$/, "");

  // Hub JSON-LD Graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
      },
      {
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
        ],
      },
      {
        "@type": "ItemList",
        name: "Inquisitive Mind Academy Course Catalog",
        itemListElement: allCourses.map((course, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: course.title,
          url: `${siteUrl}/courses/${course.slug}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: hubFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative min-h-screen overflow-hidden overflow-x-clip bg-gradient-to-b from-amber-50/40 via-white to-slate-50/60 pt-24 pb-20 text-slate-900">
        {/* Background Architectural Patterns matching Home Page */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(250,204,21,0.18),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Ambient Lighting Orbs */}
        <div className="pointer-events-none absolute left-0 sm:-left-10 top-24 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 sm:-right-10 top-60 h-80 w-80 rounded-full bg-yellow-200/20 blur-3xl" />

        <div className="relative z-10">
          {/* Hub Hero Header */}
          <section className="relative overflow-hidden py-14 sm:py-18 border-b border-yellow-100/70">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-slate-500">
                <Link href="/" className="hover:text-yellow-600 transition">Home</Link>
                <span>/</span>
                <span className="text-yellow-600 font-semibold" aria-current="page">Courses</span>
              </nav>

              <div className="max-w-3xl">
                <p className="text-[10px] font-bold tracking-[0.35em] text-yellow-600 uppercase">
                  COURSE DIRECTORY & PROGRAMS
                </p>
                {/* Single H1 for Hub Page */}
                <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Language Learning, Spoken English & Academic Tuition in Chandigarh
                </h1>
                <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                  Whether your goal is clearing DELF/DALF, scoring CLB 7+ for Canada immigration, speaking fluent business English, or mastering school board examinations, choose from our specialized small-cohort batches.
                </p>

                {/* Highlights List */}
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <FaCheckCircle className="text-yellow-500" /> Capped Micro-Batches (4–8 Students)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaCheckCircle className="text-yellow-500" /> Certified DELF / DALF Faculty
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaCheckCircle className="text-yellow-500" /> 100% Free Trial Class Available
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Course Catalog with Interactive Filters & Static HTML Links */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <CoursesHubClient allCourses={allCourses} />

            {/* Self-Assessment Level Matcher */}
            <LevelMatcher />

            {/* Hub FAQ Section */}
            <HubFAQ />

            {/* Hub Bottom Call to Action */}
            <div className="mt-16 rounded-3xl border border-yellow-200/90 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/80 p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.18),transparent_70%)]" />
              <div className="relative">
                <span className="inline-block rounded-full bg-yellow-100 border border-yellow-300/80 px-3.5 py-1 text-xs font-bold text-yellow-900 uppercase tracking-wider mb-3">
                  NEED ADVICE?
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                  Unsure which program fits your schedule and timeline?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
                  Speak directly with an educational counselor. We will walk you through batch availability, syllabus options, and book your free demo class.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/book-free-trial"
                    className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-3 text-sm font-bold text-slate-950 transition hover:bg-yellow-300 shadow-md shadow-yellow-200"
                  >
                    <span>Book Free Trial Class</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                  <a
                    href="https://wa.me/919878761488?text=Hello%20Inquisitive%20Mind%20Academy!%20I%20need%20help%20choosing%20the%20right%20course."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-emerald-500 bg-emerald-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 shadow-md"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>Chat with Advisor</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
