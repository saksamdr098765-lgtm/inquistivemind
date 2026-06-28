"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaStar,
  FaCalendarAlt,
  FaGlobe,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import Link from "next/link";

const features = [
  {
    icon: <FaSearch />,
    title: "Smart Tutor Matching",
    desc: "Find tutors based on your goals, level, and learning style.",
  },
  {
    icon: <FaStar />,
    title: "Verified Reviews",
    desc: "Choose confidently with authentic student feedback.",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Flexible Scheduling",
    desc: "Book lessons that fit your daily routine and timezone.",
  },
  {
    icon: <FaGlobe />,
    title: "Learn Anywhere",
    desc: "Connect with expert tutors from anywhere in the world.",
  },
];

const filters = [
  "IELTS",
  "Business English",
  "Conversation",
  "Beginner",
];

const benefits = [
  "Verified Tutors",
  "Instant Booking",
  "Trial Lessons",
  "Global Access",
];

export default function FindTutor() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] font-medium tracking-[0.35em] text-slate-400">
            FIND YOUR TUTOR
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Discover the perfect{" "}
            <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-sky-400 bg-clip-text text-transparent">
              tutor for your goals
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-sky-400" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Browse verified tutors, compare expertise, read reviews, and book
            lessons that fit your schedule.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Search Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-xl sm:p-6"
          >
            {/* Search */}
            <div className="flex h-14 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4">
              <FaSearch className="text-amber-500" />
              <span className="text-sm text-slate-500">
                Search tutors, subjects...
              </span>
            </div>

            {/* Filters */}
            <div className="mt-5 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {filters.map((item) => (
                <button
                  key={item}
                  className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 transition hover:border-amber-300 hover:bg-amber-50"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Results */}
            <div className="mt-6 space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                >
                  <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-r from-amber-100 to-sky-100" />

                  <div className="flex-1">
                    <div className="h-3 w-28 rounded-full bg-slate-200" />
                    <div className="mt-2 h-2 w-20 rounded-full bg-slate-100" />
                  </div>

                  <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-medium text-amber-700">
                    Available
                  </span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <FaCheckCircle className="text-amber-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex flex-col"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-xl text-amber-500">
                    {feature.icon}
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/find-tutor"
              className="mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-amber-500 px-6 text-sm font-medium text-white transition hover:bg-amber-600 sm:h-14 lg:w-fit lg:px-8"
            >
              Find Your Tutor
              <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}