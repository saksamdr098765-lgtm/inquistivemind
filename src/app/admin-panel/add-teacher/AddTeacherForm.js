"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaArrowLeft,
  FaSave,
  FaChalkboardTeacher,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaGraduationCap,
  FaBook,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaDollarSign,
  FaCheck,
} from "react-icons/fa";
import { toast } from "sonner";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalInput from "@/app/Components/portal-ui/PortalInput";
import PortalSelect from "@/app/Components/portal-ui/PortalSelect";
import PortalTextArea from "@/app/Components/portal-ui/PortalTextArea";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import { useAdminCreateTeacherMutation } from "@/app/mutations/AdminMutations";

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
  "Home Tutoring",
  "Hybrid Teaching",
  "Both (Online & Offline)",
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

export default function AddTeacherForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    subject: "",
    customSubject: "",
    experience: "",
    qualification: "",
    studentLevel: "",
    mode: "Online Classes",
    city: "",
    hourlyRate: "",
    bio: "",
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    timeSlot: ["6:00 PM - 9:00 PM"],
  });

  const createTeacherMutation = useAdminCreateTeacherMutation(() => {
    router.push("/admin-panel/student");
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const toggleAvailability = (day) => {
    setForm((prev) => {
      const exists = prev.availability.includes(day);
      return {
        ...prev,
        availability: exists
          ? prev.availability.filter((d) => d !== day)
          : [...prev.availability, day],
      };
    });
  };

  const toggleTimeSlot = (slot) => {
    setForm((prev) => {
      const exists = prev.timeSlot.includes(slot);
      return {
        ...prev,
        timeSlot: exists
          ? prev.timeSlot.filter((s) => s !== slot)
          : [...prev.timeSlot, slot],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.firstName.trim()) {
      toast.error("Please enter the teacher's first name.");
      return;
    }

    const cleanEmail = form.email.trim().toLowerCase();
    if (!cleanEmail) {
      toast.error("Please enter an email address for the teacher.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const resolvedSubject =
      form.subject === "Other Subject"
        ? form.customSubject.trim()
        : form.subject.trim();

    const fullName = `${form.firstName.trim()} ${form.lastName.trim()}`.trim();

    const payload = {
      fullName,
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: cleanEmail,
      phone: form.phone.trim(),
      gender: form.gender || undefined,
      password: form.password.trim() || undefined,
      subject: resolvedSubject,
      experience: form.experience || undefined,
      qualification: form.qualification || undefined,
      studentLevel: form.studentLevel || undefined,
      mode: form.mode || "Online Classes",
      city: form.city.trim(),
      hourlyRate: form.hourlyRate.trim(),
      bio: form.bio.trim(),
      availability: form.availability,
      timeSlot: form.timeSlot,
    };

    await createTeacherMutation.mutateAsync(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-500 to-yellow-500 p-5 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        <div className="absolute -right-10 -top-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />

        <div className="relative">
          <span className="inline-flex rounded-full bg-white/20 border border-white/30 px-3 py-0.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
            Faculty Recruitment
          </span>
          <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Add New Teacher Profile
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Register, configure teaching credentials, and immediately onboard an educator into the academy.
          </p>
        </div>

        <PortalButton
          type="button"
          variant="secondary"
          size="sm"
          icon={FaArrowLeft}
          onClick={() => router.push("/admin-panel/student")}
          className="w-full sm:w-auto"
        >
          Back to Users & Students
        </PortalButton>
      </div>

      {/* Teacher Profile Callout */}
      <PortalCard header="Teacher Account Setup">
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-amber-50 text-4xl text-amber-700 border border-amber-200 shadow-xs">
            <FaChalkboardTeacher />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-base">Direct Teacher Registration</h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Adding a teacher here creates their system account with verified status, configures their instructor profile, and emails them their login credentials automatically.
            </p>
          </div>
        </div>
      </PortalCard>

      {/* Personal & Account Details */}
      <PortalCard header="Personal & Account Information">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PortalInput
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="e.g. Ramesh"
            icon={FaUser}
            required
          />
          <PortalInput
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="e.g. Verma"
            icon={FaUser}
          />
          <PortalInput
            label="Email Address"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="teacher@example.com"
            icon={FaEnvelope}
            required
          />
          <PortalInput
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            icon={FaPhoneAlt}
          />
          <PortalSelect
            label="Gender"
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </PortalSelect>
          <PortalInput
            label="Default Password (Optional)"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Auto-generated if left empty"
            helperText="Leave empty to auto-generate a secure password (e.g. Teacher@4821)"
          />
        </div>
      </PortalCard>

      {/* Professional & Academic Information */}
      <PortalCard header="Teaching & Professional Qualifications">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <PortalSelect
              label="Primary Teaching Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              icon={FaBook}
            >
              <option value="">Select Subject</option>
              {tutorSubjectOptions.map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </PortalSelect>

            {form.subject === "Other Subject" && (
              <PortalInput
                name="customSubject"
                placeholder="Enter custom subject name..."
                value={form.customSubject}
                onChange={handleChange}
                required
              />
            )}
          </div>

          <PortalSelect
            label="Teaching Mode"
            name="mode"
            value={form.mode}
            onChange={handleChange}
          >
            {teachingModeOptions.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </PortalSelect>

          <PortalSelect
            label="Teaching Experience"
            name="experience"
            value={form.experience}
            onChange={handleChange}
          >
            <option value="">Select Experience</option>
            {experienceOptions.map((exp) => (
              <option key={exp} value={exp}>
                {exp}
              </option>
            ))}
          </PortalSelect>

          <PortalSelect
            label="Highest Qualification"
            name="qualification"
            value={form.qualification}
            onChange={handleChange}
            icon={FaGraduationCap}
          >
            <option value="">Select Qualification</option>
            {qualificationOptions.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </PortalSelect>

          <PortalSelect
            label="Target Student Level"
            name="studentLevel"
            value={form.studentLevel}
            onChange={handleChange}
          >
            <option value="">Select Target Level</option>
            {studentLevelOptions.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </PortalSelect>

          <PortalInput
            label="City / Location"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="e.g. New Delhi"
            icon={FaMapMarkerAlt}
          />

          <PortalInput
            label="Hourly Rate (Optional)"
            name="hourlyRate"
            value={form.hourlyRate}
            onChange={handleChange}
            placeholder="e.g. ₹500/hr"
            icon={FaDollarSign}
          />
        </div>
      </PortalCard>

      {/* Availability & Time Slots */}
      <PortalCard header="Availability & Preferred Schedule">
        <div className="space-y-6">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2.5">
              Available Days of Week
            </label>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {tutorAvailabilityOptions.map((day) => {
                const selected = form.availability.includes(day);
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => toggleAvailability(day)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                      selected
                        ? "bg-amber-500 text-white border-amber-500 shadow-xs"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-amber-300 hover:bg-amber-50/50"
                    }`}
                  >
                    {selected && <FaCheck className="text-[10px]" />}
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2.5">
              Preferred Time Slots
            </label>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {tutorTimeSlots.map((slot) => {
                const selected = form.timeSlot.includes(slot);
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => toggleTimeSlot(slot)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                      selected
                        ? "bg-amber-500 text-white border-amber-500 shadow-xs"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-amber-300 hover:bg-amber-50/50"
                    }`}
                  >
                    {selected && <FaCheck className="text-[10px]" />}
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </PortalCard>

      {/* Professional Bio */}
      <PortalCard header="Professional Summary / Bio">
        <PortalTextArea
          name="bio"
          value={form.bio}
          onChange={handleChange}
          rows={4}
          placeholder="Enter a brief background, achievements, teaching methodology, or intro for the teacher..."
          helperText="This bio will be visible to students and parents when browsing instructors or reviewing matching results."
        />
      </PortalCard>

      {/* Form Submission Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-end gap-3 sm:gap-4 pt-2">
        <PortalButton
          type="button"
          variant="outline"
          onClick={() => router.push("/admin-panel/student")}
          className="w-full sm:w-auto"
        >
          Cancel
        </PortalButton>
        <PortalButton
          icon={FaSave}
          type="submit"
          disabled={createTeacherMutation.isPending}
          className="w-full sm:w-auto min-w-[200px]"
        >
          {createTeacherMutation.isPending ? "Creating Teacher..." : "Save Teacher Profile"}
        </PortalButton>
      </div>
    </form>
  );
}
