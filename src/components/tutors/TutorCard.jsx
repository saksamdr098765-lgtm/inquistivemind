"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Heart,
  Clock,
  Sparkles,
  GraduationCap,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { getSubjectTheme } from "@/data/tutors";

export default function TutorCard({
  tutor,
  isShortlisted = false,
  onToggleShortlist,
  onOpenDetails,
  onBookDemo,
  className = "",
  style = {},
}) {
  const [imageError, setImageError] = useState(false);
  const [heartBurst, setHeartBurst] = useState(false);
  const theme = getSubjectTheme(tutor.primarySubject);

  const handleHeartClick = (e) => {
    e.stopPropagation();
    setHeartBurst(true);
    setTimeout(() => setHeartBurst(false), 600);
    if (onToggleShortlist) {
      onToggleShortlist(tutor.id);
    }
  };

  const handleBookClick = (e) => {
    e.stopPropagation();
    if (onBookDemo) {
      onBookDemo(tutor);
    }
  };

  const initials = (tutor.name || "Tutor")
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  return (
    <div
      onClick={() => onOpenDetails && onOpenDetails(tutor)}
      style={style}
      className={`group relative w-full max-w-[340px] xs:max-w-[360px] sm:max-w-[380px] mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-yellow-100/70 hover:border-yellow-400 p-3.5 sm:p-4 flex flex-col justify-between cursor-pointer select-none transition-all duration-300 ${className}`}
    >
      {/* Top Banner Tag: Mode & Next Slot */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        {/* Next Slot Badge */}
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-900 border border-amber-200 truncate">
          <Clock className="h-3 w-3 text-amber-600 shrink-0" />
          <span className="truncate max-w-[140px]">{tutor.nextSlot}</span>
        </span>

        {/* Teaching Mode Badge */}
        <span
          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border shrink-0 ${
            tutor.mode === "Online"
              ? "bg-sky-50 text-sky-800 border-sky-200"
              : tutor.mode === "Home"
              ? "bg-amber-50 text-amber-800 border-amber-200"
              : "bg-purple-50 text-purple-800 border-purple-200"
          }`}
        >
          <span>{tutor.mode === "Both" ? "Online & Home" : tutor.mode}</span>
        </span>
      </div>

      {/* Main Card Body */}
      <div className="space-y-3">
        {/* Photo Visual Frame */}
        <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
          {!imageError && tutor.photo ? (
            <Image
              src={tutor.photo}
              alt={tutor.name}
              fill
              sizes="(max-width: 640px) 100vw, 360px"
              className="object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div
              className="h-full w-full flex items-center justify-center font-black text-3xl sm:text-4xl"
              style={{ backgroundColor: theme.bg, color: theme.textClass }}
            >
              {initials}
            </div>
          )}

          {/* Subject Badge (Top Left) */}
          <div
            className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-xl text-xs font-bold border shadow-xs"
            style={{ backgroundColor: theme.bg, color: theme.textClass, borderColor: theme.borderClass }}
          >
            <span>{theme.emoji} {tutor.primarySubject}</span>
          </div>

          {/* Floating Heart Button (Top Right) */}
          <div className="absolute top-2.5 right-2.5 z-10">
            <button
              type="button"
              onClick={handleHeartClick}
              className={`relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border shadow-xs transition-all cursor-pointer ${
                isShortlisted
                  ? "bg-rose-500 text-white border-rose-600 shadow-rose-200"
                  : "bg-white/95 text-slate-700 border-slate-200 hover:bg-rose-50 hover:text-rose-600"
              }`}
              title={isShortlisted ? "Remove from shortlist" : "Add to shortlist"}
              aria-label={isShortlisted ? "Remove from shortlist" : "Add to shortlist"}
            >
              <Heart
                className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform ${
                  isShortlisted ? "fill-white text-white scale-110" : ""
                }`}
              />

              <AnimatePresence>
                {heartBurst && (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 1 }}
                    animate={{ scale: 2.2, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 rounded-2xl bg-rose-400/40 pointer-events-none flex items-center justify-center"
                  >
                    <Sparkles className="h-5 w-5 text-rose-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Verified Faculty Pill Overlay (Bottom of Photo) */}
          <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-xs rounded-xl border border-slate-200/80 px-2 py-0.5 flex items-center gap-1 text-[10px] font-bold text-slate-800 shadow-xs">
            <CheckCircle2 className="h-3 w-3 text-emerald-600" />
            <span>Verified Faculty</span>
          </div>
        </div>

        {/* Identity & Header Info */}
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug truncate">
              {tutor.name}
            </h3>

            {/* Experience Badge */}
            <span className="px-2 py-0.5 rounded-lg bg-amber-50 border border-amber-200 shrink-0 font-bold text-xs text-amber-950">
              {tutor.experienceText || `${tutor.experienceYears}+ yrs`}
            </span>
          </div>

          {/* Real Tagline */}
          <p className="text-xs font-medium text-slate-600 line-clamp-2 leading-relaxed">
            {tutor.tagline}
          </p>
        </div>

        {/* Chips Row: Qualification + Languages */}
        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
          {tutor.qualification && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold truncate max-w-[150px]">
              <GraduationCap className="h-3 w-3 text-slate-600 shrink-0" />
              <span className="truncate">{tutor.qualification}</span>
            </span>
          )}

          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold">
            <span>🗣️ {tutor.languages.slice(0, 2).join(", ")}</span>
          </span>

          {tutor.classes?.slice(0, 1).map((cls) => (
            <span
              key={cls}
              className="inline-flex items-center px-2 py-0.5 rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-900 text-[10px] font-bold truncate max-w-[120px]"
            >
              {cls}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Price & Primary CTA */}
      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-2.5">
        <div>
          <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
            Fee
          </span>
          <div className="flex items-baseline gap-0.5">
            <span className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              ₹{tutor.pricePerHour}
            </span>
            <span className="text-[11px] font-semibold text-slate-500">/hr</span>
          </div>
        </div>

        {/* Primary CTA (Min 44px Touch Target) */}
        <button
          type="button"
          onClick={handleBookClick}
          className="min-h-[44px] px-3.5 sm:px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-slate-950 text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all flex items-center gap-1 cursor-pointer"
        >
          <span>Book Free Demo</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
