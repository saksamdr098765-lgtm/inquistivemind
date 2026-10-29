"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaBolt } from "react-icons/fa";
import TrackedLink from "../tracking/TrackedLink";
import HOME_CONTENT from "@/app/data/homeContent";

export default function FinalCtaBanner() {
  const finalCta = HOME_CONTENT.finalCta;

  return (
    <section
      aria-label="Final Registration Banner"
      className="relative w-full overflow-hidden bg-gradient-to-b from-amber-50/80 via-yellow-100/30 to-white py-20 sm:py-28 text-slate-900 border-t border-yellow-200/80"
    >
      {/* Background Architectural Mesh & Warm Golden Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.25),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Mind Map Connection Motif Badge */}
        <div className="inline-flex items-center gap-3 rounded-full border border-yellow-300 bg-white px-4 py-1.5 text-xs text-yellow-900 shadow-sm">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-slate-950 font-black text-[10px]">
            ?
          </span>
          <span className="h-0.5 w-6 bg-yellow-400" />
          <FaBolt className="text-yellow-600 text-xs" />
          <span className="h-0.5 w-6 bg-yellow-400" />
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-slate-950 font-black text-[10px]">
            💡
          </span>
        </div>

        {/* Headline: Max 6 words */}
        <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl leading-[1.1]">
          Where Curiosity{" "}
          <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
            Meets Its Guide.
          </span>
        </h2>

        {/* Caption: Max 1 line */}
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl mx-auto truncate font-normal">
          {finalCta.subtitle}
        </p>

        {/* Dual Primary Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <TrackedLink
            href={finalCta.studentButton.href}
            label="Final CTA - Student Find Tutor"
            category="Final CTA Banner"
            className="w-full sm:w-auto inline-flex min-h-[50px] sm:min-h-[54px] items-center justify-center gap-2.5 rounded-full bg-yellow-400 px-8 py-3.5 text-sm sm:text-base font-extrabold text-slate-950 shadow-xl shadow-yellow-400/30 hover:bg-yellow-500 hover:scale-[1.03] transition-all"
          >
            <span>{finalCta.studentButton.text}</span>
            <FaArrowRight className="text-xs" />
          </TrackedLink>

          <TrackedLink
            href={finalCta.tutorButton.href}
            label="Final CTA - Tutor Apply"
            category="Final CTA Banner"
            className="w-full sm:w-auto inline-flex min-h-[50px] sm:min-h-[54px] items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-7 py-3.5 text-sm sm:text-base font-bold text-slate-800 shadow-xs hover:border-yellow-400 hover:bg-yellow-50 transition-all"
          >
            <span>{finalCta.tutorButton.text}</span>
            <FaArrowRight className="text-xs text-yellow-600" />
          </TrackedLink>
        </div>

        {/* Trust Guarantee Tags */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-600 font-medium">
          {finalCta.guaranteeTags.map((tag, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <FaCheckCircle className="text-yellow-500 text-xs shrink-0" />
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
