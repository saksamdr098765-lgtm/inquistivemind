"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaUserGraduate,
  FaArrowRight,
} from "react-icons/fa";

export default function MatchingScreen({
  onContinue,
}) {
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

        return prev + Math.floor(Math.random() * 12);
      });
    }, 180);

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
    <div className="relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D6451B]/10 blur-[100px]" />

      <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-[#7BC3D7]/10 blur-[100px]" />

      <AnimatePresence mode="wait">

        {!complete ? (
          <motion.div
            key="loading"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="relative text-center"
          >
            {/* AI Circle */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-[#D6451B]/20"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-[#D6451B] to-[#7BC3D7] text-3xl text-white">
                <FaUserGraduate />
              </div>
            </motion.div>

            <h2 className="mt-8 text-3xl font-bold text-slate-900 lg:text-5xl">
              Finding Your Perfect Tutor
            </h2>

            <p className="mt-4 text-slate-500">
              Our matching engine is analyzing
              thousands of tutor profiles.
            </p>

            {/* Progress */}

            <div className="mx-auto mt-10 max-w-md">
              <div className="mb-3 flex justify-between">
                <span className="text-sm text-slate-500">
                  Matching...
                </span>

                <span className="font-semibold text-[#D6451B]">
                  {Math.min(progress, 100)}%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  animate={{
                    width: `${progress}%`,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-[#D6451B] to-[#7BC3D7]"
                />
              </div>
            </div>

            {/* Checks */}

            <div className="mx-auto mt-10 max-w-md space-y-3 text-left">
              {checks.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity:
                      progress > index * 20
                        ? 1
                        : 0.3,
                    x: 0,
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4"
                >
                  <FaCheckCircle className="text-green-500" />

                  <span className="text-sm">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="text-center"
          >
            {/* Success */}

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-[#D6451B] to-[#7BC3D7] text-4xl text-white shadow-[0_20px_60px_rgba(214,69,27,0.3)]">
              <FaCheckCircle />
            </div>

            <h2 className="mt-8 text-4xl font-bold text-slate-900 lg:text-6xl">
              We Found 17 Tutors
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-slate-500">
              Based on your learning goals,
              schedule, and budget, we've found
              highly compatible tutors ready to
              help you succeed.
            </p>

            {/* Stats */}

            <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-4">

              <div className="rounded-3xl border border-slate-100 bg-white p-5">
                <div className="text-3xl font-bold text-[#D6451B]">
                  17
                </div>

                <div className="mt-1 text-xs text-slate-500">
                  Tutors
                </div>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white p-5">
                <div className="text-3xl font-bold text-[#7BC3D7]">
                  4.9
                </div>

                <div className="mt-1 text-xs text-slate-500">
                  Rating
                </div>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white p-5">
                <div className="text-3xl font-bold text-green-500">
                  95%
                </div>

                <div className="mt-1 text-xs text-slate-500">
                  Match
                </div>
              </div>
            </div>

            {/* CTA */}

            <button
              onClick={onContinue}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#D6451B] px-8 py-4 font-medium text-white transition hover:scale-[1.02]"
            >
              View Tutors

              <FaArrowRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}