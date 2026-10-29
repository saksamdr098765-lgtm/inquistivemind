"use client";

import { motion } from "framer-motion";
import { FaVolumeUp, FaVolumeMute, FaStar, FaBolt } from "react-icons/fa";
import { questStages } from "./data";

export default function ProgressTracker({
  currentStep = 0,
  totalSteps = 7,
  onSelectStep,
  soundMuted = false,
  onToggleSound,
}) {
  const safeTotal = Math.max(totalSteps, 1);
  const progress = Math.min(((currentStep + 1) / safeTotal) * 100, 100);
  const currentStage = questStages[currentStep] || questStages[0];
  const currentXp = Math.min(Math.round(((currentStep + 1) / safeTotal) * 1000), 1000);

  // Compute Rank Title
  const getRank = (step) => {
    if (step <= 1) return { title: "Novice Explorer", badge: "🧭 Lvl 1" };
    if (step <= 3) return { title: "Pathfinder", badge: "🗺️ Lvl 2" };
    if (step <= 5) return { title: "Strategy Planner", badge: "⚡ Lvl 3" };
    return { title: "Quest Ready", badge: "👑 Lvl 4" };
  };

  const rank = getRank(currentStep);

  return (
    <div className="mb-3.5 sm:mb-6 select-none">
      {/* Top Header Card */}
      <div className="rounded-2xl sm:rounded-3xl border border-yellow-200/90 bg-gradient-to-r from-amber-50/95 via-yellow-50/70 to-white/95 p-2.5 sm:p-4 shadow-xs backdrop-blur-md">
        <div className="flex items-center justify-between gap-1.5 sm:gap-2">
          {/* Left: Quest Stage & Rank */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <motion.div
              key={currentStep}
              initial={{ scale: 0.8, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-400 text-base sm:text-2xl shadow-xs text-slate-950"
            >
              <span>{currentStage?.icon || "🎮"}</span>
            </motion.div>

            <div className="min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="inline-flex items-center gap-0.5 rounded-full bg-amber-400/25 px-1.5 py-0.5 text-[8.5px] sm:text-[10px] font-black uppercase tracking-wider text-amber-950">
                  <FaBolt className="text-amber-600 text-[8px]" />
                  {rank.badge}
                </span>

                <span className="text-[9px] sm:text-xs font-bold text-slate-500 truncate hidden xs:inline">
                  • {rank.title}
                </span>
              </div>

              <div className="mt-0.5 text-xs sm:text-sm md:text-base font-black text-slate-900 leading-tight truncate">
                Step {currentStep + 1} of {totalSteps}: {currentStage?.label || `Quest ${currentStep + 1}`}
              </div>
            </div>
          </div>

          {/* Right: XP Counter & Sound Control */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* XP Pill */}
            <motion.div
              key={currentXp}
              initial={{ scale: 0.9 }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-1 rounded-full border border-yellow-300/90 bg-white px-2 sm:px-3 py-1 shadow-2xs text-[10px] sm:text-xs font-black text-amber-950"
            >
              <FaStar className="text-yellow-500 text-[10px] sm:text-xs animate-pulse" />
              <span>{currentXp}</span>
              <span className="text-[9px] text-amber-700 font-bold hidden xs:inline">XP</span>
            </motion.div>

            {/* Sound Toggle Button */}
            {onToggleSound && (
              <button
                type="button"
                onClick={onToggleSound}
                title={soundMuted ? "Unmute Quest Audio" : "Mute Audio"}
                className={`flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full border transition-all cursor-pointer touch-manipulation ${
                  soundMuted
                    ? "border-slate-200 bg-white text-slate-400 hover:text-slate-600"
                    : "border-yellow-300 bg-yellow-100 text-yellow-900 shadow-2xs hover:bg-yellow-200"
                }`}
              >
                {soundMuted ? (
                  <FaVolumeMute className="text-[11px] sm:text-sm" />
                ) : (
                  <FaVolumeUp className="text-[11px] sm:text-sm" />
                )}
              </button>
            )}

            {/* Percentage Badge */}
            <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-yellow-200 bg-white text-[10px] sm:text-xs font-black text-slate-900 shadow-2xs">
              {Math.round(progress)}%
            </div>
          </div>
        </div>

        {/* SINGLE Animated XP / Health Bar (No duplicate bar underneath) */}
        <div className="mt-2.5 sm:mt-3 relative h-2.5 sm:h-3 overflow-hidden rounded-full bg-slate-100/90 border border-slate-200/70 p-[1px]">
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative h-full rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 shadow-xs"
          >
            {/* Moving light shimmer beam */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
