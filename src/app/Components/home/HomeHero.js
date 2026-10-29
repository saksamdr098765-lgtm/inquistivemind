"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaBolt,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import TrackedLink from "../tracking/TrackedLink";
import HOME_CONTENT from "@/app/data/homeContent";

export default function HomeHero() {
  const [audience, setAudience] = useState("student"); // "student" | "tutor"
  const [selectedPairIndex, setSelectedPairIndex] = useState(0);

  // Tutor Earnings Calculator
  const [weeklyHours, setWeeklyHours] = useState(15);
  const estimatedEarnings = weeklyHours * 750 * 4;

  const heroData = HOME_CONTENT.hero[audience];
  const pairs = HOME_CONTENT.hero.mindMapPairs;
  const activePair = pairs[selectedPairIndex];

  return (
    <section
      id="hero"
      aria-label="Curiosity Connects — Inquisitive Mind Academy"
      className="relative w-full overflow-hidden bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-20 text-slate-900"
    >
      {/* Background Architectural Mesh & Warm Golden Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(250,204,21,0.25),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Floating Ambient Glowing Particles */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-12 top-24 h-64 w-64 rounded-full bg-yellow-300/30 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -right-12 top-32 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {/* ========================================================= */}
        {/* TOP BRAND EYEBROW & MOBILE-FIRST DUAL SWITCHER           */}
        {/* ========================================================= */}
        <div className="mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-yellow-300/80 bg-yellow-100/90 px-3 py-1 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-yellow-950 uppercase shadow-xs">
            <BsStars className="text-yellow-600 animate-spin-slow text-xs" />
            <span>LIVING LEARNING MIND MAP</span>
          </div>

          {/* Mobile-First Full-Width Switcher */}
          <div className="mt-3.5 sm:mt-4 w-full max-w-[340px] sm:max-w-none sm:w-auto inline-grid grid-cols-2 sm:inline-flex items-center rounded-full border border-yellow-200 bg-white p-1 shadow-md shadow-yellow-500/10 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setAudience("student")}
              className={`flex min-h-[42px] sm:min-h-[44px] items-center justify-center gap-1.5 sm:gap-2 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                audience === "student"
                  ? "bg-yellow-400 text-slate-950 shadow-xs"
                  : "text-slate-600 hover:text-slate-950 hover:bg-yellow-50"
              }`}
            >
              <FaGraduationCap className={audience === "student" ? "text-slate-950" : "text-yellow-500"} />
              <span>I Want to Learn</span>
            </button>

            <button
              type="button"
              onClick={() => setAudience("tutor")}
              className={`flex min-h-[42px] sm:min-h-[44px] items-center justify-center gap-1.5 sm:gap-2 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                audience === "tutor"
                  ? "bg-yellow-400 text-slate-950 shadow-xs"
                  : "text-slate-600 hover:text-slate-950 hover:bg-yellow-50"
              }`}
            >
              <FaChalkboardTeacher className={audience === "tutor" ? "text-slate-950" : "text-yellow-500"} />
              <span>I Want to Teach</span>
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* EDITORIAL HEADLINE: MOBILE-FIRST COMPACT SCALING          */}
        {/* ========================================================= */}
        <div className="mt-5 sm:mt-6 text-center max-w-4xl mx-auto px-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
            {audience === "student" ? (
              <>
                Curiosity Connects{" "}
                <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                  You With Tutors.
                </span>
              </>
            ) : (
              <>
                Teach On Your{" "}
                <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                  Own Terms.
                </span>
              </>
            )}
          </h1>

          {/* Subtitle (Max 1 line) */}
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-normal max-w-xl mx-auto truncate">
            {heroData.subheadline}
          </p>
        </div>

        {/* ========================================================= */}
        {/* MOBILE-FIRST LIVING MIND MAP CONSOLE                      */}
        {/* ========================================================= */}
        {audience === "student" ? (
          <div className="mt-6 sm:mt-10 relative max-w-5xl mx-auto">
            {/* Ambient Warm Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-300/30 via-amber-200/20 to-yellow-200/30 blur-2xl opacity-70 pointer-events-none" />

            <div className="relative rounded-3xl border border-yellow-200/80 bg-white p-4 sm:p-7 shadow-xl shadow-yellow-500/10">
              {/* Header Visual Bar */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 text-xs">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-yellow-400 animate-ping" />
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Live Mind Map
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100/90 border border-yellow-300/80 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-yellow-950">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>3 Guides Ready</span>
                </div>
              </div>

              {/* =================================================== */}
              {/* MOBILE-FIRST QUESTION SELECTOR: COMPACT HORIZONTAL  */}
              {/* On mobile: 3 compact horizontal tabs (< md)         */}
              {/* On desktop: 3 full vertical cards (>= md)          */}
              {/* =================================================== */}
              <div className="mt-4 sm:mt-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-100 text-yellow-800 font-black text-[9px]">
                    ?
                  </span>
                  <span>1. Select Your Target Subject</span>
                </p>

                {/* Mobile Tabs View (< md) */}
                <div className="grid grid-cols-3 gap-2 md:hidden">
                  {pairs.map((pair, idx) => {
                    const isSelected = selectedPairIndex === idx;

                    return (
                      <button
                        key={pair.id}
                        type="button"
                        onClick={() => setSelectedPairIndex(idx)}
                        className={`flex min-h-[48px] flex-col items-center justify-center rounded-2xl border p-2 text-center transition-all cursor-pointer active:scale-95 ${
                          isSelected
                            ? "bg-gradient-to-b from-yellow-100 via-amber-50 to-white border-2 border-yellow-400 text-slate-950 shadow-md font-bold"
                            : "bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-yellow-50"
                        }`}
                      >
                        <span className="text-lg">{pair.flag}</span>
                        <span className="text-[11px] font-bold truncate mt-0.5 max-w-full">
                          {pair.subject.split(" ")[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Desktop Grid View (>= md) */}
                <div className="hidden md:grid md:grid-cols-12 gap-6 items-center">
                  {/* Left: Expanded Question Cards */}
                  <div className="md:col-span-5 space-y-2.5">
                    {pairs.map((pair, idx) => {
                      const isSelected = selectedPairIndex === idx;

                      return (
                        <button
                          key={pair.id}
                          type="button"
                          onClick={() => setSelectedPairIndex(idx)}
                          className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer ${
                            isSelected
                              ? "bg-gradient-to-r from-yellow-50 via-amber-50/50 to-white border-2 border-yellow-400 text-slate-950 shadow-md scale-[1.02]"
                              : "bg-white border-slate-200/80 text-slate-700 hover:bg-yellow-50/60 hover:border-yellow-300"
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="text-2xl shrink-0">{pair.flag}</span>
                            <div className="min-w-0">
                              <h4 className="text-xs sm:text-sm font-bold truncate leading-tight text-slate-950">
                                {pair.subject}
                              </h4>
                              <p className="text-[11px] truncate mt-0.5 text-slate-500">
                                {pair.question}
                              </p>
                            </div>
                          </div>

                          <div
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black transition-all ${
                              isSelected
                                ? "bg-yellow-400 text-slate-950 shadow-xs animate-pulse"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            ?
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Center: Desktop Animated Beam */}
                  <div className="md:col-span-2 flex flex-col items-center justify-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 flex items-center justify-center text-slate-950 shadow-md shadow-yellow-400/30">
                      <FaBolt className="text-sm animate-bounce" />
                    </div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-yellow-700 mt-1">
                      Matched
                    </span>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 mt-2 relative">
                      <span className="absolute -top-1 right-0 h-2.5 w-2.5 rounded-full bg-amber-500 animate-ping" />
                    </div>
                  </div>

                  {/* Right: Matched Guide Card Placeholder on Desktop */}
                  <div className="md:col-span-5">
                    {/* Rendered below through shared component */}
                  </div>
                </div>
              </div>

              {/* Mobile Animated Connection Indicator (< md) */}
              <div className="flex md:hidden items-center justify-center my-3">
                <div className="flex items-center gap-2 rounded-full bg-yellow-100/90 border border-yellow-300 px-3 py-1 text-[10px] font-bold text-yellow-950 shadow-xs">
                  <FaBolt className="text-yellow-600 text-[10px] animate-bounce" />
                  <span>Curiosity Matched to Verified Guide</span>
                  <FaBolt className="text-yellow-600 text-[10px] animate-bounce" />
                </div>
              </div>

              {/* =================================================== */}
              {/* MATCHED GUIDE CARD: DISPLAYED DIRECTLY IN VIEW     */}
              {/* Visible in 1 screen without scrolling!             */}
              {/* =================================================== */}
              <div className="md:-mt-[195px] md:ml-auto md:w-[41.6666%]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePair.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.22 }}
                    className="rounded-2xl border-2 border-yellow-400 bg-gradient-to-br from-yellow-50/80 via-white to-amber-50/40 p-4 sm:p-5 shadow-lg shadow-yellow-500/10 relative"
                  >
                    {/* Top Match Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-yellow-950 bg-yellow-200/90 px-2.5 py-0.5 rounded-md">
                        <BsStars className="text-yellow-700" />
                        {activePair.tutor.badge}
                      </span>

                      <span className="text-[11px] sm:text-xs font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                        {activePair.tutor.matchScore}% Match Found
                      </span>
                    </div>

                    {/* Tutor Profile Details */}
                    <div className="flex items-center gap-3">
                      <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl overflow-hidden border-2 border-yellow-400 shadow-md">
                        <img
                          src={activePair.tutor.image}
                          alt={activePair.tutor.name}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                            {activePair.tutor.name}
                          </h4>
                          <div className="flex items-center gap-1 text-xs font-bold text-amber-500 shrink-0">
                            <FaStar className="text-yellow-400 text-xs" />
                            <span>{activePair.tutor.rating.toFixed(1)}</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 font-medium truncate">
                          {activePair.tutor.role}
                        </p>

                        <div className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-500">
                          <span className="font-extrabold text-slate-950">{activePair.tutor.rate}</span>
                          <span>•</span>
                          <span className="text-emerald-700 font-bold">Free Demo</span>
                        </div>
                      </div>
                    </div>

                    {/* 1-Tap Action Button (Full-width on mobile) */}
                    <div className="mt-3.5 pt-3 border-t border-yellow-200/80 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                      <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline">
                        100% Free 30-min evaluation
                      </span>

                      <TrackedLink
                        href={activePair.tutor.link}
                        label={`Mind Map CTA: ${activePair.tutor.name}`}
                        category="Mind Map Hero"
                        className="w-full sm:w-auto inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 transition hover:bg-yellow-500 shadow-md shadow-yellow-400/25 active:scale-95"
                      >
                        <span>Request Free Demo</span>
                        <FaArrowRight className="text-xs" />
                      </TrackedLink>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Guarantee Reassurance */}
              <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-medium">
                  <FaShieldAlt className="text-yellow-600 shrink-0" />
                  <span>Free demo session before any commitment</span>
                </div>

                <TrackedLink
                  href="/find-tutor"
                  label="Hero Find All Match CTA"
                  category="Mind Map Hero"
                  className="font-bold text-slate-900 hover:text-yellow-600 transition inline-flex items-center gap-1"
                >
                  <span>Browse all subjects</span>
                  <FaArrowRight className="text-[10px]" />
                </TrackedLink>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* EDUCATOR VIEW: MOBILE-FIRST CONSOLE                       */
          /* ========================================================= */
          <div className="mt-6 sm:mt-10 relative max-w-4xl mx-auto">
            <div className="relative rounded-3xl border border-yellow-200 bg-gradient-to-br from-yellow-50/80 via-white to-amber-50/40 p-5 sm:p-10 shadow-xl text-slate-900">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
                <div className="flex-1 text-center md:text-left">
                  <span className="inline-block rounded-md bg-yellow-200/80 text-yellow-950 border border-yellow-300 px-3 py-1 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-2 sm:mb-3">
                    EDUCATOR CONSOLE
                  </span>

                  <h3 className="text-xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    Teach with Total Autonomy.
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Set your hours, connect with pre-screened students, and receive direct weekly bank deposits with zero commission on your first 10 lessons.
                  </p>

                  <div className="mt-5 hidden md:block">
                    <TrackedLink
                      href="/become-a-tutor"
                      label="Hero Apply Educator"
                      category="Mind Map Hero"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-sm font-bold text-slate-950 shadow-md shadow-yellow-400/25 hover:bg-yellow-500 transition"
                    >
                      <span>Apply as Tutor in 5 Min</span>
                      <FaArrowRight className="text-xs" />
                    </TrackedLink>
                  </div>
                </div>

                {/* Earnings Calculator Card */}
                <div className="w-full md:w-72 rounded-2xl border border-yellow-200 bg-white p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <FaClock className="text-yellow-600" />
                      <span>Weekly Hours:</span>
                    </span>
                    <span className="text-xs font-black bg-yellow-100 text-yellow-950 px-2.5 py-1 rounded-md">
                      {weeklyHours} hrs/wk
                    </span>
                  </div>

                  <input
                    type="range"
                    min={5}
                    max={40}
                    step={5}
                    value={weeklyHours}
                    onChange={(e) => setWeeklyHours(Number(e.target.value))}
                    className="w-full accent-yellow-500 cursor-pointer"
                  />

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                      Estimated Monthly Earnings
                    </p>
                    <p className="text-xl sm:text-2xl font-black text-slate-950 mt-0.5">
                      ₹{estimatedEarnings.toLocaleString("en-IN")}{" "}
                      <span className="text-xs font-semibold text-slate-500">/ mo</span>
                    </p>
                  </div>
                </div>

                {/* Mobile Apply Button */}
                <div className="w-full md:hidden">
                  <TrackedLink
                    href="/become-a-tutor"
                    label="Hero Mobile Apply Educator"
                    category="Mind Map Hero"
                    className="w-full flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-md shadow-yellow-400/25 active:scale-95"
                  >
                    <span>Apply as Tutor in 5 Min</span>
                    <FaArrowRight className="text-xs" />
                  </TrackedLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
