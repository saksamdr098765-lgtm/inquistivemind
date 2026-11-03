"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, SlidersHorizontal, RotateCcw } from "lucide-react";
import TutorCard from "./TutorCard";

export default function TutorList({
  tutors = [],
  shortlist = [],
  onToggleShortlist,
  onOpenDetails,
  onBookDemo,
  onResetFilters,
}) {
  if (tutors.length === 0) {
    return (
      <div className="w-full max-w-md mx-auto py-16 px-4 text-center space-y-4">
        <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-3xl bg-yellow-100 border border-yellow-200 text-3xl shadow-sm">
          🔍
        </div>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          No matching tutors found
        </h3>
        <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-sm mx-auto">
          We couldn't find any educators matching all your current filters. Try relaxing subjects, teaching modes, or clearing your search.
        </p>

        {onResetFilters && (
          <div className="pt-2">
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-yellow-400 hover:bg-yellow-500 text-slate-950 text-xs font-bold border border-yellow-300 shadow-sm transition cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-7 justify-items-center"
      >
        <AnimatePresence mode="popLayout">
          {tutors.map((tutor, index) => (
            <motion.div
              key={tutor.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.35,
                delay: Math.min(index * 0.05, 0.25),
                ease: "easeOut",
              }}
              className="w-full flex justify-center"
            >
              <TutorCard
                tutor={tutor}
                isShortlisted={shortlist.includes(tutor.id)}
                onToggleShortlist={onToggleShortlist}
                onOpenDetails={onOpenDetails}
                onBookDemo={onBookDemo}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
