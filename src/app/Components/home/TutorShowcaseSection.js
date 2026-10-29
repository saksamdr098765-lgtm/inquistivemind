"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowRight,
  FaAward,
} from "react-icons/fa";
import TrackedLink from "../tracking/TrackedLink";
import HOME_CONTENT from "@/app/data/homeContent";

export default function TutorShowcaseSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const scrollContainerRef = useRef(null);

  const showcase = HOME_CONTENT.tutorShowcase;

  const filteredTutors =
    selectedCategory === "all"
      ? showcase.tutors
      : showcase.tutors.filter((t) => t.category === selectedCategory);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="tutors"
      aria-label="Verified Educators Showcase"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-24 text-slate-900"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {/* Section Header: Headline Max 6 Words, Caption Max 1 Line */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/80 bg-yellow-100/70 px-4 py-1 text-[11px] font-bold tracking-[0.25em] text-yellow-950 uppercase shadow-xs">
              <span>{showcase.eyebrow}</span>
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl leading-tight">
              {showcase.title}
            </h2>

            <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal truncate">
              {showcase.subtitle}
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs hover:border-yellow-400 hover:bg-yellow-50 hover:text-slate-900 transition cursor-pointer"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs hover:border-yellow-400 hover:bg-yellow-50 hover:text-slate-900 transition cursor-pointer"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {showcase.filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setSelectedCategory(filter.id)}
              className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === filter.id
                  ? "bg-yellow-400 text-slate-950 shadow-xs border border-yellow-500/30"
                  : "bg-slate-50 text-slate-600 hover:bg-yellow-50 hover:text-slate-900 border border-slate-200/60"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Horizontally Scrolling Card Carousel */}
        <div
          ref={scrollContainerRef}
          className="mt-8 flex gap-6 overflow-x-auto pb-6 pt-2 custom-scrollbar snap-x snap-mandatory"
        >
          <AnimatePresence mode="popLayout">
            {filteredTutors.map((tutor) => (
              <motion.div
                key={tutor.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group w-[280px] sm:w-[320px] shrink-0 snap-start rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-xl hover:border-yellow-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Real Photo & Verification Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="relative">
                      <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl overflow-hidden border-2 border-slate-100 shadow-md group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={tutor.avatarImage || "/founder.webp"}
                          alt={tutor.name}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <span
                        className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500"
                        title="Active & Ready to Teach"
                      />
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100/90 px-2.5 py-0.5 text-[10px] font-bold text-yellow-900">
                        <FaAward className="text-yellow-600 text-[10px]" />
                        {tutor.badge}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-bold text-amber-500 mt-1">
                        <FaStar className="text-yellow-400 text-xs" />
                        <span>{tutor.rating.toFixed(1)}</span>
                        <span className="text-[11px] font-medium text-slate-400">
                          ({tutor.reviewsCount})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="mt-4">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-yellow-700 transition-colors">
                      {tutor.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">
                      {tutor.role} • <span className="text-slate-500">{tutor.credentials}</span>
                    </p>
                  </div>

                  {/* Location Info */}
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-500">
                    <FaMapMarkerAlt className="text-yellow-500 text-xs shrink-0" />
                    <span className="truncate">{tutor.location}</span>
                  </div>

                  {/* Subject Chips */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tutor.subjects.map((sub, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-slate-50 border border-slate-200/80 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer: Price & View CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Rate</span>
                    <span className="text-sm sm:text-base font-black text-slate-950">
                      {tutor.hourlyRate}
                    </span>
                  </div>

                  <TrackedLink
                    href={`/find-tutor?subject=${tutor.subjects[0].toLowerCase()}`}
                    label={`Showcase Book Demo: ${tutor.name}`}
                    category="Tutor Showcase"
                    className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-yellow-500 shadow-xs"
                  >
                    <span>Request Trial</span>
                    <FaArrowRight className="text-[10px]" />
                  </TrackedLink>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Directory Link */}
        <div className="mt-6 text-center">
          <TrackedLink
            href="/tutors"
            label="Showcase View All Tutors"
            category="Tutor Showcase"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 hover:text-yellow-600 transition"
          >
            <span>Explore all 450+ verified guides</span>
            <FaArrowRight className="text-xs" />
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
