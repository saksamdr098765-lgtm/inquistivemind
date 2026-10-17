"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaGlobe,
  FaSearch,
  FaHome,
  FaShieldAlt,
  FaCalendarCheck,
  FaAward,
} from "react-icons/fa";
import {
  BsStars,
  BsLightningChargeFill,
  BsChatQuoteFill,
  BsCheckCircleFill,
} from "react-icons/bs";
import TrackedLink from "./tracking/TrackedLink";
import TrackedButton from "./tracking/TrackedButton";

// Three primary learning pathways
const PATHWAYS = [
  {
    id: "french",
    label: "Learn French",
    badgeLabel: "FRENCH LANGUAGE COURSES",
    icon: FaGlobe,
    flag: "🇫🇷",
    headline: "Master French with DELF-Certified Faculty",
    subtext:
      "From conversational basics to DELF A1–C2 and TEF/TCF Canada immigration prep, learn with structured live batches or 1-on-1 coaching.",
    primaryCta: {
      text: "Explore French Courses",
      href: "/courses",
      label: "Hero CTA - Explore French Courses",
    },
    secondaryCta: {
      text: "DELF & TEF Prep",
      href: "/services/french-classes-chandigarh",
      label: "Hero Secondary - French Exam Prep",
    },
    highlights: [
      "DELF A1–C2, TEF Canada & TCF coaching",
      "Native-level pronunciation & speaking practice",
      "Small batches (6–10) or dedicated 1-on-1 classes",
    ],
    floatingBadge: {
      title: "DELF / TEF Ready",
      desc: "Small Batches & 1-on-1",
      icon: "🇫🇷",
    },
  },
  {
    id: "tutor",
    label: "Find a Tutor",
    badgeLabel: "SMART TUTOR MATCHING",
    icon: FaSearch,
    flag: "🎯",
    headline: "Get Matched with Your Ideal Private Tutor",
    subtext:
      "Share your target subject, proficiency level, and availability. We hand-match you with vetted, top-rated educators within 24 hours.",
    primaryCta: {
      text: "Find My Tutor",
      href: "/find-tutor",
      label: "Hero CTA - Find My Tutor",
    },
    secondaryCta: {
      text: "How Matching Works",
      href: "/find-tutor",
      label: "Hero Secondary - Tutor Matching Flow",
    },
    highlights: [
      "100% Free demo evaluation session with your tutor",
      "Verified credentials, teaching background & reviews",
      "Flexible timetable tailored to your school or work routine",
    ],
    floatingBadge: {
      title: "Hand-Matched in 24h",
      desc: "Verified Expert Tutors",
      icon: "⭐",
    },
  },
  {
    id: "home-tuition",
    label: "Home Tuition",
    badgeLabel: "DOORSTEP ACADEMIC TUITION",
    icon: FaHome,
    flag: "🏡",
    headline: "Personalised Home Tuition at Your Doorstep",
    subtext:
      "Experienced tutors visiting your home across Chandigarh, Mohali & Panchkula for CBSE, ICSE, and foreign language excellence.",
    primaryCta: {
      text: "Explore Home Tuition",
      href: "/courses/academic-excellence-program",
      label: "Hero CTA - Explore Home Tuition",
    },
    secondaryCta: {
      text: "Request a Home Tutor",
      href: "/find-tutor",
      label: "Hero Secondary - Request Home Tutor",
    },
    highlights: [
      "In-person focused attention without student travel fatigue",
      "Class 1–12 school syllabus: Math, Science, Languages & more",
      "Regular parent feedback & weekly performance tracking",
    ],
    floatingBadge: {
      title: "Tricity Doorstep",
      desc: "Chandigarh • Mohali • Panchkula",
      icon: "📍",
    },
  },
];

