"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  FaSave,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaVenusMars,
  FaGraduationCap,
  FaAward,
  FaChalkboardTeacher,
  FaLaptop,
  FaCalendarAlt,
  FaClock,
  FaBookOpen,
} from "react-icons/fa";

import ProfileSidebar from "@/app/student-profile/components/profile/ProfileSidebar";
import Input from "@/app/student-profile/components/profile/Input";
import Select from "@/app/student-profile/components/profile/Select";
import TextArea from "@/app/student-profile/components/profile/TextArea";
import { profileSchema } from "@/schemas/profileSchema";
import useAuthStore from "@/store/authStore";
import { useProfileImageMutation } from "@/app/mutations/userMutation";
import { useTeacherProfileUpdateMutation } from "@/app/mutations/teacherMutations";
import PortalButton from "@/app/Components/portal-ui/PortalButton";

const DAY_OPTIONS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const TIME_SLOT_OPTIONS = [
  "Morning (8:00 AM - 12:00 PM)",
  "Afternoon (12:00 PM - 4:00 PM)",
  "Evening (4:00 PM - 8:00 PM)",
  "Late Evening (8:00 PM - 10:00 PM)",
];

const SUBJECT_OPTIONS = [
  { value: "French", label: "French Language" },
  { value: "German", label: "German Language" },
  { value: "English", label: "English Speaking & Communication" },
  { value: "Mathematics", label: "Mathematics" },
  { value: "Science", label: "Science (Physics / Chemistry / Biology)" },
  { value: "Spanish", label: "Spanish Language" },
  { value: "Academic Coaching", label: "Academic Coaching (CBSE / ICSE)" },
  { value: "Other", label: "Other Academic Subject" },
];

const EXPERIENCE_OPTIONS = [
  { value: "< 1 Year", label: "Less than 1 Year" },
  { value: "1-3 Years", label: "1 - 3 Years" },
  { value: "3-5 Years", label: "3 - 5 Years" },
  { value: "5-8 Years", label: "5 - 8 Years" },
  { value: "8+ Years", label: "8+ Years" },
];

const STUDENT_LEVEL_OPTIONS = [
  { value: "All Levels", label: "All Levels" },
  { value: "Beginner (A1 / A2)", label: "Beginner (A1 / A2)" },
  { value: "Intermediate (B1 / B2)", label: "Intermediate (B1 / B2)" },
  { value: "Advanced (C1 / C2)", label: "Advanced (C1 / C2)" },
  { value: "School Curriculum (CBSE / ICSE)", label: "School Curriculum (CBSE / ICSE)" },
  { value: "TEF / TCF Canada Exam Prep", label: "TEF / TCF Canada Exam Prep" },
];

const MODE_OPTIONS = [
  { value: "Online Classes", label: "Online Live Classes" },
  { value: "Offline / Doorstep Tutoring", label: "Offline / Doorstep Home Tutoring" },
  { value: "Flexible / Hybrid Both", label: "Flexible / Hybrid (Online & Offline)" },
];

