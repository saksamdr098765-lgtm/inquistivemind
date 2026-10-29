"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight, FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";
import TrackedLink from "../tracking/TrackedLink";
import HOME_CONTENT from "@/app/data/homeContent";

export default function DualCtaSplitSection() {
  const { student, tutor } = HOME_CONTENT.dualCta;

  return (
    <section
      aria-label="Student and Tutor Registration Pathways"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-amber-50/20 to-white py-14 sm:py-20 lg:py-24 text-slate-900"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
          {/* ========================================================= */}
          {/* CARD 1: FOR STUDENTS (YELLOW & WHITE)                     */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35 }}
            className="group relative overflow-hidden rounded-3xl border-2 border-yellow-300 bg-gradient-to-br from-yellow-50/80 via-white to-amber-50/40 p-5 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Background Vector Accent */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/3 opacity-15 overflow-hidden flex items-center justify-center">
              <svg className="w-44 h-44 text-yellow-400 group-hover:scale-110 transition-transform duration-700" viewBox="0 0 200 200" fill="currentColor">
                <circle cx="100" cy="100" r="80" fillOpacity="0.2" />
                <path d="M100 20 L120 75 L175 95 L120 115 L100 170 L80 115 L25 95 L80 75 Z" fillOpacity="0.4" />
              </svg>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-yellow-400/20 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 font-bold text-sm shadow-2xs">
                  <FaGraduationCap />
                </span>
                <span className="rounded-md bg-yellow-100/90 px-3 py-1 text-[11px] font-bold tracking-wider text-yellow-950 uppercase border border-yellow-200">
                  {student.badge}
                </span>
              </div>

              <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {student.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                {student.subtitle}
              </p>

              {/* Benefits Checklist */}
              <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
                {student.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <FaCheckCircle className="mt-0.5 text-yellow-500 shrink-0 text-sm" />
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Full-Width CTA */}
            <div className="relative z-10 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-yellow-200/80">
              <TrackedLink
                href={student.buttonHref}
                label="Dual CTA - Find Tutor"
                category="Dual CTA Split"
                className="w-full sm:w-auto inline-flex min-h-[48px] sm:min-h-[50px] items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-sm font-bold text-slate-950 shadow-md shadow-yellow-400/25 hover:bg-yellow-500 transition-all duration-200 active:scale-95"
              >
                <span>{student.buttonText}</span>
                <FaArrowRight className="text-xs" />
              </TrackedLink>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* CARD 2: FOR TUTORS (CLEAN WHITE WITH YELLOW ACCENTS)      */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-white p-5 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:border-yellow-400 transition-all duration-300 text-slate-900 flex flex-col justify-between"
          >
            {/* Background Vector Accent */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/3 opacity-10 overflow-hidden flex items-center justify-center">
              <svg className="w-44 h-44 text-yellow-500 group-hover:scale-110 transition-transform duration-700" viewBox="0 0 200 200" fill="currentColor">
                <rect x="30" y="30" width="140" height="140" rx="30" fillOpacity="0.15" />
                <path d="M60 100 L90 130 L145 70" stroke="currentColor" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-yellow-300/15 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 font-bold text-sm shadow-2xs">
                  <FaChalkboardTeacher />
                </span>
                <span className="rounded-md bg-yellow-50 border border-yellow-200 px-3 py-1 text-[11px] font-bold tracking-wider text-yellow-900 uppercase">
                  {tutor.badge}
                </span>
              </div>

              <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {tutor.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                {tutor.subtitle}
              </p>

              {/* Benefits Checklist */}
              <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
                {tutor.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <FaCheckCircle className="mt-0.5 text-yellow-500 shrink-0 text-sm" />
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Full-Width CTA */}
            <div className="relative z-10 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100">
              <TrackedLink
                href={tutor.buttonHref}
                label="Dual CTA - Apply Tutor"
                category="Dual CTA Split"
                className="w-full sm:w-auto inline-flex min-h-[48px] sm:min-h-[50px] items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-yellow-400 hover:text-slate-950 transition-all duration-200 active:scale-95"
              >
                <span>{tutor.buttonText}</span>
                <FaArrowRight className="text-xs" />
              </TrackedLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
