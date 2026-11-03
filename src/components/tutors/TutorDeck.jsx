"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import {
  Heart,
  X,
  RotateCcw,
  Sparkles,
  Info,
  Check,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import TutorCard from "./TutorCard";

export default function TutorDeck({
  tutors = [],
  shortlist = [],
  onToggleShortlist,
  onOpenDetails,
  onBookDemo,
  onResetFilters,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState([]); // stack of { index, action: 'save' | 'skip' }

  // Keep within bounds if filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setHistory([]);
  }, [tutors]);

  const activeTutor = tutors[currentIndex];
  const nextTutor = tutors[currentIndex + 1];

  // Motion values for smooth drag and rotation
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-250, 0, 250], [-18, 0, 18]);
  const saveOpacity = useTransform(x, [30, 120], [0, 1]);
  const skipOpacity = useTransform(x, [-30, -120], [0, 1]);

  const handleSwipeComplete = useCallback(
    (direction) => {
      if (!activeTutor) return;

      if (direction === "right") {
        if (!shortlist.includes(activeTutor.id)) {
          onToggleShortlist(activeTutor.id);
        }
        setHistory((prev) => [...prev, { tutor: activeTutor, action: "save", index: currentIndex }]);
      } else {
        setHistory((prev) => [...prev, { tutor: activeTutor, action: "skip", index: currentIndex }]);
      }

      setCurrentIndex((prev) => prev + 1);
      x.set(0);
    },
    [activeTutor, currentIndex, onToggleShortlist, shortlist, x]
  );

  const handleDragEnd = (event, info) => {
    const threshold = 100;
    const velocity = info.velocity.x;

    if (info.offset.x > threshold || velocity > 400) {
      handleSwipeComplete("right");
    } else if (info.offset.x < -threshold || velocity < -400) {
      handleSwipeComplete("left");
    } else {
      // Snap back
      x.set(0);
    }
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const last = history[history.length - 1];
    if (last.action === "save" && shortlist.includes(last.tutor.id)) {
      onToggleShortlist(last.tutor.id);
    }
    setHistory((prev) => prev.slice(0, -1));
    setCurrentIndex((prev) => Math.max(0, prev - 1));
    x.set(0);
  };

  // Keyboard navigation for accessibility (Left = skip, Right = save, U = undo)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleSwipeComplete("right");
      } else if (e.key === "ArrowLeft") {
        handleSwipeComplete("left");
      } else if (e.key === "z" && (e.metaKey || e.ctrlKey)) {
        handleUndo();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSwipeComplete]);

  // If no tutors or all swiped
  if (!activeTutor) {
    return (
      <div className="w-full max-w-md mx-auto py-12 px-4 text-center space-y-5">
        <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-3xl bg-yellow-100 border border-yellow-200 text-3xl shadow-sm">
          ✨
        </div>
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            You've reviewed all available tutors!
          </h3>
          <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-sm mx-auto">
            {tutors.length === 0
              ? "No tutors matched your current filters. Try resetting them or clearing your search."
              : `You browsed through all ${tutors.length} tutors. Check your shortlisted list or start over!`}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {history.length > 0 && (
            <button
              onClick={() => {
                setCurrentIndex(0);
                setHistory([]);
              }}
              className="px-5 py-2.5 rounded-2xl bg-white text-slate-800 text-xs font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition cursor-pointer flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Review Again</span>
            </button>
          )}

          {onResetFilters && (
            <button
              onClick={onResetFilters}
              className="px-5 py-2.5 rounded-2xl bg-yellow-400 text-slate-950 text-xs font-bold border border-yellow-300 shadow-sm hover:bg-yellow-500 transition cursor-pointer flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center pt-2 pb-6 px-3">
      {/* Cards Deck Container */}
      <div className="relative w-full h-[470px] xs:h-[490px] sm:h-[520px] flex items-center justify-center">
        {/* Underneath Card (Visual Stack Layer) */}
        {nextTutor && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none transform scale-[0.95] translate-y-2 opacity-80">
            <TutorCard
              tutor={nextTutor}
              isShortlisted={shortlist.includes(nextTutor.id)}
              className="filter blur-[0.2px]"
            />
          </div>
        )}

        {/* Top Active Draggable Card */}
        <motion.div
          key={activeTutor.id}
          style={{ x, rotate }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing touch-none z-20"
        >
          {/* "SAVED" Stamp on drag right */}
          <motion.div
            style={{ opacity: saveOpacity }}
            className="absolute top-6 left-6 z-30 pointer-events-none px-3.5 py-1.5 rounded-2xl bg-emerald-500 text-white font-extrabold text-base tracking-wider border-2 border-emerald-600 shadow-md shadow-emerald-200 -rotate-12 flex items-center gap-1.5"
          >
            <Heart className="h-4 w-4 fill-white" />
            <span>SHORTLIST</span>
          </motion.div>

          {/* "SKIP" Stamp on drag left */}
          <motion.div
            style={{ opacity: skipOpacity }}
            className="absolute top-6 right-6 z-30 pointer-events-none px-3.5 py-1.5 rounded-2xl bg-rose-500 text-white font-extrabold text-base tracking-wider border-2 border-rose-600 shadow-md shadow-rose-200 rotate-12 flex items-center gap-1.5"
          >
            <X className="h-4 w-4" />
            <span>PASS</span>
          </motion.div>

          <TutorCard
            tutor={activeTutor}
            isShortlisted={shortlist.includes(activeTutor.id)}
            onToggleShortlist={onToggleShortlist}
            onOpenDetails={onOpenDetails}
            onBookDemo={onBookDemo}
          />
        </motion.div>
      </div>

      {/* Thumb-Zone Accessible Action Controls */}
      <div className="w-full max-w-sm flex items-center justify-between gap-3 pt-3 px-4 select-none">
        {/* Undo Button */}
        <button
          type="button"
          onClick={handleUndo}
          disabled={history.length === 0}
          className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-xs transition-all cursor-pointer ${
            history.length > 0
              ? "bg-white text-slate-700 border-slate-200 hover:bg-yellow-50 hover:text-yellow-700 hover:border-yellow-300 active:scale-95"
              : "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed opacity-50"
          }`}
          title="Undo last swipe"
          aria-label="Undo last swipe"
        >
          <RotateCcw className="h-4 w-4" />
        </button>

        {/* Skip (Pass) Button */}
        <button
          type="button"
          onClick={() => handleSwipeComplete("left")}
          className="flex h-13 w-13 items-center justify-center rounded-full bg-white text-rose-500 border border-rose-200 shadow-md hover:bg-rose-50 hover:border-rose-300 active:scale-95 transition-all cursor-pointer"
          title="Pass / Skip tutor"
          aria-label="Pass / Skip tutor"
        >
          <X className="h-6 w-6" strokeWidth={2.5} />
        </button>

        {/* Inspect Details Button */}
        <button
          type="button"
          onClick={() => onOpenDetails && onOpenDetails(activeTutor)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 border border-slate-200 shadow-xs hover:bg-amber-50 hover:text-amber-700 hover:border-amber-300 active:scale-95 transition-all cursor-pointer"
          title="Open tutor profile details"
          aria-label="Open tutor profile details"
        >
          <Info className="h-4 w-4" />
        </button>

        {/* Save / Shortlist Button */}
        <button
          type="button"
          onClick={() => handleSwipeComplete("right")}
          className="flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 border border-yellow-300 shadow-md shadow-yellow-200 text-slate-950 active:scale-95 hover:scale-105 transition-all cursor-pointer"
          title="Shortlist / Save tutor"
          aria-label="Shortlist / Save tutor"
        >
          <Heart className="h-6 w-6 fill-slate-950" strokeWidth={2} />
        </button>
      </div>

      {/* Swipe Gesture Hint text */}
      <p className="text-[11px] font-semibold text-slate-500 text-center pt-2">
        Swipe <span className="text-emerald-700 font-bold">Right to Save</span> • Swipe{" "}
        <span className="text-rose-600 font-bold">Left to Skip</span> • Tap card for slots
      </p>
    </div>
  );
}
