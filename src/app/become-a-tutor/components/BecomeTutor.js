"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
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
import SITE_CONFIG from "@/app/siteConfig";
import { FaSpinner } from "react-icons/fa";
import { trackFormSubmit } from "@/lib/traking";
import { useSearchParams } from "next/navigation";

export default function BecomeTutor() {
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const reqId = searchParams.get("id");
  const [step, setStep] = useState(0);
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

    if (step === 7) {
      await teacherLeadsMutation.mutateAsync(form, {
        onSuccess: () => {
          trackFormSubmit("Tutor Application Lead", "success");
        },
      });

      setStep(8);
      return;
    }

    if (step < 8) {
      setStep((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const canContinue = step === 7 ? true : !validateStep(step, form);

  return (
    <section className="relative overflow-hidden py-4 sm:py-8 lg:py-12">
      <div className="relative mx-auto max-w-4xl px-3 sm:px-6 lg:px-8">
        {/* Progress Tracker */}
        <ProgressTracker currentStep={step} totalSteps={9} />

        {/* Selected Tags / Badges */}
        <div className="mb-4 sm:mb-6 flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {form.subject && (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-full bg-amber-50 border border-amber-200/80 px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs sm:text-sm font-semibold text-amber-700 transition hover:bg-amber-100/70"
            >
              📚 {form.subject}
            </button>
          )}

          {form.experience && (
            <button
              type="button"
              onClick={() => setStep(2)}
              className="rounded-full bg-sky-50 border border-sky-200/80 px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs sm:text-sm font-semibold text-sky-700 transition hover:bg-sky-100/70"
            >
              💼 {form.experience}
            </button>
          )}

          {form.studentLevel && (
            <button
              type="button"
              onClick={() => setStep(3)}
              className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs sm:text-sm font-semibold text-slate-700 transition hover:bg-slate-200/70"
            >
              🎯 {form.studentLevel}
            </button>
          )}
        </div>

        {/* Form Card Container */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[36px] border border-slate-200/90 bg-white/95 p-4 sm:p-7 lg:p-10 shadow-lg sm:shadow-xl shadow-slate-200/50 backdrop-blur-md">
          <AnimatePresence mode="wait">
            {/* Contact */}
            {step === 0 && <ContactForm form={form} update={update} isTutor={true} />}

            {/* Subject */}
            {step === 1 && (
              <StepCard
                title="What would you like to teach?"
                subtitle="Choose your primary subject."
                options={tutorSubjectOptions}
                selected={form.subject}
                onSelect={(v) => update("subject", v)}
              />
            )}

            {/* Experience */}
            {step === 2 && (
              <StepCard
                title="Teaching experience"
                subtitle="Tell us about your background."
                options={experienceOptions}
                selected={form.experience}
                onSelect={(v) => update("experience", v)}
              />
            )}

            {/* Student Level */}
            {step === 3 && (
              <StepCard
                title="Who do you teach?"
                subtitle="Select your preferred student groups."
                options={studentLevelOptions}
                selected={form.studentLevel}
                onSelect={(v) => update("studentLevel", v)}
              />
            )}

            {/* Teaching Mode */}
            {step === 4 && (
              <StepCard
                title="Teaching mode"
                subtitle="How would you like to teach?"
                options={teachingModeOptions}
                selected={form.mode}
                onSelect={(v) => update("mode", v)}
              />
            )}

            {/* Availability */}
            {step === 5 && (
              <AvailabilitySelector
                selected={form.availability}
                toggleDay={toggleDay}
                days={tutorAvailabilityOptions}
                description="Select all days you are available to teach."
              />
            )}

            {/* Time Slots */}
            {step === 6 && (
              <AvailabilitySelector
                description="Select all time slots that work for you."
                selected={form.timeSlot}
                toggleDay={toggleSlot}
                days={tutorTimeSlots}
              />
            )}

            {/* Qualification */}
            {step === 7 && (
              <StepCard
                title="Qualifications"
                subtitle="Tell us about your credentials."
                options={qualificationOptions}
                selected={form.qualification}
                onSelect={(v) => update("qualification", v)}
              />
            )}

            {/* Success */}
            {step === 8 && (
              <TutorSuccess onContinue={() => (window.location.href = "/")} />
            )}
          </AnimatePresence>

          {/* Validation Error Message */}
          {error && (
            <div className="mt-4 sm:mt-6 rounded-xl sm:rounded-2xl border border-red-200 bg-red-50 p-3 sm:p-4 text-xs sm:text-sm font-semibold text-red-600 flex items-center gap-2">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Navigation Controls */}
          {step < 8 && (
            <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3 pt-2">
              {step > 0 && (
                <button
                  type="button"
                  onClick={prev}
                  className="rounded-full border border-slate-200/90 bg-white px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-700 transition hover:bg-slate-50 active:scale-[0.98] min-h-[44px] flex items-center justify-center"
                >
                  Back
                </button>
              )}

              <button
                type="button"
                onClick={next}
                disabled={!canContinue}
                className={`flex-1 rounded-full px-5 sm:px-6 py-3 sm:py-3.5 font-bold text-xs sm:text-sm flex items-center justify-center transition active:scale-[0.99] min-h-[44px] shadow-sm ${
                  canContinue
                    ? "bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 hover:from-amber-500 hover:to-yellow-500 shadow-amber-400/20 shadow-md cursor-pointer"
                    : "cursor-not-allowed bg-slate-200 text-slate-400"
                }`}
              >
                {teacherLeadsMutation.isPending && step === 7 ? (
                  <FaSpinner className="animate-spin text-slate-950 text-base" />
                ) : step === 7 ? (
                  "Submit Application"
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
