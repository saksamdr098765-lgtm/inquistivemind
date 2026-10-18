"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";
import {
  useForgotPassword,
  useSendOtpMutation,
  useVerifyOtpMutation,
} from "../mutations/AuthenticationMutations";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";

export default function ForgetPasswordPage() {
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

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0);
  const [emailVerified, setEmailVerified] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [verificationToken, setVerificationToken] = useState("");

  const resetForm = () => {
    setFormData({
      confirmPassword: "",
      email: "",
      password: "",
    });

    setOtp("");
    setOtpSent(false);
    setEmailVerified(false);
    setVerificationToken("");
    setTimer(0);
  };

  const forgotPassword = useForgotPassword(resetForm);
  const sendOtpMuatation = useSendOtpMutation(setOtpSent, setTimer);
  const verifyOtpMutation = useVerifyOtpMutation(
    setOtpSent,
    setEmailVerified,
    setVerificationToken
  );

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&]).{8,}$/;

  const validate = () => {
    if (!emailRegex.test(formData.email.trim())) {
      return "Enter a valid Email";
    }
    if (!passwordRegex.test(formData.password)) {
      return "Password must contain uppercase, lowercase, number and special character.";
    }
    if (formData.password !== formData.confirmPassword) {
      return "Passwords do not match.";
    }

    return null;
  };

  const isFormValid =
    formData.email.trim() &&
    formData.password &&
    formData.confirmPassword;

  const sendOpt = () => {
    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Enter a valid Email");
      return;
    }
    sendOtpMuatation.mutate({
      email: formData.email.trim(),
      purpose: "forgot-password",
    });
  };

  const verifyOtp = () => {
    if (!otp.trim() || otp.trim().length !== 6) {
      toast.error("Enter a valid 6-digit OTP");
      return;
    }
    verifyOtpMutation.mutate({
      email: formData.email.trim(),
      purpose: "forgot-password",
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

  const handleResetPassword = (e) => {
    e.preventDefault();

    const error = validate();

    if (error) {
      toast.error(error);
      return;
    }

    const data = {
      email: formData.email.trim(),
      verificationToken,
      newPassword: formData.password,
    };

    forgotPassword.mutate(data);
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
                Account Recovery
              </span>

              <img
                src="/icon1.png"
                alt="IMA"
                className="mx-auto h-16 sm:h-20 w-16 sm:w-20 object-contain drop-shadow-xs"
              />

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Forgot Password
              </h1>

              <p className="text-xs sm:text-sm font-medium text-slate-500 leading-relaxed max-w-xs mx-auto">
                Reset your account password securely in a few simple steps.
              </p>
            </div>

            {/* Inputs Form */}
            <form onSubmit={handleResetPassword} className="space-y-4">
              {/* Email + Send OTP */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 text-sm" />
                <input
                  type="email"
                  name="email"
                  id="forget-email"
                  autoComplete="email"
                  value={formData.email}
                  disabled={emailVerified}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full rounded-xl sm:rounded-2xl border border-amber-200/80 bg-amber-50/20 py-3.5 pl-11 pr-28 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10 disabled:opacity-60"
                />

                {!otpSent && !emailVerified && (
                  <button
                    type="button"
                    onClick={sendOpt}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg sm:rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:opacity-95"
                  >
                    {sendOtpMuatation.isPending ? (
                      <FaSpinner className="animate-spin text-xs" />
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
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg sm:rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:opacity-95"
                    >
                      {verifyOtpMutation.isPending ? (
                        <FaSpinner className="animate-spin text-xs" />
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
                      disabled={timer > 0 || sendOtpMuatation.isPending}
                      onClick={sendOpt}
                      className="font-semibold text-amber-700 disabled:text-slate-400"
                    >
                      {sendOtpMuatation.isPending
                        ? "Sending..."
                        : timer > 0
                        ? `Resend (${timer}s)`
                        : "Resend OTP"}
                    </button>
                  </div>
                </div>
              )}

              {/* Email Verified Badge */}
              {emailVerified && (
                <div className="flex items-center gap-2.5 rounded-xl sm:rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3.5">
                  <FaCheckCircle className="text-emerald-600 shrink-0 text-sm" />
                  <span className="text-xs sm:text-sm font-semibold text-emerald-700">
                    Email verified successfully!
                  </span>
                </div>
              )}

              {/* New Password */}
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 text-sm" />
                <input
                  type="password"
                  name="password"
                  id="forget-password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="New Password"
                  className="w-full rounded-xl sm:rounded-2xl border border-amber-200/80 bg-amber-50/20 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10"
                />
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 text-sm" />
                <input
                  type="password"
                  name="confirmPassword"
                  id="forget-confirmPassword"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm New Password"
                  className="w-full rounded-xl sm:rounded-2xl border border-amber-200/80 bg-amber-50/20 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={
                  !emailVerified ||
                  !isFormValid ||
                  forgotPassword.isPending
                }
                className="w-full flex items-center justify-center gap-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500 via-amber-500 to-yellow-500 py-3.5 font-bold text-sm text-white shadow-md shadow-amber-500/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
              >
                {forgotPassword.isPending ? (
                  <FaSpinner className="animate-spin text-base" />
                ) : (
                  <>
                    <span>Reset Password</span>
                    <FaArrowRight className="text-xs" />
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="pt-2 text-center text-xs sm:text-sm text-slate-600">
              <span>Remember your password?</span>
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