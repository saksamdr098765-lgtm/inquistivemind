"use client";

import { use } from "react";
import Link from "next/link";
import {
  FaStar,
  FaCheckCircle,
  FaArrowLeft,
  FaGraduationCap,
  FaBriefcase,
  FaLaptop,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUserGraduate,
  FaShieldAlt,
  FaPhoneAlt,
  FaArrowRight,
  FaSpinner,
} from "react-icons/fa";
import { usePublicTutorById } from "@/Hooks/usePublicTutors";

export default function TutorProfilePage({ params }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;

  const { data: tutor, isLoading, error } = usePublicTutorById(id);

  if (isLoading) {
    return (
      <div className="min-h-screen py-24 flex flex-col items-center justify-center text-slate-500">
        <FaSpinner className="animate-spin text-3xl text-amber-500 mb-3" />
        <p className="font-semibold text-sm">Loading tutor profile...</p>
      </div>
    );
  }

  if (error || !tutor) {
    return (
      <div className="min-h-screen py-24 px-4 max-w-lg mx-auto text-center">
        <div className="h-16 w-16 mx-auto rounded-full bg-rose-50 text-rose-600 flex items-center justify-center text-2xl mb-4">
          <FaUserGraduate />
        </div>
        <h2 className="text-xl font-extrabold text-slate-900 mb-2">Tutor Profile Not Found</h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-6">
          This tutor profile may be private, unpublished, or does not exist.
        </p>
        <Link
          href="/tutors"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-400 font-bold text-xs text-slate-950 hover:bg-amber-500 transition"
        >
          <FaArrowLeft /> Browse All Tutors
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/60 py-8 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Navigation link */}
        <div>
          <Link
            href="/tutors"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition"
          >
            <FaArrowLeft /> Back to Tutors Directory
          </Link>
        </div>

        {/* Main Profile Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Avatar */}
            {tutor.profileImage ? (
              <img
                src={tutor.profileImage}
                alt={tutor.fullName}
                className="h-28 w-28 sm:h-32 sm:w-32 rounded-3xl object-cover border-2 border-amber-300 shadow-md"
              />
            ) : (
              <div className="flex h-28 w-28 sm:h-32 sm:w-32 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-500 text-slate-950 font-black text-4xl shadow-md">
                {tutor.fullName?.charAt(0) || "T"}
              </div>
            )}

            {/* Title / Bio */}
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                  <FaShieldAlt className="text-emerald-500" /> Verified Tutor
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-amber-700 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <FaStar className="text-amber-500" /> {tutor.rating ? tutor.rating.toFixed(1) : "5.0"}{" "}
                  ({tutor.reviewsCount || 0} reviews)
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                {tutor.fullName}
              </h1>

              <p className="text-sm sm:text-base font-semibold text-amber-700">
                {tutor.headline || `${tutor.subject} Educator`}
              </p>

              {tutor.city && (
                <p className="text-xs text-slate-500 flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-slate-400" /> {tutor.city}
                </p>
              )}
            </div>

            {/* Rate & CTA */}
            <div className="w-full sm:w-auto p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-center sm:text-right shrink-0 space-y-2">
              {tutor.hourlyRate?.min ? (
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase block">
                    Hourly Tuition
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-slate-900">
                    ₹{tutor.hourlyRate.min}
                    {tutor.hourlyRate.max ? ` - ₹${tutor.hourlyRate.max}` : ""}/hr
                  </span>
                </div>
              ) : (
                <div>
                  <span className="text-xs font-bold text-emerald-700">Custom Fee Structure</span>
                </div>
              )}

              <Link
                href={`/find-tutor`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-bold text-xs sm:text-sm hover:from-amber-500 hover:to-yellow-500 transition shadow-md"
              >
                Book 1-on-1 Class <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column: Bio & Overview */}
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900">About the Tutor</h2>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {tutor.bio ||
                  `${tutor.fullName} is an experienced ${tutor.subject} educator dedicated to helping students develop strong proficiency and confidence through personalized learning approaches.`}
              </p>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">Teaching Experience</span>
                  <span className="font-bold text-slate-800 text-sm">
                    {tutor.experience || "Verified Experience"}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">Qualifications</span>
                  <span className="font-bold text-slate-800 text-sm">
                    {tutor.qualification || "Certified Educator"}
                  </span>
                </div>
              </div>
            </div>

            {/* Student Levels */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-3">
              <h2 className="text-lg font-bold text-slate-900">Student Levels Taught</h2>
              <p className="text-xs text-slate-500">
                Classes are customized for the student's background and learning goals.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1.5 rounded-xl bg-amber-50 text-amber-900 font-bold text-xs border border-amber-200">
                  🎯 {tutor.studentLevel || "Beginner to Advanced"}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs">
                  💻 {tutor.mode || "Online Classes"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Schedule & Availability */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-4">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FaCalendarAlt className="text-amber-500" /> Teaching Schedule
              </h2>

              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Available Days
                </span>
                {tutor.availability && tutor.availability.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {tutor.availability.map((day) => (
                      <span
                        key={day}
                        className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 font-semibold text-xs border border-amber-200"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 italic">Flexible by mutual arrangement</p>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Preferred Time Slots
                </span>
                {tutor.timeSlot && tutor.timeSlot.length > 0 ? (
                  <div className="space-y-1.5">
                    {tutor.timeSlot.map((slot) => (
                      <div
                        key={slot}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-700 p-2 rounded-lg bg-slate-50 border border-slate-100"
                      >
                        <FaClock className="text-amber-500 text-xs" />
                        <span>{slot}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 italic">Morning, afternoon, and evening slots</p>
                )}
              </div>
            </div>

            {/* Quick Consultation CTA */}
            <div className="rounded-3xl bg-gradient-to-br from-amber-400 to-yellow-500 p-6 text-slate-950 space-y-3 shadow-md">
              <h3 className="font-extrabold text-lg leading-snug">
                Want to learn with {tutor.fullName}?
              </h3>
              <p className="text-xs text-slate-900/80 leading-relaxed">
                Submit your learning requirements and our team will schedule a trial session.
              </p>
              <Link
                href="/find-tutor"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-950 text-white font-bold text-xs hover:bg-slate-900 transition shadow-sm"
              >
                Request Trial Class <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
