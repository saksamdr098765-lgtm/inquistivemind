"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useAuthStore from "@/store/authStore";

import StepCard, {
  AvailabilitySelector,
  ContactForm,
} from "@/app/find-tutor/components/StepCard";

import TutorSuccess from "./TutorSuccess";

import {
  tutorSubjectOptions,
  experienceOptions,
  studentLevelOptions,
  teachingModeOptions,
  tutorAvailabilityOptions,
  tutorTimeSlots,
  qualificationOptions,
} from "./data";

import ProgressTracker from "@/app/find-tutor/components/ProgressTraker";
import { validateStep } from "./Validation";
import { useTeacherLeadMutation } from "@/app/mutations/leadMutation";
import { FaSpinner, FaBolt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { trackFormSubmit } from "@/lib/traking";
import { useSearchParams } from "next/navigation";
import { playSuccess, getSoundMuted, setSoundMuted } from "@/app/find-tutor/utils/soundEffects";

export default function BecomeTutor() {
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const reqId = searchParams.get("id");
  const [step, setStep] = useState(0);
  const [referenceCode, setReferenceCode] = useState("");
  const [soundMuted, setSoundMutedState] = useState(false);
  const [showXpGain, setShowXpGain] = useState(false);
  const teacherLeadsMutation = useTeacherLeadMutation();

  const [form, setForm] = useState({
    subject: "",
    experience: "",
    studentLevel: "",
    mode: "",
    availability: [],
    timeSlot: [],
    qualification: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    avatar: "prof",
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

  const toggleSlot = (timeSlot) => {
    update(
      "timeSlot",
      form.timeSlot.includes(timeSlot)
        ? form.timeSlot.filter((t) => t !== timeSlot)
        : [...form.timeSlot, timeSlot]
    );
  };

  const next = async () => {
    const errorMessage = validateStep(step, form);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setError("");
    playSuccess();
    triggerXpGain();

    if (step === 7) {
      await teacherLeadsMutation.mutateAsync(form, {
        onSuccess: (data) => {
          trackFormSubmit("Tutor Application Lead", "success");
          if (data?.referenceCode) {
            setReferenceCode(data.referenceCode);
          }
        },
      });

      setStep(8);
      return;
    }

    if (step < 8) {
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

  const canContinue = step === 7 ? true : !validateStep(step, form);

  return (
    <section className="relative overflow-hidden py-2 sm:py-8 lg:py-12">
      <div className="relative mx-auto max-w-4xl px-2.5 xs:px-3 sm:px-6 lg:px-8">
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

        {/* GAMIFIED PROGRESS TRACKER (Only on application steps 0 to 7) */}
        {step < 8 && (
          <ProgressTracker
            currentStep={step}
            totalSteps={8}
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

            {form.subject && (
              <button
                type="button"
                onClick={() => jumpToStep(1)}
                className="rounded-full bg-amber-50 border border-amber-300/80 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold text-amber-900 transition hover:bg-amber-100 cursor-pointer shadow-2xs touch-manipulation"
              >
                📚 {form.subject}
              </button>
            )}

            {form.experience && (
              <button
                type="button"
                onClick={() => jumpToStep(2)}
                className="rounded-full bg-sky-50 border border-sky-300/80 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold text-sky-900 transition hover:bg-sky-100 cursor-pointer shadow-2xs touch-manipulation"
              >
                💼 {form.experience}
              </button>
            )}

            {form.studentLevel && (
              <button
                type="button"
                onClick={() => jumpToStep(3)}
                className="rounded-full bg-slate-100 border border-slate-300 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold text-slate-800 transition hover:bg-slate-200 cursor-pointer shadow-2xs touch-manipulation"
              >
                🎯 {form.studentLevel}
              </button>
            )}

            {form.availability?.length > 0 && (
              <button
                type="button"
                onClick={() => jumpToStep(5)}
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
              {/* Step 0: Faculty Character Profile */}
              {step === 0 && (
                <ContactForm form={form} update={update} isTutor={true} />
              )}

              {/* Step 1: Subject (Auto-advancing single choice) */}
              {step === 1 && (
                <StepCard
                  badge="QUEST 2 • TEACHING SUBJECT"
                  title="What would you like to teach?"
                  subtitle="Choose your primary subject domain."
                  options={tutorSubjectOptions}
                  selected={form.subject}
                  onSelect={(v) => update("subject", v)}
                  autoAdvance={(v) => handleAutoAdvance("subject", v)}
                />
              )}

              {/* Step 2: Experience (Auto-advancing single choice) */}
              {step === 2 && (
                <StepCard
                  badge="QUEST 3 • CLASSROOM EXPERIENCE"
                  title="Teaching experience"
                  subtitle="Tell us about your teaching journey."
                  options={experienceOptions}
                  selected={form.experience}
                  onSelect={(v) => update("experience", v)}
                  autoAdvance={(v) => handleAutoAdvance("experience", v)}
                />
              )}

              {/* Step 3: Student Level (Auto-advancing single choice) */}
              {step === 3 && (
                <StepCard
                  badge="QUEST 4 • STUDENT GROUP"
                  title="Who do you teach?"
                  subtitle="Select your preferred student levels."
                  options={studentLevelOptions}
                  selected={form.studentLevel}
                  onSelect={(v) => update("studentLevel", v)}
                  autoAdvance={(v) => handleAutoAdvance("studentLevel", v)}
                />
              )}

              {/* Step 4: Teaching Mode (Auto-advancing single choice) */}
              {step === 4 && (
                <StepCard
                  badge="QUEST 5 • TEACHING FORMAT"
                  title="Teaching mode"
                  subtitle="How would you like to conduct classes?"
                  options={teachingModeOptions}
                  selected={form.mode}
                  onSelect={(v) => update("mode", v)}
                  autoAdvance={(v) => handleAutoAdvance("mode", v)}
                />
              )}

              {/* Step 5: Availability Days */}
              {step === 5 && (
                <AvailabilitySelector
                  selected={form.availability}
                  toggleDay={toggleDay}
                  days={tutorAvailabilityOptions}
                  description="Select all days you are available to take sessions."
                />
              )}

              {/* Step 6: Time Slots */}
              {step === 6 && (
                <AvailabilitySelector
                  description="Select your preferred teaching hours."
                  selected={form.timeSlot}
                  toggleDay={toggleSlot}
                  days={tutorTimeSlots}
                />
              )}

              {/* Step 7: Qualification (Final Application Stage) */}
              {step === 7 && (
                <StepCard
                  badge="QUEST 8 • ACADEMIC CREDENTIALS"
                  title="Highest Qualification"
                  subtitle="Select your highest degree or certified qualification."
                  options={qualificationOptions}
                  selected={form.qualification}
                  onSelect={(v) => update("qualification", v)}
                  autoAdvance={(v) => handleAutoAdvance("qualification", v)}
                />
              )}

              {/* Step 8: Success Screen */}
              {step === 8 && (
                <TutorSuccess
                  form={form}
                  referenceCode={referenceCode || reqId}
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
            {step < 8 && (
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
                  disabled={!canContinue}
                  className={`flex-1 flex items-center justify-center gap-2 rounded-full px-5 sm:px-8 py-3.5 sm:py-4 font-black text-xs sm:text-sm transition active:scale-[0.99] min-h-[48px] touch-manipulation shadow-md ${
                    canContinue
                      ? "bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-500 text-slate-950 shadow-amber-400/25 cursor-pointer"
                      : "cursor-not-allowed bg-slate-200 text-slate-400 shadow-none"
                  }`}
                >
                  {teacherLeadsMutation.isPending && step === 7 ? (
                    <FaSpinner className="animate-spin text-slate-950 text-base" />
                  ) : step === 7 ? (
                    <>
                      <span>Submit Application</span>
                      <FaArrowRight className="text-xs" />
                    </>
                  ) : (
                    <>
                      <span>Continue</span>
                      <FaArrowRight className="text-xs" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
