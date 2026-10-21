import { FaChevronDown, FaCheckCircle } from "react-icons/fa";

export default function Curriculum({ course }) {
  if (!course?.curriculum || course.curriculum.length === 0) return null;

  return (
    <section id="curriculum" className="relative bg-gradient-to-b from-white via-amber-50/20 to-white py-16 sm:py-20 lg:py-24 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold tracking-[0.35em] text-yellow-600 uppercase">
            SYLLABUS & ROADMAP
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Comprehensive Course Curriculum
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Every module is structured for progressive skill acquisition, balancing grammar architecture with active conversational speaking turns.
          </p>
        </div>

        {/* Server-Rendered Accordion using Semantic HTML5 <details> */}
        <div className="mt-10 sm:mt-12 space-y-4 max-w-4xl">
          {course.curriculum.map((module, idx) => (
            <details
              key={idx}
              open={idx === 0}
              className="group rounded-2xl border border-slate-200/90 bg-white transition-all duration-200 open:border-yellow-400 open:shadow-md open:shadow-yellow-100/60"
            >
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between p-4 sm:p-5 font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-2xl select-none">
                <div className="flex items-center gap-3 sm:gap-4 pr-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800 text-xs font-bold">
                    {module.week ? `W${module.week}` : `M${idx + 1}`}
                  </div>
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {module.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-400 shrink-0">
                  <span className="hidden sm:inline text-xs font-semibold text-slate-500">
                    {module.lessons?.length || 0} lessons
                  </span>
                  <FaChevronDown className="text-xs transition-transform duration-300 group-open:rotate-180 text-yellow-600" />
                </div>
              </summary>

              {/* Collapsible Content */}
              <div className="border-t border-slate-100 px-5 pb-6 pt-4 sm:px-6 bg-slate-50/50 rounded-b-2xl">
                <ul className="space-y-3">
                  {module.lessons && module.lessons.map((lesson, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                      <FaCheckCircle className="mt-1 text-xs text-yellow-500 shrink-0" />
                      <span className="leading-relaxed">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