export default function TeacherProfile({ user, profile }) {
  const profileUpdateMutation = useTeacherProfileUpdateMutation();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting, isDirty, dirtyFields },
  } = useForm({
    resolver: zodResolver(profileSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      city: "",
      headline: "",
      subject: "French",
      qualification: "",
      experience: "3-5 Years",
      studentLevel: "All Levels",
      mode: "Online Classes",
      bio: "",
      availability: [],
      timeSlot: [],
    },
  });

  const selectedDays = watch("availability") || [];
  const selectedSlots = watch("timeSlot") || [];

  const { mutate: uploadImage, isPending: isUploading } = useProfileImageMutation();

  useEffect(() => {
    if (!user) return;

    reset({
      fullName: user.fullName || "",
      email: user.email || "",
      phone: user.phone || "",
      gender: profile?.gender || "",
      city: profile?.city || "",
      headline: profile?.headline || "",
      subject: profile?.subject || "French",
      qualification: profile?.qualification || "",
      experience: profile?.experience || "3-5 Years",
      studentLevel: profile?.studentLevel || "All Levels",
      mode: profile?.mode || "Online Classes",
      bio: profile?.bio || "",
      availability: Array.isArray(profile?.availability) ? profile.availability : [],
      timeSlot: Array.isArray(profile?.timeSlot) ? profile.timeSlot : [],
    });
  }, [user, profile, reset]);

  const toggleDay = (day) => {
    const current = [...selectedDays];
    const index = current.indexOf(day);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(day);
    }
    setValue("availability", current, { shouldDirty: true, shouldValidate: true });
  };

  const toggleSlot = (slot) => {
    const current = [...selectedSlots];
    const index = current.indexOf(slot);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(slot);
    }
    setValue("timeSlot", current, { shouldDirty: true, shouldValidate: true });
  };

  const onSubmit = async (data) => {
    if (!isDirty) {
      toast.info("No changes were made to your profile.");
      return;
    }

    const payload = {
      fullName: data.fullName,
      phone: data.phone,
      gender: data.gender,
      city: data.city,
      headline: data.headline,
      subject: data.subject,
      qualification: data.qualification,
      experience: data.experience,
      studentLevel: data.studentLevel,
      mode: data.mode,
      bio: data.bio,
      availability: data.availability,
      timeSlot: data.timeSlot,
    };

    await profileUpdateMutation.mutateAsync(payload);
  };

  const handleImageUpload = (file, done) => {
    uploadImage(file, {
      onSuccess: () => {
        done();
      },
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 max-w-7xl mx-auto">
      {/* Hero Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-500 to-yellow-500 p-5 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6"
      >
        <div className="absolute -right-10 -top-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />

        <div className="relative">
          <span className="inline-flex rounded-full bg-white/20 border border-white/30 px-3 py-0.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
            Teacher Profile & Credentials
          </span>
          <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Instructor Profile
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Manage your personal details, academic qualifications, teaching subjects, and batch availability.
          </p>
        </div>
      </motion.div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 sm:gap-6 lg:grid-cols-[300px_1fr]"
      >
        {/* Sidebar */}
        <ProfileSidebar
          user={user}
          profile={profile}
          onImageUpload={handleImageUpload}
          isUploading={isUploading}
        />

        {/* Form Body */}
        <div className="space-y-5 sm:space-y-6">
          {/* 1. Personal & Contact Details */}
          <section className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs">
            <div className="mb-5 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-yellow-100 text-yellow-800 text-base sm:text-lg border border-yellow-200">
                <FaUser />
              </div>
              <div>
                <h2 className="text-base sm:text-xl font-extrabold text-slate-900">
                  Personal & Contact Information
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Update your contact details to receive batch notifications and communication.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                icon={<FaUser />}
                label="Full Name"
                placeholder="e.g. Rohini Gupta"
                error={errors.fullName}
                {...register("fullName")}
              />

              <Input
                icon={<FaEnvelope />}
                label="Email Address"
                placeholder="Email address"
                disabled
                error={errors.email}
                {...register("email")}
              />

              <Input
                icon={<FaPhoneAlt />}
                label="Phone Number"
                placeholder="+91 98552 93752"
                error={errors.phone}
                {...register("phone")}
              />

              <Input
                icon={<FaMapMarkerAlt />}
                label="City / Base Location"
                placeholder="e.g. Chandigarh, Mohali, Panchkula"
                error={errors.city}
                {...register("city")}
              />

              <Select
                icon={<FaVenusMars />}
                label="Gender"
                error={errors.gender}
                {...register("gender")}
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                ]}
              />
            </div>
          </section>

          {/* 2. Academic & Teaching Credentials */}
          <section className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs">
            <div className="mb-5 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-amber-100 text-amber-800 text-base sm:text-lg border border-amber-200">
                <FaGraduationCap />
              </div>
              <div>
                <h2 className="text-base sm:text-xl font-extrabold text-slate-900">
                  Academic & Teaching Credentials
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Your academic degrees, subject specializations, and years of instructional experience.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Select
                icon={<FaBookOpen />}
                label="Primary Subject Specialization"
                error={errors.subject}
                {...register("subject")}
                options={SUBJECT_OPTIONS}
              />

              <Input
                icon={<FaAward />}
                label="Highest Qualification / Certification"
                placeholder="e.g. M.A. in French / DELF C1 Certified"
                error={errors.qualification}
                {...register("qualification")}
              />

              <Select
                icon={<FaChalkboardTeacher />}
                label="Teaching Experience"
                error={errors.experience}
                {...register("experience")}
                options={EXPERIENCE_OPTIONS}
              />

              <Select
                icon={<FaGraduationCap />}
                label="Target Student Level"
                error={errors.studentLevel}
                {...register("studentLevel")}
                options={STUDENT_LEVEL_OPTIONS}
              />

              <div className="sm:col-span-2">
                <Input
                  icon={<FaAward />}
                  label="Professional Headline / Tagline"
                  placeholder="e.g. Certified French Faculty & TEF Canada Exam Specialist with 6+ Years Experience"
                  error={errors.headline}
                  {...register("headline")}
                />
              </div>
            </div>
          </section>

          {/* 3. Teaching Preferences & Availability */}
          <section className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs">
            <div className="mb-5 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-orange-100 text-orange-800 text-base sm:text-lg border border-orange-200">
                <FaLaptop />
              </div>
              <div>
                <h2 className="text-base sm:text-xl font-extrabold text-slate-900">
                  Teaching Mode & Schedule Preferences
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Select your available teaching days, preferred time slots, and instructional delivery mode.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <Select
                icon={<FaLaptop />}
                label="Preferred Teaching Mode"
                error={errors.mode}
                {...register("mode")}
                options={MODE_OPTIONS}
              />

              {/* Day Availability Pills */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Preferred Teaching Days (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {DAY_OPTIONS.map((day) => {
                    const isSelected = selectedDays.includes(day);
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => toggleDay(day)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                          isSelected
                            ? "bg-yellow-500 text-slate-950 border-yellow-500 shadow-xs"
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:border-yellow-300 hover:bg-yellow-50/50"
                        }`}
                      >
                        {isSelected ? `✓ ${day}` : day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots Pills */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Preferred Time Slots (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {TIME_SLOT_OPTIONS.map((slot) => {
                    const isSelected = selectedSlots.includes(slot);
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => toggleSlot(slot)}
                        className={`p-3 rounded-xl text-xs font-bold text-left transition-all border flex items-center justify-between ${
                          isSelected
                            ? "bg-yellow-500 text-slate-950 border-yellow-500 shadow-xs"
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:border-yellow-300 hover:bg-yellow-50/50"
                        }`}
                      >
                        <span>{slot}</span>
                        {isSelected && <span className="text-xs font-extrabold">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Teaching Biography */}
              <TextArea
                label="Teaching Biography & Pedagogy"
                placeholder="Describe your background, teaching methodology, student achievements, and curriculum pacing..."
                rows={4}
                error={errors.bio}
                {...register("bio")}
              />
            </div>
          </section>

          {/* Form Submit Button */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <PortalButton
              type="submit"
              icon={FaSave}
              isLoading={isSubmitting || profileUpdateMutation.isPending}
              disabled={isSubmitting || profileUpdateMutation.isPending}
              className="w-full sm:w-auto"
            >
              {profileUpdateMutation.isPending ? "Saving Changes..." : "Save Profile Changes"}
            </PortalButton>
          </div>
        </div>
      </form>
    </div>
  );
}
