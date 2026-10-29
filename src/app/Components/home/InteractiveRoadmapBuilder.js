"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaCheckCircle,
  FaArrowRight,
  FaWhatsapp,
  FaClock,
  FaShieldAlt,
  FaBolt,
  FaUserTie,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import TrackedLink from "../tracking/TrackedLink";

const TRACKS = [
  {
    id: "french",
    label: "French Language",
    flag: "🇫🇷",
    badge: "Flagship Program",
    targetAudience: "DELF A1–B2, TEF Canada PR & School French",
    weeklyHours: "3–4 Hours / Week",
    facultyType: "DELF C1/C2 & NCLC Certified Faculty",
    milestones: [
      {
        week: "Phase 1: Week 1–2",
        title: "Diagnostic & Phonetics Foundation",
        desc: "Personal assessment, pronunciation mechanics, everyday essentials & custom study roadmap.",
      },
      {
        week: "Phase 2: Week 3–6",
        title: "Sentence Architecture & Grammar",
        desc: "Core verb tenses (Passé Composé, Imparfait), vocabulary themes & daily conversation drills.",
      },
      {
        week: "Phase 3: Week 7–10",
        title: "Spontaneous Fluency & Listening",
        desc: "Live roleplays, audio comprehension workouts, and natural speaking flow without hesitation.",
      },
      {
        week: "Phase 4: Week 11+",
        title: "Official Exam Simulation & Mastery",
        desc: "Strict DELF/TEF timed mock exams, oral production evaluation, and certified readiness.",
      },
    ],
    matchingCriteria: [
      "Native-level or DELF/DALF certified instructor",
      "Specialized in immigration (TEF Canada) or academic exams",
      "Pedagogical focus on spoken confidence from lesson one",
    ],
  },
  {
    id: "english",
    label: "Spoken English & IELTS",
    flag: "🇬🇧",
    badge: "Career & Confidence",
    targetAudience: "Conversational Fluency, Accent Neutralization & IELTS Band 7.5+",
    weeklyHours: "3 Hours / Week",
    facultyType: "TESOL / IELTS 8.5+ Certified Mentors",
    milestones: [
      {
        week: "Phase 1: Week 1–2",
        title: "Speech Audit & Hesitation Eradication",
        desc: "Identify pronunciation bottlenecks, grammar traps, and mental translation habits.",
      },
      {
        week: "Phase 2: Week 3–6",
        title: "Vocabulary Expansion & Fluidity",
        desc: "Idiomatic expressions, workplace communication, and live extempore discussion sessions.",
      },
      {
        week: "Phase 3: Week 7–10",
        title: "Debating, Interviews & Nuance",
        desc: "Structured presentations, group discussions, and persuasive corporate speaking drills.",
      },
      {
        week: "Phase 4: Week 11+",
        title: "Exam Readiness or Career Mastery",
        desc: "Rigorous IELTS 4-module test drills or professional communication graduation.",
      },
    ],
    matchingCriteria: [
      "Certified English communication trainer",
      "Experience with school students & corporate professionals",
      "Accent refinement and hesitation-free speaking methods",
    ],
  },
  {
    id: "academics",
    label: "CBSE & ICSE Tuition",
    flag: "📚",
    badge: "Grades 1 to 12",
    targetAudience: "Class 1–12 Maths, Science, Social Sciences & Board Preparation",
    weeklyHours: "4–5 Hours / Week",
    facultyType: "Subject-Matter Specialist & Board Examiners",
    milestones: [
      {
        week: "Phase 1: Week 1–2",
        title: "Concept Diagnostic & Gap Analysis",
        desc: "Pinpoint weak conceptual foundations and map chapter-by-chapter board syllabus alignment.",
      },
      {
        week: "Phase 2: Week 3–6",
        title: "In-Depth Topic Mastery & Problem Solving",
        desc: "Step-by-step numerical solving, diagrammatic clarity, and weekly milestone quizzes.",
      },
      {
        week: "Phase 3: Week 7–10",
        title: "NCERT & Exemplar Drills",
        desc: "High-weightage questions, past 10-year question papers, and speed-writing practice.",
      },
      {
        week: "Phase 4: Week 11+",
        title: "Full-Length Board Mock Exams",
        desc: "Strict timed test papers, answer sheet marking analysis, and final score optimization.",
      },
    ],
    matchingCriteria: [
      "Subject-specialist postgraduates (M.Sc / M.A / B.Tech)",
      "Deep familiarity with CBSE & ICSE marking rubrics",
      "Regular homework monitoring & weekly parent WhatsApp logs",
    ],
  },
  {
    id: "german",
    label: "German & Foreign Langs",
    flag: "🇩🇪",
    badge: "Global Education",
    targetAudience: "Goethe-Zertifikat A1–B1, Spanish (DELE) & Italian (CILS)",
    weeklyHours: "3–4 Hours / Week",
    facultyType: "Goethe-Institut Certified Linguists",
    milestones: [
      {
        week: "Phase 1: Week 1–2",
        title: "Phonetics & Essential Vocabulary",
        desc: "Articles (der, die, das), basic sentence structures, everyday greetings, and numbers.",
      },
      {
        week: "Phase 2: Week 3–6",
        title: "Grammar Core & Modal Verbs",
        desc: "Nominative, Accusative cases, modal verbs, and structured sentence order rules.",
      },
      {
        week: "Phase 3: Week 7–10",
        title: "Speaking Drills & Daily Life Scenarios",
        desc: "Shopping, travel, restaurant roleplays, and listening comprehension audio exercises.",
      },
      {
        week: "Phase 4: Week 11+",
        title: "Goethe Exam Simulations",
        desc: "Lesen, Hören, Schreiben, Sprechen full 4-module simulated testing and certification prep.",
      },
    ],
    matchingCriteria: [
      "Goethe B2/C1 certified instructor",
      "Experience guiding students for German university admissions",
      "Interactive conversational approach with cultural context",
    ],
  },
];

