import Link from "next/link";
import { FaWhatsapp, FaArrowRight, FaClock, FaSignal, FaLaptopHouse, FaChevronRight } from "react-icons/fa";

export default function Hero({ course }) {
  if (!course) return null;

  const encodedWhatsapp = encodeURIComponent(
    course.cta?.whatsappMessage || `Hello! I would like to inquire about the ${course.title} at Inquisitive Mind Academy.`
  );
  const whatsappUrl = `https://wa.me/919855293752?text=${encodedWhatsapp}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-slate-50/60 text-slate-900 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 border-b border-yellow-100/60">
      {/* Background Architectural Patterns (Exact Home Page Atmosphere) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(250,204,21,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none absolute left-0 sm:-left-10 top-24 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 sm:-right-10 top-40 h-80 w-80 rounded-full bg-amber-200/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Semantic Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
          <Link href="/" className="hover:text-yellow-600 transition py-1 font-medium">Home</Link>
          <FaChevronRight className="text-[10px] text-slate-400" />
          <Link href="/courses" className="hover:text-yellow-600 transition py-1 font-medium">Courses</Link>
          <FaChevronRight className="text-[10px] text-slate-400" />
          <span className="text-yellow-700 font-semibold line-clamp-1 py-1" aria-current="page">
            {course.shortTitle || course.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8">
            {/* Level Tag & Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/80 bg-yellow-100/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-yellow-900 shadow-xs">
              <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
              <span>{course.level}</span>
            </div>

            {/* Single H1 on Page */}
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-5xl leading-tight sm:leading-tight">
              {course.h1}
            </h1>

            {/* Subtitle / Value Promise */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              {course.heroSubtitle}
            </p>

            {/* 3 Quick-Fact Chips in Clean White & Yellow Theme */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200/90 shadow-xs px-3.5 py-2 text-xs sm:text-sm text-slate-700">
                <FaSignal className="text-yellow-500 shrink-0" />
                <span>Level: <strong className="text-slate-950 font-bold">{course.level}</strong></span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200/90 shadow-xs px-3.5 py-2 text-xs sm:text-sm text-slate-700">
                <FaClock className="text-yellow-500 shrink-0" />
                <span>Duration: <strong className="text-slate-950 font-bold">{course.durationWeeks} Weeks ({course.hoursPerWeek}h/wk)</strong></span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200/90 shadow-xs px-3.5 py-2 text-xs sm:text-sm text-slate-700">
                <FaLaptopHouse className="text-yellow-500 shrink-0" />
                <span className="capitalize">Mode: <strong className="text-slate-950 font-bold">{course.mode === "both" ? "Live Online & Hybrid" : course.mode}</strong></span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/book-free-trial"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-sm sm:text-base font-bold text-slate-950 shadow-lg shadow-yellow-200 transition hover:bg-yellow-500 hover:shadow-yellow-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 active:translate-y-0"
              >
                <span>{course.cta?.primary?.text || "Book Free Trial Class"}</span>
                <FaArrowRight className="text-xs" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-emerald-500/70 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-md transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <FaWhatsapp className="text-lg" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="text-yellow-500 font-bold">✓</span> No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-yellow-500 font-bold">✓</span> Live interactive mentor feedback
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-yellow-500 font-bold">✓</span> Free level assessment
              </span>
            </div>
          </div>

          {/* Right Highlight Card - Clean White & Yellow Theme */}
          <div className="lg:col-span-4">
            <div className="relative rounded-3xl border border-yellow-200/90 bg-white p-6 sm:p-7 shadow-xl shadow-yellow-100/50">
              <div className="absolute top-0 right-8 -translate-y-1/2">
                <span className="rounded-full bg-yellow-400 text-slate-950 font-bold px-3 py-1 text-xs uppercase tracking-wider shadow">
                  Next Batch
                </span>
              </div>

              <p className="text-xs font-bold text-yellow-700 uppercase tracking-wider">
                Upcoming Cohort
              </p>
              <h3 className="mt-1 text-xl font-bold text-slate-950">
                {course.nextBatch?.date || "Enrollment Open"}
              </h3>

              <div className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500">Class Size:</span>
                  <span className="font-semibold text-slate-900">{course.classSize}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500">Language:</span>
                  <span className="font-semibold text-slate-900">{course.languageOfInstruction}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500">Tuition From:</span>
                  <span className="font-extrabold text-yellow-600 text-base">
                    {course.price?.currency === "INR" ? `₹${course.price.from.toLocaleString()}` : "Inquire for fees"}
                  </span>
                </div>
              </div>

              {course.nextBatch?.timings && course.nextBatch.timings.length > 0 && (
                <div className="mt-4 rounded-2xl bg-amber-50/70 p-3.5 border border-yellow-200/70">
                  <p className="text-[11px] font-bold text-yellow-900 uppercase tracking-wider">Available Slots:</p>
                  <ul className="mt-1.5 space-y-1 text-xs text-slate-700">
                    {course.nextBatch.timings.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-yellow-500 font-bold">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                href="/book-free-trial"
                className="mt-6 flex min-h-[44px] w-full items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500 text-slate-950 text-xs sm:text-sm font-bold shadow-md shadow-yellow-200 transition"
              >
                Reserve Seat in Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
