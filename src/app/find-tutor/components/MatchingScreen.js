"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaUserGraduate,
  FaSpinner,
  FaStar,
  FaBolt,
  FaAward,
  FaRocket,
} from "react-icons/fa";
import { playRadarPing, playVictory } from "../utils/soundEffects";

const MOCK_TUTORS = [
  {
    name: "Sarah D.",
    role: "DELF C2 Certified French Faculty",
    exp: "8+ yrs exp",
    rating: "4.9",
    avatar: "👩‍🏫",
    highlight: "Canada TEF Specialist",
  },
  {
    name: "Amit K.",
    role: "Senior CBSE & ICSE Math Mentor",
    exp: "10+ yrs exp",
    rating: "5.0",
    avatar: "👨‍🏫",
    highlight: "100/100 Board Track Record",
  },
  {
    name: "Sofia R.",
    role: "English Fluency & IELTS 8.5 Trainer",
    exp: "7+ yrs exp",
    rating: "4.9",
    avatar: "👩‍💼",
    highlight: "Accent & Confidence Coach",
  },
];

export default function MatchingScreen({ onContinue, mutation }) {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const [activeTelemetryIndex, setActiveTelemetryIndex] = useState(0);

  const telemetryLogs = [
    "Analyzing student quest preferences & level...",
    "Scanning verified faculty registry...",
    "Synchronizing day & time slot compatibility...",
    "Verifying pedagogical credentials & ratings...",
    "Locking in top compatibility tutor match!",
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8 + 6);
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setComplete(true);
          playVictory();
        }, 400);
      } else {
        setProgress(current);
        setActiveTelemetryIndex(Math.min(Math.floor((current / 100) * 5), 4));
        if (Math.random() > 0.4) {
          playRadarPing();
        }
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden py-2 sm:py-6 select-none">
      <AnimatePresence mode="wait">
        {!complete ? (
          /* SCANNING RADAR INTERFACE (Mobile First Sizing) */
          <motion.div
            key="radar-scanning"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="relative mx-auto flex max-w-lg flex-col items-center px-1 text-center"
          >
            {/* Quest Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-100 px-3 py-0.5 text-[8.5px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.25em] text-amber-950 uppercase shadow-2xs">
              <FaBolt className="text-amber-600 text-[9px]" />
              <span>RADAR SCANNING ACTIVE</span>
            </div>

            {/* ARCADE RADAR SCANNER VISUAL (160px on mobile fits without vertical scroll) */}
            <div className="relative mt-4 sm:mt-8 flex h-40 w-40 sm:h-56 sm:w-56 items-center justify-center">
              {/* Concentric Sonar Rings */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-amber-300/60 animate-spin"
                style={{ animationDuration: "24s" }}
              />
              <div className="absolute inset-3 sm:inset-4 rounded-full border border-amber-400/40" />
              <div className="absolute inset-8 sm:inset-10 rounded-full border border-yellow-400/50" />
              <div className="absolute inset-12 sm:inset-16 rounded-full border border-amber-300/30" />

              {/* Pulsing Sonar Wave */}
              <motion.div
                animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.4, 0.1, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 via-yellow-400/20 to-transparent"
              />

              {/* Radar Sweep Beam */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(245, 158, 11, 0.35) 0deg, transparent 60deg, transparent 360deg)",
                }}
              />

              {/* Random Radar Blips */}
              <motion.div
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 0.3 }}
                className="absolute top-6 right-7 sm:top-8 sm:right-10 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-amber-400 text-slate-950 text-[10px] sm:text-xs shadow-md"
              >
                👩‍🏫
              </motion.div>

              <motion.div
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                transition={{ duration: 2.1, repeat: Infinity, delay: 0.9 }}
                className="absolute bottom-7 left-6 sm:bottom-10 sm:left-8 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-yellow-400 text-slate-950 text-[10px] sm:text-xs shadow-md"
              >
                👨‍🏫
              </motion.div>

              {/* Center Radar Core */}
              <div className="relative z-10 flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-xl sm:text-3xl text-slate-950 shadow-lg shadow-amber-400/30">
                <FaUserGraduate />
              </div>
            </div>

            <h2 className="mt-4 sm:mt-6 text-lg sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Matching Your Perfect Tutor
            </h2>

            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-sm font-medium px-2">
              Scanning certified educators to assemble your personal study squad.
            </p>

            {/* High-Tech Progress Meter */}
            <div className="mt-4 sm:mt-6 w-full max-w-md">
              <div className="mb-1.5 flex justify-between items-center text-xs font-black">
                <span className="text-slate-500 uppercase tracking-wider text-[9px] sm:text-[10px]">
                  CALIBRATING ALGORITHM
                </span>
                <span className="text-amber-800 text-xs sm:text-sm">{progress}%</span>
              </div>

              <div className="h-2.5 sm:h-3 overflow-hidden rounded-full bg-slate-100 border border-slate-200/60 p-[2px]">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 rounded-full shadow-xs"
                />
              </div>
            </div>

            {/* Live Telemetry Feed */}
            <div className="mt-4 w-full max-w-md rounded-xl sm:rounded-2xl border border-yellow-200/90 bg-yellow-50/80 p-2.5 sm:p-3.5 text-left">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-green-500 animate-ping" />
                <span className="text-[10.5px] sm:text-xs font-bold text-slate-800 truncate">
                  {telemetryLogs[activeTelemetryIndex]}
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          /* RADAR RESULT - MATCH FOUND (Mobile First) */
          <motion.div
            key="radar-success"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="relative mx-auto max-w-2xl px-1 sm:px-4 text-center"
          >
            {/* Victory Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-green-300 bg-green-100 px-3 py-0.5 text-[8.5px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.25em] text-green-950 uppercase shadow-2xs">
              <FaCheckCircle className="text-green-600 text-[10px]" />
              <span>MATCH VERIFIED • OPTIMAL FIT</span>
            </div>

            {/* Victory Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="mx-auto mt-3 sm:mt-5 flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-2xl sm:text-4xl text-slate-950 shadow-xl shadow-amber-400/25"
            >
              <FaAward />
            </motion.div>

            <h2 className="mt-3 sm:mt-5 text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Tutor Squad Located!
            </h2>

            <p className="mx-auto mt-1 sm:mt-2 max-w-md text-xs sm:text-sm md:text-base text-slate-600 font-medium px-2">
              We identified <strong>17 verified tutors</strong> matching your schedule, level, and target goals.
            </p>

            {/* Stats Overview */}
            <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-1.5 sm:gap-3">
              <div className="rounded-xl sm:rounded-2xl border border-yellow-200 bg-yellow-50/70 p-2 sm:p-4 text-center">
                <div className="text-lg sm:text-2xl font-black text-amber-900">17</div>
                <div className="text-[9px] sm:text-xs font-bold text-slate-600 uppercase">Tutors Matched</div>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-yellow-200 bg-yellow-50/70 p-2 sm:p-4 text-center">
                <div className="text-lg sm:text-2xl font-black text-amber-900 flex items-center justify-center gap-1">
                  <span>4.9</span>
                  <FaStar className="text-yellow-500 text-xs sm:text-sm" />
                </div>
                <div className="text-[9px] sm:text-xs font-bold text-slate-600 uppercase">Avg Rating</div>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-yellow-200 bg-yellow-50/70 p-2 sm:p-4 text-center">
                <div className="text-lg sm:text-2xl font-black text-green-700">100%</div>
                <div className="text-[9px] sm:text-xs font-bold text-slate-600 uppercase">Free Demo</div>
              </div>
            </div>

            {/* TOP 3 SQUAD MATCH PREVIEWS */}
            <div className="mt-4 sm:mt-6 space-y-2 text-left">
              <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-400 px-1">
                Top Matched Faculty Profiles
              </div>

              {MOCK_TUTORS.map((tutor) => (
                <div
                  key={tutor.name}
                  className="flex items-center justify-between gap-2.5 rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white p-2.5 sm:p-3.5 shadow-2xs hover:border-yellow-300 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-lg sm:text-xl">
                      {tutor.avatar}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs sm:text-sm font-black text-slate-900 truncate">
                          {tutor.name}
                        </span>
                        <span className="rounded-full bg-amber-100 px-1.5 py-0.2 text-[8px] sm:text-[9px] font-extrabold text-amber-950">
                          {tutor.exp}
                        </span>
                      </div>
                      <div className="text-[10.5px] sm:text-[11px] text-slate-600 font-medium truncate">
                        {tutor.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0 text-amber-800 font-black text-xs sm:text-sm bg-yellow-50 px-2 py-1 rounded-lg sm:rounded-xl border border-yellow-200">
                    <FaStar className="text-yellow-500 text-[10px] sm:text-xs" />
                    <span>{tutor.rating}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* ACTION CTA (Full width on mobile min 48px) */}
            <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
              <button
                type="button"
                onClick={onContinue}
                disabled={mutation?.isPending}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-500 px-6 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm font-black text-slate-950 shadow-md shadow-amber-400/25 active:scale-[0.98] transition cursor-pointer min-h-[48px] touch-manipulation"
              >
                {mutation?.isPending ? (
                  <FaSpinner className="animate-spin text-slate-950 text-base" />
                ) : (
                  <>
                    <FaRocket className="text-slate-950 text-xs sm:text-sm" />
                    <span>Assemble Tutor Squad &amp; Unlock Demo</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto rounded-full border-2 border-slate-200 bg-white px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition min-h-[48px] cursor-pointer touch-manipulation"
              >
                Restart Quest
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
