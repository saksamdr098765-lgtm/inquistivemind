"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaArrowRight,
  FaBolt,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import TrackedLink from "../tracking/TrackedLink";
import HOME_CONTENT from "@/app/data/homeContent";

function TutorCharacterAvatar({ characterId }) {
  if (characterId === "character-french") {
    return (
      <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl overflow-hidden border-2 border-yellow-400 bg-gradient-to-br from-amber-200 via-yellow-100 to-amber-300 shadow-md flex items-center justify-center">
        <svg viewBox="0 0 80 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hair back */}
          <path d="M22 36C22 22 32 16 40 16C48 16 58 22 58 36C58 48 54 54 54 54H26C26 54 22 48 22 36Z" fill="#5C2D16" />
          {/* French Beret */}
          <ellipse cx="40" cy="22" rx="26" ry="10" fill="#1E293B" transform="rotate(-6 40 22)" />
          <circle cx="39" cy="12" r="2.5" fill="#1E293B" />
          <path d="M42 12C45 9 47 10 47 10" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
          {/* Face */}
          <ellipse cx="40" cy="38" rx="16" ry="17" fill="#FDE047" fillOpacity="0.4" />
          <ellipse cx="40" cy="38" rx="15" ry="16" fill="#FDE68A" />
          {/* Cheeks */}
          <circle cx="30" cy="42" r="3" fill="#FCA5A5" fillOpacity="0.6" />
          <circle cx="50" cy="42" r="3" fill="#FCA5A5" fillOpacity="0.6" />
          {/* Round Glasses */}
          <circle cx="33" cy="35" r="5" stroke="#78350F" strokeWidth="1.5" fill="#FFFFFF" fillOpacity="0.3" />
          <circle cx="47" cy="35" r="5" stroke="#78350F" strokeWidth="1.5" fill="#FFFFFF" fillOpacity="0.3" />
          <line x1="38" y1="35" x2="42" y2="35" stroke="#78350F" strokeWidth="1.5" />
          {/* Eyes */}
          <circle cx="33" cy="35" r="1.8" fill="#1E293B" />
          <circle cx="47" cy="35" r="1.8" fill="#1E293B" />
          {/* Friendly Smile */}
          <path d="M36 43C38 46 42 46 44 43" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
          {/* French Striped Neck / Collar */}
          <path d="M26 62C26 52 32 50 40 50C48 50 54 52 54 62V80H26V62Z" fill="#FFFFFF" />
          <path d="M26 56H54" stroke="#1E3A8A" strokeWidth="2" />
          <path d="M26 62H54" stroke="#1E3A8A" strokeWidth="2" />
          <path d="M26 68H54" stroke="#1E3A8A" strokeWidth="2" />
          {/* Little flag badge */}
          <rect x="52" y="2" width="18" height="13" rx="3" fill="#FFFFFF" stroke="#E2E8F0" />
          <rect x="52" y="2" width="6" height="13" rx="1" fill="#2563EB" />
          <rect x="64" y="2" width="6" height="13" rx="1" fill="#DC2626" />
        </svg>
      </div>
    );
  }

  if (characterId === "character-math") {
    return (
      <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl overflow-hidden border-2 border-sky-400 bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200 shadow-md flex items-center justify-center">
        <svg viewBox="0 0 80 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hair */}
          <path d="M24 30C24 18 32 14 40 14C48 14 56 18 56 30C56 36 54 42 54 42H26C26 42 24 36 24 30Z" fill="#1E293B" />
          <path d="M23 26C28 16 38 15 42 15C48 15 54 18 57 24C53 22 47 21 41 21C35 21 28 23 23 26Z" fill="#0F172A" />
          {/* Face */}
          <ellipse cx="40" cy="38" rx="15" ry="16" fill="#FDE68A" />
          {/* Cheeks */}
          <circle cx="31" cy="42" r="2.5" fill="#FCA5A5" fillOpacity="0.5" />
          <circle cx="49" cy="42" r="2.5" fill="#FCA5A5" fillOpacity="0.5" />
          {/* Rectangular Smart Glasses */}
          <rect x="27" y="31" width="11" height="8" rx="2" stroke="#1D4ED8" strokeWidth="1.5" fill="#FFFFFF" fillOpacity="0.4" />
          <rect x="42" y="31" width="11" height="8" rx="2" stroke="#1D4ED8" strokeWidth="1.5" fill="#FFFFFF" fillOpacity="0.4" />
          <line x1="38" y1="35" x2="42" y2="35" stroke="#1D4ED8" strokeWidth="1.5" />
          {/* Eyes */}
          <circle cx="32.5" cy="35" r="1.8" fill="#0F172A" />
          <circle cx="47.5" cy="35" r="1.8" fill="#0F172A" />
          {/* Smile */}
          <path d="M36 44C38 47 42 47 44 44" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
          {/* Blazer & Shirt */}
          <path d="M25 60C25 50 31 48 40 48C49 48 55 50 55 60V80H25V60Z" fill="#1E3A8A" />
          <polygon points="40,52 35,66 45,66" fill="#FFFFFF" />
          <polygon points="40,54 38,68 40,74 42,68" fill="#EAB308" />
          {/* Floating badge */}
          <circle cx="64" cy="14" r="9" fill="#FFFFFF" stroke="#BFDBFE" />
          <text x="64" y="17" fontSize="10" textAnchor="middle">📐</text>
        </svg>
      </div>
    );
  }

  // English Fluency Coach Character
  return (
    <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl overflow-hidden border-2 border-emerald-400 bg-gradient-to-br from-emerald-200 via-teal-100 to-yellow-200 shadow-md flex items-center justify-center">
      <svg viewBox="0 0 80 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Modern styled hair */}
        <path d="M23 32C23 18 30 14 40 14C50 14 57 18 57 32C57 38 55 42 55 42H25C25 42 23 38 23 32Z" fill="#334155" />
        <path d="M26 22C32 14 45 13 54 18C48 18 42 19 36 22C31 24 28 27 26 22Z" fill="#1E293B" />
        {/* Face */}
        <ellipse cx="40" cy="38" rx="15" ry="16" fill="#FDE68A" />
        {/* Headset Band */}
        <path d="M24 38C24 23 31 16 40 16C49 16 56 23 56 38" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
        {/* Headset Ear Cushions */}
        <rect x="21" y="32" width="4" height="12" rx="2" fill="#047857" stroke="#064E3B" strokeWidth="1" />
        <rect x="55" y="32" width="4" height="12" rx="2" fill="#047857" stroke="#064E3B" strokeWidth="1" />
        {/* Microphone Boom */}
        <path d="M25 40C27 46 32 48 35 47" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="35" cy="47" r="2" fill="#047857" />
        {/* Expressive Eyes & Smile */}
        <circle cx="33" cy="34" r="1.8" fill="#0F172A" />
        <circle cx="47" cy="34" r="1.8" fill="#0F172A" />
        <path d="M30 30C32 29 35 30 36 31" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M44 31C45 30 48 29 50 30" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M35 42C37 46 43 46 45 42" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
        {/* Smart Casual Polo */}
        <path d="M25 58C25 50 31 48 40 48C49 48 55 50 55 58V80H25V58Z" fill="#065F46" />
        <polygon points="40,54 36,64 44,64" fill="#A7F3D0" />
        {/* Floating badge */}
        <circle cx="64" cy="14" r="9" fill="#FFFFFF" stroke="#A7F3D0" />
        <text x="64" y="17" fontSize="10" textAnchor="middle">🗣️</text>
      </svg>
    </div>
  );
}

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

          {/* Subtitle */}
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-normal max-w-xl mx-auto leading-relaxed px-2">
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

                    {/* Tutor Profile Details with Illustrated Character */}
                    <div className="flex items-center gap-3">
                      <TutorCharacterAvatar characterId={activePair.tutor.characterId} />

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                            {activePair.tutor.name}
                          </h4>
                          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0">
                            Verified Faculty
                          </span>
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
