"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaArrowRight,
  FaChalkboardTeacher,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";

export default function TutorSuccess({
  onContinue,
}) {
  return (
    <div className="relative overflow-hidden py-8">

      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6451B]/10 blur-[100px]" />

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="relative text-center"
      >
        {/* Icon */}

        <motion.div
          initial={{
            scale: 0,
            rotate: -20,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
          }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-[#D6451B] to-[#7BC3D7] text-4xl text-white shadow-xl"
        >
          <FaCheckCircle />
        </motion.div>

        {/* Heading */}

        <h2 className="mt-8 text-3xl font-bold text-slate-900 sm:text-4xl">
          Application Submitted
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Thank you for applying to join our teaching community.
          Our academic team will review your profile and
          contact you regarding the next steps.
        </p>

        {/* Timeline */}

        <div className="mt-12 grid gap-4 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D6451B]/10 text-[#D6451B]">
              <FaChalkboardTeacher />
            </div>

            <h3 className="mt-4 font-semibold">
              Profile Review
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              We review your experience,
              qualifications, and teaching expertise.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7BC3D7]/10 text-[#7BC3D7]">
              <FaUsers />
            </div>

            <h3 className="mt-4 font-semibold">
              Interview
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Our team may schedule a short
              discussion or demo session.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
              <FaCalendarAlt />
            </div>

            <h3 className="mt-4 font-semibold">
              Start Teaching
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Once approved, you'll be matched
              with suitable students and batches.
            </p>
          </div>

        </div>

        {/* CTA */}

        <button
          onClick={onContinue}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#D6451B] to-[#E8653D] px-8 py-4 font-medium text-white shadow-lg shadow-[#D6451B]/20 transition hover:scale-[1.02]"
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