"use client";

import { motion } from "framer-motion";
import {
  Search,
  X,
  SlidersHorizontal,
  Layers,
  LayoutGrid,
  RotateCcw,
} from "lucide-react";
import { SUBJECT_THEMES } from "@/data/tutors";

const SUBJECTS = [
  "All",
  "French",
  "German",
  "Mathematics",
  "Science",
  "English",
  "Coding",
];

const CLASSES = ["All", "Class 1-5", "Class 6-8", "Class 9-10", "Class 11-12", "Adults"];

const MODES = [
  { label: "All Modes", value: "All" },
  { label: "Online Classes", value: "Online" },
  { label: "Home Tutoring", value: "Home" },
  { label: "Hybrid", value: "Both" },
];

const PRICE_RANGES = [
  { label: "Any Fee", value: "All" },
  { label: "< ₹600/hr", value: "under_600" },
  { label: "₹600 - ₹1000", value: "600_1000" },
  { label: "> ₹1000/hr", value: "above_1000" },
];

export default function FilterBar({
  search,
  setSearch,
  subject,
  setSubject,
  classLevel,
  setClassLevel,
  mode,
  setMode,
  priceRange,
  setPriceRange,
  availableTodayOnly,
  setAvailableTodayOnly,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
  activeFiltersCount,
  resetFilters,
  totalResults = 0,
}) {
  return (
    <div className="sticky top-16 sm:top-[72px] z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2 sm:py-2.5 px-3 sm:px-6 space-y-2 transition-all shadow-xs">
      {/* Top Controls: Search + Sort + View Mode Switcher */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 max-w-7xl mx-auto">
        {/* Compact Mobile-First Search Input */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by tutor name, subject (French, Math), or city..."
            className="w-full pl-9 pr-8 py-2 rounded-2xl bg-slate-50 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 border border-slate-200 focus:bg-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all min-h-[40px]"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full cursor-pointer"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Action Controls: Sort + View Mode Switcher */}
        <div className="flex items-center gap-2 justify-between sm:justify-end shrink-0">
          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none pl-3 pr-7 py-1.5 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-yellow-400 shadow-xs cursor-pointer min-h-[38px] sm:min-h-[40px]"
              aria-label="Sort tutors"
            >
              <option value="recommended">Recommended</option>
              <option value="experience">Experience: High to Low</option>
              <option value="price_low">Fee: Low to High</option>
              <option value="price_high">Fee: High to Low</option>
            </select>
            <SlidersHorizontal className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
          </div>

          {/* View Mode Switcher: Swipe (Deck) vs Grid (List) */}
          <div
            className="flex items-center p-0.5 rounded-full bg-slate-100 border border-slate-200 shrink-0 min-h-[38px] sm:min-h-[40px]"
            role="tablist"
            aria-label="View Mode"
          >
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === "swipe"}
              onClick={() => setViewMode("swipe")}
              className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer select-none ${
                viewMode === "swipe"
                  ? "bg-yellow-400 text-slate-950 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Swipe</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={viewMode === "list"}
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer select-none ${
                viewMode === "list"
                  ? "bg-yellow-400 text-slate-950 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span>Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Filter Chips (Snap, Min 44px touch targets) */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-0.5 max-w-7xl mx-auto">
        {/* Reset button when filters active */}
        {activeFiltersCount > 0 && (
          <button
            onClick={resetFilters}
            className="snap-start shrink-0 min-h-[36px] sm:min-h-[38px] px-2.5 sm:px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold flex items-center gap-1 hover:bg-rose-100 transition-all cursor-pointer"
            title="Reset all filters"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Reset ({activeFiltersCount})</span>
          </button>
        )}

        {/* Subject Chips */}
        {SUBJECTS.map((sub) => {
          const isActive = subject === sub;
          const theme = sub !== "All" ? SUBJECT_THEMES[sub] : null;

          return (
            <motion.button
              key={sub}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSubject(sub)}
              className={`snap-start shrink-0 min-h-[36px] sm:min-h-[38px] px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer select-none flex items-center gap-1 border ${
                isActive
                  ? "bg-yellow-400 text-slate-950 border-yellow-400 shadow-xs ring-2 ring-yellow-400/30 font-bold"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-yellow-50 hover:border-yellow-300"
              }`}
            >
              {theme?.emoji && <span className="text-xs">{theme.emoji}</span>}
              <span>{sub}</span>
            </motion.button>
          );
        })}

        {/* Separator */}
        <div className="h-5 w-px bg-slate-200 shrink-0 mx-0.5" />

        {/* Mode Chips */}
        {MODES.map((m) => {
          const isActive = mode === m.value;
          return (
            <button
              key={m.value}
              onClick={() => setMode(m.value)}
              className={`snap-start shrink-0 min-h-[36px] sm:min-h-[38px] px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                isActive
                  ? "bg-slate-900 text-white border-slate-900 shadow-xs font-bold"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {m.label}
            </button>
          );
        })}

        {/* Price Range Chips */}
        {PRICE_RANGES.map((pr) => {
          const isActive = priceRange === pr.value;
          return (
            <button
              key={pr.value}
              onClick={() => setPriceRange(pr.value)}
              className={`snap-start shrink-0 min-h-[36px] sm:min-h-[38px] px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                isActive
                  ? "bg-yellow-400 text-slate-950 border-yellow-400 shadow-xs font-bold"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {pr.label}
            </button>
          );
        })}
      </div>

      {/* Results Count Line */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium max-w-7xl mx-auto px-1">
        <span>
          Showing <strong className="text-slate-900">{totalResults}</strong> educators
        </span>
        <span className="text-slate-600 font-medium">
          1-on-1 Online & Home Classes
        </span>
      </div>
    </div>
  );
}
