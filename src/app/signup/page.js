"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaArrowRight,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

import {
  useSendOtpMutation,
  useSignUpMutation,
  useVerifyOtpMutation,
} from "../mutations/AuthenticationMutations";

import { toast } from "sonner";
import Link from "next/link";

export default function SignUpPage() {
  const [role, setRole] = useState("student");

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

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
    });

    setRole("student");
    setOtp("");
    setOtpSent(false);
    setEmailVerified(false);
    setVerificationToken("");
    setTimer(0);
  };

  const signUpMutation = useSignUpMutation(resetForm);

  const sendOtpMutation = useSendOtpMutation(
    setOtpSent,
    setTimer
  );

  const verifyOtpMutation = useVerifyOtpMutation(
    setOtpSent,
    setEmailVerified,
    setVerificationToken
  );

  const handleChange = ({
    target: { name, value },
  }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const emailRegex = /^\S+@\S+\.\S+$/;
  const nameRegex = /^[A-Za-z\s'-]{2,50}$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&]).{8,}$/;

  const validate = () => {
    if (!nameRegex.test(formData.name.trim()))
      return "Enter a valid name.";

    if (!emailRegex.test(formData.email.trim()))
      return "Enter a valid email.";

    if (!passwordRegex.test(formData.password))
      return "Password must contain uppercase, lowercase, number and special character.";

    return null;
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.password;

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
      toast.error("Enter valid OTP");
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

  const handleSignUp = (e) => {
    e.preventDefault();

    const error = validate();

    if (error) {
      toast.error(error);
      return;
    }

    signUpMutation.mutate({
      fullName: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password,
      role,
      verificationToken,
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-slate-50/50 pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6">

      {/* Decorative Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md my-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >

          {/* Main Card */}
          <div className="overflow-hidden rounded-2xl sm:rounded-[32px] border border-amber-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-8 shadow-xl space-y-6">

            {/* Header / Logo */}
            <div className="text-center space-y-3">

              <span className="inline-flex rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-xs">
                Join Our Community
              </span>

              <img
                src="/icon1.png"
                alt="IMA"
                className="mx-auto h-16 sm:h-20 w-16 sm:w-20 object-contain drop-shadow-xs"
              />

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Create Your Account
              </h1>

              <p className="text-xs sm:text-sm font-medium text-slate-500 leading-relaxed max-w-xs mx-auto">
                Start learning English, French, and academic programs with expert mentors.
              </p>

            </div>

            {/* Role Switcher */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Register As
              </label>

              <div className="grid grid-cols-2 gap-1.5 rounded-xl sm:rounded-2xl bg-amber-50/80 p-1.5 border border-amber-100">
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className={`rounded-lg sm:rounded-xl py-2.5 text-xs sm:text-sm font-bold transition-all ${
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
                  className={`rounded-lg sm:rounded-xl py-2.5 text-xs sm:text-sm font-bold transition-all ${
                    role === "teacher"
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  👨‍🏫 Teacher
                </button>
              </div>
            </div>

            {/* Inputs Form */}
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
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg sm:rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:opacity-95"
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
                      onChange={(e) =>
                        setOtp(e.target.value.replace(/\D/g, ""))
                      }
                      placeholder="Enter 6-digit OTP"
                      className="w-full rounded-xl sm:rounded-2xl border border-amber-200/80 bg-amber-50/20 py-3.5 px-4 pr-24 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10"
                    />

                    <button
                      type="button"
                      onClick={verifyOtp}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg sm:rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:opacity-95"
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
                      className="font-semibold text-amber-600 hover:underline"
                    >
                      Change Email
                    </button>

                    <button
                      type="button"
                      disabled={timer > 0 || sendOtpMutation.isPending}
                      onClick={sendOtp}
                      className="font-semibold text-amber-700 disabled:text-slate-400"
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
                  placeholder="Create Password"
                  autoComplete="new-password"
                  className="w-full rounded-xl sm:rounded-2xl border border-amber-200/80 bg-amber-50/20 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10"
                />
              </div>

            </div>

            {/* Create Account Button */}
            <button
              onClick={handleSignUp}
              disabled={
                !emailVerified ||
                !isFormValid ||
                signUpMutation.isPending
              }
              className="w-full flex items-center justify-center gap-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500 via-amber-500 to-yellow-500 py-3.5 font-bold text-sm text-white shadow-md shadow-amber-500/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
            >
              {signUpMutation.isPending ? (
                <FaSpinner className="animate-spin text-base" />
              ) : (
                <>
                  <span>Create Account</span>
                  <FaArrowRight className="text-xs" />
                </>
              )}
            </button>

            {/* Divider */}
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