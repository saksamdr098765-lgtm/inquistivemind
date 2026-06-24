"use client";

import { motion } from "framer-motion";
import { FaStar, FaUsers, FaCheckCircle } from "react-icons/fa";

export default function TutorPreview({
  tutor,
  form,
  step,
}) {
  const completion = Math.min(
    ((step + 1) / 8) * 100,
    100
  );

  const getValue = (value) => {
    if (!value) return null;

    if (typeof value === "object") {
      return value.title || value.label || "";
    }

    return value;
  };

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/40 bg-white/70 p-6 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.08)] lg:p-8">
      {/* Background Glow */}
      <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#D6451B]/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[#7BC3D7]/10 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div>
          <div className="text-[11px] tracking-[0.35em] text-slate-400">
            BEST MATCH
          </div>

          <h3 className="mt-2 text-xl font-bold text-slate-900">
            Recommended Tutor
          </h3>
        </div>

        <div className="rounded-full bg-green-50 px-3 py-2 text-xs font-semibold text-green-600">
          Live Matching
        </div>
      </div>

      {/* Tutor Card */}
      <motion.div
        layout
        className="mt-8 rounded-3xl border border-slate-100 bg-white p-5 shadow-lg"
      >
        <div className="flex items-center gap-4">
          <img
            src={tutor?.image}
            alt={tutor?.name}
            className="h-16 w-16 rounded-2xl object-cover"
          />

          <div>
            <h4 className="font-semibold text-slate-900">
              {tutor?.name}
            </h4>

            <p className="text-sm text-slate-500">
              {tutor?.role}
            </p>

            <div className="mt-2 flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                {tutor?.rating}
              </div>

              <div className="flex items-center gap-1">
                <FaUsers />
                {tutor?.students}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Match Score */}
      <div className="mt-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-slate-600">
            Match Score
          </span>

          <span className="font-semibold text-[#D6451B]">
            {Math.round(completion)}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
          <motion.div
            animate={{
              width: `${completion}%`,
            }}
            transition={{
              duration: 0.4,
            }}
            className="h-full rounded-full bg-gradient-to-r from-[#D6451B] to-[#7BC3D7]"
          />
        </div>
      </div>

      {/* Profile Summary */}
      <div className="mt-8 space-y-3">
        {form?.goal && (
          <div className="flex items-center gap-3 text-sm">
            <FaCheckCircle className="text-[#D6451B]" />
            <span>
              Goal: {getValue(form.goal)}
            </span>
          </div>
        )}

        {form?.language && (
          <div className="flex items-center gap-3 text-sm">
            <FaCheckCircle className="text-[#D6451B]" />
            <span>
              Language: {getValue(form.language)}
            </span>
          </div>
        )}

        {form?.level && (
          <div className="flex items-center gap-3 text-sm">
            <FaCheckCircle className="text-[#D6451B]" />
            <span>
              Level: {getValue(form.level)}
            </span>
          </div>
        )}

        {form?.focus && (
          <div className="flex items-center gap-3 text-sm">
            <FaCheckCircle className="text-[#D6451B]" />
            <span>
              Focus: {getValue(form.focus)}
            </span>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-4">
          <div className="text-2xl font-bold text-[#D6451B]">
            12k+
          </div>

          <div className="text-xs text-slate-500">
            Active Students
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-4">
          <div className="text-2xl font-bold text-[#7BC3D7]">
            4.9
          </div>

          <div className="text-xs text-slate-500">
            Avg Rating
          </div>
        </div>
      </div>

      {/* Bottom Badge */}
      <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#D6451B] to-[#7BC3D7] p-[1px]">
        <div className="rounded-2xl bg-white px-4 py-4 text-center">
          <p className="text-sm font-medium text-slate-700">
            Personalized tutor recommendations
            based on your learning profile.
          </p>
        </div>
      </div>
    </div>
  );
}