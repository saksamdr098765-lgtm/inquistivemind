"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import StepCard, {
  AvailabilitySelector,
  BudgetSelector,
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
  earningOptions,
  qualificationOptions,
} from "./data";

import ProgressTracker from "@/app/find-tutor/components/ProgressTraker";
import { validateStep } from "./Validation";

export default function BecomeTutor() {
  const [error, setError] = useState("");
  const [step, setStep] = useState(0);

  const [form, setForm] = useState({
    subject: "",
    experience: "",
    studentLevel: "",
    mode: "",
    availability: [],
    timeSlot: "",
    earnings: "",
    qualification: "",
    name: "",
    email: "",
    phone: "",
    city: "",
  });

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

  const next = () => {
    const errorMessage = validateStep(step, form);

    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setError("");

    // CONTACT STEP → SUBMIT
    if (step === 8) {
      const message = `
🎓 New Tutor Application

👤 Name: ${form.name || ""}
📧 Email: ${form.email || ""}
📱 Phone: ${form.phone || ""}

📚 Subject: ${form.subject || ""}
👨‍🏫 Experience: ${form.experience || ""}
🎯 Student Level: ${form.studentLevel || ""}
💻 Teaching Mode: ${form.mode || ""}

📅 Availability: ${(form.availability || []).join(", ") || "Not provided"}

⏰ Time Slot: ${form.timeSlot || ""}
💰 Earnings: ${form.earnings || ""}
🎓 Qualification: ${form.qualification || ""}
`;

      const whatsappNumber = "919876543210";

      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      setStep(9);
      return;
    }

    if (step < 9) {
      setStep((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const canContinue = step === 8 ? true : !validateStep(step, form);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-20">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-sky-400/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">

        {/* Progress */}
        <ProgressTracker currentStep={step} totalSteps={10} />

        {/* Pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {form.subject && (
            <span className="rounded-full bg-amber-50 px-4 py-2 text-sm text-amber-600">
              {form.subject}
            </span>
          )}

          {form.experience && (
            <span className="rounded-full bg-sky-50 px-4 py-2 text-sm text-sky-600">
              {form.experience}
            </span>
          )}

          {form.studentLevel && (
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              {form.studentLevel}
            </span>
          )}
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-[40px] border border-slate-100 bg-white p-6 shadow-xl lg:p-12">

            <AnimatePresence mode="wait">

              {step === 0 && (
                <StepCard
                  title="What would you like to teach?"
                  subtitle="Choose your primary subject."
                  options={tutorSubjectOptions}
                  selected={form.subject}
                  onSelect={(v) => update("subject", v)}
                />
              )}

              {step === 1 && (
                <StepCard
                  title="Teaching experience"
                  subtitle="Tell us about your background."
                  options={experienceOptions}
                  selected={form.experience}
                  onSelect={(v) => update("experience", v)}
                />
              )}

              {step === 2 && (
                <StepCard
                  title="Who do you teach?"
                  subtitle="Select your preferred student groups."
                  options={studentLevelOptions}
                  selected={form.studentLevel}
                  onSelect={(v) => update("studentLevel", v)}
                />
              )}

              {step === 3 && (
                <StepCard
                  title="Teaching mode"
                  subtitle="How would you like to teach?"
                  options={teachingModeOptions}
                  selected={form.mode}
                  onSelect={(v) => update("mode", v)}
                />
              )}

              {step === 4 && (
                <AvailabilitySelector
                  selected={form.availability}
                  toggleDay={toggleDay}
                  days={tutorAvailabilityOptions}
                />
              )}

              {step === 5 && (
                <StepCard
                  title="Preferred teaching hours"
                  subtitle="Choose the time that suits you."
                  options={tutorTimeSlots}
                  selected={form.timeSlot}
                  onSelect={(v) => update("timeSlot", v)}
                />
              )}

              {step === 6 && (
                <BudgetSelector
                  value={form.earnings}
                  onChange={(v) => update("earnings", v)}
                  budgets={earningOptions}
                />
              )}

              {step === 7 && (
                <StepCard
                  title="Qualifications"
                  subtitle="Tell us about your credentials."
                  options={qualificationOptions}
                  selected={form.qualification}
                  onSelect={(v) => update("qualification", v)}
                />
              )}

              {step === 8 && (
                <ContactForm form={form} update={update} />
              )}

              {step === 9 && (
                <TutorSuccess onContinue={() => (window.location.href = "/")} />
              )}

            </AnimatePresence>

            {/* Error */}
            {error && (
              <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Navigation */}
            {step < 9 && (
              <div className="mt-10 flex items-center gap-3">

                {step > 0 && (
                  <button
                    onClick={prev}
                    className="rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                  >
                    Back
                  </button>
                )}

                <button
                  onClick={next}
                  disabled={!canContinue}
                  className={`flex-1 rounded-full px-6 py-4 font-medium transition
                    ${
                      canContinue
                        ? "bg-gradient-to-r from-amber-400 to-sky-400 text-white shadow-lg"
                        : "cursor-not-allowed bg-slate-200 text-slate-400"
                    }`}
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