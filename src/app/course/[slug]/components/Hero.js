"use client";

import Link from "next/link";
import {
  FaClock,
  FaSignal,
  FaLanguage,
  FaUsers,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

export default function CourseHero({ course }) {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-yellow-700">
              <FaStar />
              Featured Course
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              {course?.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {course?.shortDescription}
            </p>

            {/* Course Info */}

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <FaClock className="mb-2 text-xl text-yellow-500" />
                <p className="text-xs text-slate-500">
                  Duration
                </p>
                <p className="font-semibold text-slate-900">
                  {course?.durationInMonths} Months
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <FaSignal className="mb-2 text-xl text-sky-500" />
                <p className="text-xs text-slate-500">
                  Level
                </p>
                <p className="font-semibold capitalize text-slate-900">
                  {course?.level}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <FaLanguage className="mb-2 text-xl text-yellow-500" />
                <p className="text-xs text-slate-500">
                  Language
                </p>
                <p className="font-semibold text-slate-900">
                  {course?.language}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <FaUsers className="mb-2 text-xl text-sky-500" />
                <p className="text-xs text-slate-500">
                  Students
                </p>
                <p className="font-semibold text-slate-900">
                  2000+
                </p>
              </div>

            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 to-sky-400 px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
              >
                Book Free Demo
                <FaArrowRight />
              </Link>

              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                View All Courses
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">

              {course?.thumbnail?.url ? (

                <img
                  src={course.thumbnail.url}
                  alt={course.title}
                  className="h-[280px] w-full rounded-2xl object-cover md:h-[500px]"
                />

              ) : (

                <div className="flex h-[280px] items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-sky-400 md:h-[500px]">

                  <FaLanguage className="text-7xl text-white" />

                </div>

              )}

            </div>

            {/* Bottom Card */}

            <div className="mt-5 rounded-3xl border border-yellow-200 bg-gradient-to-r from-yellow-50 to-sky-50 p-5">

              <p className="text-sm font-semibold uppercase tracking-wide text-yellow-700">
                Why Choose This Course?
              </p>

              <p className="mt-2 text-slate-600">
                Expert trainers, interactive live classes, personalized
                guidance, flexible schedules, and practical learning that
                helps you achieve real results.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}