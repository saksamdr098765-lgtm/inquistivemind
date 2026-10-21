"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaUser, FaBookOpen, FaSignal, FaClock } from "react-icons/fa";
import { getAllCourses } from "@/app/data/courses";

function TrialFormInner() {
  const searchParams = useSearchParams();
  const initialCourse = searchParams.get("course") || "";
  const initialLevel = searchParams.get("level") || "";
  const initialType = searchParams.get("type") || "";

  const courses = getAllCourses();

  const [formData, setFormData] = useState({
    fullName: "",
    whatsappNumber: "",
    course: initialCourse || (courses[0]?.slug || "french-a1-beginner-course"),
    level: initialLevel || "Beginner (Starting from scratch)",
    timing: "Flexible / Any Slot",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name.";
    }

    const cleanPhone = formData.whatsappNumber.replace(/[\s\-\(\)\+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.whatsappNumber = "Please enter a valid 10-digit WhatsApp number.";
    }

    if (!formData.course) {
      errs.course = "Please select a course.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };


const handleSubmit = (e) => {
  e.preventDefault();

  if (!validate()) return;

  const selectedCourseObj = courses.find(
    (c) => c.slug === formData.course
  );

  const message = `Hello! My name is ${formData.fullName}.
I would like to book a free trial class.

Course: ${selectedCourseObj?.title || formData.course}
Level: ${formData.level}
Preferred Timing: ${formData.timing}
My WhatsApp Number: ${formData.whatsappNumber}`;

  const whatsappUrl = `https://wa.me/919878761488?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  setIsSuccess(true);
};


  const selectedCourseObj = courses.find((c) => c.slug === formData.course);
  const encodedWhatsapp = encodeURIComponent(
    `Hello! My name is ${formData.fullName || "Student"}. I would like to book a free trial class for ${selectedCourseObj?.title || formData.course} (${formData.level}). My phone number is ${formData.whatsappNumber}.`
  );
  const whatsappUrl = `https://wa.me/919878761488?text=${encodedWhatsapp}`;

  if (isSuccess) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-yellow-300 bg-white p-8 sm:p-10 shadow-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
          <FaCheckCircle className="text-3xl" />
        </div>
        <span className="inline-block rounded-full bg-yellow-100 text-yellow-800 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-2">
          Request Received
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Your Free Trial Class is Confirmed!
        </h2>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          Thank you, <strong>{formData.fullName}</strong>. Our academic team will contact you via WhatsApp at <strong>{formData.whatsappNumber}</strong> within 2 hours to share your Zoom class link and mentor details.
        </p>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-emerald-700 transition shadow-md"
          >
            <FaWhatsapp className="text-base" />
            <span>Connect on WhatsApp Now</span>
          </a>

          <Link
            href="/courses"
            className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center rounded-full border border-slate-200 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Return to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
      <div className="text-center max-w-lg mx-auto">
        <span className="inline-block rounded-full bg-yellow-400/20 text-yellow-800 border border-yellow-300 px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2">
          100% FREE • NO PAYMENT REQUIRED
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Book Your Free Trial Class
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
          Experience our interactive live classroom, test your speaking reflexes with certified mentors, and receive an honest level assessment.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Name *
          </label>
          <div className="relative">
            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className={`min-h-[48px] w-full rounded-2xl border px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? "border-rose-400 bg-rose-50/30 focus:ring-rose-200"
                  : "border-slate-200 bg-slate-50 focus:border-yellow-400 focus:bg-white focus:ring-yellow-400/20"
              }`}
            />
          </div>
          {errors.fullName && <p className="mt-1 text-xs text-rose-600 font-medium">{errors.fullName}</p>}
        </div>

        {/* WhatsApp Mobile Number */}
        <div>
          <label htmlFor="whatsappNumber" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            WhatsApp Mobile Number *
          </label>
          <div className="relative">
            <input
              id="whatsappNumber"
              type="tel"
              value={formData.whatsappNumber}
              onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
              placeholder="e.g. 9876543210"
              className={`min-h-[48px] w-full rounded-2xl border px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                errors.whatsappNumber
                  ? "border-rose-400 bg-rose-50/30 focus:ring-rose-200"
                  : "border-slate-200 bg-slate-50 focus:border-yellow-400 focus:bg-white focus:ring-yellow-400/20"
              }`}
            />
          </div>
          <p className="mt-1 text-[11px] text-slate-400">We will send your Zoom link and trial timings directly on WhatsApp.</p>
          {errors.whatsappNumber && <p className="mt-1 text-xs text-rose-600 font-medium">{errors.whatsappNumber}</p>}
        </div>

        {/* Course Selection */}
        <div>
          <label htmlFor="course" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Select Course of Interest *
          </label>
          <select
            id="course"
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            className="min-h-[48px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-yellow-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
          >
            {courses.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.shortTitle || c.title} ({c.level})
              </option>
            ))}
          </select>
        </div>

        {/* Current Level / Objective */}
        <div>
          <label htmlFor="level" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Your Current Proficiency or Objective
          </label>
          <select
            id="level"
            value={formData.level}
            onChange={(e) => setFormData({ ...formData, level: e.target.value })}
            className="min-h-[48px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-yellow-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
          >
            <option value="Beginner (Zero prior experience)">Beginner (Zero prior experience)</option>
            <option value="Elementary (Know basic words & greetings)">Elementary (Know basic words & greetings)</option>
            <option value="Intermediate (Can speak but make grammar errors)">Intermediate (Can speak but make grammar errors)</option>
            <option value="Targeting Canada Express Entry PR (CLB 7+ / TEF)">Targeting Canada Express Entry PR (CLB 7+ / TEF)</option>
            <option value="Professional English Fluency & Interview Prep">Professional English Fluency & Interview Prep</option>
            <option value="School Student CBSE / ICSE (Class 1-12)">School Student CBSE / ICSE (Class 1-12)</option>
          </select>
        </div>

        {/* Timing Preference */}
        <div>
          <label htmlFor="timing" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Preferred Batch Slot
          </label>
          <select
            id="timing"
            value={formData.timing}
            onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
            className="min-h-[48px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-yellow-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
          >
            <option value="Morning (07:30 AM – 10:00 AM)">Morning (07:30 AM – 10:00 AM)</option>
            <option value="Afternoon (02:00 PM – 05:00 PM)">Afternoon (02:00 PM – 05:00 PM)</option>
            <option value="Evening (06:00 PM – 08:30 PM)">Evening (06:00 PM – 08:30 PM)</option>
            <option value="Weekend Intensive">Weekend Intensive</option>
            <option value="Flexible / Any Slot">Flexible / Any Slot</option>
          </select>
        </div>

        {/* Submit Button (Min 48px height) */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="min-h-[48px] w-full rounded-full bg-yellow-400 px-6 py-3 text-sm sm:text-base font-bold text-slate-950 shadow-lg shadow-yellow-400/20 transition hover:bg-yellow-300 hover:shadow-yellow-400/35 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Booking Your Free Seat..." : "Confirm Free Trial Class Booking →"}
        </button>
      </form>

      {/* Alternative Immediate WhatsApp & Phone Action */}
      <div className="mt-8 pt-6 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-500 font-medium mb-3">Prefer immediate personal assistance?</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/919878761488?text=Hello!%20I%20would%20like%20to%20book%20a%20free%20trial%20class%20at%20Inquisitive%20Mind%20Academy."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-emerald-500 bg-emerald-50 px-5 py-2 text-xs sm:text-sm font-semibold text-emerald-800 hover:bg-emerald-100 transition"
          >
            <FaWhatsapp className="text-emerald-600 text-base" />
            <span>Chat Directly on WhatsApp</span>
          </a>

          <a
            href="tel:+919878761488"
            className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            <FaPhoneAlt className="text-slate-400 text-xs" />
            <span>Call +91 98787 61488</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BookFreeTrialClient() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<div className="text-center py-20 text-slate-500">Loading booking form...</div>}>
        <TrialFormInner />
      </Suspense>
    </div>
  );
}
