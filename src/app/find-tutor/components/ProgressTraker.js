"use client";

import { motion } from "framer-motion";

export default function ProgressTracker({ currentStep, totalSteps }) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-8">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">

        <div>
          <div className="text-[11px] tracking-[0.3em] text-slate-400">
            LEARNING PROFILE
          </div>

          <div className="mt-1 text-sm font-medium text-slate-600">
            Step {currentStep + 1} of {totalSteps}
          </div>
        </div>

        {/* Progress Circle */}
        <motion.div
          key={progress}
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative flex h-16 w-16 items-center justify-center"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-sky-400/20 blur-xl" />

          {/* Circle */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white/80 backdrop-blur-xl shadow-sm">
            <span className="text-sm font-bold text-slate-900">
              {Math.round(progress)}%
            </span>
          </div>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 overflow-hidden rounded-full bg-slate-100">

        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
          className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 "
        />
      </div>

      {/* Step Dots */}
      <div className="mt-5 flex justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const active = index <= currentStep;

          return (
            <motion.div
              key={index}
              animate={{
                scale: active ? 1 : 0.85,
              }}
              transition={{ duration: 0.25 }}
              className={`h-3 w-3 rounded-full transition-all ${
                active
                  ? "bg-gradient-to-r from-yellow-400 to-amber-400 shadow-sm"
                  : "bg-slate-200"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}