"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaArrowRight,
  FaArrowLeft,
  FaSpinner,
  FaCheckCircle,
  FaPhone,
  FaMapMarkerAlt,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

import {
  useSendOtpMutation,
  useSignUpMutation,
  useVerifyOtpMutation,
} from "../mutations/AuthenticationMutations";

import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";

const popularSubjects = [
  "French",
  "Mathematics",
  "English",
  "German",
  "Spanish",
  "Physics",
  "Chemistry",
  "Biology",
  "Hindi",
  "Computer Science",
];

const teachingModes = [
  "Online Classes",
  "Offline Classes",
  "Home Tutoring",
  "Hybrid Teaching",
];

const experienceLevels = [
  "Less than 1 Year",
  "1-3 Years",
  "3-5 Years",
  "5+ Years",
  "10+ Years",
];

const qualificationList = [
  "Graduate / Bachelor's",
  "Post Graduate / Master's",
  "PhD / Doctorate",
  "Certified Language Teacher",
  "Other Relevant Degree",
];

const studentLevelsList = [
  "Primary (Grades 1-5)",
  "Middle School (Grades 6-8)",
  "High School (Grades 9-10)",
  "Senior Secondary (Grades 11-12)",
  "College / University",
  "Adult Learners & Professionals",
];

const daysList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const timeSlotsList = [
  "6:00 AM - 9:00 AM",
  "9:00 AM - 12:00 PM",
  "12:00 PM - 3:00 PM",
  "3:00 PM - 6:00 PM",
  "6:00 PM - 9:00 PM",
  "9:00 PM - 11:00 PM",
];

