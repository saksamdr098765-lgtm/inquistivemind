"use client";

import { motion } from "framer-motion";

export default function ProgressTracker({
  currentStep,
  totalSteps,
}) {
  const progress =
    ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-8">

      {/* Top Row */}

      <div className="mb-5 flex items-center justify-between">

        <div>
          <div className="text-[11px] tracking-[0.3em] text-slate-400">
            LEARNING PROFILE
          </div>

          <div className="mt-1 text-sm font-medium text-slate-600">
            Step {currentStep + 1} of {totalSteps}
          </div>
        </div>

        {/* Floating Circle */}

        <motion.div
          key={progress}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="relative flex h-16 w-16 items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D6451B]/20 to-[#7BC3D7]/20 blur-xl" />

          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <span className="text-sm font-bold text-slate-900">
              {Math.round(progress)}%
            </span>
          </div>
        </motion.div>
      </div>

      {/* Progress Line */}

      <div className="relative h-2 overflow-hidden rounded-full bg-slate-100">

        <motion.div
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 0.4,
          }}
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#D6451B] via-[#E86A45] to-[#7BC3D7]"
        />
      </div>

      {/* Dots */}

      <div className="mt-5 flex justify-between">
        {Array.from({
          length: totalSteps,
        }).map((_, index) => (
          <motion.div
            key={index}
            animate={{
              scale:
                index <= currentStep ? 1 : 0.9,
            }}
            className={`h-3 w-3 rounded-full transition-all ${
              index <= currentStep
                ? "bg-[#D6451B]"
                : "bg-slate-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}