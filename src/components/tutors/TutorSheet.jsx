"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Calendar,
  Clock,
  Play,
  Heart,
  MessageCircle,
  GraduationCap,
  Sparkles,
  ChevronRight,
  BookOpen,
  Award,
} from "lucide-react";
import { getSubjectTheme } from "@/data/tutors";

export default function TutorSheet({
  tutor,
  isOpen = false,
  onClose,
  isShortlisted = false,
  onToggleShortlist,
  onBookDemo,
}) {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  if (!isOpen || !tutor) return null;

  const theme = getSubjectTheme(tutor.primarySubject);
  const daysList = tutor.availability && tutor.availability.length > 0
    ? tutor.availability
    : ["Monday", "Wednesday", "Friday", "Saturday"];
  const timeSlotsList = tutor.timeSlots && tutor.timeSlots.length > 0
    ? tutor.timeSlots
    : ["10:00 AM - 12:00 PM", "3:00 PM - 5:00 PM", "6:00 PM - 8:00 PM"];

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Inquisitive Mind Academy! I am interested in booking a trial class with ${tutor.name} (${tutor.primarySubject}).`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        />

        {/* Bottom Sheet Modal Dialog */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          drag="y"
          dragConstraints={{ top: 0 }}
          dragElastic={{ top: 0, bottom: 0.2 }}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.y > 140 || velocity.y > 400) {
              onClose();
            }
          }}
          className="relative w-full max-w-xl max-h-[92vh] sm:max-h-[88vh] bg-white rounded-t-[32px] sm:rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden z-20"
        >
          {/* Drag Handle Bar for Mobile */}
          <div className="w-full flex items-center justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing sm:hidden">
            <div className="h-1.5 w-12 rounded-full bg-slate-300" />
          </div>

          {/* Sheet Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between gap-3 bg-gradient-to-r from-amber-50/50 via-yellow-50/30 to-white">
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="h-12 w-12 rounded-2xl border border-slate-200 overflow-hidden relative shrink-0 shadow-xs"
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
                  <span className="h-full w-full flex items-center justify-center font-bold text-lg text-slate-800">
                    {tutor.name[0]}
                  </span>
                )}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                    {tutor.name}
                  </h3>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <span className="text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                    {tutor.experienceText || `${tutor.experienceYears}+ yrs exp`}
                  </span>
                  <span>•</span>
                  <span className="text-slate-600">{tutor.mode === "Both" ? "Online & Home" : `${tutor.mode}`}</span>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 cursor-pointer shrink-0 shadow-xs transition"
              aria-label="Close sheet"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 space-y-6">
            {/* Intro Video Preview Placeholder */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Tutor Video Introduction
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Faculty Verified
                </span>
              </div>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center text-white border border-slate-200 shadow-xs">
                {isPlayingVideo ? (
                  <div className="p-4 text-center space-y-2">
                    <Play className="h-8 w-8 text-yellow-400 mx-auto animate-pulse" />
                    <p className="text-xs font-semibold text-white/90">
                      Live introductory preview for {tutor.name}
                    </p>
                    <button
                      onClick={() => setIsPlayingVideo(false)}
                      className="text-[11px] underline text-yellow-300 cursor-pointer"
                    >
                      Close Preview
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => setIsPlayingVideo(true)}
                    className="group/video relative h-full w-full flex flex-col items-center justify-center cursor-pointer bg-gradient-to-tr from-slate-950 via-slate-900 to-amber-950/40 p-4"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-slate-950 group-hover/video:scale-110 shadow-lg shadow-yellow-400/20 transition-all">
                      <Play className="h-6 w-6 ml-1 fill-slate-950" />
                    </div>
                    <span className="mt-3 text-xs font-bold text-white tracking-wide">
                      Watch {tutor.name.split(" ")[0]}'s Teaching Style
                    </span>
                    <span className="text-[10px] text-white/70">
                      1 min • Teaching Philosophy & Accent Preview
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* About & Credentials */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                About the Educator
              </h4>
              <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                {tutor.about}
              </p>
            </div>

            {/* Teaching Style & Methodology */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Teaching Style & Methodology
              </h4>
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2 text-xs font-semibold text-slate-800">
                <div className="flex items-start gap-2">
                  <BookOpen className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>{tutor.teachingStyle}</span>
                </div>
                <div className="flex items-start gap-2 pt-1 border-t border-amber-200/60 text-slate-600">
                  <Award className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>Qualification: <strong>{tutor.qualification}</strong></span>
                </div>
              </div>
            </div>

            {/* 7-Day Live Availability Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-amber-500" />
                  <span>Live Available Days & Slots</span>
                </h4>
                <span className="text-[10px] font-semibold text-slate-500">
                  Next 7 Days
                </span>
              </div>

              {/* Day Selector Chips */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                {daysList.map((dayName, idx) => (
                  <button
                    key={dayName}
                    onClick={() => {
                      setSelectedDay(idx);
                      setSelectedSlot(null);
                    }}
                    className={`shrink-0 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                      selectedDay === idx
                        ? "bg-yellow-400 text-slate-950 border-yellow-400 shadow-xs ring-2 ring-yellow-400/30"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <span>{dayName}</span>
                  </button>
                ))}
              </div>

              {/* Time Slots Chips for Selected Day */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[11px] font-semibold text-slate-500 block">
                  Select preferred trial session slot:
                </span>
                <div className="flex flex-wrap gap-2">
                  {timeSlotsList.map((slot) => {
                    const isSelected = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                          isSelected
                            ? "bg-yellow-400 text-slate-950 border-yellow-400 shadow-xs ring-2 ring-yellow-400/40"
                            : "bg-white text-slate-700 border-slate-200 hover:bg-yellow-50 hover:border-yellow-300"
                        }`}
                      >
                        <Clock className="h-3 w-3 text-amber-500" />
                        <span>{slot}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Free Trial Demo Overview */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                <span>What to Expect in Your Free Trial Demo</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-1">
                  <span className="text-xs font-bold text-slate-900 block">
                    1. 1-on-1 Diagnostic Session
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    30-minute personal consultation to evaluate student's current proficiency, strengths, and areas for improvement.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-1">
                  <span className="text-xs font-bold text-slate-900 block">
                    2. Customized Learning Roadmap
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Receive a personalized weekly syllabus plan matched to your target school curriculum or certification goals.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-xs font-bold text-slate-900 block">
                    3. Live Teaching Demonstration
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Experience the tutor's pedagogy, digital whiteboard tools, and practice exercise methodology firsthand.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-xs font-bold text-slate-900 block">
                    4. Zero Obligation / No Lock-in
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Completely free trial. You only confirm regular weekly classes if you and your child are 100% satisfied.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Thumb-Zone Action Bar */}
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-white shadow-lg flex items-center justify-between gap-3">
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400">
                Fee per hour
              </span>
              <div className="flex items-baseline gap-0.5">
                <span className="text-xl sm:text-2xl font-black text-slate-900">
                  ₹{tutor.pricePerHour}
                </span>
                <span className="text-xs font-semibold text-slate-500">/hr</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* WhatsApp Inquiry Button */}
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="min-h-[44px] px-3.5 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition cursor-pointer"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden xs:inline">WhatsApp</span>
              </button>

              {/* Book Free Demo CTA */}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onBookDemo) {
                    onBookDemo(tutor, selectedSlot, daysList[selectedDay]);
                  }
                }}
                className="min-h-[44px] px-4 sm:px-6 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-yellow-200 flex items-center gap-1.5 transition cursor-pointer"
              >
                <span>Book Free Demo</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
