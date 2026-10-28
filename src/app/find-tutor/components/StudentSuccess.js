"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCheckCircle,
  FaArrowRight,
  FaUserGraduate,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaCopy,
} from "react-icons/fa";
import { toast } from "sonner";

export default function StudentSuccess({ referenceCode, form, onContinue }) {
  const handleCopyCode = () => {
    if (referenceCode) {
      navigator.clipboard.writeText(referenceCode);
      toast.success("Reference code copied to clipboard!");
    }
  };

  return (
    <div className="relative overflow-hidden py-4 sm:py-8 lg:py-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative mx-auto max-w-3xl px-2 sm:px-6 text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mx-auto flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-3xl sm:text-4xl text-slate-950 shadow-lg shadow-amber-400/20"
        >
          <FaCheckCircle />
        </motion.div>

        {/* Title */}
        <h2 className="mt-5 sm:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Requirement Submitted!
        </h2>

        <p className="mx-auto mt-2 sm:mt-3 max-w-lg text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
          Thank you, <strong>{form?.name || "Student"}</strong>. Your learning enquiry has been saved
          to our academic registry. Our counseling team will match and connect you with qualified tutors shortly.
        </p>

        {/* Reference Code Pill */}
        {referenceCode && (
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50 border border-amber-300 shadow-2xs">
            <span className="text-xs text-amber-800 font-bold">Requirement ID:</span>
            <span className="font-mono text-sm font-black text-amber-950">{referenceCode}</span>
            <button
              type="button"
              onClick={handleCopyCode}
              title="Copy Reference Code"
              className="ml-1 text-amber-700 hover:text-amber-950 transition cursor-pointer"
            >
              <FaCopy className="text-xs" />
            </button>
          </div>
        )}

        {/* Requirement Summary Specs */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Subject</span>
            <span className="font-extrabold text-amber-800 text-sm">
              {form?.language || form?.subject || "Subject"}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Learning Mode</span>
            <span className="font-bold text-slate-800 text-sm">
              {form?.tutor || form?.mode || "Online Classes"}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Current Level</span>
            <span className="font-bold text-slate-800 text-sm">
              {form?.level || "Beginner"}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Preferred Time</span>
            <span className="font-bold text-slate-800 text-sm truncate block">
              {(form?.timeSlot || []).join(", ") || "Flexible"}
            </span>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 md:grid-cols-3 text-left sm:text-center">
          <div className="rounded-2xl sm:rounded-3xl border border-slate-100 bg-white/90 p-4 sm:p-5 shadow-2xs">
            <div className="sm:mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 text-lg sm:text-xl">
              <FaChalkboardTeacher />
            </div>
            <h3 className="mt-3 text-sm sm:text-base font-bold text-slate-900">
              1. Tutor Shortlist
            </h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Our academic counselor shortlists the top verified tutors for your subject and preferred mode.
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-slate-100 bg-white/90 p-4 sm:p-5 shadow-2xs">
            <div className="sm:mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-yellow-50 text-yellow-700 text-lg sm:text-xl">
              <FaCalendarAlt />
            </div>
            <h3 className="mt-3 text-sm sm:text-base font-bold text-slate-900">
              2. Demo Scheduling
            </h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              We coordinate a free trial / demo session at a time slot convenient for your schedule.
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-slate-100 bg-white/90 p-4 sm:p-5 shadow-2xs">
            <div className="sm:mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 text-lg sm:text-xl">
              <FaUserGraduate />
            </div>
            <h3 className="mt-3 text-sm sm:text-base font-bold text-slate-900">
              3. Start Learning
            </h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Begin your customized lessons with personalized mentor guidance and study materials.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/tutors"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-slate-950 shadow-md shadow-amber-400/20 active:scale-[0.98] transition cursor-pointer min-h-[46px]"
          >
            Browse Verified Tutors
            <FaArrowRight className="text-xs" />
          </Link>

          <button
            type="button"
            onClick={onContinue}
            className="w-full sm:w-auto rounded-full border border-slate-200 bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition min-h-[46px] cursor-pointer"
          >
            Back to Homepage
          </button>
        </div>
      </motion.div>
    </div>
  );
}
