"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaUserGraduate,
  FaArrowRight,
} from "react-icons/fa";

export default function MatchingScreen({ onContinue }) {
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
    }, 150);

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
    <div className="relative min-h-screen overflow-hidden bg-white">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-sky-400/10 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <AnimatePresence mode="wait">

        {!complete ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="relative mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center"
          >

            {/* Badge */}
            <div className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-[10px] tracking-[0.35em] text-amber-600">
              MATCHING YOUR PERFECT TUTOR
            </div>

            {/* Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="mt-10 flex h-28 w-28 items-center justify-center rounded-full border border-amber-200 bg-white shadow-lg"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-sky-400 text-2xl text-white">
                <FaUserGraduate />
              </div>
            </motion.div>

            <h2 className="mt-8 text-3xl font-bold text-slate-900">
              Finding Your Perfect Tutor
            </h2>

            <p className="mt-3 text-sm text-slate-600">
              Matching your goals with expert educators worldwide
            </p>

            {/* Progress */}
            <div className="mt-10 w-full max-w-md">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-500">Analyzing profile</span>
                <span className="font-semibold text-amber-500">
                  {progress}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-amber-400 to-sky-400"
                />
              </div>
            </div>

            {/* Checklist */}
            <div className="mt-10 w-full space-y-3 text-left">
              {checks.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <FaCheckCircle className="text-amber-400" />
                  <span className="text-sm text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mx-auto max-w-lg px-6 py-24 text-center"
          >

            {/* Success Icon */}
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-sky-400 text-3xl text-white shadow-xl">
              <FaCheckCircle />
            </div>

            <h2 className="mt-8 text-4xl font-bold text-slate-900">
              We Found 17 Perfect Tutors
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm text-slate-600">
              Based on your goals, we matched you with expert educators.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold text-amber-500">17</div>
                <div className="text-xs text-slate-500">Tutors</div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold text-sky-500">4.9</div>
                <div className="text-xs text-slate-500">Rating</div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold text-green-500">95%</div>
                <div className="text-xs text-slate-500">Match</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
              <button
                onClick={onContinue}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-sky-400 px-8 py-4 font-medium text-white shadow-lg hover:scale-[1.02] transition"
              >
                View Tutors
                <FaArrowRight />
              </button>

              <button
                onClick={() => window.location.reload()}
                className="rounded-full border border-slate-200 px-8 py-4 text-slate-700 hover:bg-slate-50 transition"
              >
                Restart
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}