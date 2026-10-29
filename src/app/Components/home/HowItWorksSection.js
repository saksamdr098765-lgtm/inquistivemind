"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRegCompass,
  FaSearchPlus,
  FaChartLine,
  FaUserEdit,
  FaUserCheck,
  FaCoins,
  FaArrowRight,
  FaGraduationCap,
  FaChalkboardTeacher,
} from "react-icons/fa";
import TrackedLink from "../tracking/TrackedLink";
import HOME_CONTENT from "@/app/data/homeContent";

const ICON_MAP = {
  FaRegCompass,
  FaSearchPlus,
  FaChartLine,
  FaUserEdit,
  FaUserCheck,
  FaCoins,
};

export default function HowItWorksSection() {
  const [activeTrack, setActiveTrack] = useState("student"); // "student" | "tutor"
  const trackData =
    activeTrack === "student"
      ? HOME_CONTENT.howItWorks.studentTrack
      : HOME_CONTENT.howItWorks.tutorTrack;

  return (
    <section
      id="how-it-works"
      aria-label="How It Works — 3-Step Journey"
      className="relative w-full overflow-hidden bg-white py-14 sm:py-20 lg:py-24 text-slate-900"
    >
      {/* Background Architectural Patterns */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/80 bg-yellow-100/70 px-4 py-1.5 text-[11px] sm:text-xs font-bold tracking-[0.25em] text-yellow-950 uppercase shadow-xs">
            <span>{trackData.eyebrow}</span>
          </div>

          <h2 className="mt-3.5 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            {trackData.title}
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto px-2">
            {trackData.subtitle}
          </p>

          {/* Mobile-First Full-Width Switcher Pill */}
          <div className="mt-5 sm:mt-6 mx-auto w-full max-w-[320px] sm:max-w-none sm:w-auto inline-grid grid-cols-2 sm:inline-flex items-center rounded-full border border-yellow-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTrack("student")}
              className={`flex min-h-[42px] sm:min-h-[44px] items-center justify-center gap-1.5 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTrack === "student"
                  ? "bg-yellow-400 text-slate-950 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FaGraduationCap className={activeTrack === "student" ? "text-slate-950" : "text-yellow-600"} />
              <span>For Students</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTrack("tutor")}
              className={`flex min-h-[42px] sm:min-h-[44px] items-center justify-center gap-1.5 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTrack === "tutor"
                  ? "bg-yellow-400 text-slate-950 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FaChalkboardTeacher className={activeTrack === "tutor" ? "text-slate-950" : "text-yellow-600"} />
              <span>For Educators</span>
            </button>
          </div>
        </header>

        {/* 3-Step Journey Grid (Mobile Timeline + Desktop Connected Beam) */}
        <div className="mt-10 sm:mt-16 relative">
          {/* Desktop Connecting Beam Line */}
          <div className="hidden md:block absolute top-1/2 left-16 right-16 h-0.5 -translate-y-8 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 z-0" />

          {/* Mobile Connecting Spine Line */}
          <div className="md:hidden absolute top-8 bottom-8 left-8 w-0.5 bg-gradient-to-b from-yellow-400 via-amber-400 to-yellow-300 z-0" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrack}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 relative z-10"
            >
              {trackData.steps.map((step, idx) => {
                const Icon = ICON_MAP[step.icon] || FaRegCompass;

                return (
                  <motion.div
                    key={step.number}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="group relative rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs hover:shadow-xl hover:border-yellow-400 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Node Type & Number */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] sm:text-xs font-black tracking-widest text-slate-500 uppercase bg-slate-100 rounded-md px-2.5 py-1 group-hover:bg-yellow-100 group-hover:text-yellow-900 transition-colors">
                          {step.badge}
                        </span>

                        <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600 border border-yellow-200/60 group-hover:bg-yellow-400 group-hover:text-slate-950 group-hover:scale-110 transition-all duration-300 shadow-2xs">
                          <Icon className="text-lg sm:text-xl" />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-yellow-800 transition-colors">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-yellow-600 transition-colors">
                      <span>Step 0{idx + 1} of 03</span>
                      <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action Button: Mobile Full-Width */}
        <div className="mt-8 sm:mt-10 text-center">
          <TrackedLink
            href={trackData.ctaHref}
            label={`How It Works CTA: ${activeTrack}`}
            category="How It Works"
            className="w-full sm:w-auto inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-3 text-sm font-bold text-slate-950 shadow-md shadow-yellow-400/25 hover:bg-yellow-500 transition active:scale-95"
          >
            <span>{trackData.ctaText}</span>
            <FaArrowRight className="text-xs" />
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