const FORMAT_OPTIONS = [
  {
    id: "online",
    title: "1-on-1 Live Online",
    icon: "💻",
    desc: "HD interactive video & digital whiteboard",
    coverage: "Pan-India & Global",
  },
  {
    id: "home",
    title: "Doorstep Home Tutor",
    icon: "🏠",
    desc: "Personal tutor visits your residence",
    coverage: "Tricity: CHD, Mohali, Panchkula",
  },
];

const TIMELINE_OPTIONS = [
  {
    id: "fast",
    label: "8-Week Fast-Track",
    badge: "Intensive",
    desc: "Accelerated bootcamp with 4+ classes/week.",
  },
  {
    id: "mastery",
    label: "16-Week Deep-Dive",
    badge: "Most Popular",
    desc: "Balanced pace for thorough mastery.",
  },
  {
    id: "annual",
    label: "Full Academic Year",
    badge: "Continuous",
    desc: "Year-long regular exam guidance.",
  },
];

export default function InteractiveRoadmapBuilder() {
  const [selectedTrackId, setSelectedTrackId] = useState("french");
  const [selectedFormatId, setSelectedFormatId] = useState("online");
  const [selectedTimelineId, setSelectedTimelineId] = useState("mastery");

  const activeTrack = TRACKS.find((t) => t.id === selectedTrackId) || TRACKS[0];
  const activeFormat = FORMAT_OPTIONS.find((f) => f.id === selectedFormatId) || FORMAT_OPTIONS[0];
  const activeTimeline = TIMELINE_OPTIONS.find((t) => t.id === selectedTimelineId) || TIMELINE_OPTIONS[1];

  const whatsappMessage = encodeURIComponent(
    `Hello! I generated a Learning Blueprint on Inquisitive Mind Academy:
- Track: ${activeTrack.label} (${activeTrack.targetAudience})
- Mode: ${activeFormat.title} (${activeFormat.coverage})
- Timeline: ${activeTimeline.label}
Please connect me with a certified tutor for a free trial class.`
  );

  return (
    <section
      id="learning-blueprint"
      aria-label="Interactive 1-on-1 Learning Blueprint & Match Engine"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-amber-50/20 to-white py-14 sm:py-20 lg:py-24 text-slate-900"
    >
      {/* Background Architectural Patterns */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_15%,rgba(250,204,21,0.14),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/80 bg-yellow-100/70 px-4 py-1.5 text-[11px] sm:text-xs font-bold tracking-[0.22em] text-yellow-950 uppercase shadow-xs">
            <BsStars className="text-yellow-600 animate-spin-slow" />
            <span>CUSTOM LEARNING BLUEPRINT</span>
          </div>

          <h2 className="mt-3.5 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            We Don't Just Assign Tutors.{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent block sm:inline">
              We Engineer Your Success.
            </span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto px-2">
            Select your goal, mode, and target pace. Our matching engine pairs your exact syllabus needs with handpicked certified faculty.
          </p>
        </header>

        {/* ========================================================= */}
        {/* INTERACTIVE CONTROLS CONSOLE (MOBILE-FIRST)               */}
        {/* ========================================================= */}
        <div className="mt-8 sm:mt-12 rounded-3xl border border-yellow-200/90 bg-white p-4 sm:p-7 lg:p-8 shadow-xl shadow-yellow-500/10">
          {/* STEP 1: SELECT SUBJECT / TRACK */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-slate-950 font-black text-xs">
                  1
                </span>
                <span>Select Your Subject Track</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-yellow-800 bg-yellow-100 px-2.5 py-0.5 rounded-full">
                {activeTrack.badge}
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5">
              {TRACKS.map((track) => {
                const isSelected = track.id === selectedTrackId;

                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => setSelectedTrackId(track.id)}
                    className={`relative p-3 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[85px] sm:min-h-[105px] active:scale-95 ${
                      isSelected
                        ? "border-2 border-yellow-400 bg-gradient-to-b from-yellow-50 via-amber-50/40 to-white shadow-md shadow-yellow-400/15"
                        : "border-slate-200/90 bg-slate-50/50 hover:bg-yellow-50/50 hover:border-yellow-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl sm:text-2xl">{track.flag}</span>
                      {isSelected && (
                        <span className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-yellow-400 text-slate-950 text-[9px] sm:text-[10px] font-black">
                          ✓
                        </span>
                      )}
                    </div>
                    <div className="mt-1.5 sm:mt-2">
                      <div className="text-[11px] sm:text-sm font-bold text-slate-900 leading-tight">
                        {track.label}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-slate-500 truncate mt-0.5">
                        {track.targetAudience.split(",")[0]}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2 & 3: FORMAT & TIMELINE */}
          <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* FORMAT SELECTOR */}
            <div>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-2.5 sm:mb-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-slate-950 font-black text-xs">
                  2
                </span>
                <span>Select Delivery Mode</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {FORMAT_OPTIONS.map((format) => {
                  const isSelected = format.id === selectedFormatId;

                  return (
                    <button
                      key={format.id}
                      type="button"
                      onClick={() => setSelectedFormatId(format.id)}
                      className={`p-3 sm:p-3.5 rounded-2xl border text-left transition-all cursor-pointer min-h-[65px] sm:min-h-[75px] active:scale-95 ${
                        isSelected
                          ? "border-2 border-yellow-400 bg-yellow-50/70 shadow-xs font-bold"
                          : "border-slate-200 bg-white hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base sm:text-lg">{format.icon}</span>
                        <div className="text-xs font-bold text-slate-900">{format.title}</div>
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1 leading-tight">{format.coverage}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TIMELINE SELECTOR */}
            <div>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-2.5 sm:mb-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-slate-950 font-black text-xs">
                  3
                </span>
                <span>Select Target Pace</span>
              </span>

              <div className="grid grid-cols-3 gap-2">
                {TIMELINE_OPTIONS.map((timeline) => {
                  const isSelected = timeline.id === selectedTimelineId;

                  return (
                    <button
                      key={timeline.id}
                      type="button"
                      onClick={() => setSelectedTimelineId(timeline.id)}
                      className={`p-2.5 sm:p-3 rounded-2xl border text-left transition-all cursor-pointer active:scale-95 ${
                        isSelected
                          ? "border-2 border-yellow-400 bg-yellow-50/70 shadow-xs"
                          : "border-slate-200 bg-white hover:bg-slate-50"
                      }`}
                    >
                      <div className="text-[9px] sm:text-[10px] font-extrabold uppercase text-yellow-800">
                        {timeline.badge}
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-slate-900 mt-0.5 leading-tight">
                        {timeline.label.split(" ")[0]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DYNAMIC BLUEPRINT OUTPUT PREVIEW (MOBILE-FIRST)           */}
        {/* ========================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedTrackId}-${selectedFormatId}-${selectedTimelineId}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="mt-6 sm:mt-8 rounded-3xl border-2 border-yellow-300 bg-gradient-to-br from-yellow-50/60 via-white to-amber-50/40 p-4 sm:p-7 lg:p-9 shadow-lg"
          >
            {/* Blueprint Overview Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-yellow-200/80">
              <div>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-yellow-900 bg-yellow-200/80 px-2.5 sm:px-3 py-1 rounded-full">
                  <span>{activeTrack.flag}</span>
                  <span>{activeTrack.label} Blueprint</span>
                  <span>•</span>
                  <span>{activeFormat.title}</span>
                </div>

                <h3 className="mt-2 text-lg sm:text-2xl font-black text-slate-950 leading-snug">
                  Target: {activeTrack.targetAudience}
                </h3>
              </div>

              {/* Blueprint Badges */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 border border-slate-200 shadow-2xs">
                  <FaClock className="text-yellow-500" />
                  <span>{activeTrack.weeklyHours}</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 border border-slate-200 shadow-2xs">
                  <FaUserTie className="text-yellow-600" />
                  <span>{activeTrack.facultyType}</span>
                </div>
              </div>
            </div>

            {/* 4-Phase Roadmap Steps */}
            <div className="mt-6 sm:mt-8">
              <h4 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-3 sm:mb-4 flex items-center gap-2">
                <FaBolt className="text-yellow-500" />
                <span>Your Step-by-Step Curriculum Roadmap</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {activeTrack.milestones.map((ms, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-2xs hover:shadow-md hover:border-yellow-300 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-yellow-900 bg-yellow-100 px-2 py-0.5 rounded-md">
                        {ms.week}
                      </span>
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold">
                        {idx + 1}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm font-bold text-slate-950 leading-snug">
                      {ms.title}
                    </div>

                    <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                      {ms.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How Your Tutor is Matched */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-yellow-200/80 grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3">
              {activeTrack.matchingCriteria.map((crit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 rounded-xl bg-white/80 p-3 border border-yellow-200/60 text-xs text-slate-700"
                >
                  <FaCheckCircle className="text-yellow-500 text-sm shrink-0 mt-0.5" />
                  <span className="font-medium leading-snug">{crit}</span>
                </div>
              ))}
            </div>

            {/* Mobile-First Interactive Call to Action Bar */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-yellow-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600 text-center sm:text-left">
                <FaShieldAlt className="text-yellow-600 text-sm shrink-0" />
                <span>
                  <strong>100% Free Trial Class</strong> • Free Rematch Guarantee • No Advance Lock-in
                </span>
              </div>

              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
                <TrackedLink
                  href={`/find-tutor?track=${activeTrack.id}&mode=${activeFormat.id}`}
                  label={`Blueprint CTA: ${activeTrack.label}`}
                  category="Blueprint Builder"
                  className="w-full sm:w-auto inline-flex min-h-[48px] sm:min-h-[50px] items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-sm font-extrabold text-slate-950 shadow-md shadow-yellow-400/25 hover:bg-yellow-500 transition active:scale-95 cursor-pointer"
                >
                  <span>Book Free Demo For This Track</span>
                  <FaArrowRight className="text-xs" />
                </TrackedLink>

                <a
                  href={`https://wa.me/919855293752?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex min-h-[48px] sm:min-h-[50px] items-center justify-center gap-2 rounded-full border border-emerald-500 bg-emerald-50 px-5 py-3 text-xs sm:text-sm font-bold text-emerald-800 hover:bg-emerald-100 transition active:scale-95"
                >
                  <FaWhatsapp className="text-emerald-600 text-base" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
