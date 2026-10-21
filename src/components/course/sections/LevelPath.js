import Link from "next/link";
import { FaArrowRight, FaArrowLeft, FaCheck } from "react-icons/fa";

export default function LevelPath({ course }) {
  if (!course) return null;

  const levels = [
    { code: "A1", name: "Beginner", title: "Discovery", slug: "french-a1-beginner-course" },
    { code: "A2", name: "Elementary", title: "Survival", slug: "french-a2-elementary-course" },
    { code: "B1", name: "Intermediate", title: "Threshold", slug: "french-b1-intermediate-course" },
    { code: "B2", name: "Advanced", title: "Vantage (CLB 7+)", slug: "french-b2-advanced-course" },
    { code: "C1", name: "Proficiency", title: "Autonome", slug: "french-c1-proficiency-course" },
    { code: "C2", name: "Mastery", title: "Bilingual", slug: "french-c2-mastery-course" },
  ];

  // Determine current active level
  const activeIndex = levels.findIndex((l) => l.slug === course.slug);

  return (
    <section className="relative bg-gradient-to-b from-white via-amber-50/25 to-white py-16 sm:py-20 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.35em] text-yellow-600 uppercase">
            CEFR PROGRESSION PATHWAY
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            The Complete French Language Roadmap
          </h2>
          <div className="mt-3 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Follow the internationally standardized Common European Framework of Reference for Languages (CEFR).
          </p>
        </div>

        {/* Visual Level Track in Yellow & White Theme */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {levels.map((lvl, idx) => {
            const isCurrent = lvl.slug === course.slug;
            const isCompleted = activeIndex !== -1 && idx < activeIndex;

            return (
              <div
                key={lvl.code}
                className={`relative rounded-2xl p-4 flex flex-col justify-between transition-all duration-200 ${
                  isCurrent
                    ? "bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-400 text-slate-950 font-bold shadow-xl shadow-yellow-200 ring-2 ring-yellow-400 -translate-y-1"
                    : isCompleted
                    ? "bg-emerald-50/70 border border-emerald-200 text-slate-900"
                    : "bg-white border border-slate-200/90 text-slate-800 hover:border-yellow-400 shadow-xs"
                }`}
              >
                {isCurrent && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-white text-amber-900 border border-amber-300 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    Current
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xl font-extrabold ${isCurrent ? "text-slate-950" : "text-yellow-600"}`}>
                      {lvl.code}
                    </span>
                    {isCompleted && (
                      <span className="text-emerald-700 text-xs font-bold flex items-center gap-0.5">
                        <FaCheck /> Done
                      </span>
                    )}
                  </div>
                  <h4 className="mt-2 text-sm font-bold">{lvl.name}</h4>
                  <p className={`text-xs mt-0.5 ${isCurrent ? "text-slate-900/80 font-medium" : "text-slate-500"}`}>
                    {lvl.title}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t ${isCurrent ? "border-slate-950/20" : "border-slate-100"}`}>
                  {isCurrent ? (
                    <span className="text-[11px] font-bold text-slate-950">
                      Active Program
                    </span>
                  ) : (
                    <Link
                      href={`/courses/${lvl.slug}`}
                      className="text-[11px] font-bold text-yellow-600 hover:text-yellow-700 hover:underline inline-flex items-center gap-1 min-h-[32px]"
                    >
                      <span>Explore</span>
                      <FaArrowRight className="text-[9px]" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Previous & Next Level Fast Switcher */}
        {(course.prevLevel || course.nextLevel) && (
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-yellow-100 pt-6">
            {course.prevLevel ? (
              <Link
                href={`/courses/${course.prevLevel}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-xs sm:text-sm font-semibold text-slate-800 hover:border-yellow-400 hover:bg-yellow-50 transition shadow-xs"
              >
                <FaArrowLeft className="text-xs text-yellow-600" />
                <span>Previous Level</span>
              </Link>
            ) : <div />}

            {course.nextLevel && (
              <Link
                href={`/courses/${course.nextLevel}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-yellow-400 px-6 py-2 text-xs sm:text-sm font-bold text-slate-950 hover:bg-yellow-500 transition shadow-md shadow-yellow-200"
              >
                <span>Advance to Next Level</span>
                <FaArrowRight className="text-xs" />
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
