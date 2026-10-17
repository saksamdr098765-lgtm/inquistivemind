"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaUserShield,
  FaCheckCircle,
  FaBan,
  FaSave,
  FaTimes,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBook,
  FaUserGraduate,
  FaLaptop,
  FaCalendarAlt,
  FaClock,
  FaUndo,
  FaVenusMars,
  FaIdCard,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { profileSchema } from "@/schemas/profileSchema";
import { useAdminUserById } from "@/Hooks/useUserByIdAdmin";
import capitalizeFirstLetter from "@/Utils/captilizeFirstLetter";
import {
  useAdminApproveUser,
  useAdminBlockUser,
  useAdminRejectUser,
  useAdminTeacherUpdateMutation,
  useAdminUnblockUser,
  useAdminUserUpdateMutation,
} from "@/app/mutations/AdminMutations";

import Modal from "@/app/Components/ui/Modals";
import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalInput from "@/app/Components/portal-ui/PortalInput";
import PortalSelect from "@/app/Components/portal-ui/PortalSelect";
import PortalTextArea from "@/app/Components/portal-ui/PortalTextArea";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import PortalSkeleton from "@/app/Components/portal-ui/PortalSkeleton";
import { useAdminTeacherById } from "@/Hooks/useAdminGetTeacher";

const tutorSubjectOptions = [
  "English",
  "French",
  "Mathematics",
  "Science",
  "German",
  "Spanish",
  "Physics",
  "Chemistry",
  "Biology",
  "Social Studies",
  "Hindi",
  "Other Subject",
];

const experienceOptions = [
  "Less than 1 Year",
  "1 - 3 Years",
  "3 - 5 Years",
  "5+ Years",
];

const studentLevelOptions = [
  "Primary School (1-5)",
  "Middle School (6-8)",
  "High School (9-10)",
  "Senior Secondary (11-12)",
  "College Students",
  "Adult Learners",
];

const teachingModeOptions = [
  "Online Classes",
  "Offline Classes",
  "Hybrid Teaching",
];

const qualificationOptions = [
  "Graduate",
  "Post Graduate",
  "B.Ed",
  "Teaching Certification",
  "IELTS / Language Certified",
  "Other Professional Qualification",
];

const tutorAvailabilityOptions = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

const tutorTimeSlots = [
  "6:00 AM - 9:00 AM",
  "9:00 AM - 12:00 PM",
  "12:00 PM - 3:00 PM",
  "3:00 PM - 6:00 PM",
  "6:00 PM - 9:00 PM",
  "9:00 PM - 11:00 PM",
];

