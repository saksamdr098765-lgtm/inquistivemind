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

export default function BentoFeaturesSection() {
  const bento = HOME_CONTENT.bentoFeatures;

  return (
    <section
      id="features"
      aria-label="Platform Features & Benefits"
      className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-amber-50/30 py-16 sm:py-24 lg:py-28 text-slate-900"
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

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl leading-tight">
            Designed for{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Confidence, Clarity & Results
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            {bento.subtitle}
          </p>
        </header>

        {/* Bento Grid Architecture with Images & Icons */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {bento.cards.map((card, idx) => {
            const Icon = ICON_COMPONENTS[card.icon] || FaMagic;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.08, duration: 0.35 }}
                whileHover={{ y: -5 }}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-yellow-300/90 transition-all duration-300 flex flex-col justify-between ${card.span}`}
              >
                {/* Background Subtle Gradient Glow */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Top Bar: Icon & Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700 shadow-xs group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="text-xl" />
                    </div>

                    <span className="rounded-full bg-slate-100/90 px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-slate-600 group-hover:bg-yellow-200/70 group-hover:text-yellow-900 transition-colors">
                      {card.tag}
                    </span>
                  </div>

                  {/* Title & Description with Side Image (for large cards) */}
                  <div className="mt-5 flex flex-col sm:flex-row items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-yellow-800 transition-colors">
                        {card.title}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Integrated Photo Visual */}
                    {card.image && (
                      <div className="relative h-20 w-24 sm:h-24 sm:w-28 shrink-0 rounded-2xl overflow-hidden border border-slate-200 shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Trust Micro-Pill */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-100/90 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <FaCheckCircle className="text-yellow-500 text-xs shrink-0" />
                    <span className="text-[11px] text-slate-500">Verified Platform Standard</span>
                  </div>

                  <span className="text-[10px] text-yellow-700 font-bold bg-yellow-100/80 rounded px-2 py-0.5">
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
