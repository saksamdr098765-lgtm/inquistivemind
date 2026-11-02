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
  FaCheck,
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

// Standardized options exactly matching Become-a-Tutor & Find-Tutor Lead Flows
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
  { slot: "6:00 AM - 9:00 AM", title: "Morning Fresh", icon: "🌅" },
  { slot: "9:00 AM - 12:00 PM", title: "Midday Prime", icon: "☀️" },
  { slot: "12:00 PM - 3:00 PM", title: "Afternoon Session", icon: "🌤️" },
  { slot: "3:00 PM - 6:00 PM", title: "Post-School Slot", icon: "☕" },
  { slot: "6:00 PM - 9:00 PM", title: "Evening Peak", icon: "🔥" },
  { slot: "9:00 PM - 11:00 PM", title: "Night Owl", icon: "🌙" },
];

const SUBJECT_OPTIONS = [
  { value: "French", label: "French Language (DELF / TEF Canada)" },
  { value: "English", label: "English Speaking & Communication / IELTS" },
  { value: "German", label: "German Language (Goethe A1-B2)" },
  { value: "Spanish", label: "Spanish Language (DELE / SIELE)" },
  { value: "Italian", label: "Italian Language" },
  { value: "Mathematics", label: "Mathematics (CBSE / ICSE / Board)" },
  { value: "Science", label: "Science (Physics / Chemistry / Biology)" },
  { value: "Academic Coaching", label: "Academic Coaching (CBSE / ICSE)" },
  { value: "Other Subject / Language", label: "Other Subject / Language" },
];

const EXPERIENCE_OPTIONS = [
  { value: "Less than 1 Year", label: "Less than 1 Year (Fresh Talent)" },
  { value: "1 - 3 Years", label: "1 - 3 Years (Interactive Educator)" },
  { value: "3 - 5 Years", label: "3 - 5 Years (Experienced Mentor)" },
  { value: "5+ Years", label: "5+ Years (Senior Faculty)" },
];

const STUDENT_LEVEL_OPTIONS = [
  { value: "All Levels", label: "All Levels (All Age Groups)" },
  { value: "Primary School (1-5)", label: "Primary School (Class 1 - 5)" },
  { value: "Middle School (6-8)", label: "Middle School (Class 6 - 8)" },
  { value: "High School (9-10)", label: "High School (Class 9 - 10 / Board Prep)" },
  { value: "Senior Secondary (11-12)", label: "Senior Secondary (Class 11 - 12)" },
  { value: "College Students", label: "College & University Students" },
  { value: "Adult Learners", label: "Adult Learners & Working Professionals" },
  { value: "Beginner", label: "Beginner (A1 / A2)" },
  { value: "Intermediate", label: "Intermediate (B1 / B2)" },
  { value: "Advanced", label: "Advanced (C1 / C2)" },
];

const MODE_OPTIONS = [
  { value: "Online Classes", label: "Online Live Classes" },
  { value: "Home Tutoring (visits student's home)", label: "Home Tutoring (In-Person at Student's Home)" },
  { value: "Hybrid Teaching", label: "Hybrid Teaching (Flexible Online & In-Person)" },
];

const QUALIFICATION_OPTIONS = [
  { value: "Post Graduate", label: "Post Graduate (Master's Degree — M.A., M.Sc., M.Com, M.Ed)" },
  { value: "Graduate", label: "Graduate (Bachelor's Degree — B.A., B.Sc., B.Com, B.Tech)" },
  { value: "B.Ed", label: "B.Ed (Bachelor of Education)" },
  { value: "IELTS / Language Certified", label: "Language Certified (DELF / TEF / Goethe / IELTS 8.0+)" },
  { value: "Teaching Certification", label: "Teaching Certification (CTET / State Board Certified)" },
  { value: "Other Professional Qualification", label: "Other Professional Qualification / Industry Expert" },
];

// Helper to normalize legacy mode strings to modern standardized values
function normalizeMode(val) {
  const m = (val || "").toLowerCase();
  if (m.includes("hybrid") || m.includes("both") || m.includes("flexible")) {
    return "Hybrid Teaching";
  }
  if (m.includes("home") || m.includes("doorstep") || m.includes("offline")) {
    return "Home Tutoring (visits student's home)";
  }
  return "Online Classes";
}

// Helper to normalize legacy experience strings
function normalizeExperience(val) {
  const e = (val || "").toLowerCase();
  if (e.includes("<") || e.includes("less")) return "Less than 1 Year";
  if (e.includes("1-3") || e.includes("1 - 3")) return "1 - 3 Years";
  if (e.includes("3-5") || e.includes("3 - 5")) return "3 - 5 Years";
  if (e.includes("5") || e.includes("8")) return "5+ Years";
  return val || "3 - 5 Years";
}

// Helper to normalize day strings (e.g. "Mon" -> "Monday")
function normalizeDays(daysArray) {
  if (!Array.isArray(daysArray)) return [];
  const map = {
    mon: "Monday",
    monday: "Monday",
    tue: "Tuesday",
    tuesday: "Tuesday",
    wed: "Wednesday",
    wednesday: "Wednesday",
    thu: "Thursday",
    thursday: "Thursday",
    fri: "Friday",
    friday: "Friday",
    sat: "Saturday",
    saturday: "Saturday",
    sun: "Sunday",
    sunday: "Sunday",
  };
  return Array.from(
    new Set(
      daysArray
        .map((d) => map[(d || "").toLowerCase().trim()] || d)
        .filter((d) => DAY_OPTIONS.includes(d))
    )
  );
}