export default function SignUpPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isInitialized = useAuthStore((state) => state.isInitialized);

  useEffect(() => {
    if (isInitialized && isAuthenticated && user) {
      if (user.role === "admin") {
        router.replace("/admin-panel/dashboard");
      } else if (user.role === "teacher") {
        router.replace("/teacher-profile/dashboard");
      } else {
        router.replace("/student-profile/dashboard");
      }
    }
  }, [isInitialized, isAuthenticated, user, router]);

  const [role, setRole] = useState("student");
  const [teacherStep, setTeacherStep] = useState(1); // 1: Account Credentials, 2: Teaching Profile

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0);
  const [emailVerified, setEmailVerified] = useState(false);
  const [verificationToken, setVerificationToken] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  // Teaching profile fields for teachers
  const [teacherProfile, setTeacherProfile] = useState({
    subject: "French",
    customSubject: "",
    mode: "Online Classes",
    experience: "1-3 Years",
    qualification: "Graduate / Bachelor's",
    studentLevel: "High School (Grades 9-10)",
    phone: "",
    city: "",
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    timeSlot: ["6:00 PM - 9:00 PM"],
    bio: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
    });

    setRole("student");
    setTeacherStep(1);
    setOtp("");
    setOtpSent(false);
    setEmailVerified(false);
    setVerificationToken("");
    setTimer(0);
    setTeacherProfile({
      subject: "French",
      customSubject: "",
      mode: "Online Classes",
      experience: "1-3 Years",
      qualification: "Graduate / Bachelor's",
      studentLevel: "High School (Grades 9-10)",
      phone: "",
      city: "",
      availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      timeSlot: ["6:00 PM - 9:00 PM"],
      bio: "",
    });
  };

  const signUpMutation = useSignUpMutation(resetForm);

  const sendOtpMutation = useSendOtpMutation(setOtpSent, setTimer);

  const verifyOtpMutation = useVerifyOtpMutation(
    setOtpSent,
    setEmailVerified,
    setVerificationToken
  );

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTeacherChange = (field, value) => {
    setTeacherProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleDay = (day) => {
    setTeacherProfile((prev) => ({
      ...prev,
      availability: prev.availability.includes(day)
        ? prev.availability.filter((d) => d !== day)
        : [...prev.availability, day],
    }));
  };

  const toggleTimeSlot = (slot) => {
    setTeacherProfile((prev) => ({
      ...prev,
      timeSlot: prev.timeSlot.includes(slot)
        ? prev.timeSlot.filter((s) => s !== slot)
        : [...prev.timeSlot, slot],
    }));
  };

  const emailRegex = /^\S+@\S+\.\S+$/;
  const nameRegex = /^[A-Za-z\s'-]{2,50}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&]).{8,}$/;

  const validateCredentials = () => {
    if (!nameRegex.test(formData.name.trim())) return "Enter a valid name (2-50 characters).";
    if (!emailRegex.test(formData.email.trim())) return "Enter a valid email address.";
    if (!passwordRegex.test(formData.password))
      return "Password must contain uppercase, lowercase, number and special character.";
    return null;
  };

  const validateTeacherProfile = () => {
    const finalSubject =
      teacherProfile.subject === "Other"
        ? teacherProfile.customSubject.trim()
        : teacherProfile.subject;

    if (!finalSubject) return "Please choose or specify your teaching subject.";
    if (!teacherProfile.phone.trim() || teacherProfile.phone.trim().length < 10)
      return "Please enter a valid 10-digit mobile number.";
    if (teacherProfile.availability.length === 0)
      return "Please select at least one available day.";
    return null;
  };

  const isCredentialsValid =
    formData.name.trim() && formData.email.trim() && formData.password;

  const sendOtp = () => {
    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Enter a valid Email");
      return;
    }

    sendOtpMutation.mutate({
      email: formData.email.trim(),
      purpose: "register",
    });
  };

  const verifyOtp = () => {
    if (otp.length !== 6) {
      toast.error("Enter valid 6-digit OTP");
      return;
    }

    verifyOtpMutation.mutate({
      email: formData.email.trim(),
      purpose: "register",
      otp,
    });
  };

  useEffect(() => {
    if (!timer) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // Handle proceed to teacher step 2
  const handleProceedToTeacherProfile = (e) => {
    e.preventDefault();
    const error = validateCredentials();
    if (error) {
      toast.error(error);
      return;
    }
    if (!emailVerified) {
      toast.error("Please verify your email address before continuing.");
      return;
    }
    setTeacherStep(2);
  };

  // Final submit (either student direct submit, or teacher step 2 submit)
  const handleSignUp = (e) => {
    e.preventDefault();

    const credError = validateCredentials();
    if (credError) {
      toast.error(credError);
      return;
    }

    if (!emailVerified) {
      toast.error("Please verify your email address.");
      return;
    }

    if (role === "teacher") {
      const profError = validateTeacherProfile();
      if (profError) {
        toast.error(profError);
        return;
      }

      const finalSubject =
        teacherProfile.subject === "Other"
          ? teacherProfile.customSubject.trim()
          : teacherProfile.subject;

      signUpMutation.mutate({
        fullName: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
        role: "teacher",
        verificationToken,
        phone: teacherProfile.phone.trim(),
        city: teacherProfile.city.trim(),
        subject: finalSubject,
        experience: teacherProfile.experience,
        mode: teacherProfile.mode,
        studentLevel: teacherProfile.studentLevel,
        qualification: teacherProfile.qualification,
        availability: teacherProfile.availability,
        timeSlot: teacherProfile.timeSlot,
        bio: teacherProfile.bio.trim(),
      });
    } else {
      signUpMutation.mutate({
        fullName: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
        role: "student",
        verificationToken,
      });
    }
  };

  if (isInitialized && isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50/40 via-white to-slate-50/50">
        <FaSpinner className="animate-spin text-amber-500 text-3xl" />
      </div>
    );
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-slate-50/50 pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6">
      {/* Decorative Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />
      </div>

      <div className={`relative w-full ${role === "teacher" && teacherStep === 2 ? "max-w-xl" : "max-w-md"} my-auto transition-all duration-300`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          {/* Main Card */}
          <div className="overflow-hidden rounded-2xl sm:rounded-[32px] border border-amber-200/80 bg-white/95 backdrop-blur-md p-6 sm:p-8 shadow-xl space-y-6">
            {/* Header / Logo */}
            <div className="text-center space-y-2.5">
              <span className="inline-flex rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-xs">
                {role === "teacher" ? "Educator Registration" : "Join Our Community"}
              </span>

              <img
                src="/icon1.png"
                alt="Inquisitive Mind Academy"
                className="mx-auto h-14 sm:h-18 w-14 sm:w-18 object-contain drop-shadow-xs"
              />

              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
                {role === "teacher"
                  ? teacherStep === 2
                    ? "Your Teaching Profile"
                    : "Create Teacher Account"
                  : "Create Your Account"}
              </h1>

              <p className="text-xs sm:text-sm font-medium text-slate-500 leading-relaxed max-w-sm mx-auto">
                {role === "teacher"
                  ? teacherStep === 2
                    ? "Provide your teaching details and availability for admin review and student matching."
                    : "Register to teach English, French, and academic programs with our academy."
                  : "Start learning languages and academic subjects with top-rated mentors."}
              </p>
            </div>

            {/* Role Switcher (Hidden on teacher step 2) */}
            {teacherStep === 1 && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Register As
                </label>

                <div className="grid grid-cols-2 gap-1.5 rounded-xl sm:rounded-2xl bg-amber-50/80 p-1.5 border border-amber-100">
                  <button
                    type="button"
                    onClick={() => {
                      setRole("student");
                      setTeacherStep(1);
                    }}
                    className={`rounded-lg sm:rounded-xl py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      role === "student"
                        ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    🎓 Student
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole("teacher")}
                    className={`rounded-lg sm:rounded-xl py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      role === "teacher"
                        ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    👨‍🏫 Teacher
                  </button>
                </div>
              </div>
            )}

            {/* Teacher Step Tracker Banner */}
            {role === "teacher" && (
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold">
                <span className={teacherStep === 1 ? "text-amber-800" : "text-slate-500"}>
                  1. Credentials &amp; OTP
                </span>
                <span className="text-amber-300">→</span>
                <span className={teacherStep === 2 ? "text-amber-800" : "text-slate-500"}>
                  2. Teaching Profile Details
                </span>
              </div>
            )}

            {/* STEP 1: CREDENTIALS (STUDENT OR TEACHER STEP 1) */}
            {teacherStep === 1 && (
              <div className="space-y-4">
                {/* Name */}
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 text-sm" />
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full rounded-xl sm:rounded-2xl border border-amber-200/80 bg-amber-50/20 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10"
                  />
                </div>

                {/* Email + Send OTP */}
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 text-sm" />
                  <input
                    name="email"
                    value={formData.email}
                    disabled={emailVerified}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full rounded-xl sm:rounded-2xl border border-amber-200/80 bg-amber-50/20 py-3.5 pl-11 pr-28 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10 disabled:opacity-60"
                  />

                  {!otpSent && !emailVerified && (
                    <button
                      type="button"
                      onClick={sendOtp}
                      disabled={sendOtpMutation.isPending || !formData.email.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg sm:rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:opacity-95 cursor-pointer disabled:opacity-50"
                    >
                      {sendOtpMutation.isPending ? (
                        <FaSpinner className="animate-spin" />
                      ) : (
                        "Send OTP"
                      )}
                    </button>
                  )}
                </div>

                {/* OTP Verification Step */}
                {otpSent && !emailVerified && (
                  <div className="space-y-3 pt-1">
                    <div className="relative">
                      <input
                        value={otp}
                        maxLength={6}
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                        placeholder="Enter 6-digit OTP"
                        className="w-full rounded-xl sm:rounded-2xl border border-amber-200/80 bg-amber-50/20 py-3.5 px-4 pr-24 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10"
                      />

                      <button
                        type="button"
                        onClick={verifyOtp}
                        disabled={verifyOtpMutation.isPending || otp.length !== 6}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg sm:rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:opacity-95 cursor-pointer disabled:opacity-50"
                      >
                        {verifyOtpMutation.isPending ? (
                          <FaSpinner className="animate-spin" />
                        ) : (
                          "Verify"
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-xs px-1">
                      <button
                        type="button"
                        onClick={() => {
                          setOtpSent(false);
                          setEmailVerified(false);
                          setVerificationToken("");
                          setOtp("");
                        }}
                        className="font-semibold text-amber-600 hover:underline cursor-pointer"
                      >
                        Change Email
                      </button>

                      <button
                        type="button"
                        disabled={timer > 0 || sendOtpMutation.isPending}
                        onClick={sendOtp}
                        className="font-semibold text-amber-700 disabled:text-slate-400 cursor-pointer"
                      >
                        {sendOtpMutation.isPending
                          ? "Sending..."
                          : timer > 0
                          ? `Resend (${timer}s)`
                          : "Resend OTP"}
                      </button>
                    </div>
                  </div>
                )}

                {/* Verified Badge */}
                {emailVerified && (
                  <div className="flex items-center gap-2.5 rounded-xl sm:rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3.5">
                    <FaCheckCircle className="text-emerald-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-emerald-700">
                      Email verified successfully!
                    </span>
                  </div>
                )}

                {/* Password */}
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 text-sm" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create Password (min 8 chars, mixed case, number)"
                    autoComplete="new-password"
                    className="w-full rounded-xl sm:rounded-2xl border border-amber-200/80 bg-amber-50/20 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10"
                  />
                </div>

                {/* Action Buttons */}
                {role === "teacher" ? (
                  <button
                    type="button"
                    onClick={handleProceedToTeacherProfile}
                    disabled={!emailVerified || !isCredentialsValid}
                    className="w-full flex items-center justify-center gap-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500 via-amber-500 to-yellow-500 py-3.5 font-bold text-sm text-white shadow-md shadow-amber-500/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                  >
                    <span>Next: Teaching Profile &amp; Availability</span>
                    <FaArrowRight className="text-xs" />
                  </button>
                ) : (
                  <button
                    onClick={handleSignUp}
                    disabled={!emailVerified || !isCredentialsValid || signUpMutation.isPending}
                    className="w-full flex items-center justify-center gap-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500 via-amber-500 to-yellow-500 py-3.5 font-bold text-sm text-white shadow-md shadow-amber-500/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                  >
                    {signUpMutation.isPending ? (
                      <FaSpinner className="animate-spin text-base" />
                    ) : (
                      <>
                        <span>Create Student Account</span>
                        <FaArrowRight className="text-xs" />
                      </>
                    )}
                  </button>
                )}
              </div>
            )}

            {/* STEP 2: TEACHER PROFILE DETAILS */}
            {role === "teacher" && teacherStep === 2 && (
              <div className="space-y-4 pt-1 animate-fadeIn">
                {/* Subject Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Subject You Wish to Teach *
                  </label>
                  <select
                    value={teacherProfile.subject}
                    onChange={(e) => handleTeacherChange("subject", e.target.value)}
                    className="w-full rounded-xl sm:rounded-2xl border border-amber-200/80 bg-amber-50/20 py-3 px-3.5 text-sm font-semibold text-slate-900 outline-none focus:border-amber-500 focus:bg-white"
                  >
                    {popularSubjects.map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                    <option value="Other">Other Subject...</option>
                  </select>

                  {teacherProfile.subject === "Other" && (
                    <input
                      type="text"
                      placeholder="Specify your subject (e.g. Italian, Economics)"
                      value={teacherProfile.customSubject}
                      onChange={(e) => handleTeacherChange("customSubject", e.target.value)}
                      className="mt-2 w-full rounded-xl border border-amber-200/80 bg-white py-2.5 px-3.5 text-sm text-slate-900 outline-none focus:border-amber-500"
                    />
                  )}
                </div>

                {/* Mode & Experience Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Teaching Mode *
                    </label>
                    <select
                      value={teacherProfile.mode}
                      onChange={(e) => handleTeacherChange("mode", e.target.value)}
                      className="w-full rounded-xl border border-amber-200/80 bg-amber-50/20 py-3 px-3.5 text-xs sm:text-sm font-semibold text-slate-900 outline-none focus:border-amber-500 focus:bg-white"
                    >
                      {teachingModes.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Teaching Experience *
                    </label>
                    <select
                      value={teacherProfile.experience}
                      onChange={(e) => handleTeacherChange("experience", e.target.value)}
                      className="w-full rounded-xl border border-amber-200/80 bg-amber-50/20 py-3 px-3.5 text-xs sm:text-sm font-semibold text-slate-900 outline-none focus:border-amber-500 focus:bg-white"
                    >
                      {experienceLevels.map((exp) => (
                        <option key={exp} value={exp}>
                          {exp}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Qualification & Student Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Academic Qualification *
                    </label>
                    <select
                      value={teacherProfile.qualification}
                      onChange={(e) => handleTeacherChange("qualification", e.target.value)}
                      className="w-full rounded-xl border border-amber-200/80 bg-amber-50/20 py-3 px-3.5 text-xs sm:text-sm font-semibold text-slate-900 outline-none focus:border-amber-500 focus:bg-white"
                    >
                      {qualificationList.map((q) => (
                        <option key={q} value={q}>
                          {q}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Target Student Level *
                    </label>
                    <select
                      value={teacherProfile.studentLevel}
                      onChange={(e) => handleTeacherChange("studentLevel", e.target.value)}
                      className="w-full rounded-xl border border-amber-200/80 bg-amber-50/20 py-3 px-3.5 text-xs sm:text-sm font-semibold text-slate-900 outline-none focus:border-amber-500 focus:bg-white"
                    >
                      {studentLevelsList.map((lvl) => (
                        <option key={lvl} value={lvl}>
                          {lvl}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Phone & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Mobile Number (10 digits) *
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-500 text-xs" />
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="e.g. 9876543210"
                        value={teacherProfile.phone}
                        onChange={(e) =>
                          handleTeacherChange("phone", e.target.value.replace(/\D/g, ""))
                        }
                        className="w-full rounded-xl border border-amber-200/80 bg-amber-50/20 py-2.5 pl-10 pr-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      City / Location
                    </label>
                    <div className="relative">
                      <FaMapMarkerAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-500 text-xs" />
                      <input
                        type="text"
                        placeholder="e.g. Chandigarh, Delhi"
                        value={teacherProfile.city}
                        onChange={(e) => handleTeacherChange("city", e.target.value)}
                        className="w-full rounded-xl border border-amber-200/80 bg-amber-50/20 py-2.5 pl-10 pr-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Available Days Multi-Select Chips */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Available Days to Teach *
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {daysList.map((day) => {
                      const isSelected = teacherProfile.availability.includes(day);
                      return (
                        <button
                          key={day}
                          type="button"
                          onClick={() => toggleDay(day)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border cursor-pointer ${
                            isSelected
                              ? "bg-amber-400 text-slate-950 border-amber-400 shadow-2xs"
                              : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Preferred Time Slots Chips */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Preferred Time Slots
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {timeSlotsList.map((slot) => {
                      const isSelected = teacherProfile.timeSlot.includes(slot);
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => toggleTimeSlot(slot)}
                          className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition border cursor-pointer ${
                            isSelected
                              ? "bg-amber-400 text-slate-950 border-amber-400 shadow-2xs"
                              : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Short Bio / Intro */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Bio / Teaching Background (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={teacherProfile.bio}
                    onChange={(e) => handleTeacherChange("bio", e.target.value)}
                    placeholder="Briefly describe your teaching philosophy or credentials..."
                    className="w-full text-xs p-2.5 rounded-xl border border-amber-200/80 bg-white text-slate-800 outline-none focus:border-amber-500"
                  />
                </div>

                {/* Step 2 Buttons */}
                <div className="flex gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setTeacherStep(1)}
                    className="px-4 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <FaArrowLeft className="text-[10px]" /> Back
                  </button>

                  <button
                    type="button"
                    onClick={handleSignUp}
                    disabled={signUpMutation.isPending}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-yellow-500 py-3.5 font-bold text-xs sm:text-sm text-white shadow-md shadow-amber-500/20 hover:scale-[1.01] transition cursor-pointer"
                  >
                    {signUpMutation.isPending ? (
                      <FaSpinner className="animate-spin text-base" />
                    ) : (
                      <>
                        <span>Submit Teacher Registration</span>
                        <FaArrowRight className="text-xs" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Divider (Hidden on teacher step 2) */}
            {teacherStep === 1 && (
              <>
                <div className="flex items-center gap-3 py-1">
                  <div className="h-px flex-1 bg-amber-100" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    OR
                  </span>
                  <div className="h-px flex-1 bg-amber-100" />
                </div>

                {/* Google Signup */}
                <button
                  disabled
                  className="w-full flex items-center justify-center gap-3 rounded-xl sm:rounded-2xl border border-amber-200/80 bg-white py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-amber-50/60 disabled:opacity-50"
                >
                  <FaGoogle className="text-[#DB4437]" />
                  <span>Continue with Google</span>
                </button>
              </>
            )}

            {/* Footer */}
            <div className="pt-2 text-center text-xs sm:text-sm text-slate-600">
              <span>Already have an account?</span>
              <Link
                href="/login"
                className="ml-1.5 font-bold text-amber-600 hover:text-amber-700 hover:underline transition"
              >
                Login
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
