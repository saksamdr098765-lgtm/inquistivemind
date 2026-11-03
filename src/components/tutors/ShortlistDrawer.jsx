"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  X,
  Trash2,
  Scale,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import CompareTable from "./CompareTable";
import { getSubjectTheme } from "@/data/tutors";

export default function ShortlistDrawer({
  allTutors = [],
  shortlist = [],
  onRemoveFromShortlist,
  onClearShortlist,
  onBookDemo,
  onOpenDetails,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isComparing, setIsComparing] = useState(false);
  const [compareSelected, setCompareSelected] = useState([]);

  // Resolve full tutor objects from shortlist IDs
  const savedTutors = allTutors.filter((t) => shortlist.includes(t.id));

  const toggleCompareSelect = (tutorId) => {
    setCompareSelected((prev) => {
      if (prev.includes(tutorId)) {
        return prev.filter((id) => id !== tutorId);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), tutorId]; // keep max 3
      }
      return [...prev, tutorId];
    });
  };

  const tutorsToCompare = allTutors.filter((t) =>
    (compareSelected.length > 0 ? compareSelected : shortlist.slice(0, 3)).includes(t.id)
  );

  return (
    <>
      {/* Floating Shortlist Button (Bottom Right Thumb Zone) */}
      <div className="fixed bottom-4 right-3 sm:bottom-5 sm:right-8 z-40">
        <motion.button
          type="button"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full bg-slate-900 hover:bg-slate-950 text-white font-bold text-xs sm:text-sm shadow-xl border-2 border-yellow-400 cursor-pointer select-none"
          title="Open Shortlisted Tutors"
          aria-label="Open Shortlisted Tutors"
        >
          <div className="relative">
            <Heart className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {shortlist.length > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-white font-black text-[10px] shadow-xs">
                {shortlist.length}
              </span>
            )}
          </div>
          <span className="text-xs sm:text-sm">Saved ({shortlist.length})</span>
        </motion.button>
      </div>

      {/* Slide-Out Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-stretch sm:justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            />

            {/* Slide-In Drawer Panel */}
            <motion.div
              initial={{ x: "100%", y: 0 }}
              animate={{ x: 0, y: 0 }}
              exit={{ x: "100%", y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative w-full sm:max-w-md lg:max-w-lg bg-white h-[85vh] sm:h-full rounded-t-[32px] sm:rounded-t-none sm:rounded-l-3xl border-t sm:border-t-0 sm:border-l border-slate-200 shadow-2xl flex flex-col z-20 overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-amber-50/60 via-yellow-50/30 to-white">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-100 border border-yellow-300">
                    <Heart className="h-4 w-4 fill-yellow-600 text-yellow-700" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Shortlisted Tutors
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {shortlist.length} educators saved to your local list
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  {shortlist.length > 0 && (
                    <button
                      onClick={onClearShortlist}
                      className="p-2 text-slate-400 hover:text-rose-600 rounded-xl transition cursor-pointer"
                      title="Clear all saved tutors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-slate-500 hover:text-slate-900 rounded-xl transition cursor-pointer"
                    aria-label="Close drawer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* View Toggle Bar (List vs Compare Table) */}
              {shortlist.length >= 2 && (
                <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-slate-600">
                    {isComparing ? "Side-by-side comparison" : "Compare tutors"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsComparing(!isComparing)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-400 hover:bg-yellow-500 text-slate-950 text-xs font-bold shadow-xs transition cursor-pointer"
                  >
                    <Scale className="h-3.5 w-3.5" />
                    <span>{isComparing ? "Back to Cards" : "Compare (Side-by-Side)"}</span>
                  </button>
                </div>
              )}

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-5 space-y-3">
                {shortlist.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-50 border border-amber-200 text-2xl">
                      💛
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      Your shortlist is empty
                    </h4>
                    <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                      Swipe right on tutor cards or click the heart button to save tutors you want to review and compare later.
                    </p>
                  </div>
                ) : isComparing ? (
                  /* Side-by-Side Compare View */
                  <CompareTable
                    tutors={tutorsToCompare}
                    onRemoveTutor={onRemoveFromShortlist}
                    onBookDemo={(t) => {
                      setIsOpen(false);
                      onBookDemo(t);
                    }}
                    onClose={() => setIsComparing(false)}
                  />
                ) : (
                  /* Saved Tutors Cards List */
                  <div className="space-y-3">
                    {savedTutors.map((tutor) => {
                      const theme = getSubjectTheme(tutor.primarySubject);
                      return (
                        <div
                          key={tutor.id}
                          className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-yellow-400 transition-all space-y-2.5"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div
                              onClick={() => {
                                setIsOpen(false);
                                onOpenDetails && onOpenDetails(tutor);
                              }}
                              className="flex items-center gap-3 cursor-pointer min-w-0 flex-1"
                            >
                              <div
                                className="h-12 w-12 rounded-xl border border-slate-200 overflow-hidden relative shrink-0 shadow-2xs"
                                style={{ backgroundColor: theme.bg }}
                              >
                                {tutor.photo ? (
                                  <Image
                                    src={tutor.photo}
                                    alt={tutor.name}
                                    fill
                                    className="object-cover"
                                  />
                                ) : (
                                  <span className="h-full w-full flex items-center justify-center font-bold text-sm text-slate-800">
                                    {tutor.name[0]}
                                  </span>
                                )}
                              </div>
                              <div className="min-w-0">
                                <h4 className="text-sm font-bold text-slate-900 truncate">
                                  {tutor.name}
                                </h4>
                                <span className="text-xs font-semibold text-slate-500 block truncate">
                                  {theme.emoji} {tutor.primarySubject} • {tutor.experienceText || `${tutor.experienceYears}+ yrs`}
                                </span>
                                <span className="text-xs font-black text-slate-900">
                                  ₹{tutor.pricePerHour}/hr
                                </span>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => onRemoveFromShortlist(tutor.id)}
                              className="p-1.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                              title="Remove from saved"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>

                          <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100">
                            <button
                              type="button"
                              onClick={() => {
                                setIsOpen(false);
                                onOpenDetails && onOpenDetails(tutor);
                              }}
                              className="text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                            >
                              View Slots →
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                setIsOpen(false);
                                onBookDemo(tutor);
                              }}
                              className="px-3.5 py-1.5 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-bold text-xs shadow-xs transition cursor-pointer flex items-center gap-1"
                            >
                              <span>Book Demo</span>
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