// Helper to normalize time slots
function normalizeTimeSlots(slotsArray) {
  if (!Array.isArray(slotsArray)) return [];
  const validSlots = TIME_SLOT_OPTIONS.map((o) => o.slot);
  return slotsArray.map((s) => {
    const trimmed = (s || "").trim();
    if (validSlots.includes(trimmed)) return trimmed;
    if (trimmed.includes("Morning") || trimmed.includes("8:00 AM") || trimmed.includes("6:00 AM")) {
      return "9:00 AM - 12:00 PM";
    }
    if (trimmed.includes("Afternoon") || trimmed.includes("12:00 PM")) {
      return "12:00 PM - 3:00 PM";
    }
    if (trimmed.includes("Evening") || trimmed.includes("4:00 PM") || trimmed.includes("6:00 PM")) {
      return "6:00 PM - 9:00 PM";
    }
    if (trimmed.includes("Late") || trimmed.includes("9:00 PM")) {
      return "9:00 PM - 11:00 PM";
    }
    return trimmed;
  });
}

export default function TeacherProfile({ user, profile }) {
  const profileUpdateMutation = useTeacherProfileUpdateMutation();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
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
      experience: "3 - 5 Years",
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
      experience: normalizeExperience(profile?.experience),
      studentLevel: profile?.studentLevel || "All Levels",
      mode: normalizeMode(profile?.mode),
      bio: profile?.bio || "",
      availability: normalizeDays(profile?.availability),
      timeSlot: normalizeTimeSlots(profile?.timeSlot),
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

  const onInvalid = (validationErrors) => {
    console.error("Profile Form Validation Errors:", validationErrors);
    const firstKey = Object.keys(validationErrors)[0];
    const msg =
      validationErrors[firstKey]?.message ||
      "Please fill in all required fields accurately before saving.";
    toast.error(msg);
  };

  const onSubmit = async (data) => {
    try {
      const payload = {
        fullName: (data.fullName || "").trim(),
        phone: (data.phone || "").trim(),
        gender: data.gender || "",
        city: (data.city || "").trim(),
        headline: (data.headline || "").trim(),
        subject: data.subject || "French",
        qualification: (data.qualification || "").trim(),
        experience: data.experience || "3 - 5 Years",
        studentLevel: data.studentLevel || "All Levels",
        mode: data.mode || "Online Classes",
        bio: (data.bio || "").trim(),
        availability: Array.isArray(data.availability) ? data.availability : [],
        timeSlot: Array.isArray(data.timeSlot) ? data.timeSlot : [],
      };

      await profileUpdateMutation.mutateAsync(payload);
    } catch (err) {
      console.error("Profile submit error:", err);
    }
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
            Teacher Profile &amp; Lead Synchronization
          </span>
          <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Instructor Profile
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Update your teaching credentials, subject specializations, and schedule. All changes automatically sync with your active student matching leads.
          </p>
        </div>
      </motion.div>

      <form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
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
                  Personal &amp; Contact Information
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Update your contact details to receive batch notifications, demo requests, and counseling links.
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
                  { value: "", label: "Select Gender" },
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                ]}
              />
            </div>
          </section>

          {/* 2. Academic & Teaching Credentials (Synced with Become a Tutor Lead) */}
          <section className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs">
            <div className="mb-5 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-amber-100 text-amber-800 text-base sm:text-lg border border-amber-200">
                <FaGraduationCap />
              </div>
              <div>
                <h2 className="text-base sm:text-xl font-extrabold text-slate-900">
                  Academic &amp; Teaching Credentials
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Fields strictly matched with the Student &amp; Tutor Matching Engine.
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

              <Select
                icon={<FaAward />}
                label="Highest Academic Qualification Level"
                error={errors.qualification}
                {...register("qualification")}
                options={QUALIFICATION_OPTIONS}
              />

              <div className="sm:col-span-2">
                <Input
                  icon={<FaAward />}
                  label="Professional Tagline / Bio Headline"
                  placeholder="e.g. Certified French Faculty & TEF Canada Exam Specialist | 5+ Years Experience"
                  error={errors.headline}
                  {...register("headline")}
                />
              </div>
            </div>
          </section>

          {/* 3. Teaching Preferences & Availability (Synced with Matching Engine) */}
          <section className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs">
            <div className="mb-5 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-orange-100 text-orange-800 text-base sm:text-lg border border-orange-200">
                <FaLaptop />
              </div>
              <div>
                <h2 className="text-base sm:text-xl font-extrabold text-slate-900">
                  Teaching Mode &amp; Schedule Preferences
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Select your available teaching days, standard time slots, and delivery mode.
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
                  Available Teaching Days (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {DAY_OPTIONS.map((day) => {
                    const isSelected = selectedDays.includes(day);
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => toggleDay(day)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
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

              {/* Time Slots Pills (Synced with Become a Tutor & Find Tutor) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Prime Teaching Slots (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {TIME_SLOT_OPTIONS.map(({ slot, title, icon }) => {
                    const isSelected = selectedSlots.includes(slot);
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => toggleSlot(slot)}
                        className={`p-3 rounded-xl text-xs font-bold text-left transition-all border flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-yellow-500 text-slate-950 border-yellow-500 shadow-xs"
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:border-yellow-300 hover:bg-yellow-50/50"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span>{icon}</span>
                            <span>{title}</span>
                          </div>
                          <span className="text-[11px] font-medium opacity-85 block mt-0.5">
                            {slot}
                          </span>
                        </div>
                        {isSelected && <FaCheck className="text-xs text-slate-950 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Teaching Biography */}
              <TextArea
                label="Teacher Introduction &amp; Pedagogy Statement"
                placeholder="Describe your background, teaching methodology, student achievements, and exam preparation pacing..."
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
              {profileUpdateMutation.isPending ? "Synchronizing Profile & Leads..." : "Save Profile Changes"}
            </PortalButton>
          </div>
        </div>
      </form>
    </div>
  );
}