// Interactive data for French Preview
const FRENCH_SNIPPETS = [
  {
    phrase: "Bonjour ! Comment allez-vous ?",
    phonetic: "[bɔ̃.ʒuʁ kɔ.mɑ̃ ta.le vu]",
    meaning: "Hello! How are you doing?",
    category: "Everyday Conversation",
    level: "A1 Starter",
  },
  {
    phrase: "Parler avec confiance",
    phonetic: "[paʁ.le a.vɛk kɔ̃.fjɑ̃s]",
    meaning: "Speaking with natural confidence",
    category: "Fluency & Accent",
    level: "B1 Intermediate",
  },
  {
    phrase: "Réussir son examen DELF",
    phonetic: "[ʁe.y.siʁ sɔ̃n ɛɡ.za.mɛ̃]",
    meaning: "Acing the official DELF examination",
    category: "Exam Certification",
    level: "B2 Advanced",
  },
];

// Interactive data for Tutor Matching Preview
const TUTOR_PROFILES = [
  {
    subject: "French",
    name: "Sakshi Goel",
    role: "Lead French Faculty",
    credentials: "DELF Certified • 10+ Yrs Exp",
    // rating: "5.0",
    // reviews: "140+ reviews",
    focus: "DELF A1–B2 Prep, TEF Canada & Fluency",
    avatarBg: "from-amber-400 to-yellow-500",
    initials: "SG",
  },
  {
    subject: "Math",
    name: "Priyanka ",
    role: "Lead Mathematics Faculty",
    credentials: " • 3+ Yrs Exp",
    // rating: "5.0",
    // reviews: "140+ reviews",
    focus: "Conceptual Understanding, Logical Reasoning",
    avatarBg: "from-amber-400 to-yellow-500",
    initials: "P",
  },
  // {
  //   subject: "English",
  //   name: "Aman Verma",
  //   role: "Communication Coach",
  //   credentials: "IELTS 8.5 • 6+ Yrs Exp",
  //   rating: "4.9",
  //   // reviews: "118+ reviews",
  //   focus: "Spoken English, Interview Prep & Writing",
  //   avatarBg: "from-sky-500 to-blue-600",
  //   initials: "AV",
  // },
  // {
  //   subject: "Math",
  //   name: "Raman Kumar",
  //   role: "Senior Academic Mentor",
  //   credentials: "M.Sc. Mathematics • 8+ Yrs Exp",
  //   rating: "5.0",
  //   // reviews: "162+ reviews",
  //   focus: "CBSE & ICSE Class 9–12 Board Focus",
  //   avatarBg: "from-emerald-500 to-teal-600",
  //   initials: "RK",
  // },
  // {
  //   subject: "Science",
  //   name: "Dr. Neha Sharma",
  //   role: "Science Specialist",
  //   credentials: "Ph.D. Sciences • 5+ Yrs Exp",
  //   rating: "4.9",
  //   // reviews: "96+ reviews",
  //   focus: "Physics & Chemistry Concept Clarity",
  //   avatarBg: "from-violet-500 to-purple-600",
  //   initials: "NS",
  // },
];

// Interactive data for Home Tuition Preview
const ACADEMIC_GRADES = [
  {
    id: "primary",
    label: "Class 1–5",
    focus: "Strong Foundations & Curiosity",
    description: "Patient home tutors helping with reading, basic math, handwriting & homework.",
    subjects: ["Mathematics", "English", "Science", "French Basics"],
  },
  {
    id: "middle",
    label: "Class 6–8",
    focus: "Concept Clarity & Study Habits",
    description: "Subject-wise structured coaching for school exams and disciplined learning.",
    subjects: ["Math & Geometry", "Science (Physics/Bio)", "English & Social", "French"],
  },
  {
    id: "secondary",
    label: "Class 9–10",
    focus: "Board Exam Prep & High Scores",
    description: "Rigorous CBSE/ICSE board preparation with mock tests and revision papers.",
    subjects: ["Standard/Basic Math", "Physics & Chemistry", "Biology", "French & English"],
  },
  {
    id: "senior",
    label: "Class 11–12",
    focus: "Specialist Academic Mentorship",
    description: "Focused 1-on-1 tutoring for board exam excellence and entrance readiness.",
    subjects: ["Higher Mathematics", "Physics / Chemistry", "English Core", "Applied French"],
  },
];

