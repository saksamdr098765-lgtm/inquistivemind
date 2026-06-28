"use client";

import { useRouter } from "next/navigation";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaGraduationCap,
  FaClock,
  FaCertificate,
} from "react-icons/fa";

export default function CourseCTA({ course }) {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-yellow-200/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-[30px] border border-yellow-100 bg-gradient-to-br from-yellow-50 via-white to-amber-50 shadow-sm">

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Left */}

            <div className="p-6 sm:p-8 lg:p-12">

              <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-100 px-4 py-2 text-xs font-semibold tracking-wide text-yellow-700">
                LIMITED SEATS AVAILABLE
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Ready to Join
                <span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-[#D6451B] bg-clip-text text-transparent">
                  {course?.title}?
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                Learn with expert instructors through live classes,
                practice sessions, assignments, and personalized guidance.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <button
                  onClick={() => router.push("/find-tutor")}
                  className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-500 px-7 py-4 font-semibold text-white transition hover:scale-[1.02]"
                >
                  Enroll Now
                  <FaArrowRight />
                </button>

                <button
                  onClick={() => router.push("/about")}
                  className="flex items-center justify-center gap-3 rounded-2xl border border-yellow-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:bg-yellow-50"
                >
                  <FaPhoneAlt className="text-[#D6451B]" />
                  Book Free Demo
                </button>

              </div>

            </div>
                        {/* Right */}

            <div className="border-t border-yellow-100 bg-white/70 p-6 backdrop-blur lg:border-l lg:border-t-0 lg:p-10">

              <h3 className="mb-6 text-xl font-bold text-slate-900">
                Course Highlights
              </h3>

              <div className="space-y-4">

                <div className="flex items-center gap-4 rounded-2xl border border-yellow-100 bg-white p-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                    <FaGraduationCap />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      Level
                    </p>

                    <h4 className="font-semibold capitalize text-slate-900">
                      {course?.level}
                    </h4>
                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-yellow-100 bg-white p-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                    <FaClock />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      Duration
                    </p>

                    <h4 className="font-semibold text-slate-900">
                      {course?.durationInMonths} Months
                    </h4>
                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-yellow-100 bg-white p-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-[#D6451B]">
                    <FaCertificate />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      Certificate
                    </p>

                    <h4 className="font-semibold text-slate-900">
                      Completion Certificate
                    </h4>
                  </div>

                </div>

              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 p-5 text-white">

                <p className="text-sm font-medium uppercase tracking-wide opacity-90">
                  Why Join?
                </p>

                <h4 className="mt-2 text-xl font-bold">
                  Learn with Confidence
                </h4>

                <p className="mt-2 text-sm leading-6 text-white/90">
                  Live classes, expert mentors, doubt support,
                  assignments and practical learning—all designed
                  to help you succeed.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}