"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaArrowRight,
  FaCopy,
  FaCheck,
  FaWhatsapp,
  FaHome,
  FaAward,
  FaBriefcase,
  FaBolt,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaUsers,
} from "react-icons/fa";
import { toast } from "sonner";
import GameConfetti from "@/app/find-tutor/components/GameConfetti";
import SITE_CONFIG from "@/app/siteConfig";

export default function TutorSuccess({ onContinue, form, referenceCode }) {
  const [copied, setCopied] = useState(false);

  const displayCode = referenceCode || "IMA-FACULTY-2026";

  const handleCopyCode = () => {
    navigator.clipboard.writeText(displayCode);
    setCopied(true);
    toast.success("Candidate ID copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Inquisitive Mind Academy! I just completed my Tutor Application for ${
      form?.subject || "Teaching"
    }. My Candidate ID is: ${displayCode}. Please connect me with the academic onboarding coordinator.`
  );

  const whatsappUrl = `https://wa.me/${SITE_CONFIG?.contact?.whatsapp || "919876543210"}?text=${whatsappMessage}`;

  return (
    <div className="relative overflow-hidden py-3 sm:py-8 lg:py-10 select-none">
      {/* Celebration Confetti */}
      <GameConfetti count={45} duration={3.2} />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative mx-auto max-w-3xl px-1 sm:px-6 text-center"
      >
        {/* Victory Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-100 px-3.5 py-0.5 text-[9px] sm:text-xs font-black tracking-[0.2em] sm:tracking-[0.25em] text-amber-950 uppercase shadow-2xs">
          <FaAward className="text-amber-600 text-xs sm:text-sm" />
          <span>FACULTY GUILD INDUCTION • SUBMITTED!</span>
        </div>

        {/* Victory Icon Trophy */}
        <motion.div
          initial={{ scale: 0, rotate: -25 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="mx-auto mt-3 sm:mt-5 flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-amber-400 via-yellow-400 to-amber-500 text-2xl sm:text-4xl text-slate-950 shadow-xl shadow-amber-400/25"
        >
          <FaCheckCircle />
        </motion.div>

        {/* Title */}
        <h2 className="mt-3 sm:mt-5 text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight px-1">
          Application Submitted!
        </h2>

        <p className="mx-auto mt-1 sm:mt-2 max-w-lg text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium px-2">
          Thank you, <strong>{form?.name || "Educator"}</strong>! Your faculty profile has been submitted
          to our academic onboarding registry. Our faculty coordination desk will review your credentials within 24 hours.
        </p>

        {/* HOLOGRAPHIC GOLD FACULTY GUILD PASS (Mobile First) */}
        <div className="mt-5 mx-auto max-w-md rounded-2xl sm:rounded-3xl border-2 border-amber-400 bg-gradient-to-br from-amber-100/90 via-yellow-50 to-white p-4 sm:p-6 shadow-md text-left relative overflow-hidden">
          {/* Subtle Ambient Shimmer */}
          <div className="absolute top-0 right-0 -mt-6 -mr-6 h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-yellow-300/30 blur-xl pointer-events-none" />

          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-amber-900">
              FACULTY CANDIDATE PASS
            </span>
            <span className="rounded-full bg-green-100 border border-green-300 px-2 py-0.2 text-[8px] sm:text-[9px] font-black text-green-800">
              UNDER REVIEW
            </span>
          </div>

          <div className="text-[11px] sm:text-xs text-slate-600 font-bold mb-1">Your Application ID</div>

          <div className="flex items-center justify-between gap-2 rounded-xl sm:rounded-2xl bg-white border border-amber-300/80 p-2 sm:p-3 shadow-2xs">
            <span className="font-mono text-sm sm:text-lg font-black text-amber-950 tracking-wider truncate">
              {displayCode}
            </span>

            <button
              type="button"
              onClick={handleCopyCode}
              className={`flex items-center gap-1 rounded-lg sm:rounded-xl px-2.5 py-1.5 text-[11px] sm:text-xs font-black transition-all cursor-pointer shrink-0 touch-manipulation ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-2xs"
              }`}
            >
              {copied ? (
                <>
                  <FaCheck className="text-[9px]" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <FaCopy className="text-[9px]" />
                  <span>COPY ID</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Specs */}
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-amber-200/60 grid grid-cols-2 gap-2 text-[10.5px] sm:text-[11px]">
            <div>
              <span className="text-slate-400 font-bold block uppercase text-[8.5px] sm:text-[9px]">Subject</span>
              <span className="font-black text-slate-900 truncate block">{form?.subject || "Teaching Domain"}</span>
            </div>
            <div>
              <span className="text-slate-400 font-bold block uppercase text-[8.5px] sm:text-[9px]">Experience</span>
              <span className="font-black text-slate-900 truncate block">{form?.experience || "Educator"}</span>
            </div>
            <div>
              <span className="text-slate-400 font-bold block uppercase text-[8.5px] sm:text-[9px]">Teaching Mode</span>
              <span className="font-black text-slate-900 truncate block">{form?.mode || "Online Classes"}</span>
            </div>
            <div>
              <span className="text-slate-400 font-bold block uppercase text-[8.5px] sm:text-[9px]">Schedule</span>
              <span className="font-black text-slate-900 truncate block">
                {(form?.availability || []).join(", ") || "Flexible"}
              </span>
            </div>
          </div>
        </div>

        {/* UNLOCKED FACULTY PERKS / NEXT STEPS */}
        <div className="mt-5 sm:mt-8 grid gap-2.5 sm:gap-4 md:grid-cols-3 text-left">
          <div className="rounded-xl sm:rounded-2xl border border-yellow-200 bg-white p-3 sm:p-4 shadow-2xs">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-yellow-100 text-amber-800 text-base sm:text-lg mb-2">
              <FaChalkboardTeacher />
            </div>
            <div className="text-xs sm:text-sm font-black text-slate-900">Profile Review</div>
            <div className="text-[10.5px] sm:text-[11px] text-slate-600 mt-0.5 font-medium">
              We review your subject expertise, certifications, and teaching credentials.
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-yellow-200 bg-white p-3 sm:p-4 shadow-2xs">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-yellow-100 text-amber-800 text-base sm:text-lg mb-2">
              <FaUsers />
            </div>
            <div className="text-xs sm:text-sm font-black text-slate-900">Demo Discussion</div>
            <div className="text-[10.5px] sm:text-[11px] text-slate-600 mt-0.5 font-medium">
              Brief video chat to align on lesson plans, pedagogy, and preferred batches.
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-yellow-200 bg-white p-3 sm:p-4 shadow-2xs">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-yellow-100 text-amber-800 text-base sm:text-lg mb-2">
              <FaBolt />
            </div>
            <div className="text-xs sm:text-sm font-black text-slate-900">Start Teaching</div>
            <div className="text-[10.5px] sm:text-[11px] text-slate-600 mt-0.5 font-medium">
              Receive verified student enquiries matched directly to your schedule.
            </div>
          </div>
        </div>

        {/* PRIMARY ACTION BUTTONS (Stacked full width on mobile) */}
        <div className="mt-5 sm:mt-9 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-black text-white shadow-md shadow-emerald-500/25 active:scale-[0.98] transition cursor-pointer min-h-[48px] touch-manipulation"
          >
            <FaWhatsapp className="text-base sm:text-lg" />
            <span>Chat with Faculty Desk on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={onContinue || (() => (window.location.href = "/"))}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white hover:border-yellow-300 hover:bg-yellow-50/50 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-slate-800 active:scale-[0.98] transition cursor-pointer min-h-[48px] touch-manipulation"
          >
            <FaHome className="text-slate-600" />
            <span>Return to Home</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
