"use client";

import { motion } from "framer-motion";

export default function ProgressTracker({ currentStep, totalSteps }) {
  const progress = Math.min(((currentStep + 1) / totalSteps) * 100, 100);

  return (
    <div className="mb-4 sm:mb-6 lg:mb-8">
      {/* Header */}
      <div className="mb-3 sm:mb-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] text-slate-400 uppercase">
            APPLICATION PROFILE
          </div>

          <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-semibold text-slate-700">
            Step <span className="text-yellow-600 font-bold">{currentStep + 1}</span> of {totalSteps}
          </div>
        </div>

        {/* Progress Circle Badge */}
        <motion.div
          key={progress}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.25 }}
          className="relative flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center shrink-0"
        >
          {/* Subtle Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/25 to-amber-400/25 blur-md" />

          {/* Circle */}
          <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-yellow-200/60 bg-white/90 backdrop-blur-md shadow-xs">
            <span className="text-xs sm:text-sm font-extrabold text-slate-900">
              {Math.round(progress)}%
            </span>
          </div>
        </motion.div>
      </div>

      {/* Single Animated Progress Bar */}
      <div className="relative h-2 sm:h-2.5 overflow-hidden rounded-full bg-slate-100">
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 shadow-xs"
        />
      </div>
    </div>
  );
}