export default function UserDetailsPage({ id }) {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const updateMutation = useAdminUserUpdateMutation(id);
  const teacherUpdate=useAdminTeacherUpdateMutation(id)
  const approveUserMutation = useAdminApproveUser(id);
  const rejectUserMutation = useAdminRejectUser(id);
  const blockUserMutation = useAdminBlockUser(id, setOpen);
  const unblockUserMutation = useAdminUnblockUser(id);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    getValues,
    formState: { errors, isSubmitting, isDirty, dirtyFields },
  } = useForm({
    resolver: zodResolver(profileSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      gender: "",
      dateOfBirth: "",
      role: "student",
      subject: "",
      experience: "",
      studentLevel: "",
      mode: "",
      qualification: "",
      availability: [],
      timeSlot: [],
      bio: "",
    },
  });

  const { data, isLoading } = useAdminUserById(id);
  const currentRole = watch("role") || data?.role || "student";
  const isTeacher = currentRole === "teacher";
  const { data: teacher, isLoading: teacherLoading } = useAdminTeacherById(id, isTeacher);

  const selectedAvailability = watch("availability") || [];
  const selectedTimeSlots = watch("timeSlot") || [];

  const toggleDay = (day) => {
    const current = getValues("availability") || [];
    const updated = current.includes(day)
      ? current.filter((d) => d !== day)
      : [...current, day];
    setValue("availability", updated, { shouldDirty: true });
  };

  const toggleSlot = (slot) => {
    const current = getValues("timeSlot") || [];
    const updated = current.includes(slot)
      ? current.filter((s) => s !== slot)
      : [...current, slot];
    setValue("timeSlot", updated, { shouldDirty: true });
  };

  useEffect(() => {
    if (data || teacher) {
      const rawAvail =
        teacher?.availability ||
        teacher?.tutorProfile?.availability ||
        teacher?.teacherProfile?.availability ||
        teacher?.lead?.availability ||
        data?.availability ||
        data?.tutorProfile?.availability ||
        data?.teacherProfile?.availability ||
        data?.lead?.availability ||
        [];
      const parsedAvail = Array.isArray(rawAvail)
        ? rawAvail
        : typeof rawAvail === "string"
        ? rawAvail
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
        : [];

      const rawSlots =
        teacher?.timeSlot ||
        teacher?.tutorProfile?.timeSlot ||
        teacher?.teacherProfile?.timeSlot ||
        teacher?.lead?.timeSlot ||
        data?.timeSlot ||
        data?.tutorProfile?.timeSlot ||
        data?.teacherProfile?.timeSlot ||
        data?.lead?.timeSlot ||
        [];
      const parsedSlots = Array.isArray(rawSlots)
        ? rawSlots
        : typeof rawSlots === "string"
        ? rawSlots
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
        : [];

      reset({
        fullName:
          data?.fullName ||
          data?.name ||
          teacher?.fullName ||
          teacher?.name ||
          "",
        email: data?.email || teacher?.email || "",
        phone: data?.phone || teacher?.phone || "",
        city:
          teacher?.city ||
          teacher?.address?.city ||
          data?.city ||
          data?.address?.city ||
          teacher?.tutorProfile?.city ||
          data?.tutorProfile?.city ||
          "",
        gender:
          data?.gender ||
          teacher?.gender ||
          data?.tutorProfile?.gender ||
          teacher?.tutorProfile?.gender ||
          "",
        dateOfBirth: data?.dateOfBirth
          ? String(data.dateOfBirth).slice(0, 10)
          : teacher?.dateOfBirth
          ? String(teacher.dateOfBirth).slice(0, 10)
          : "",
        role: data?.role || teacher?.role || "student",
        subject:
          teacher?.subject ||
          teacher?.tutorProfile?.subject ||
          teacher?.teacherProfile?.subject ||
          teacher?.lead?.subject ||
          data?.subject ||
          data?.tutorProfile?.subject ||
          data?.teacherProfile?.subject ||
          data?.lead?.subject ||
          "",
        experience:
          teacher?.experience ||
          teacher?.tutorProfile?.experience ||
          teacher?.teacherProfile?.experience ||
          teacher?.lead?.experience ||
          data?.experience ||
          data?.tutorProfile?.experience ||
          data?.teacherProfile?.experience ||
          data?.lead?.experience ||
          "",
        studentLevel:
          teacher?.studentLevel ||
          teacher?.tutorProfile?.studentLevel ||
          teacher?.teacherProfile?.studentLevel ||
          teacher?.lead?.studentLevel ||
          data?.studentLevel ||
          data?.tutorProfile?.studentLevel ||
          data?.teacherProfile?.studentLevel ||
          data?.lead?.studentLevel ||
          "",
        mode:
          teacher?.mode ||
          teacher?.teachingMode ||
          teacher?.tutorProfile?.mode ||
          teacher?.teacherProfile?.mode ||
          teacher?.lead?.mode ||
          data?.mode ||
          data?.teachingMode ||
          data?.tutorProfile?.mode ||
          data?.teacherProfile?.mode ||
          data?.lead?.mode ||
          "",
        qualification:
          teacher?.qualification ||
          teacher?.tutorProfile?.qualification ||
          teacher?.teacherProfile?.qualification ||
          teacher?.lead?.qualification ||
          data?.qualification ||
          data?.tutorProfile?.qualification ||
          data?.teacherProfile?.qualification ||
          data?.lead?.qualification ||
          "",
        availability: parsedAvail,
        timeSlot: parsedSlots,
        bio:
          teacher?.bio ||
          teacher?.tutorProfile?.bio ||
          teacher?.teacherProfile?.bio ||
          teacher?.lead?.bio ||
          data?.bio ||
          data?.tutorProfile?.bio ||
          data?.teacherProfile?.bio ||
          data?.lead?.bio ||
          "",
      });
    }
  }, [data, teacher, reset]);

  const onSubmit = async (formData) => {
    if (!isDirty) {
      toast.error("No changes detected");
      return;
    }
    const updatedData = getDirtyValues(dirtyFields, formData);
    try {
      if (isTeacher || data?.role === "teacher") {
        await teacherUpdate.mutateAsync(updatedData);
      } else {
        await updateMutation.mutateAsync(updatedData);
      }
    } catch {
      // Handled by React Query onError handler
    }
  };

  const handleApproveUserClick = () => {
    if (!id) return;
    approveUserMutation.mutate();
  };

  const handleRejectUserClick = () => {
    if (!id) return;
    rejectUserMutation.mutate();
  };

  const handleBlockUserClick = () => {
    if (!id) return;
    blockUserMutation.mutate({ reason });
  };

  const handleUnblockUserClick = () => {
    if (!id) return;
    unblockUserMutation.mutate();
  };

  if (isLoading || (data?.role === "teacher" && teacherLoading && !teacher)) {
    return <PortalSkeleton type="profile" />;
  }

  return (
    <div className="space-y-4 sm:space-y-6 max-w-6xl mx-auto">
      {/* Executive Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-500 to-yellow-500 p-5 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6"
      >
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />

        <div className="relative">
          <button
            onClick={() => router.push("/admin-panel/student")}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl transition-all mb-2.5 backdrop-blur-xs"
          >
            <FaArrowLeft />
            Back to Directory
          </button>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            User Profile & Edit
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Inspect, update details, credentials, availability, and configure account access.
          </p>
        </div>
      </motion.div>

      {/* Top User Identity Overview Card */}
      <div className="overflow-hidden rounded-2xl sm:rounded-[28px] border border-slate-200/90 bg-white shadow-xs">
        {/* Subtle decorative top accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />

        <div className="p-4 sm:p-6 lg:p-7">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 min-w-0">
            {/* Left: Avatar + Primary Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 min-w-0 text-center sm:text-left flex-1">
              {/* Avatar with Status Dot */}
              <div className="relative shrink-0">
                <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl sm:rounded-[24px] bg-gradient-to-br from-yellow-100 to-amber-100 font-black text-yellow-800 text-2xl sm:text-3xl border-2 border-yellow-300/80 shadow-xs">
                  {data?.profileImage ? (
                    <img
                      src={data.profileImage}
                      alt={data?.fullName || "User"}
                      className="h-full w-full object-cover rounded-2xl sm:rounded-[24px]"
                    />
                  ) : (
                    data?.fullName?.charAt(0) || data?.name?.charAt(0) || "U"
                  )}
                </div>
                {/* Live Status Indicator Dot */}
                <span
                  className={`absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white shadow-xs flex items-center justify-center ${
                    data?.status === "active"
                      ? "bg-emerald-500"
                      : data?.status === "blocked"
                      ? "bg-rose-500"
                      : "bg-amber-500"
                  }`}
                  title={`Account: ${data?.status || "active"}`}
                />
              </div>

              {/* Names & Core Metadata */}
              <div className="min-w-0 flex-1 space-y-1.5 w-full">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 break-words leading-tight">
                    {data?.fullName || data?.name || "Unnamed User"}
                  </h2>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-900 border border-amber-200">
                    {data?.role === "teacher" ? (
                      <FaChalkboardTeacher className="text-amber-700 text-xs" />
                    ) : (
                      <FaUserGraduate className="text-amber-700 text-xs" />
                    )}
                    {capitalizeFirstLetter(data?.role || "student")}
                  </span>
                </div>

                {/* Email with full overflow safety */}
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-slate-600 min-w-0">
                  <FaEnvelope className="text-yellow-600 shrink-0 text-xs" />
                  <span className="break-all select-all font-medium text-slate-700">
                    {data?.email || "No email available"}
                  </span>
                </div>

                {/* Contact & Location Chips */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-slate-500 pt-0.5 font-medium">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="text-slate-400 font-semibold">ID:</span>
                    <strong className="text-slate-800 font-mono bg-slate-100 px-1.5 py-0.5 rounded text-[11px]">
                      #{id?.slice(-6).toUpperCase()}
                    </strong>
                  </span>

                  {data?.phone && (
                    <span className="inline-flex items-center gap-1.5">
                      <FaPhoneAlt className="text-yellow-600 text-[10px]" />
                      <strong className="text-slate-700 font-semibold">{data.phone}</strong>
                    </span>
                  )}

                  {(data?.city || data?.address?.city) && (
                    <span className="inline-flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-yellow-600 text-[10px]" />
                      <span className="text-slate-700 font-semibold">
                        {data.city || data.address?.city}
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Status Badges Column */}
            <div className="flex flex-row lg:flex-col items-center lg:items-end justify-center gap-2.5 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 hidden sm:inline">
                  Approval:
                </span>
                <PortalBadge variant={data?.approvalStatus || "pending"} size="sm">
                  {data?.approvalStatus || "pending"}
                </PortalBadge>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 hidden sm:inline">
                  Account:
                </span>
                <PortalBadge variant={data?.status || "active"} size="sm">
                  {data?.status || "active"}
                </PortalBadge>
              </div>
            </div>
          </div>

          {/* Bottom Quick-Info Cards Strip (Subject, Experience, Qualification, Mode) - only visible if role is teacher */}
          {isTeacher &&
            ((teacher?.subject || data?.subject || teacher?.tutorProfile?.subject || data?.tutorProfile?.subject || data?.lead?.subject) ||
              (teacher?.experience || data?.experience || teacher?.tutorProfile?.experience || data?.tutorProfile?.experience || data?.lead?.experience) ||
              (teacher?.qualification || data?.qualification || teacher?.tutorProfile?.qualification || data?.tutorProfile?.qualification) ||
              (teacher?.mode || teacher?.teachingMode || data?.mode || data?.teachingMode || teacher?.tutorProfile?.mode)) && (
            <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {/* Subject */}
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-amber-50/70 border border-amber-200/60 min-w-0">
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-800">
                  Subject
                </p>
                <p className="mt-0.5 text-xs sm:text-sm font-extrabold text-slate-900 truncate">
                  {teacher?.subject || data?.subject || teacher?.tutorProfile?.subject || data?.tutorProfile?.subject || data?.lead?.subject || "Not set"}
                </p>
              </div>

              {/* Experience */}
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/70 min-w-0">
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Experience
                </p>
                <p className="mt-0.5 text-xs sm:text-sm font-extrabold text-slate-800 truncate">
                  {teacher?.experience || data?.experience || teacher?.tutorProfile?.experience || data?.tutorProfile?.experience || data?.lead?.experience || "N/A"}
                </p>
              </div>

              {/* Qualification */}
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/70 min-w-0">
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Qualification
                </p>
                <p className="mt-0.5 text-xs sm:text-sm font-extrabold text-slate-800 truncate">
                  {teacher?.qualification || data?.qualification || teacher?.tutorProfile?.qualification || data?.tutorProfile?.qualification || data?.lead?.qualification || "N/A"}
                </p>
              </div>

              {/* Mode */}
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/70 min-w-0">
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Teaching Mode
                </p>
                <p className="mt-0.5 text-xs sm:text-sm font-extrabold text-slate-800 truncate">
                  {teacher?.mode || teacher?.teachingMode || data?.mode || data?.teachingMode || teacher?.tutorProfile?.mode || "N/A"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Edit Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
        {/* Section 1: Personal & Contact Information */}
        <PortalCard header="Personal & Contact Information">
          <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
            <PortalInput
              label="Full Name"
              icon={FaUser}
              placeholder="e.g. John Doe"
              error={errors.fullName?.message}
              {...register("fullName")}
            />

            <PortalInput
              label="Email Address"
              icon={FaEnvelope}
              disabled
              helperText="Email address cannot be changed."
              error={errors.email?.message}
              {...register("email")}
            />

            <PortalInput
              label="Phone Number"
              icon={FaPhoneAlt}
              placeholder="e.g. +91 98765 43210"
              error={errors.phone?.message}
              {...register("phone")}
            />

            <PortalInput
              label="City / Location"
              icon={FaMapMarkerAlt}
              placeholder="e.g. Chandigarh, Mohali"
              error={errors.city?.message}
              {...register("city")}
            />

            <PortalSelect
              label="System Role"
              icon={FaUserShield}
              disabled={true}
              error={errors.role?.message}
              {...register("role")}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher / Tutor</option>
            </PortalSelect>

            <PortalSelect
              label="Gender"
              icon={FaVenusMars}
              error={errors.gender?.message}
              {...register("gender")}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </PortalSelect>

            <PortalInput
              label="Date of Birth"
              icon={FaCalendarAlt}
              type="date"
              error={errors.dateOfBirth?.message}
              {...register("dateOfBirth")}
            />
          </div>
        </PortalCard>

        {/* Section 2: Tutor Profile & Teaching Information (Become a Tutor Fields) - ONLY visible if role is teacher */}
        {isTeacher && (
          <PortalCard
            header="Tutor Profile & Teaching Credentials"
            className="border-yellow-200/70"
          >
            <p className="text-xs text-slate-500 -mt-2 mb-4">
              Fields collected during tutor onboarding, applications, and teacher registrations.
            </p>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
              <PortalSelect
                label="Primary Subject"
                icon={FaBook}
                error={errors.subject?.message}
                {...register("subject")}
              >
                <option value="">Select Primary Subject</option>
                {tutorSubjectOptions.map((subj) => (
                  <option key={subj} value={subj}>
                    {subj}
                  </option>
                ))}
              </PortalSelect>

              <PortalSelect
                label="Teaching Experience"
                icon={FaChalkboardTeacher}
                error={errors.experience?.message}
                {...register("experience")}
              >
                <option value="">Select Experience Level</option>
                {experienceOptions.map((exp) => (
                  <option key={exp} value={exp}>
                    {exp}
                  </option>
                ))}
              </PortalSelect>

              <PortalSelect
                label="Highest Qualification"
                icon={FaGraduationCap}
                error={errors.qualification?.message}
                {...register("qualification")}
              >
                <option value="">Select Qualification</option>
                {qualificationOptions.map((qual) => (
                  <option key={qual} value={qual}>
                    {qual}
                  </option>
                ))}
              </PortalSelect>

              <PortalSelect
                label="Target Student Level"
                icon={FaUserGraduate}
                error={errors.studentLevel?.message}
                {...register("studentLevel")}
              >
                <option value="">Select Student Level</option>
                {studentLevelOptions.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </PortalSelect>

              <PortalSelect
                label="Teaching Mode"
                icon={FaLaptop}
                error={errors.mode?.message}
                {...register("mode")}
              >
                <option value="">Select Teaching Mode</option>
                {teachingModeOptions.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </PortalSelect>

              <div className="sm:col-span-2">
                <PortalTextArea
                  label="Tutor Bio / Description"
                  placeholder="Brief introduction, teaching methodology, or specializations..."
                  rows={3}
                  error={errors.bio?.message}
                  {...register("bio")}
                />
              </div>

              {/* Interactive Availability Days Selector */}
              <div className="sm:col-span-2 space-y-2">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-yellow-600 text-xs" />
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Available Days (Tutor Schedule)
                  </label>
                </div>
                <p className="text-xs text-slate-400">
                  Tap days to toggle availability for student sessions.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {tutorAvailabilityOptions.map((day) => {
                    const active = selectedAvailability.includes(day);
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => toggleDay(day)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                          active
                            ? "bg-yellow-400 text-slate-950 border-yellow-500 shadow-xs scale-[1.02]"
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-yellow-50 hover:border-yellow-300"
                        }`}
                      >
                        {active ? `✓ ${day}` : day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Interactive Time Slots Selector */}
              <div className="sm:col-span-2 space-y-2">
                <div className="flex items-center gap-2">
                  <FaClock className="text-yellow-600 text-xs" />
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Preferred Time Slots
                  </label>
                </div>
                <p className="text-xs text-slate-400">
                  Tap time slots to toggle preferred teaching hours.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {tutorTimeSlots.map((slot) => {
                    const active = selectedTimeSlots.includes(slot);
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => toggleSlot(slot)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                          active
                            ? "bg-yellow-400 text-slate-950 border-yellow-500 shadow-xs scale-[1.02]"
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-yellow-50 hover:border-yellow-300"
                        }`}
                      >
                        {active ? `✓ ${slot}` : slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </PortalCard>
        )}

        {/* Form Action Controls (always visible for both student and teacher) */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <PortalButton
            variant="outline"
            type="button"
            icon={FaUndo}
            onClick={() => reset()}
            disabled={!isDirty}
            className="w-full sm:w-auto"
          >
            Reset Changes
          </PortalButton>

          <PortalButton
            type="submit"
            icon={FaSave}
            isLoading={
              isSubmitting ||
              updateMutation.isPending ||
              teacherUpdate.isPending
            }
            disabled={
              !isDirty ||
              isSubmitting ||
              updateMutation.isPending ||
              teacherUpdate.isPending
            }
            className="w-full sm:w-auto"
          >
            Save Profile Changes
          </PortalButton>
        </div>
      </form>

      {/* Account Administrative Status Actions */}
      <PortalCard header="Administrative Account Actions">
        <p className="text-xs text-slate-500 -mt-2 mb-4">
          Manage account approvals, restrictions, or block malicious activities.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          {data?.approvalStatus === "pending" && (
            <>
              <PortalButton
                variant="primary"
                icon={FaCheckCircle}
                isLoading={approveUserMutation.isPending}
                onClick={handleApproveUserClick}
                className="w-full sm:w-auto"
              >
                Approve Account
              </PortalButton>

              <PortalButton
                variant="danger"
                icon={FaTimes}
                isLoading={rejectUserMutation.isPending}
                onClick={handleRejectUserClick}
                className="w-full sm:w-auto"
              >
                Reject Account
              </PortalButton>
            </>
          )}

          {data?.approvalStatus === "approved" && data?.status === "active" && (
            <PortalButton
              variant="danger"
              icon={FaBan}
              onClick={() => setOpen(true)}
              className="w-full sm:w-auto"
            >
              Block User Account
            </PortalButton>
          )}

          {data?.approvalStatus === "approved" && data?.status === "blocked" && (
            <PortalButton
              variant="primary"
              icon={FaCheckCircle}
              isLoading={unblockUserMutation.isPending}
              onClick={handleUnblockUserClick}
              className="w-full sm:w-auto"
            >
              Unblock Account
            </PortalButton>
          )}

          {data?.approvalStatus === "rejected" && (
            <PortalButton
              variant="primary"
              icon={FaCheckCircle}
              isLoading={approveUserMutation.isPending}
              onClick={handleApproveUserClick}
              className="w-full sm:w-auto"
            >
              Approve Account
            </PortalButton>
          )}
        </div>
      </PortalCard>

      {/* Block Reason Modal */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Block User Account"
        actions={
          <div className="flex flex-col-reverse sm:flex-row justify-end gap-2.5 pt-4 w-full sm:w-auto">
            <PortalButton
              variant="outline"
              size="sm"
              onClick={() => setOpen(false)}
              className="w-full sm:w-auto"
            >
              Cancel
            </PortalButton>
            <PortalButton
              variant="danger"
              size="sm"
              isLoading={blockUserMutation.isPending}
              onClick={handleBlockUserClick}
              className="w-full sm:w-auto"
            >
              Confirm Block
            </PortalButton>
          </div>
        }
      >
        <p className="mb-3 text-sm text-slate-600">
          Please provide a reason for blocking this user account.
        </p>
        <textarea
          rows={4}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason for blocking..."
          className="w-full rounded-2xl border border-slate-200 p-3 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-rose-100 transition-all"
        />
      </Modal>
    </div>
  );
}

function getDirtyValues(dirtyFields, allValues) {
  if (dirtyFields === true) {
    return allValues;
  }
  if (
    !dirtyFields ||
    typeof dirtyFields !== "object" ||
    allValues === null ||
    typeof allValues !== "object"
  ) {
    return allValues;
  }
  if (Array.isArray(allValues)) {
    return allValues;
  }
  return Object.fromEntries(
    Object.keys(dirtyFields)
      .filter(
        (key) => dirtyFields[key] !== undefined && dirtyFields[key] !== false
      )
      .map((key) => [
        key,
        getDirtyValues(dirtyFields[key], allValues[key]),
      ])
  );
}