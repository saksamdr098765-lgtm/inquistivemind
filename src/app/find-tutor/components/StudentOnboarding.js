"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import MatchingScreen from "./MatchingScreen";
import StepCard, {

  ContactForm,
  AvailabilitySelector,
} from "./StepCard";

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
import SITE_CONFIG from "@/app/siteConfig";
import { studentsLeadsApi } from "@/app/api/LeadApi";
import { toast } from "sonner";
import { useStudentLeadMutation } from "@/app/mutations/leadMutation";
import { data } from "framer-motion/client";
import { trackWhatsAppClick } from "@/lib/traking";

export default function StudentOnboarding() {
  const [error, setError] = useState("");
  const [step, setStep] = useState(0);
  const { whatsappNumber } = SITE_CONFIG;

  const [form, setForm] = useState({
    goal: "",
    language: "",
    level: "",
  
    availability: [],
    timeSlot: "",
    tutor: "",
    name: "",
    email: "",
    phone: "",
  });

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
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
    if (errorMessage) return setError(errorMessage);

    setError("");
   if (step < 7) {
  setStep((prev) => prev + 1);
}
  };

  const prev = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const message = `
🎓 New Tutor Request

👤 Name: ${form.name}
📧 Email: ${form.email}
📱 Phone: ${form.phone}

🎯 Goal: ${form.goal}
📚 Subject: ${form.language}
📈 Level: ${form.level}

📅 Days: ${form.availability.join(", ")}
⏰ Time: ${form.timeSlot}


`;
const studentLeadsMutation=useStudentLeadMutation()
const onContinue = async () => {
   await studentLeadsMutation.mutateAsync(form,{onSuccess:()=>{
    trackWhatsAppClick("find-tutor")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank")
   }})

     
    

};

  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-20">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-yellow-200/30 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-amber-200/20 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-6 lg:px-8 lg:py-10">

        {/* PROGRESS */}
        <ProgressTracker currentStep={step} totalSteps={8} />

        {/* TAGS */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {form.goal && (
            <button onClick={()=>{setStep(1)}} className="rounded-full bg-yellow-100 px-4 py-2 text-sm text-yellow-700">
              {form.goal}
            </button>
          )}

          {form.language && (
            <button onClick={()=>{setStep(2)}} className="rounded-full bg-amber-100 px-4 py-2 text-sm text-amber-700">
              {form.language}
            </button>
          )}

          {form.level && (
            <button onClick={()=>{setStep(3)}} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              {form.level}
            </button>
          )}
        </div>

        {/* CARD */}
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-[40px] border border-white/60 bg-white/90 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:p-12">

            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-yellow-200/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-amber-200/20 blur-3xl" />

            <div className="relative">

           <AnimatePresence mode="wait">

  {/* Contact */}
  {step === 0 && (
    <ContactForm form={form} update={update} />
  )}

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
        form.goal === "Academics"
          ? academicLevels
          : levels
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
    />
  )}

  {/* Time */}
  {step === 5 && (
    <StepCard
      title="What time works best for you?"
      options={timeSlotOptions}
      selected={form.timeSlot}
      onSelect={(v) => update("timeSlot", v)}
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

</AnimatePresence>

              {/* ERROR */}
              {error && (
                <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* NAV */}
           {step < 7 && (
                <div className="mt-10 flex items-center gap-3">

                  {step > 0 && (
                    <button
                      onClick={prev}
                      className="rounded-full border border-slate-200 px-6 py-3 text-sm text-slate-600 hover:bg-slate-50"
                    >
                      Back
                    </button>
                  )}

                  <button
                    onClick={next}
                    className="flex-1 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-4 font-medium text-white shadow-lg transition hover:scale-[1.01]"
                  >
                    Continue
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}