"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useAuthStore from "@/store/authStore";

import MatchingScreen from "./MatchingScreen";
import StepCard, { ContactForm, AvailabilitySelector } from "./StepCard";
import StudentSuccess from "./StudentSuccess";

import {
  goalOptions,
  languageOptions,
  levels,
  availabilityOptions,
  tutorPreferences,
  academicSubjects,
  academicLevels,
  academicPreferences,
  timeSlotOptions,
} from "./data";

import ProgressTracker from "./ProgressTraker";
import { validateStep } from "../validation";
import { useStudentLeadMutation } from "@/app/mutations/leadMutation";
import { trackFormSubmit } from "@/lib/traking";
import { playSuccess, getSoundMuted, setSoundMuted } from "../utils/soundEffects";
import { FaBolt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function StudentOnboarding() {
  const [error, setError] = useState("");
  const [step, setStep] = useState(0);
  const [referenceCode, setReferenceCode] = useState("");
  const [soundMuted, setSoundMutedState] = useState(false);
  const [showXpGain, setShowXpGain] = useState(false);

  const [form, setForm] = useState({
    goal: "",
    language: "",
    level: "",
    availability: [],
    timeSlot: [],
    tutor: "",
    name: "",
    email: "",
    phone: "",
    avatar: "fox",
  });

  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    setSoundMutedState(getSoundMuted());
  }, []);

  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        name: prev.name || user.fullName || "",
        email: prev.email || user.email || "",
        phone: prev.phone || user.phone || "",
      }));
    }
  }, [user]);

  const toggleSound = () => {
    const nextVal = !soundMuted;
    setSoundMutedState(nextVal);
    setSoundMuted(nextVal);
  };

  const triggerXpGain = () => {
    setShowXpGain(true);
    setTimeout(() => setShowXpGain(false), 1200);
  };

  const update = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleDay = (day) => {
    update(
      "availability",
      form.availability.includes(day)
        ? form.availability.filter((d) => d !== day)
        : [...form.availability, day]
    );
  };

  const toggleSlot = (slot) => {
    update(
      "timeSlot",
      form.timeSlot.includes(slot)
        ? form.timeSlot.filter((s) => s !== slot)
        : [...form.timeSlot, slot]
    );
  };

  const next = () => {
    const errorMessage = validateStep(step, form);
    if (errorMessage) return setError(errorMessage);

    setError("");
    playSuccess();
    triggerXpGain();
    if (step < 7) {
      setStep((prev) => prev + 1);
    }
  };

  const handleAutoAdvance = (key, value) => {
    update(key, value);
    playSuccess();
    triggerXpGain();
    setError("");
    if (step < 7) {
      setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 260);
    }
  };

  const prev = () => {
    if (step > 0) {
      setError("");
      setStep((prev) => prev - 1);
    }
  };

  const jumpToStep = (targetStep) => {
    if (targetStep < step) {
      setError("");
      setStep(targetStep);
    }
  };

  const studentLeadsMutation = useStudentLeadMutation();

  const onContinue = async () => {
    await studentLeadsMutation.mutateAsync(form, {
      onSuccess: (data) => {
        trackFormSubmit("Find Tutor Student Lead", "success");
        if (data?.referenceCode) {
          setReferenceCode(data.referenceCode);
        }
        setStep(8);
      },
    });
  };

  return (
    <section className="relative overflow-hidden py-2 sm:py-8 lg:py-12">
      <div className="relative mx-auto max-w-4xl px-2.5 xs:px-3 sm:px-6 lg:px-8">
        <h1 className="sr-only">Find a Tutor — Search Qualified Tutors</h1>

        {/* FLOATING XP GAIN BADGE (Mobile Friendly Position) */}
        <AnimatePresence>
          {showXpGain && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: -16, scale: 1.05 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="pointer-events-none fixed top-18 sm:top-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 px-3.5 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-black text-slate-950 shadow-lg shadow-amber-400/30"
            >
              <FaBolt className="text-slate-950 text-xs" />
              <span>+125 XP EARNED!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GAMIFIED PROGRESS TRACKER (Single bar, only on questionnaire steps 0 to 6) */}
        {step < 7 && (
          <ProgressTracker
            currentStep={step}
            totalSteps={7}
            onSelectStep={jumpToStep}
            soundMuted={soundMuted}
            onToggleSound={toggleSound}
          />
        )}

        {/* COMPLETED QUEST TRAIL (Mobile First Compact Chips) */}
        {step < 8 && (
          <div className="mb-3 sm:mb-6 flex flex-wrap justify-center items-center gap-1.5">
            {form.name && (
              <button
                type="button"
                onClick={() => jumpToStep(0)}
                className="rounded-full bg-yellow-50 border border-yellow-300/80 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold text-yellow-900 transition hover:bg-yellow-100 cursor-pointer shadow-2xs touch-manipulation"
              >
                👤 {form.name}
              </button>
            )}

            {form.goal && (
              <button
                type="button"
                onClick={() => jumpToStep(1)}
                className="rounded-full bg-amber-50 border border-amber-300/80 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold text-amber-900 transition hover:bg-amber-100 cursor-pointer shadow-2xs touch-manipulation"
              >
                🎯 {form.goal}
              </button>
            )}

            {form.language && (
              <button
                type="button"
                onClick={() => jumpToStep(2)}
                className="rounded-full bg-yellow-100/70 border border-yellow-300 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold text-yellow-950 transition hover:bg-yellow-200/80 cursor-pointer shadow-2xs touch-manipulation"
              >
                📚 {form.language}
              </button>
            )}

            {form.level && (
              <button
                type="button"
                onClick={() => jumpToStep(3)}
                className="rounded-full bg-slate-100 border border-slate-300 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold text-slate-800 transition hover:bg-slate-200 cursor-pointer shadow-2xs touch-manipulation"
              >
                📈 {typeof form.level === "string" ? form.level : form.level?.title}
              </button>
            )}

            {form.availability?.length > 0 && (
              <button
                type="button"
                onClick={() => jumpToStep(4)}
                className="rounded-full bg-amber-100/60 border border-amber-300 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold text-amber-950 transition hover:bg-amber-200 cursor-pointer shadow-2xs touch-manipulation"
              >
                📅 {form.availability.length} Days
              </button>
            )}
          </div>
        )}

        {/* MAIN GAME CONTAINER CARD (Mobile First Touch & Padding) */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[36px] border-2 border-yellow-300/90 bg-white/95 p-3.5 xs:p-4 sm:p-7 lg:p-10 shadow-xl shadow-yellow-500/10 backdrop-blur-md">
          {/* Subtle Ambient Golden Sparkles in Background */}
          <div className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 sm:h-44 sm:w-44 rounded-full bg-yellow-300/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 sm:h-44 sm:w-44 rounded-full bg-amber-300/20 blur-2xl" />

          <div className="relative">
            <AnimatePresence mode="wait">
              {/* Step 0: Character Creation & Contact Profile */}
              {step === 0 && (
                <ContactForm form={form} update={update} />
              )}

              {/* Step 1: Learning Goal (Auto-advancing single choice) */}
              {step === 1 && (
                <StepCard
                  badge="QUEST 2 • GOAL DESTINATION"
                  title="What are you aiming to master?"
                  subtitle="Select your focus track. We will customize your learning journey."
                  options={goalOptions}
                  selected={form.goal}
                  onSelect={(v) => update("goal", v)}
                  autoAdvance={(v) => handleAutoAdvance("goal", v)}
                />
              )}

              {/* Step 2: Subject / Language (Auto-advancing single choice) */}
              {step === 2 && (
                <StepCard
                  badge="QUEST 3 • TARGET DISCIPLINE"
                  title={
                    form.goal === "Academics"
                      ? "Which subject do you need help with?"
                      : "Which language do you want to learn?"
                  }
                  subtitle="Choose the specific subject or language program."
                  options={
                    form.goal === "Academics"
                      ? academicSubjects
                      : languageOptions
                  }
                  selected={form.language}
                  onSelect={(v) => update("language", v)}
                  autoAdvance={(v) => handleAutoAdvance("language", v)}
                />
              )}

              {/* Step 3: Current Level (Auto-advancing single choice) */}
              {step === 3 && (
                <StepCard
                  badge="QUEST 4 • CURRENT PROFICIENCY"
                  title="What's your current level?"
                  subtitle="Be honest! Tutors tailor classes from foundational basics to advanced mastery."
                  options={
                    form.goal === "Academics" ? academicLevels : levels
                  }
                  selected={form.level}
                  onSelect={(v) => update("level", v)}
                  autoAdvance={(v) => handleAutoAdvance("level", v)}
                />
              )}

              {/* Step 4: Availability Days */}
              {step === 4 && (
                <AvailabilitySelector
                  selected={form.availability}
                  toggleDay={toggleDay}
                  days={availabilityOptions}
                  description="Select all days that work for your schedule. More days mean higher tutor compatibility."
                />
              )}

              {/* Step 5: Time Slots */}
              {step === 5 && (
                <AvailabilitySelector
                  description="Choose one or more convenient learning windows."
                  selected={form.timeSlot}
                  toggleDay={toggleSlot}
                  days={timeSlotOptions}
                />
              )}

              {/* Step 6: Learning Format Preference (Auto-advancing single choice) */}
              {step === 6 && (
                <StepCard
                  badge="QUEST 7 • CLASS ARENA"
                  title="How would you like to learn?"
                  subtitle="Choose your preferred classroom format."
                  options={
                    form.goal === "Academics"
                      ? academicPreferences
                      : tutorPreferences
                  }
                  selected={form.tutor}
                  onSelect={(v) => update("tutor", v)}
                  autoAdvance={(v) => handleAutoAdvance("tutor", v)}
                />
              )}

              {/* Step 7: Arcade Radar Scanner */}
              {step === 7 && (
                <MatchingScreen
                  onContinue={onContinue}
                  mutation={studentLeadsMutation}
                />
              )}

              {/* Step 8: Quest Victory & Hologram Pass */}
              {step === 8 && (
                <StudentSuccess
                  referenceCode={referenceCode}
                  form={form}
                  onContinue={() => (window.location.href = "/")}
                />
              )}
            </AnimatePresence>

            {/* ERROR NOTICE */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 sm:mt-6 rounded-2xl border-2 border-red-300 bg-red-50 p-3 sm:p-4 text-xs sm:text-sm font-bold text-red-700 flex items-center gap-2"
              >
                <span className="text-base shrink-0">⚠️</span>
                <span>{error}</span>
              </motion.div>
            )}

            {/* NAVIGATION BUTTONS (Mobile First Thumb Targets min 48px) */}
            {step < 7 && (
              <div className="mt-5 sm:mt-8 flex items-center gap-2 sm:gap-3 pt-1">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={prev}
                    className="flex items-center justify-center gap-1.5 rounded-full border-2 border-slate-200 bg-white hover:border-yellow-300 hover:bg-yellow-50/40 px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-slate-700 transition active:scale-[0.98] min-h-[48px] touch-manipulation cursor-pointer"
                  >
                    <FaArrowLeft className="text-xs" />
                    <span>Back</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={next}
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-500 px-5 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-black text-slate-950 shadow-md shadow-amber-400/25 transition active:scale-[0.99] min-h-[48px] touch-manipulation cursor-pointer"
                >
                  <span>Continue</span>
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
