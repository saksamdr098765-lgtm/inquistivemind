import { getCourse, courses } from "@/app/data/courses";
import { notFound } from "next/navigation";
import SITE_CONFIG from "@/app/siteConfig";
import { getCourseSchema } from "@/schemas/courseSchema";
import { FiCheckCircle, FiClock, FiBookOpen, FiAward, FiArrowRight } from "react-icons/fi";

export async function generateStaticParams() {
  return courses.map((c) => ({
    slug: c.slug,
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

  const url = `${SITE_CONFIG.url}/courses/${course.slug}`;
  const image = course.coverImage?.startsWith("http")
    ? course.coverImage
    : `${SITE_CONFIG.url}${course.coverImage || SITE_CONFIG.ogImage}`;

  return {
    title: course.seo?.title || course.title,
    description: course.seo?.description || course.shortDescription,
    keywords: course.seo?.keywords || [],
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: course.seo?.title || course.title,
      description: course.seo?.description || course.shortDescription,
      url,
      siteName: SITE_CONFIG.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: course.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: course.seo?.title || course.title,
      description: course.seo?.description || course.shortDescription,
      images: [image],
    },
  };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) {
    notFound();
  }

  const schemas = getCourseSchema(course);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <main className="bg-slate-50 min-h-screen">
        {/* Course Hero */}
        <section className="relative bg-slate-900 text-white py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={course.coverImage}
              alt={course.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/70" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block rounded-full bg-yellow-500/20 px-4 py-1.5 text-xs font-bold text-yellow-300 border border-yellow-500/30">
                  {course.level}
                </span>

                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
                  {course.title}
                </h1>

                <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                  {course.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2 rounded-xl bg-slate-800/80 px-4 py-2 border border-slate-700">
                    <FiClock className="text-yellow-400" />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-slate-800/80 px-4 py-2 border border-slate-700">
                    <FiBookOpen className="text-yellow-400" />
                    <span>Mode: {course.mode}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-slate-800/80 px-4 py-2 border border-slate-700">
                    <FiAward className="text-yellow-400" />
                    <span>Accredited Certificate Included</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#enroll"
                    className="rounded-xl bg-yellow-500 px-8 py-4 text-sm font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-lg"
                  >
                    Enroll Now at ₹{course.price.toLocaleString()}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-slate-700 bg-slate-800/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                    Course Key Features
                  </span>

                  <ul className="mt-6 space-y-3">
                    {course.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <FiCheckCircle className="text-yellow-400 mt-1 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-slate-700 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">Enrollment Fee</span>
                      <p className="text-3xl font-extrabold text-white">
                        ₹{course.price.toLocaleString()}
                      </p>
                    </div>
                    {course.originalPrice && (
                      <span className="text-sm font-semibold text-slate-400 line-through">
                        ₹{course.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Curriculum */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-yellow-600">
                Syllabus & Modules
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Course Curriculum Overview
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {course.curriculum.map((curr, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
                >
                  <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-800 mb-3">
                    {curr.module}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {curr.title}
                  </h3>

                  <ul className="mt-4 space-y-2.5">
                    {curr.topics.map((t, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <FiCheckCircle className="text-yellow-600 mt-1 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expected Outcomes */}
        {course.outcomes && (
          <section className="py-16 bg-slate-50 border-b border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-yellow-600">
                  Learning Objectives
                </span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  What You Will Accomplish
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.outcomes.map((out, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800 font-bold">
                      <FiCheckCircle className="text-yellow-600 text-xl" />
                    </div>
                    <p className="text-base font-semibold text-slate-800 leading-snug">
                      {out}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section id="enroll" className="py-16 bg-gradient-to-br from-slate-900 to-slate-950 text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
              Enroll in {course.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Join our upcoming live batch or register for offline classes. Limited to 10 students per batch.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20Inquisitive%20Mind%20Academy,%20I%20want%20to%20enroll%20in%20${encodeURIComponent(
                  course.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-yellow-500 px-8 py-4 text-base font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-xl"
              >
                Enroll via WhatsApp Direct
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="rounded-xl border border-slate-700 bg-slate-800 px-8 py-4 text-base font-semibold text-white hover:bg-slate-700 transition-all"
              >
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