export default function Hero() {
  const [activePath, setActivePath] = useState("french");
  const [frenchIndex, setFrenchIndex] = useState(0);
  const [tutorSubject, setTutorSubject] = useState("French");
  const [gradeIndex, setGradeIndex] = useState(2); // Default: Class 9–10

  const pathway = PATHWAYS.find((p) => p.id === activePath) || PATHWAYS[0];
  const activeTutor =
    TUTOR_PROFILES.find((t) => t.subject === tutorSubject) || TUTOR_PROFILES[0];
  const activeGrade = ACADEMIC_GRADES[gradeIndex];

  return (
    <section
      id="hero"
      aria-label="Welcome to Inquisitive Mind Academy"
      className="relative w-full overflow-hidden overflow-x-clip bg-gradient-to-b from-amber-50/40 via-white to-slate-50/60 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 text-slate-900"
    >
      {/* Background Architectural Patterns */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(250,204,21,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Ambient Lighting Orbs - constrained to prevent horizontal scrolling */}
      <div className="pointer-events-none absolute left-0 sm:-left-10 top-24 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 sm:-right-10 top-40 h-80 w-80 rounded-full bg-sky-300/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {/* ========================================================= */}
        {/* TOP BRAND EYEBROW & MAIN EDITORIAL HEADLINE               */}
        {/* ========================================================= */}
        <header className="mx-auto max-w-4xl text-center w-full min-w-0">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/80 bg-yellow-100/70 px-4 py-1.5 text-[11px] sm:text-xs font-bold tracking-[0.25em] text-yellow-900 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500" />
            </span>
            <span>PERSONALISED LEARNING STARTS HERE</span>
          </div>

          {/* Expressive Editorial Headline */}
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08]">
            Your Goals. Your Tutor.{" "}
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">
              Your Way to Learn.
            </span>
          </h1>

          {/* Value Proposition Subtitle */}
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed">
            From mastering French to finding the right home tutor for school
            subjects, discover learning support that fits your goals.
          </p>
        </header>

        {/* ========================================================= */}
        {/* "FIND YOUR LEARNING PATH" INTERACTIVE SELECTOR            */}
        {/* ========================================================= */}
        <div className="mt-8 sm:mt-10 lg:mt-12 w-full min-w-0">
          <div className="mx-auto max-w-3xl text-center w-full min-w-0">
            <div className="mb-3 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              <BsStars className="text-yellow-500" />
              <span>Select Your Learning Path</span>
              <BsStars className="text-yellow-500" />
            </div>

            {/* 3-Option Interactive Segmented Controller */}
            <div
              role="tablist"
              aria-label="Choose your learning pathway"
              className="grid grid-cols-3 gap-1.5 sm:gap-2.5 rounded-2xl sm:rounded-full border border-slate-200/90 bg-white/95 p-1.5 sm:p-2 shadow-lg shadow-slate-200/50 backdrop-blur-md w-full min-w-0"
            >
              {PATHWAYS.map((p) => {
                const isSelected = activePath === p.id;

                return (
                  <TrackedButton
                    key={p.id}
                    role="tab"
                    id={`tab-${p.id}`}
                    aria-selected={isSelected}
                    aria-controls={`panel-${p.id}`}
                    tabIndex={0}
                    label={`Path Selector: ${p.label}`}
                    category="Hero Path Switcher"
                    onClick={() => setActivePath(p.id)}
                    className={`relative flex min-h-[48px] sm:min-h-[52px] items-center justify-center gap-1 sm:gap-2 rounded-xl sm:rounded-full px-2 sm:px-5 py-2 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 min-w-0 ${
                      isSelected
                        ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                        : "text-slate-600 hover:bg-yellow-50/80 hover:text-slate-900"
                    }`}
                  >
                    <span className="text-sm sm:text-base shrink-0">{p.flag}</span>
                    <span className="text-[11px] sm:text-xs md:text-sm font-semibold leading-tight text-center">
                      {p.label}
                    </span>
                    {isSelected && (
                      <span className="hidden md:inline-block h-1.5 w-1.5 rounded-full bg-yellow-400 shrink-0" />
                    )}
                  </TrackedButton>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DYNAMIC TWO-COLUMN INTERACTIVE STAGE                      */}
        {/* ========================================================= */}
        <div className="mt-8 sm:mt-12 grid items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14 w-full min-w-0">
          {/* ------------------------------------------------------- */}
          {/* LEFT COLUMN: ACTIVE PATHWAY DETAILS & CTAS (7 Cols)     */}
          {/* ------------------------------------------------------- */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center w-full min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={pathway.id}
                role="tabpanel"
                id={`panel-${pathway.id}`}
                aria-labelledby={`tab-${pathway.id}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="flex flex-col w-full min-w-0"
              >
                {/* Micro Badge */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-yellow-100 px-2.5 py-1 text-[11px] font-bold tracking-wider text-yellow-800 shrink-0">
                    <BsLightningChargeFill className="text-yellow-600 text-xs" />
                    {pathway.badgeLabel}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    • 100% Personalised Guidance
                  </span>
                </div>

                {/* Pathway Headline */}
                <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl leading-tight">
                  {pathway.headline}
                </h2>

                {/* Pathway Subtext */}
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                  {pathway.subtext}
                </p>

                {/* Key Pathway Highlights / Checklist */}
                <ul className="mt-5 space-y-2.5 sm:space-y-3 w-full">
                  {pathway.highlights.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 font-medium"
                    >
                      <FaCheckCircle className="mt-0.5 text-yellow-500 shrink-0 text-sm sm:text-base" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Primary & Secondary Call To Actions */}
                <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                  {/* Primary CTA Button */}
                  <TrackedLink
                    href={pathway.primaryCta.href}
                    label={pathway.primaryCta.label}
                    category="Hero Primary CTA"
                    className="inline-flex min-h-[48px] sm:min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-yellow-400 px-7 sm:px-8 py-3.5 text-sm sm:text-base font-bold text-slate-950 shadow-lg shadow-yellow-400/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-400/40 focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 shrink-0"
                  >
                    <span>{pathway.primaryCta.text}</span>
                    <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                  </TrackedLink>

                  {/* Secondary Action */}
                  <TrackedLink
                    href={pathway.secondaryCta.href}
                    label={pathway.secondaryCta.label}
                    category="Hero Secondary CTA"
                    className="inline-flex min-h-[48px] sm:min-h-[52px] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:bg-yellow-50 hover:border-yellow-300 hover:text-slate-900 shrink-0"
                  >
                    <span>{pathway.secondaryCta.text}</span>
                    <FaArrowRight className="text-[11px] text-slate-400" />
                  </TrackedLink>
                </div>
              </motion.div>
            </AnimatePresence>

          
          </div>

          {/* ------------------------------------------------------- */}
          {/* RIGHT COLUMN: INTERACTIVE VISUAL GATEWAY CONSOLE (5 Cols)*/}
          {/* ------------------------------------------------------- */}
          <div className="lg:col-span-6 xl:col-span-5 relative w-full min-w-0">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-200/40 via-amber-200/20 to-sky-200/30 blur-2xl opacity-70 pointer-events-none" />

            {/* Gateway Console Frame */}
            <div className="relative rounded-3xl border border-slate-200/80 bg-white/95 p-4 sm:p-6 lg:p-7 shadow-2xl shadow-yellow-500/10 backdrop-blur-xl w-full min-w-0 overflow-hidden">
              {/* Console Top Bar */}
              <div className="flex items-center justify-between pb-3.5 sm:pb-4 border-b border-slate-100 w-full">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="flex h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-400/80" />
                  <span className="flex h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-400/80" />
                  <span className="flex h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-400/80" />
                  <span className="ml-1.5 sm:ml-2 text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase truncate">
                    Interactive Gateway
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600 shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live Path</span>
                </div>
              </div>

              {/* Dynamic Pathway Content */}
              <div className="mt-4 sm:mt-5 min-h-[340px] sm:min-h-[380px] flex flex-col justify-between w-full min-w-0">
                <AnimatePresence mode="wait">
                  {/* ===================================== */}
                  {/* PREVIEW A: FRENCH LANGUAGE EXPLORER   */}
                  {/* ===================================== */}
                  {activePath === "french" && (
                    <motion.div
                      key="french-preview"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col w-full min-w-0 justify-between gap-4"
                    >
                      {/* Dialogue Bubble */}
                      <div className="rounded-2xl border border-yellow-200/70 bg-gradient-to-br from-yellow-50/80 to-amber-50/40 p-3.5 sm:p-4 w-full min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-bold tracking-wider text-yellow-800 uppercase flex items-center gap-1.5">
                            <BsChatQuoteFill className="text-yellow-600 shrink-0" />
                            Live Classroom Dialogue
                          </span>
                          <span className="rounded-full bg-yellow-200/80 px-2 py-0.5 text-[10px] font-bold text-yellow-900 shrink-0">
                            DELF B1/B2
                          </span>
                        </div>

                        <div className="mt-3 space-y-2 text-xs sm:text-sm">
                          <div className="flex items-start gap-2 text-slate-700">
                            <span className="font-bold text-yellow-700 shrink-0">
                              Tutor:
                            </span>
                            <span className="italic leading-snug">
                              "Bonjour ! Prêt pour votre session de conversation ?"
                            </span>
                          </div>
                          <div className="flex items-start gap-2 text-slate-900 font-medium">
                            <span className="font-bold text-slate-900 shrink-0">
                              Student:
                            </span>
                            <span className="leading-snug">
                              "Oui ! Je veux réussir mon examen DELF avec confiance."
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Vocabulary Card with Tab Buttons */}
                      <div className="rounded-2xl border border-slate-100 bg-slate-50/90 p-3.5 sm:p-4 w-full min-w-0">
                        <div className="flex items-center justify-between mb-3 gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            Vocabulary Flashcard Snippet
                          </span>
                          <span className="text-[10px] font-semibold text-yellow-700 bg-yellow-100 rounded px-2 py-0.5 shrink-0">
                            {FRENCH_SNIPPETS[frenchIndex].level}
                          </span>
                        </div>

                        <div className="rounded-xl border border-white bg-white p-3.5 shadow-sm w-full min-w-0">
                          <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 leading-snug">
                            {FRENCH_SNIPPETS[frenchIndex].phrase}
                          </h4>

                          <div className="mt-1 flex items-center gap-2">
                            <span className="font-mono text-[11px] sm:text-xs text-yellow-600 font-semibold">
                              {FRENCH_SNIPPETS[frenchIndex].phonetic}
                            </span>
                            <span className="inline-flex items-center gap-0.5" aria-label="Audio pronunciation available">
                              <span className="h-2 w-0.5 rounded-full bg-yellow-500 motion-reduce:animate-none animate-pulse" />
                              <span className="h-3.5 w-0.5 rounded-full bg-yellow-500 motion-reduce:animate-none animate-pulse delay-75" />
                              <span className="h-1.5 w-0.5 rounded-full bg-yellow-500 motion-reduce:animate-none animate-pulse delay-150" />
                              <span className="h-3 w-0.5 rounded-full bg-yellow-500 motion-reduce:animate-none animate-pulse delay-100" />
                            </span>
                          </div>

                          <p className="mt-1.5 text-xs text-slate-600 font-medium leading-snug">
                            {FRENCH_SNIPPETS[frenchIndex].meaning}
                          </p>
                        </div>

                        {/* Interactive Phrase Switcher */}
                        <div className="mt-3 flex gap-1.5 w-full">
                          {FRENCH_SNIPPETS.map((snippet, idx) => (
                            <TrackedButton
                              key={idx}
                              label={`French Snippet: ${snippet.category}`}
                              category="Hero French Preview"
                              onClick={() => setFrenchIndex(idx)}
                              className={`flex-1 rounded-lg py-1.5 text-[10px] sm:text-[11px] font-semibold transition-all text-center ${
                                frenchIndex === idx
                                  ? "bg-yellow-400 text-slate-950 shadow-sm"
                                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                              }`}
                            >
                              {snippet.category.split(" ")[0]}
                            </TrackedButton>
                          ))}
                        </div>
                      </div>

                      {/* Level Roadmap Strip */}
                      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-900 px-3.5 sm:px-4 py-2.5 sm:py-3 text-white text-xs w-full min-w-0">
                        <div className="flex items-center gap-2">
                          <FaAward className="text-yellow-400 shrink-0" />
                          <span className="font-semibold text-xs">Curriculum Levels:</span>
                        </div>
                        <span className="font-mono text-yellow-400 text-[11px] sm:text-xs tracking-wider">
                          A1 → A2 → B1 → B2 → C1
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* ===================================== */}
                  {/* PREVIEW B: SMART TUTOR MATCHING       */}
                  {/* ===================================== */}
                  {activePath === "tutor" && (
                    <motion.div
                      key="tutor-preview"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col w-full min-w-0 justify-between gap-4"
                    >
                      {/* Subject Chips */}
                      <div className="w-full min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            Select Subject to Match Tutor
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/80 px-2 py-0.5 text-[10px] font-bold text-emerald-800 shrink-0">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            <span>Active Match Engine</span>
                          </span>
                        </div>

                        <div className="grid grid-cols-4 gap-1.5 w-full">
                          {/* {["French", "English", "Science"].map((sub) => ( */}
                          {["French","Math"].map((sub) => (
                            <TrackedButton
                              key={sub}
                              label={`Tutor Filter: ${sub}`}
                              category="Hero Tutor Preview"
                              onClick={() => setTutorSubject(sub)}
                              className={`rounded-xl py-2 px-1 text-center text-[11px] sm:text-xs font-bold transition-all truncate ${
                                tutorSubject === sub
                                  ? "bg-yellow-400 text-slate-950 shadow-sm"
                                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                              }`}
                            >
                              {sub}
                            </TrackedButton>
                          ))}
                        </div>
                      </div>

                      {/* Tutor Profile Card - NO CLIPPING OR TRUNCATION BUGS */}
                      <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-sm w-full min-w-0">
                        <div className="flex items-start sm:items-center gap-3 min-w-0">
                          {/* Avatar Initials Badge */}
                          <div
                            className={`flex h-11 w-11 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${activeTutor.avatarBg} text-sm sm:text-base font-black text-white shadow-md`}
                          >
                            {activeTutor.initials}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center justify-between gap-1">
                              <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                                {activeTutor.name}
                              </h4>
                              <div className="flex items-center gap-1 text-xs font-bold text-amber-500 shrink-0">
                                <FaStar className="text-yellow-400 text-xs" />
                                <span>{activeTutor.rating}</span>
                              </div>
                            </div>

                            <p className="mt-0.5 text-xs text-slate-600 font-medium leading-normal break-words">
                              {activeTutor.role} • <span className="font-semibold text-slate-700">{activeTutor.credentials}</span>
                            </p>

                            <div className="mt-1 flex items-center gap-1.5 text-[10px] text-slate-400">
                              <BsCheckCircleFill className="text-emerald-500 shrink-0" />
                              <span>Verified Faculty • {activeTutor.reviews}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 rounded-xl bg-slate-50 p-2.5 text-xs text-slate-700 leading-relaxed">
                          <span className="font-semibold text-slate-900">
                            Speciality:
                          </span>{" "}
                          {activeTutor.focus}
                        </div>
                      </div>

                      {/* Matching Guarantee Strip - WRAPS GRACEFULLY TO NEVER OVERFLOW */}
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-2.5 sm:p-3 text-xs text-emerald-900 flex flex-wrap items-center justify-between gap-2 w-full min-w-0">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <FaShieldAlt className="text-emerald-600 shrink-0 text-xs sm:text-sm" />
                          <span className="font-semibold text-[11px] sm:text-xs leading-tight">
                            Free Trial &amp; Tutor Replacement Guarantee
                          </span>
                        </div>
                        <span className="font-bold text-[10px] sm:text-[11px] bg-emerald-200/80 px-2 py-0.5 rounded-full shrink-0">
                          100% Safe
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* ===================================== */}
                  {/* PREVIEW C: HOME TUITION EXCELLENCE    */}
                  {/* ===================================== */}
                  {activePath === "home-tuition" && (
                    <motion.div
                      key="home-tuition-preview"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col w-full min-w-0 justify-between gap-4"
                    >
                      {/* Grade Selector Tabs */}
                      <div className="w-full min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            Academic Level (Class 1–12)
                          </span>
                          <span className="text-[10px] font-bold text-yellow-800 bg-yellow-100 px-2 py-0.5 rounded shrink-0">
                            CBSE • ICSE
                          </span>
                        </div>

                        <div className="grid grid-cols-4 gap-1.5 w-full">
                          {ACADEMIC_GRADES.map((g, i) => (
                            <TrackedButton
                              key={g.id}
                              label={`Grade Filter: ${g.label}`}
                              category="Hero Home Tuition Preview"
                              onClick={() => setGradeIndex(i)}
                              className={`rounded-xl py-2 px-1 text-center text-[11px] sm:text-xs font-bold transition-all truncate ${
                                gradeIndex === i
                                  ? "bg-yellow-400 text-slate-950 shadow-sm"
                                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                              }`}
                            >
                              {g.label}
                            </TrackedButton>
                          ))}
                        </div>
                      </div>

                      {/* Active Grade Content Card */}
                      <div className="rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-4 shadow-sm w-full min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                            {activeGrade.focus}
                          </h4>
                          <span className="text-[11px] font-semibold text-slate-500 shrink-0">
                            {activeGrade.label}
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                          {activeGrade.description}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {activeGrade.subjects.map((s, idx) => (
                            <span
                              key={idx}
                              className="rounded-lg bg-yellow-50 border border-yellow-200/80 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-yellow-900"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tricity Doorstep Coverage Badge */}
                      <div className="rounded-xl border border-slate-800 bg-slate-900 px-3.5 sm:px-4 py-2.5 sm:py-3 text-white text-xs flex flex-wrap items-center justify-between gap-2 w-full min-w-0">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-slate-950 font-bold text-xs">
                            📍
                          </span>
                          <div className="min-w-0">
                            <p className="font-semibold text-xs text-white leading-tight">
                              Doorstep Tricity Coverage
                            </p>
                            <p className="text-[10px] text-slate-400 leading-tight truncate">
                              Chandigarh • Mohali • Panchkula • Zirakpur
                            </p>
                          </div>
                        </div>
                        <span className="text-yellow-400 text-[11px] font-bold bg-yellow-400/10 border border-yellow-400/30 px-2 py-0.5 rounded-full shrink-0">
                          Verified Visits
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Console Floating Status Corner Pill */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-1 text-xs text-slate-500 font-medium w-full">
                <span className="flex items-center gap-1.5">
                  <FaCalendarCheck className="text-yellow-600 shrink-0" />
                  <span>Free Trial Class Before Enrolling</span>
                </span>
                <span className="text-slate-900 font-bold shrink-0">Zero Risk</span>
              </div>
            </div>

            {/* Subtle Floating Context Pill */}
            <div className="hidden sm:flex absolute -bottom-4 right-2 sm:right-0 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3.5 sm:px-4 py-2 sm:py-2.5 shadow-xl">
              <span className="text-base sm:text-lg">{pathway.floatingBadge.icon}</span>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">
                  {pathway.floatingBadge.title}
                </p>
                <p className="text-[10px] text-slate-500 leading-tight">
                  {pathway.floatingBadge.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}