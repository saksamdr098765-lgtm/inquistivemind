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
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-amber-200/20 blur-3xl" />

      </div>

      <div className="relative mx-auto flex min-h-screen max-w-md items-center px-4">

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="w-full"
        >

          {/* Logo */}

          <div className="text-center">

            <img
              src="/icon1.png"
              alt="IMA"
              className="mx-auto h-16 w-16"
            />

            <span className="mt-6 inline-flex rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-xs font-semibold tracking-wide text-yellow-700">
              JOIN OUR COMMUNITY
            </span>

            <h1 className="mt-5 text-3xl font-bold text-slate-900">
              Create Your Account
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Start learning English, French and
              academic programs with expert mentors.
            </p>

          </div>

          {/* Card */}

          <div className="mt-8 rounded-3xl border border-yellow-100 bg-white p-6 shadow-lg">

            {/* Role */}

            <div>

              <p className="mb-3 text-sm font-semibold text-slate-700">
                Register As
              </p>

              <div className="grid grid-cols-2 gap-2 rounded-2xl bg-yellow-50 p-1">

                <button
                  type="button"
                  onClick={() =>
                    setRole("student")
                  }
                  className={`rounded-xl py-3 text-sm font-semibold transition ${
                    role === "student"
                      ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow"
                      : "text-slate-600"
                  }`}
                >
                  🎓 Student
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setRole("teacher")
                  }
                  className={`rounded-xl py-3 text-sm font-semibold transition ${
                    role === "teacher"
                      ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow"
                      : "text-slate-600"
                  }`}
                >
                  👨‍🏫 Teacher
                </button>

              </div>

            </div>

            {/* Inputs */}

            <div className="mt-6 space-y-4">

              <div className="relative">

                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-yellow-200 bg-white py-3.5 pl-12 pr-4 outline-none transition focus:border-yellow-500"
                />

              </div>

              <div className="relative">

                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />

                <input
                  name="email"
                  value={formData.email}
                  disabled={emailVerified}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-yellow-200 bg-white py-3.5 pl-12 pr-28 outline-none focus:border-yellow-500"
                />

                {!otpSent && !emailVerified && (

                  <button
                    type="button"
                    onClick={sendOtp}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-3 py-2 text-xs font-semibold text-white"
                  >
                    {sendOtpMutation.isPending ? (
                      <FaSpinner className="animate-spin" />
                    ) : (
                      "Send OTP"
                    )}
                  </button>

                )}

              </div>
                            {/* OTP Verification */}

              {otpSent && !emailVerified && (
                <div>

                  <div className="relative">

                    <input
                      value={otp}
                      maxLength={6}
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      onChange={(e) =>
                        setOtp(
                          e.target.value.replace(/\D/g, "")
                        )
                      }
                      placeholder="Enter 6-digit OTP"
                      className="w-full rounded-2xl border border-yellow-200 bg-white py-3.5 px-4 pr-28 outline-none transition focus:border-yellow-500"
                    />

                    <button
                      type="button"
                      onClick={verifyOtp}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-3 py-2 text-xs font-semibold text-white"
                    >
                      {verifyOtpMutation.isPending ? (
                        <FaSpinner className="animate-spin" />
                      ) : (
                        "Verify"
                      )}
                    </button>

                  </div>

                  <div className="mt-3 flex items-center justify-between">

                    <button
                      type="button"
                      onClick={() => {
                        setOtpSent(false);
                        setEmailVerified(false);
                        setVerificationToken("");
                        setOtp("");
                      }}
                      className="text-xs font-medium text-[#D6451B] hover:underline"
                    >
                      Change Email
                    </button>

                    <button
                      type="button"
                      disabled={
                        timer > 0 ||
                        sendOtpMutation.isPending
                      }
                      onClick={sendOtp}
                      className="text-xs font-medium text-yellow-700 disabled:text-slate-400"
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

              {/* Verified */}

              {emailVerified && (
                <div className="flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4">

                  <FaCheckCircle className="text-green-600" />

                  <span className="text-sm font-medium text-green-700">
                    Email verified successfully
                  </span>

                </div>
              )}

              {/* Password */}

              <div className="relative">

                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create Password"
                  autoComplete="new-password"
                  className="w-full rounded-2xl border border-yellow-200 bg-white py-3.5 pl-12 pr-4 outline-none transition focus:border-yellow-500"
                />

              </div>

            </div>

            {/* Create Account */}

            <button
              onClick={handleSignUp}
              disabled={
                !emailVerified ||
                !isFormValid ||
                signUpMutation.isPending
              }
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-500 to-[#D6451B] py-3.5 font-semibold text-white shadow-md transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {signUpMutation.isPending ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <>
                  Create Account
                  <FaArrowRight />
                </>
              )}
            </button>

            {/* Divider */}

            <div className="my-7 flex items-center gap-4">

              <div className="h-px flex-1 bg-yellow-200" />

              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                OR
              </span>

              <div className="h-px flex-1 bg-yellow-200" />

            </div>

            {/* Google */}

            <button
              disabled
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-yellow-200 bg-yellow-50 py-3.5 text-slate-600 transition disabled:opacity-40"
            >
              <FaGoogle />
              Continue with Google
            </button>

          </div>

          {/* Footer */}

          <p className="mt-8 text-center text-sm text-slate-600">

            Already have an account?

            <Link
              href="/login"
              className="ml-2 font-semibold text-[#D6451B] hover:text-amber-600"
            >
              Login
            </Link>

          </p>

        </motion.div>

      </div>

    </section>
  );
}