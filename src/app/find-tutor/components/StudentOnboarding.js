"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
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

export default function StudentOnboarding() {
  const [error, setError] = useState("");
  const [step, setStep] = useState(0);
  const [referenceCode, setReferenceCode] = useState("");

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
  });

  const user = useAuthStore((state) => state.user);

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
    if (step < 7) {
      setStep((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (step > 0) setStep((prev) => prev - 1);
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
    <section className="relative overflow-hidden py-4 sm:py-8 lg:py-12">
      <div className="relative mx-auto max-w-4xl px-3 sm:px-6 lg:px-8">
        <h1 className="sr-only">Find a Tutor — Search Qualified Tutors</h1>

        {/* PROGRESS */}
        <ProgressTracker currentStep={step} totalSteps={8} />

        {/* SELECTED TAGS */}
        {step < 8 && (
          <div className="mb-4 sm:mb-6 flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {form.goal && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="rounded-full bg-yellow-50 border border-yellow-200/80 px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs sm:text-sm font-semibold text-yellow-800 transition hover:bg-yellow-100/70"
              >
                🎯 {form.goal}
              </button>
            )}

            {form.language && (
              <button
                type="button"
                onClick={() => setStep(2)}
                className="rounded-full bg-amber-50 border border-amber-200/80 px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs sm:text-sm font-semibold text-amber-800 transition hover:bg-amber-100/70"
              >
                📚 {form.language}
              </button>
            )}

            {form.level && (
              <button
                type="button"
                onClick={() => setStep(3)}
                className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs sm:text-sm font-semibold text-slate-700 transition hover:bg-slate-200/70"
              >
                📈 {form.level}
              </button>
            )}
          </div>
        )}

        {/* CARD CONTAINER */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[36px] border border-slate-200/90 bg-white/95 p-4 sm:p-7 lg:p-10 shadow-lg sm:shadow-xl shadow-slate-200/50 backdrop-blur-md">
          <div className="relative">
            <AnimatePresence mode="wait">
              {/* Contact */}
              {step === 0 && <ContactForm form={form} update={update} />}

              {/* Goal */}
              {step === 1 && (
                <StepCard
                  title="What are you looking for?"
                  subtitle="We'll personalize your learning journey."
                  options={goalOptions}
                  selected={form.goal}
                  onSelect={(v) => update("goal", v)}
                />
              )}

              {/* Subject / Language */}
              {step === 2 && (
                <StepCard
                  title={
                    form.goal === "Academics"
                      ? "Which subject do you need help with?"
                      : "Which language do you want to learn?"
                  }
                  options={
                    form.goal === "Academics"
                      ? academicSubjects
                      : languageOptions
                  }
                  selected={form.language}
                  onSelect={(v) => update("language", v)}
                />
              )}

              {/* Level */}
              {step === 3 && (
                <StepCard
                  title="What's your current level?"
                  options={
                    form.goal === "Academics" ? academicLevels : levels
                  }
                  selected={form.level}
                  onSelect={(v) => update("level", v)}
                />
              )}

              {/* Availability */}
              {step === 4 && (
                <AvailabilitySelector
                  selected={form.availability}
                  toggleDay={toggleDay}
                  days={availabilityOptions}
                  description="Select all days that work for your schedule."
                />
              )}

              {/* Time Slots */}
              {step === 5 && (
                <AvailabilitySelector
                  description="Select all time slots that work for you."
                  selected={form.timeSlot}
                  toggleDay={toggleSlot}
                  days={timeSlotOptions}
                />
              )}

              {/* Preference */}
              {step === 6 && (
                <StepCard
                  title="How would you like to learn?"
                  options={
                    form.goal === "Academics"
                      ? academicPreferences
                      : tutorPreferences
                  }
                  selected={form.tutor}
                  onSelect={(v) => update("tutor", v)}
                />
              )}

              {/* Matching */}
              {step === 7 && (
                <MatchingScreen
                  onContinue={onContinue}
                  mutation={studentLeadsMutation}
                />
              )}

              {/* Server-Based Success Screen */}
              {step === 8 && (
                <StudentSuccess
                  referenceCode={referenceCode}
                  form={form}
                  onContinue={() => (window.location.href = "/")}
                />
              )}
            </AnimatePresence>

            {/* ERROR */}
            {error && (
              <div className="mt-4 sm:mt-6 rounded-xl sm:rounded-2xl border border-red-200 bg-red-50 p-3 sm:p-4 text-xs sm:text-sm font-semibold text-red-600 flex items-center gap-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* NAVIGATION */}
            {step < 7 && (
              <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3 pt-2">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={prev}
                    className="rounded-full border border-slate-200/90 bg-white px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-700 transition hover:bg-slate-50 active:scale-[0.98] min-h-[44px] flex items-center justify-center cursor-pointer"
                  >
                    Back
                  </button>
                )}

                <button
                  type="button"
                  onClick={next}
                  className="flex-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-md shadow-amber-400/20 transition active:scale-[0.99] min-h-[44px] flex items-center justify-center cursor-pointer"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
