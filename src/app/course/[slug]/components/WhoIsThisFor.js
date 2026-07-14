"use client";

import {
  FaUserGraduate,
  FaCheckCircle,
} from "react-icons/fa";

export default function WhoIsThisCourseFor({ whoIsThisFor }) {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-yellow-200/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-yellow-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-700">
            PERFECT FOR
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Who Should
            <span className="block bg-gradient-to-r from-yellow-500 via-yellow-500 to-[#D6451B] bg-clip-text text-transparent">
              Join This Course?
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Whether you're starting from scratch or improving your
            existing skills, this course is designed for learners
            who want practical knowledge and real-world confidence.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2">

          {whoIsThisFor?.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-yellow-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-lg lg:p-6"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-md">
                  <FaUserGraduate />
                </div>

                <div>

                  <div className="flex items-start gap-3">

                    <FaCheckCircle className="mt-1 shrink-0 text-yellow-500" />

                    <p className="text-sm leading-7 text-slate-600 lg:text-base">
                      {item}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-3xl border border-yellow-200 bg-gradient-to-r from-yellow-50 via-yellow-50 to-white p-6 text-center lg:p-8">

          <h3 className="text-2xl font-bold text-slate-900">
            Ready to Begin Your Learning Journey?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 lg:text-base">
            Join live interactive classes, learn from experienced
            trainers, practice with confidence, and achieve your
            academic or language goals faster.
          </p>

        </div>

      </div>
    </section>
  );
}