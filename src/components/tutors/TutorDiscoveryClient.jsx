"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  RotateCcw,
  BookOpen,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";

import FilterBar from "./FilterBar";
import TutorCard from "./TutorCard";
import TutorDeck from "./TutorDeck";
import TutorList from "./TutorList";
import TutorSheet from "./TutorSheet";
import ShortlistDrawer from "./ShortlistDrawer";
import BookingModal from "./BookingModal";
import SkeletonCard from "./SkeletonCard";

import { normalizeTutor, TUTORS_DATA } from "@/data/tutors";
import { useShortlist } from "@/Hooks/useShortlist";
import { usePublicTutors } from "@/Hooks/usePublicTutors";
import useDebounce from "@/Hooks/useDebounce";

export default function TutorDiscoveryClient({ initialTutors = [] }) {
  // 1. Filter States
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("All");
  const [classLevel, setClassLevel] = useState("All");
  const [mode, setMode] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [availableTodayOnly, setAvailableTodayOnly] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");
  const [viewMode, setViewMode] = useState("swipe"); // 'swipe' (mobile-first default) | 'list'

  // Debounced search for API query
  const debouncedSearch = useDebounce(search, 300);

  // 2. Real Backend Data Fetching via usePublicTutors
  const queryParams = useMemo(() => {
    return {
      search: debouncedSearch,
      subject: subject !== "All" ? subject : "",
      mode: mode !== "All" ? mode : "",
      sort: sortBy === "experience" ? "experience" : "newest",
    };
  }, [debouncedSearch, subject, mode, sortBy]);

  const { data: backendData, isLoading } = usePublicTutors(queryParams);

  // Normalize backend tutors (or fallback to initial / mock data)
  const availableTutors = useMemo(() => {
    if (backendData?.tutors && backendData.tutors.length > 0) {
      return backendData.tutors.map(normalizeTutor);
    }
    if (initialTutors && initialTutors.length > 0) {
      return initialTutors.map(normalizeTutor);
    }
    return TUTORS_DATA;
  }, [backendData, initialTutors]);

  // Client-side refined filtering (for Class, Price range, Available Today)
  const filteredTutors = useMemo(() => {
    return availableTutors.filter((tutor) => {
      // Class Level
      if (classLevel !== "All") {
        const matchesClass = tutor.classes?.some((c) =>
          c.toLowerCase().includes(classLevel.toLowerCase())
        );
        if (!matchesClass) return false;
      }

      // Price Range Filter
      if (priceRange === "under_600" && tutor.pricePerHour >= 600) return false;
      if (
        priceRange === "600_1000" &&
        (tutor.pricePerHour < 600 || tutor.pricePerHour > 1000)
      )
        return false;
      if (priceRange === "above_1000" && tutor.pricePerHour <= 1000) return false;

      // Available Today Filter
      if (availableTodayOnly && !tutor.availableToday) return false;

      return true;
    });
  }, [availableTutors, classLevel, priceRange, availableTodayOnly]);

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (search.trim()) count++;
    if (subject !== "All") count++;
    if (classLevel !== "All") count++;
    if (mode !== "All") count++;
    if (priceRange !== "All") count++;
    if (availableTodayOnly) count++;
    return count;
  }, [search, subject, classLevel, mode, priceRange, availableTodayOnly]);

  const resetFilters = useCallback(() => {
    setSearch("");
    setSubject("All");
    setClassLevel("All");
    setMode("All");
    setPriceRange("All");
    setAvailableTodayOnly(false);
    setSortBy("recommended");
  }, []);

  // 3. Shortlist Management (persisted in LocalStorage)
  const { shortlist, toggleShortlist, removeFromShortlist, clearShortlist } =
    useShortlist();

  // 4. Modal / Sheet States
  const [activeSheetTutor, setActiveSheetTutor] = useState(null);
  const [bookingModalData, setBookingModalData] = useState({
    isOpen: false,
    tutor: null,
    selectedSlot: null,
    selectedDay: null,
  });

  const handleOpenDetails = (tutor) => {
    setActiveSheetTutor(tutor);
  };

  const handleCloseDetails = () => {
    setActiveSheetTutor(null);
  };

  const handleOpenBookingModal = (tutor, slot = null, day = null) => {
    setBookingModalData({
      isOpen: true,
      tutor,
      selectedSlot: slot,
      selectedDay: day,
    });
  };

  const handleCloseBookingModal = () => {
    setBookingModalData({
      isOpen: false,
      tutor: null,
      selectedSlot: null,
      selectedDay: null,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/40 via-white to-slate-50/50 flex flex-col selection:bg-yellow-300 selection:text-slate-950 font-sans pt-16 sm:pt-20">
      {/* ========================================================= */}
      {/* 1. HERO STRIP (Mobile-First, Brand Theme, Authentic Copy)  */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-yellow-50/20 to-white pt-6 sm:pt-10 pb-5 sm:pb-7 px-4 sm:px-6 border-b border-amber-100/80">
        <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-yellow-300/20 blur-3xl" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-5 relative z-10">
          <div className="space-y-1.5 sm:space-y-2.5 max-w-2xl">
            {/* Authentic Academy Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 shadow-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-600 shrink-0" />
              <span>Inquisitive Mind Academy Faculty</span>
              <span className="text-amber-300">•</span>
              <span className="text-slate-600 font-semibold">1-on-1 Classes</span>
            </div>

            {/* Clean Mobile-First Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Find Your Expert Tutor
            </h1>

            {/* Subtext */}
            <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-xl leading-relaxed">
              Certified educators for French, German, Mathematics, Science & English. Swipe to shortlist or browse in grid view to book your trial demo session.
            </p>
          </div>

          {/* Quick Value Props (Tablet & Desktop) */}
          <div className="hidden sm:flex flex-row md:flex-col gap-2 shrink-0">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-xs font-semibold text-slate-800">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Free 1-on-1 Trial Demo</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-xs font-semibold text-slate-800">
              <Zap className="h-4 w-4 text-amber-500" />
              <span>Personalized Study Roadmaps</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. STICKY HORIZONTAL FILTER CHIPS BAR                     */}
      {/* ========================================================= */}
      <FilterBar
        search={search}
        setSearch={setSearch}
        subject={subject}
        setSubject={setSubject}
        classLevel={classLevel}
        setClassLevel={setClassLevel}
        mode={mode}
        setMode={setMode}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        availableTodayOnly={availableTodayOnly}
        setAvailableTodayOnly={setAvailableTodayOnly}
        sortBy={sortBy}
        setSortBy={setSortBy}
        viewMode={viewMode}
        setViewMode={setViewMode}
        activeFiltersCount={activeFiltersCount}
        resetFilters={resetFilters}
        totalResults={filteredTutors.length}
      />

      {/* ========================================================= */}
      {/* 3. MAIN DISCOVERY FEED (Swipe Mode vs List Mode)          */}
      {/* ========================================================= */}
      <main className="flex-1 w-full max-w-7xl mx-auto py-5 sm:py-7">
        {isLoading && filteredTutors.length === 0 ? (
          /* Loading Skeleton State */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : viewMode === "swipe" ? (
          /* Swipe Deck View (Tinder-style with desktop centered deck) */
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 px-4">
            {/* Desktop Side Info Panel */}
            <aside className="hidden lg:flex flex-col space-y-4 w-72 shrink-0">
              <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  How Swipe Mode Works
                </span>
                <div className="space-y-2.5 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs">
                      👉
                    </span>
                    <span>Swipe Right or press <strong>→</strong> to save</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-rose-50 text-rose-800 border border-rose-200 text-xs">
                      👈
                    </span>
                    <span>Swipe Left or press <strong>←</strong> to pass</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-yellow-100 text-yellow-900 border border-yellow-300 text-xs">
                      ⭐
                    </span>
                    <span>Tap any card to view slots & video</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-3xl bg-amber-50/80 border border-amber-200 text-xs font-medium text-amber-950 space-y-1">
                <p className="font-bold">Looking for a standard list?</p>
                <p className="text-slate-600">
                  Switch to Grid View anytime using the mode toggle above.
                </p>
                <button
                  onClick={() => setViewMode("list")}
                  className="mt-2 text-xs font-bold text-yellow-800 hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Switch to Grid View</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </aside>

            {/* Central Interactive Deck */}
            <div className="flex-1 w-full flex justify-center">
              <TutorDeck
                tutors={filteredTutors}
                shortlist={shortlist}
                onToggleShortlist={toggleShortlist}
                onOpenDetails={handleOpenDetails}
                onBookDemo={(t) => handleOpenBookingModal(t)}
                onResetFilters={resetFilters}
              />
            </div>
          </div>
        ) : (
          /* List Mode: Staggered Fade-Up Grid */
          <TutorList
            tutors={filteredTutors}
            shortlist={shortlist}
            onToggleShortlist={toggleShortlist}
            onOpenDetails={handleOpenDetails}
            onBookDemo={(t) => handleOpenBookingModal(t)}
            onResetFilters={resetFilters}
          />
        )}
      </main>

      {/* ========================================================= */}
      {/* 4. BOTTOM SHEET DETAILS MODAL                             */}
      {/* ========================================================= */}
      <TutorSheet
        tutor={activeSheetTutor}
        isOpen={Boolean(activeSheetTutor)}
        onClose={handleCloseDetails}
        isShortlisted={activeSheetTutor ? shortlist.includes(activeSheetTutor.id) : false}
        onToggleShortlist={toggleShortlist}
        onBookDemo={(t, slot, day) => handleOpenBookingModal(t, slot, day)}
      />

      {/* ========================================================= */}
      {/* 5. SHORTLIST DRAWER WITH COMPARISON VIEW                  */}
      {/* ========================================================= */}
      <ShortlistDrawer
        allTutors={availableTutors}
        shortlist={shortlist}
        onRemoveFromShortlist={removeFromShortlist}
        onClearShortlist={clearShortlist}
        onBookDemo={(t) => handleOpenBookingModal(t)}
        onOpenDetails={handleOpenDetails}
      />

      {/* ========================================================= */}
      {/* 6. DEMO BOOKING MODAL WITH CONFETTI CELEBRATION          */}
      {/* ========================================================= */}
      <BookingModal
        isOpen={bookingModalData.isOpen}
        tutor={bookingModalData.tutor}
        selectedSlot={bookingModalData.selectedSlot}
        selectedDay={bookingModalData.selectedDay}
        onClose={handleCloseBookingModal}
      />
    </div>
  );
}
