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
  FaBolt,
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
      aria-label="How It Works — Mind Map Connection"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-24 text-slate-900"
    >
      {/* Background Architectural Patterns */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {/* Section Header: Headline Max 6 Words, Caption Max 1 Line */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/80 bg-yellow-100/70 px-4 py-1 text-[11px] font-bold tracking-[0.25em] text-yellow-950 uppercase shadow-xs">
            <span>{trackData.eyebrow}</span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl leading-tight">
            {trackData.title}
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal truncate max-w-xl mx-auto">
            {trackData.subtitle}
          </p>

          {/* Interactive Track Switcher Pill */}
          <div className="mt-6 inline-flex items-center rounded-full border border-yellow-200 bg-white p-1 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTrack("student")}
              className={`rounded-full px-5 py-1.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTrack === "student"
                  ? "bg-yellow-400 text-slate-950 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              For Students
            </button>

            <button
              type="button"
              onClick={() => setActiveTrack("tutor")}
              className={`rounded-full px-5 py-1.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTrack === "tutor"
                  ? "bg-yellow-400 text-slate-950 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              For Educators
            </button>
          </div>
        </header>

        {/* 3-Step Living Mind Map Connection Grid */}
        <div className="mt-12 sm:mt-16 relative">
          {/* Connecting SVG Beam Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-0.5 -translate-y-8 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 z-0" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrack}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10"
            >
              {trackData.steps.map((step, idx) => {
                const Icon = ICON_MAP[step.icon] || FaRegCompass;

                return (
                  <motion.div
                    key={step.number}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="group relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-yellow-400 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Node Type & Number */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-black tracking-widest text-slate-400 uppercase bg-slate-100 rounded-md px-2 py-0.5 group-hover:bg-yellow-100 group-hover:text-yellow-900 transition-colors">
                          {step.badge}
                        </span>

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600 border border-yellow-200/60 group-hover:bg-yellow-400 group-hover:text-slate-950 group-hover:scale-110 transition-all duration-300 shadow-xs">
                          <Icon className="text-xl" />
                        </div>
                      </div>

                      {/* Title & 1-line Caption */}
                      <h3 className="mt-5 text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-yellow-800 transition-colors">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-yellow-600 transition-colors">
                      <span>Step 0{idx + 1}</span>
                      <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action Button */}
        <div className="mt-10 text-center">
          <TrackedLink
            href={trackData.ctaHref}
            label={`How It Works CTA: ${activeTrack}`}
            category="How It Works"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-3 text-sm font-bold text-slate-950 shadow-md shadow-yellow-400/25 hover:bg-yellow-500 transition"
          >
            <span>{trackData.ctaText}</span>
            <FaArrowRight className="text-xs" />
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
