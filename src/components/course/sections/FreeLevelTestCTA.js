import Link from "next/link";
import { FaArrowRight, FaClipboardCheck } from "react-icons/fa";

export default function FreeLevelTestCTA({ course }) {
  if (!course) return null;

  return (
    <section className="relative bg-gradient-to-r from-yellow-500/10 via-amber-500/15 to-yellow-500/10 py-12 border-y border-yellow-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-yellow-300/90 bg-white p-6 sm:p-8 md:p-10 shadow-lg shadow-yellow-100/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950 font-bold shadow-md shadow-yellow-200">
              <FaClipboardCheck className="text-2xl" />
            </div>
            <div>
              <span className="inline-block rounded-full bg-yellow-100 px-3 py-0.5 text-xs font-bold text-yellow-900 uppercase tracking-wider mb-1">
                Complimentary Diagnostic
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Not sure if {course.shortTitle || course.level} is your exact level?
              </h3>
              <p className="mt-1 text-sm text-slate-600 max-w-xl">
                Take our quick 15-minute diagnostic evaluation. A certified tutor will evaluate your speaking, listening, and grammar to place you in the optimal cohort.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <Link
              href={`/book-free-trial?level=${encodeURIComponent(course.level || "")}&type=level-test`}
              className="inline-flex min-h-[48px] w-full md:w-auto items-center justify-center gap-2 rounded-full bg-yellow-400 hover:bg-yellow-500 px-7 py-3 text-sm font-bold text-slate-950 transition shadow-md shadow-yellow-200 hover:-translate-y-0.5"
            >
              <span>Take Free Level Test</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
