"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaUserGraduate,
  FaSpinner,
  FaBolt,
  FaAward,
  FaPaperPlane,
  FaClipboardCheck,
  FaClock,
  FaCalendarAlt,
  FaLaptop,
} from "react-icons/fa";
import { playRadarPing, playVictory } from "../utils/soundEffects";

export default function MatchingScreen({ form, onContinue, mutation }) {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const [activeTelemetryIndex, setActiveTelemetryIndex] = useState(0);

  const telemetryLogs = [
    "Verifying student learning goals & target subject...",
    "Validating schedule availability & preferred time slots...",
    "Scanning verified faculty database for curriculum match...",
    "Preparing student learning request for submission...",
    "Verification complete • Ready to submit requirement!",
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

  const chosenSubject = form?.language || form?.goal || "Languages";
  const chosenLevel =
    typeof form?.level === "string"
      ? form.level
      : form?.level?.title || "Beginner";
  const chosenMode = form?.tutor || "Online Classes";
  const chosenDays =
    form?.availability && form.availability.length > 0
      ? form.availability.join(", ")
      : "Flexible Schedule";

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
                📚
              </motion.div>

              <motion.div
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                transition={{ duration: 2.1, repeat: Infinity, delay: 0.9 }}
                className="absolute bottom-7 left-6 sm:bottom-10 sm:left-8 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-yellow-400 text-slate-950 text-[10px] sm:text-xs shadow-md"
              >
                🎯
              </motion.div>

              {/* Center Radar Core */}
              <div className="relative z-10 flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-xl sm:text-3xl text-slate-950 shadow-lg shadow-amber-400/30">
                <FaUserGraduate />
              </div>
            </div>

            <h2 className="mt-4 sm:mt-6 text-lg sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Analyzing Your Learning Request
            </h2>

            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-sm font-medium px-2">
              Validating requirements against available teaching hours and certified faculty.
            </p>

            {/* High-Tech Progress Meter */}
            <div className="mt-4 sm:mt-6 w-full max-w-md">
              <div className="mb-1.5 flex justify-between items-center text-xs font-black">
                <span className="text-slate-500 uppercase tracking-wider text-[9px] sm:text-[10px]">
                  CALIBRATING REQUIREMENTS
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
          /* RADAR RESULT - REQUEST READY (NO TUTOR NAMES) */
          <motion.div
            key="radar-success"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="relative mx-auto max-w-2xl px-1 sm:px-4 text-center"
          >
            {/* Victory Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-100 px-3 py-0.5 text-[8.5px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.25em] text-emerald-950 uppercase shadow-2xs">
              <FaCheckCircle className="text-emerald-600 text-[10px]" />
              <span>REQUIREMENT VERIFIED • READY TO SUBMIT</span>
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
              Tutor Matching Request Ready
            </h2>

            <p className="mx-auto mt-1 sm:mt-2 max-w-md text-xs sm:text-sm md:text-base text-slate-600 font-medium px-2">
              Your preferences have been cataloged. Submit your request below to initiate educator matching — <strong>no tutor is assigned yet</strong>.
            </p>

            {/* STUDENT'S CUSTOM REQUIREMENT SUMMARY (NO MOCK TUTOR NAMES) */}
            <div className="mt-5 rounded-2xl sm:rounded-3xl border-2 border-amber-300/80 bg-gradient-to-br from-amber-50/70 via-white to-yellow-50/50 p-4 sm:p-5 text-left shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-amber-200/60">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-400 text-slate-950 text-sm font-black shadow-2xs">
                    <FaClipboardCheck />
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 block">
                      Student Requirement Summary
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                      {form?.name || "Student"}'s Custom Plan
                    </h4>
                  </div>
                </div>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Ready to Submit
                </span>
              </div>

              {/* Grid of chosen specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-amber-200/60 shadow-2xs">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">
                    Target Subject
                  </span>
                  <span className="font-extrabold text-amber-900 truncate block mt-0.5">
                    {chosenSubject}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-amber-200/60 shadow-2xs">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">
                    Target Level
                  </span>
                  <span className="font-extrabold text-slate-900 truncate block mt-0.5">
                    {chosenLevel}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-amber-200/60 shadow-2xs">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">
                    Learning Mode
                  </span>
                  <span className="font-extrabold text-slate-900 truncate block mt-0.5">
                    {chosenMode}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-amber-200/60 shadow-2xs">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">
                    Available Days
                  </span>
                  <span className="font-extrabold text-slate-900 truncate block mt-0.5">
                    {chosenDays}
                  </span>
                </div>
              </div>

              {form?.timeSlot && form.timeSlot.length > 0 && (
                <div className="p-2.5 rounded-xl bg-white/90 border border-amber-200/60 text-xs flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    Preferred Time Slots:
                  </span>
                  <span className="font-bold text-slate-800">
                    {form.timeSlot.join(" • ")}
                  </span>
                </div>
              )}
            </div>

            {/* TRANSPARENT MATCHING WORKFLOW (3 STEPS) */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left text-xs">
              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                <span className="inline-block h-5 w-5 rounded-full bg-amber-400 text-slate-950 font-black text-center text-[10px] leading-5">
                  1
                </span>
                <p className="font-extrabold text-slate-900">Request Registered</p>
                <p className="text-[11px] text-slate-500 leading-snug font-medium">
                  Requirement is logged into our active tutor matching registry.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                <span className="inline-block h-5 w-5 rounded-full bg-amber-400 text-slate-950 font-black text-center text-[10px] leading-5">
                  2
                </span>
                <p className="font-extrabold text-slate-900">Faculty Compatibility</p>
                <p className="text-[11px] text-slate-500 leading-snug font-medium">
                  Verified teachers matching your subject &amp; schedule are scored.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                <span className="inline-block h-5 w-5 rounded-full bg-amber-400 text-slate-950 font-black text-center text-[10px] leading-5">
                  3
                </span>
                <p className="font-extrabold text-slate-900">Demo Scheduled</p>
                <p className="text-[11px] text-slate-500 leading-snug font-medium">
                  Our academic advisor coordinates directly to confirm your free trial.
                </p>
              </div>
            </div>

            {/* ACTION CTA (Full width on mobile min 48px) */}
            <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
              <button
                type="button"
                onClick={onContinue}
                disabled={mutation?.isPending}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-500 px-7 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm font-black text-slate-950 shadow-md shadow-amber-400/25 active:scale-[0.98] transition cursor-pointer min-h-[48px] touch-manipulation disabled:opacity-75"
              >
                {mutation?.isPending ? (
                  <>
                    <FaSpinner className="animate-spin text-slate-950 text-base" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-slate-950 text-xs sm:text-sm" />
                    <span>Submit Learning Request &amp; Unlock Free Demo</span>
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
