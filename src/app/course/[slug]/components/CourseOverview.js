"use client";

import {
  FaBookOpen,
  FaUsers,
  FaCheckCircle,
  FaTag,
  FaClock,
  FaGraduationCap,
} from "react-icons/fa";

export default function CourseOverview({ course }) {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-yellow-200/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-xs font-semibold tracking-wide text-yellow-700 sm:text-sm">
            COURSE OVERVIEW
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything You Need
            <span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-[#D6451B] bg-clip-text text-transparent">
              Before You Start
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
            Learn what you'll study, who this course is designed for, and what
            you can expect throughout your learning journey.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.45fr_0.75fr] lg:gap-8">

          {/* LEFT COLUMN */}
          <div className="space-y-6">

            {/* Course Description */}
            <div className="rounded-3xl border border-yellow-100 bg-white p-5 shadow-sm lg:p-8">

              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-md lg:h-14 lg:w-14 lg:rounded-2xl">
                  <FaBookOpen />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 lg:text-xl">
                    Course Description
                  </h3>

                  <p className="text-xs text-slate-500 sm:text-sm">
                    What you'll learn in this course
                  </p>
                </div>

              </div>

              <p className="mt-6 whitespace-pre-line text-sm leading-7 text-slate-600 lg:text-base lg:leading-8">
                {course?.description}
              </p>

            </div>

            {/* Skills Covered */}
            {course?.tags?.length > 0 && (

              <div className="rounded-3xl border border-yellow-100 bg-white p-5 shadow-sm lg:p-8">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 lg:h-14 lg:w-14 lg:rounded-2xl">
                    <FaTag />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 lg:text-xl">
                      Skills Covered
                    </h3>

                    <p className="text-xs text-slate-500 sm:text-sm">
                      Topics you'll master
                    </p>
                  </div>

                </div>

                <div className="mt-6 flex flex-wrap gap-2 lg:gap-3">

                  {course.tags.map((tag) => (

                    <span
                      key={tag}
                      className="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-2 text-xs font-medium text-yellow-700 sm:text-sm"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            )}

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
                        {/* Who Is This For */}
            <div className="rounded-3xl border border-yellow-100 bg-white p-5 shadow-sm lg:p-6">

              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600 lg:h-12 lg:w-12">
                  <FaUsers />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Who Is This For?
                  </h3>

                  <p className="text-xs text-slate-500 sm:text-sm">
                    Ideal learners for this course
                  </p>
                </div>

              </div>

              <div className="mt-6 space-y-4">

                {course?.targetAudience?.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-yellow-500" />

                    <p className="text-sm leading-6 text-slate-600">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Requirements */}
            <div className="rounded-3xl border border-yellow-100 bg-white p-5 shadow-sm lg:p-6">

              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-[#D6451B] lg:h-12 lg:w-12">
                  <FaGraduationCap />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Requirements
                  </h3>

                  <p className="text-xs text-slate-500 sm:text-sm">
                    Before you begin
                  </p>
                </div>

              </div>

              <div className="mt-6 space-y-4">

                {course?.requirements?.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-yellow-500" />

                    <p className="text-sm leading-6 text-slate-600">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Course Details */}
            <div className="rounded-3xl border border-yellow-200 bg-gradient-to-br from-yellow-50 via-amber-50 to-white p-5 shadow-sm lg:p-6">

              <div className="mb-6 flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white lg:h-12 lg:w-12">
                  <FaClock />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Course Details
                  </h3>

                  <p className="text-xs text-slate-500 sm:text-sm">
                    Quick information
                  </p>
                </div>

              </div>

              <div className="space-y-3">

                {[
                  ["Duration", `${course?.durationInMonths || "-"} Months`],
                  ["Level", course?.level || "-"],
                  ["Language", course?.language || "-"],
                  [
                    "Certificate",
                    course?.certificateAvailable
                      ? "Included"
                      : "Not Available",
                  ],
                  ["Class Type", course?.classType || "-"],
                ].map(([label, value]) => (

                  <div
                    key={label}
                    className="flex items-center justify-between rounded-2xl border border-yellow-100 bg-white px-4 py-3"
                  >
                    <span className="text-sm text-slate-500">
                      {label}
                    </span>

                    <span className="text-sm font-semibold capitalize text-slate-900">
                      {value}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}