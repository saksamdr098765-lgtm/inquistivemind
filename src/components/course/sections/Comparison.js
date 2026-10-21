import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Comparison({ course }) {
  if (!course) return null;

  const isLevel = course.type === "level";

  return (
    <section className="relative bg-white py-16 sm:py-20 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold tracking-[0.35em] text-yellow-600 uppercase">
            PROGRAM COMPARISON
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Compare with Alternative Courses
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Unsure whether this course matches your current skill baseline? Review the comparison guide below.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 overflow-x-auto">
          <div className="sm:hidden mb-2 text-xs text-slate-500">
            <span>⇄ Swipe horizontally to compare options</span>
          </div>

          <div className="min-w-[620px] rounded-3xl border border-yellow-200 bg-white overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-amber-50/70 p-4 font-bold text-xs sm:text-sm text-slate-800 border-b border-yellow-200">
              <div>Dimension / Parameter</div>
              <div className="text-yellow-900 bg-yellow-100/80 rounded-lg px-2.5 py-1 border border-yellow-300 inline-block w-fit">
                {course.shortTitle || course.title} (Current)
              </div>
              <div>Adjacent Level or Alternative Track</div>
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="font-semibold text-slate-900">Primary Objective</span>
                <span className="font-medium text-slate-900">{course.level || "Specific Proficiency"}</span>
                <span className="text-slate-500">{isLevel ? "Previous or Next CEFR Milestone" : "Broader or Specialized Skill"}</span>
              </div>

              <div className="grid grid-cols-3 p-4 items-center bg-amber-50/20">
                <span className="font-semibold text-slate-900">Weekly Commitment</span>
                <span className="font-medium text-slate-900">{course.hoursPerWeek} Hours / Week</span>
                <span className="text-slate-500">Flexible 4–8 Hours / Week</span>
              </div>

              <div className="grid grid-cols-3 p-4 items-center">
                <span className="font-semibold text-slate-900">Batch Dynamics</span>
                <span className="font-medium text-slate-900">{course.classSize}</span>
                <span className="text-slate-500">Small Group or 1-on-1 Mentorship</span>
              </div>

              <div className="grid grid-cols-3 p-4 items-center bg-amber-50/20">
                <span className="font-semibold text-slate-900">Target Credential</span>
                <span className="font-medium text-slate-900">{course.examAlignment?.exam || "Official Diploma Preparation"}</span>
                <span className="text-slate-500">Complementary Level Certification</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            Still unsure of your exact CEFR placement? Our instructors offer a complimentary 15-minute diagnostic evaluation.
          </p>
          <Link
            href="/book-free-trial"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-yellow-400 px-6 py-2 text-xs sm:text-sm font-bold text-slate-950 hover:bg-yellow-500 transition shadow-sm"
          >
            <span>Request Level Diagnostic</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
