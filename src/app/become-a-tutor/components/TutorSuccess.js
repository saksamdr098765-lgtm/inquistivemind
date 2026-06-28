"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaArrowRight,
  FaChalkboardTeacher,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";

export default function TutorSuccess({ onContinue }) {
  return (
    <div className="relative overflow-hidden bg-white py-16">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-[300px] w-[300px] rounded-full bg-sky-400/10 blur-[120px]" />
        <div className="absolute top-10 left-10 h-[300px] w-[300px] rounded-full bg-amber-200/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >

        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 180 }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-sky-400 text-4xl text-white shadow-lg"
        >
          <FaCheckCircle />
        </motion.div>

        {/* Heading */}
        <h2 className="mt-8 text-4xl font-bold text-slate-900">
          Application Submitted
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Thank you for applying to join our teaching community.
          Our academic team will review your profile and contact
          you within 24–48 hours.
        </p>

        {/* Steps */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
              <FaChalkboardTeacher />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">
              Profile Review
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              We review your experience, qualifications, and teaching expertise.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
              <FaUsers />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">
              Interview
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Our team may schedule a short interview or demo class.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600">
              <FaCalendarAlt />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">
              Start Teaching
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Once approved, you'll be matched with students and batches.
            </p>
          </div>

        </div>

        {/* CTA */}
        <button
          onClick={onContinue}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-sky-400 px-8 py-4 font-medium text-white shadow-lg transition hover:scale-[1.02]"
        >
          Back to Homepage
          <FaArrowRight />
        </button>

        {/* Footer Note */}
        <p className="mt-6 text-sm text-slate-500">
          Average review time: 24–48 hours
        </p>

      </motion.div>
    </div>
  );
}