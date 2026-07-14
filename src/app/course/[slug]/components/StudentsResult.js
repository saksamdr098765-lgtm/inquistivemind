"use client";

import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

export default function StudentResult({ results }) {
  if (!results?.length) return null;

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
            SUCCESS STORIES
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Real Results From
            <span className="block bg-gradient-to-r from-yellow-500 via-yellow-500 to-[#D6451B] bg-clip-text text-transparent">
              Real Students
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Hear how our students improved their communication,
            confidence, academic performance, and career
            opportunities through practical learning.
          </p>

        </div>

        {/* Testimonials */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {results.map((student, index) => (

            <div
              key={index}
              className="group flex h-full flex-col rounded-3xl border border-yellow-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-xl"
            >

              {/* Student */}
              <div className="flex items-center gap-4">

                <img
                  src={student.image}
                  alt={student.name}
                  className="h-16 w-16 rounded-2xl object-cover ring-2 ring-yellow-100"
                />

                <div>

                  <h3 className="font-bold text-slate-900">
                    {student.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {student.achievement}
                  </p>

                </div>

              </div>

              {/* Result Badge */}
              <div className="mt-5">

                <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-gradient-to-r from-yellow-50 to-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-700">

                  <FaStar className="text-yellow-500" />

                  {student.result}

                </span>

              </div>

              {/* Quote */}
              <div className="mt-6 flex-1">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-md">
                  <FaQuoteLeft />
                </div>

                <p className="leading-7 text-slate-600">
                  "{student.quote}"
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Highlight */}
        <div className="mt-14 rounded-3xl border border-yellow-200 bg-gradient-to-r from-yellow-50 via-yellow-50 to-white p-6 text-center lg:p-8">

          <h3 className="text-2xl font-bold text-slate-900">
            Join Hundreds of Successful Students
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 lg:text-base">
            Learn from experienced trainers through live interactive
            classes, personalized guidance, and structured lessons that
            help you achieve real, measurable results.
          </p>

        </div>

      </div>
    </section>
  );
}