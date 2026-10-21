import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function Outcomes({ course }) {
  if (!course?.outcomes || course.outcomes.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-amber-50/25 to-white py-16 sm:py-20 lg:py-24 border-b border-yellow-100/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold tracking-[0.35em] text-yellow-600 uppercase">
            LEARNING OUTCOMES
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            What You Will Be Able to Do
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            By the completion of this course, you will have developed concrete, verified skills designed for authentic conversations, official exams, and academic success.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {course.outcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs transition hover:border-yellow-400 hover:shadow-md hover:shadow-yellow-100"
            >
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                <FaCheckCircle className="text-base" />
              </div>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                {outcome}
              </p>
            </div>
          ))}
        </div>

        {/* Post-Outcomes Mid-Page CTA - Warm Amber / Yellow & White Theme */}
        <div className="mt-12 rounded-3xl border border-yellow-300 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-100/70 p-6 sm:p-8 text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md shadow-yellow-100/60">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-950">
              Ready to begin reaching these milestones?
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Join a live session, meet the instructor, and test our methodology with zero commitment.
            </p>
          </div>
          <Link
            href="/book-free-trial"
            className="shrink-0 inline-flex min-h-[46px] items-center gap-2 rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-yellow-500 shadow-md shadow-yellow-200 hover:-translate-y-0.5"
          >
            <span>Book Free Trial Class</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
