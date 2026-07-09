"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDollarSign,
  FaUsers,
  FaStar,
  FaCalendarCheck,
} from "react-icons/fa";
import Link from "next/link";

export default function BecomeTutor() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.12),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-[10px] tracking-[0.35em] text-yellow-600">
              BECOME A TUTOR
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Turn your expertise into{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                a global classroom
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Teach students worldwide, manage your own schedule, and grow your
              income from a modern teaching platform built for online educators.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Flexible Schedule",
                "Global Students",
                "Online Teaching",
                "Secure Payments",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-yellow-300 hover:bg-yellow-50"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              href="/become-a-tutor"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-yellow-500 px-8 py-3 font-medium text-white shadow-md shadow-yellow-200 transition hover:bg-yellow-600 lg:w-fit"
            >
              Become a Tutor
              <FaArrowRight />
            </Link>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Badge */}
            <div className="absolute -left-4 top-10 z-20 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl">
              <p className="text-xs text-slate-500">New Booking</p>
              <p className="text-sm font-semibold text-slate-800">
                IELTS Student
              </p>
            </div>

            {/* Badge */}
            <div className="absolute -right-4 bottom-10 z-20 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl">
              <p className="text-xs text-slate-500">Online Now</p>
              <p className="text-sm font-semibold text-yellow-600">
                Teaching Session
              </p>
            </div>

            {/* Dashboard */}
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Tutor Dashboard
                  </h3>
                  <p className="text-sm text-slate-500">
                    Monthly Overview
                  </p>
                </div>

                <div className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
                  Active
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <FaDollarSign />
                    <span className="text-sm text-slate-600">Earnings</span>
                  </div>

                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    $1,240
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <FaUsers />
                    <span className="text-sm text-slate-600">Students</span>
                  </div>

                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    48
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <FaCalendarCheck />
                    <span className="text-sm text-slate-600">Lessons</span>
                  </div>

                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    126
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <FaStar />
                    <span className="text-sm text-slate-600">Rating</span>
                  </div>

                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    4.9
                  </p>
                </div>
              </div>

              {/* Activity */}
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 p-5 text-white">
                <p className="text-sm opacity-90">Upcoming Lesson</p>

                <h4 className="mt-1 text-lg font-semibold">
                  Business English Session
                </h4>

                <p className="mt-2 text-sm opacity-90">
                  Today • 7:00 PM • Online
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}