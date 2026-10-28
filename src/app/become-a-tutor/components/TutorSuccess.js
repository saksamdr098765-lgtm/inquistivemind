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
    <div className="relative overflow-hidden py-4 sm:py-8 lg:py-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative mx-auto max-w-3xl px-2 sm:px-6 text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mx-auto flex h-18 w-18 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-3xl sm:text-4xl text-slate-950 shadow-lg shadow-amber-400/20"
        >
          <FaCheckCircle />
        </motion.div>

        {/* Heading */}
        <h2 className="mt-5 sm:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900">
          Application Submitted!
        </h2>

        <p className="mx-auto mt-2 sm:mt-3 max-w-md text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
          Thank you for applying to teach with us. Our academic onboarding team will review your profile and reach out within 24–48 hours.
        </p>

        {/* Steps */}
        <div className="mt-6 sm:mt-10 grid gap-3 sm:gap-4 md:grid-cols-3 text-left sm:text-center">
          <div className="rounded-2xl sm:rounded-3xl border border-slate-100 bg-white/90 p-4 sm:p-5 shadow-2xs">
            <div className="sm:mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 text-lg sm:text-xl">
              <FaChalkboardTeacher />
            </div>
            <h3 className="mt-3 text-sm sm:text-base font-bold text-slate-900">
              Profile Review
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
              We review your subject expertise, qualification, and teaching background.
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-slate-100 bg-white/90 p-4 sm:p-5 shadow-2xs">
            <div className="sm:mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-yellow-50 text-yellow-700 text-lg sm:text-xl">
              <FaUsers />
            </div>
            <h3 className="mt-3 text-sm sm:text-base font-bold text-slate-900">
              Short Interview
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
              A quick demo discussion to align on teaching approach and availability.
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-slate-100 bg-white/90 p-4 sm:p-5 shadow-2xs">
            <div className="sm:mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-green-50 text-green-700 text-lg sm:text-xl">
              <FaCalendarAlt />
            </div>
            <h3 className="mt-3 text-sm sm:text-base font-bold text-slate-900">
              Start Teaching
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Get matched with active student inquiries and manage your teaching schedule.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <button
            type="button"
            onClick={onContinue}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-slate-950 shadow-md shadow-amber-400/20 active:scale-[0.98] transition cursor-pointer min-h-[46px]"
          >
            Back to Homepage
            <FaArrowRight className="text-xs" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
