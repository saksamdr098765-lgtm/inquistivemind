import Link from "next/link";
import { FaPlay, FaArrowRight } from "react-icons/fa";

export default function SampleLesson({ course }) {
  if (!course) return null;

  return (
    <section className="relative bg-gradient-to-b from-amber-50/40 via-white to-amber-50/30 text-slate-900 py-16 sm:py-20 overflow-hidden border-b border-yellow-100/60">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(250,204,21,0.14),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="text-[10px] font-bold tracking-[0.35em] text-yellow-600 uppercase">
              CLASSROOM PREVIEW
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Experience Our Interactive Live Class Format
            </h2>
            <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Wondering how our digital whiteboard and micro-speaking drills work? Every live session combines real-time phonetic feedback, student speaking prompts, and collaborative grammar exercises.
            </p>

            <div className="mt-6">
              <Link
                href="/book-free-trial"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-yellow-500 shadow-md shadow-yellow-200"
              >
                <span>Attend Free Live Demo</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          {/* Lazy-Loaded Video/Lesson Embed Placeholder in Yellow & White Theme */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video w-full rounded-3xl border border-yellow-200 bg-white p-6 shadow-xl shadow-yellow-100/50 flex flex-col items-center justify-center text-center overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08),transparent_70%)]" />

              <div className="relative z-10 flex flex-col items-center max-w-sm px-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-300 transition group-hover:scale-110 mb-4">
                  <FaPlay className="ml-1 text-xl" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Sample Classroom Demonstration
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Interactive speaking drill and grammar coaching preview for {course.shortTitle || course.title}
                </p>
                <span className="mt-3 inline-block rounded-full border border-yellow-300 bg-yellow-50 px-3 py-1 text-[11px] font-semibold text-yellow-800">
                  Live demo available upon booking
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
