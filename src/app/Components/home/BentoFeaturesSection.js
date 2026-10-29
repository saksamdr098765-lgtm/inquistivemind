"use client";

import { motion } from "framer-motion";
import {
  FaMagic,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaChartBar,
  FaGraduationCap,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";
import HOME_CONTENT from "@/app/data/homeContent";

const ICON_COMPONENTS = {
  FaMagic,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaChartBar,
  FaGraduationCap,
  FaHeadset,
};

function PillarVisual({ cardId }) {
  switch (cardId) {
    case "smart-matching":
      return (
        <div className="mt-3.5 sm:mt-4 p-3 sm:p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70">
          {/* Top Status Bar */}
          <div className="flex items-center justify-between mb-2.5">
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
              <span>Matching Engine</span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-yellow-900 bg-yellow-200/90 px-2 py-0.5 rounded-md">
              ⚡ 24h Turnaround
            </span>
          </div>

          {/* Fully Responsive Match Cards (1 col mobile, 2 col tablet+) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* Step 1: Student Requirement */}
            <div className="flex items-center gap-2.5 rounded-xl bg-white p-2.5 border border-slate-200/80 shadow-2xs">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-yellow-800 text-xs font-bold">
                🎯
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Your Goal</div>
                <div className="text-xs font-bold text-slate-900 truncate">DELF • CBSE • Fluency</div>
              </div>
            </div>

            {/* Step 2: Faculty Pair */}
            <div className="flex items-center gap-2.5 rounded-xl bg-emerald-50/80 p-2.5 border border-emerald-200 shadow-2xs">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold">
                ✓
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[9px] text-emerald-700 font-bold uppercase tracking-wider">Faculty Pair</div>
                <div className="text-xs font-bold text-emerald-950 truncate">Screened 1-on-1 Mentor</div>
              </div>
            </div>
          </div>

          {/* Bottom Verification Tags */}
          <div className="mt-2.5 pt-2 border-t border-amber-200/60 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-600 font-medium">
            <span className="flex items-center gap-1">
              <FaCheckCircle className="text-yellow-500 text-xs shrink-0" />
              <span>Syllabus Aligned</span>
            </span>
            <span className="text-yellow-800 font-bold bg-yellow-100 px-2 py-0.5 rounded text-[10px]">
              Schedule Synced
            </span>
          </div>
        </div>
      );

    case "verified-tutors":
      return (
        <div className="mt-3.5 sm:mt-4 p-3 sm:p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200/60 space-y-1.5">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-blue-950">
            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-emerald-500 text-[10px]" />
              <span>Pedagogical Demo</span>
            </span>
            <span className="text-emerald-700 font-bold text-[10px]">Verified</span>
          </div>
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-blue-950">
            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-emerald-500 text-[10px]" />
              <span>Degree & Background</span>
            </span>
            <span className="text-emerald-700 font-bold text-[10px]">Verified</span>
          </div>
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-blue-950">
            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-emerald-500 text-[10px]" />
              <span>Curriculum Mastery</span>
            </span>
            <span className="text-emerald-700 font-bold text-[10px]">Approved</span>
          </div>
        </div>
      );

    case "flexible-format":
      return (
        <div className="mt-3.5 sm:mt-4 p-2.5 sm:p-3 rounded-2xl bg-emerald-50/60 border border-emerald-200/60 space-y-2">
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-emerald-200/70 shadow-2xs">
            <span className="text-base">💻</span>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-bold text-slate-800">1-on-1 Live Online</div>
              <div className="text-[10px] text-slate-500 leading-tight">Live Video & Screen Share</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-emerald-200/70 shadow-2xs">
            <span className="text-base">🏠</span>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-bold text-slate-800">Doorstep Home Tutor</div>
              <div className="text-[10px] text-slate-500 leading-tight">Tricity (CHD, Mohali, PKL)</div>
            </div>
          </div>
        </div>
      );

    case "milestone-tracking":
      return (
        <div className="mt-3.5 sm:mt-4 p-3 sm:p-3.5 rounded-2xl bg-purple-50/60 border border-purple-200/60">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-purple-950 mb-2">
            <span>Progress Milestones</span>
            <span className="text-purple-800 bg-purple-100/90 px-2 py-0.5 rounded-md font-semibold text-[9px] sm:text-[10px]">
              Weekly Parent Updates
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-[9px] sm:text-[10px]">
            <div className="bg-white p-1.5 sm:p-2 rounded-xl border border-purple-100 shadow-2xs">
              <div className="text-slate-400 font-medium">Diagnostic</div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-800 mt-0.5">Week 1</div>
            </div>
            <div className="bg-white p-1.5 sm:p-2 rounded-xl border border-purple-100 shadow-2xs">
              <div className="text-amber-600 font-medium">Practice</div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-800 mt-0.5">Week 4</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-1.5 sm:p-2 rounded-xl border border-yellow-300 shadow-2xs">
              <div className="text-yellow-900 font-medium">Mastery</div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-900 mt-0.5">Week 8+</div>
            </div>
          </div>
        </div>
      );

    case "curriculum-coverage":
      return (
        <div className="mt-3.5 sm:mt-4 p-2 sm:p-2.5 rounded-2xl bg-rose-50/60 border border-rose-200/60 flex flex-wrap gap-1.5">
          <span className="rounded-lg bg-white px-2 py-1 text-[10px] font-bold text-slate-800 border border-rose-100 shadow-2xs">
            🇫🇷 DELF & TEF Canada
          </span>
          <span className="rounded-lg bg-white px-2 py-1 text-[10px] font-bold text-slate-800 border border-rose-100 shadow-2xs">
            🇬🇧 Spoken English & IELTS
          </span>
          <span className="rounded-lg bg-white px-2 py-1 text-[10px] font-bold text-slate-800 border border-rose-100 shadow-2xs">
            📚 CBSE / ICSE (1-12)
          </span>
          <span className="rounded-lg bg-white px-2 py-1 text-[10px] font-bold text-slate-800 border border-rose-100 shadow-2xs">
            🇩🇪 Goethe German
          </span>
        </div>
      );

    case "concierge-support":
      return (
        <div className="mt-3.5 sm:mt-4 p-3 sm:p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 sm:h-9 sm:w-9 shrink-0 rounded-xl bg-yellow-400 text-slate-950 flex items-center justify-center font-black text-sm shadow-2xs">
              🛡️
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Zero-Risk Rematch Guarantee</div>
              <div className="text-[10px] sm:text-[11px] text-slate-600 leading-tight">
                If the teaching style doesn't fit, immediate faculty reassignment at no extra cost.
              </div>
            </div>
          </div>
          <span className="rounded-full bg-yellow-200/90 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-extrabold text-yellow-950 shrink-0 self-end sm:self-auto">
            ⚡ 24h Turnaround
          </span>
        </div>
      );

    default:
      return null;
  }
}

export default function BentoFeaturesSection() {
  const bento = HOME_CONTENT.bentoFeatures;

  return (
    <section
      id="features"
      aria-label="Platform Features & Benefits"
      className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-amber-50/30 py-14 sm:py-20 lg:py-24 text-slate-900"
    >
      {/* Background Architectural Patterns */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,rgba(250,204,21,0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/80 bg-yellow-100/70 px-4 py-1.5 text-[11px] sm:text-xs font-bold tracking-[0.22em] text-yellow-950 uppercase shadow-xs">
            <span>{bento.eyebrow}</span>
          </div>

          <h2 className="mt-3.5 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Designed for{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Confidence, Clarity & Results
            </span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto px-2">
            {bento.subtitle}
          </p>
        </header>

        {/* Bento Grid Architecture with Clean Vector Graphics & Icons */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {bento.cards.map((card, idx) => {
            const Icon = ICON_COMPONENTS[card.icon] || FaMagic;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.06, duration: 0.3 }}
                whileHover={{ y: -5 }}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-4.5 sm:p-7 shadow-xs hover:shadow-xl hover:border-yellow-300/90 transition-all duration-300 flex flex-col justify-between ${card.span}`}
              >
                {/* Background Subtle Gradient Glow */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Top Bar: Icon & Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700 shadow-xs group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="text-lg sm:text-xl" />
                    </div>

                    <span className="rounded-full bg-slate-100/90 px-2.5 py-1 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-slate-600 group-hover:bg-yellow-200/70 group-hover:text-yellow-900 transition-colors">
                      {card.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-4 sm:mt-5">
                    <h3 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-yellow-800 transition-colors">
                      {card.title}
                    </h3>

                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Custom Vector Visual / Indicator */}
                  <PillarVisual cardId={card.id} />
                </div>

                {/* Bottom Trust Micro-Pill */}
                <div className="relative z-10 mt-5 pt-3.5 border-t border-slate-100/90 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <FaCheckCircle className="text-yellow-500 text-xs shrink-0" />
                    <span className="text-[10px] sm:text-[11px] text-slate-500">Verified Platform Standard</span>
                  </div>

                  <span className="text-[9px] sm:text-[10px] text-yellow-700 font-bold bg-yellow-100/80 rounded px-2 py-0.5">
                    100% Quality Assured
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
