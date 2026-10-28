"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaUserGraduate,
  FaSpinner,
} from "react-icons/fa";

export default function MatchingScreen({ onContinue, mutation }) {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setComplete(true);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 10 + 5), 100);
      });
    }, 140);

    return () => clearInterval(interval);
  }, []);

  const checks = [
    "Learning goals analyzed",
    "Schedule compatibility checked",
    "Budget preferences matched",
    "Tutor expertise evaluated",
    "Availability synchronized",
  ];

  return (
    <div className="relative overflow-hidden py-4 sm:py-8">
      <AnimatePresence mode="wait">
        {!complete ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="relative mx-auto flex max-w-lg flex-col items-center px-2 sm:px-4 text-center"
          >
            {/* Badge */}
            <div className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-[9px] sm:text-[10px] font-bold tracking-[0.25em] sm:tracking-[0.35em] text-amber-700 uppercase">
              MATCHING YOUR PERFECT TUTOR
            </div>

            {/* Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="mt-6 sm:mt-8 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border border-amber-200 bg-white shadow-md"
            >
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-xl sm:text-2xl text-slate-950">
                <FaUserGraduate />
              </div>
            </motion.div>

            <h2 className="mt-5 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
              Finding Your Perfect Tutor
            </h2>

            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 max-w-sm">
              Matching your requirements with qualified language &amp; academic tutors.
            </p>

            {/* Progress */}
            <div className="mt-6 sm:mt-8 w-full max-w-md">
              <div className="mb-2 flex justify-between text-xs sm:text-sm font-semibold">
                <span className="text-slate-500">Analyzing criteria</span>
                <span className="text-yellow-600 font-bold">{progress}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"
                />
              </div>
            </div>

            {/* Checklist */}
            <div className="mt-6 sm:mt-8 w-full space-y-2 sm:space-y-2.5 text-left">
              {checks.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl sm:rounded-2xl border border-slate-100 bg-white/90 p-3 sm:p-3.5 shadow-2xs"
                >
                  <FaCheckCircle className="text-amber-500 shrink-0 text-sm" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mx-auto max-w-lg px-2 sm:px-4 text-center"
          >
            {/* Success Icon */}
            <div className="mx-auto flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-3xl sm:text-4xl text-slate-950 shadow-lg shadow-amber-400/20">
              <FaCheckCircle />
            </div>

            <h2 className="mt-5 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
              We Found 17 Verified Tutors
            </h2>

            <p className="mx-auto mt-1.5 sm:mt-2 max-w-sm text-xs sm:text-sm text-slate-600">
              Based on your schedule and goals, we matched you with top-rated instructors.
            </p>

            {/* Stats */}
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-3">
              <div className="rounded-xl sm:rounded-2xl border border-slate-100 bg-white p-3 sm:p-4 shadow-2xs">
                <div className="text-lg sm:text-2xl font-black text-amber-500">17</div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500">Tutors</div>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-slate-100 bg-white p-3 sm:p-4 shadow-2xs">
                <div className="text-lg sm:text-2xl font-black text-yellow-600">4.9 ★</div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500">Rating</div>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-slate-100 bg-white p-3 sm:p-4 shadow-2xs">
                <div className="text-lg sm:text-2xl font-black text-green-600">95%</div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500">Match</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
              <button
                type="button"
                onClick={onContinue}
                disabled={mutation?.isPending}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-slate-950 shadow-md shadow-amber-400/20 active:scale-[0.98] transition cursor-pointer min-h-[46px]"
              >
                {mutation?.isPending ? (
                  <FaSpinner className="animate-spin text-slate-950 text-base" />
                ) : (
                  "Connect with Tutors"
                )}
              </button>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto rounded-full border border-slate-200 bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition min-h-[46px]"
              >
                Start Over
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
