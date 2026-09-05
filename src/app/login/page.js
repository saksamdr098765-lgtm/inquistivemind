"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaArrowRight,
  FaSpinner,
} from "react-icons/fa";
import { useLoginMutation } from "../mutations/AuthenticationMutations";
import Link from "next/link";

export default function LoginPage() {

   const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loginMutation = useLoginMutation();

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const emailRegex = /^\S+@\S+\.\S+$/;

  const validate = () => {
    if (!formData.email.trim()) {
      return "Email Cannot be Empty";
    }
    if (!emailRegex.test(formData.email.trim())) {
      return "Enter a valid Email";
    }
    if (!formData.password) {
      return "Password Cannot be empty";
    }
    if (formData.password.length < 8) {
      return "Password length cannot be less than 8";
    }

    return null;
  };

  const isFormValid = formData.email.trim() && formData.password;

  const handleLogin = (e) => {
    e.preventDefault();

    const error = validate();

    if (error) {
      toast.error(error); 
      return;
    }

    loginMutation.mutate({
      email: formData.email.trim(),
      password: formData.password,
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
                Student Login
              </span>

              <img
                src="/icon1.png"
                alt="IMA"
                className="mx-auto h-16 sm:h-20 w-16 sm:w-20 object-contain drop-shadow-xs"
              />

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Welcome Back
              </h1>

              <p className="text-xs sm:text-sm font-medium text-slate-500 leading-relaxed max-w-xs mx-auto">
                Continue your learning journey with expert-led classes.
              </p>

            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 text-sm" />
                <input
                  type="email"
                  name="email"
                  id="login-email"
                  autoComplete="email"
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full rounded-xl sm:rounded-2xl border border-amber-200/80 bg-amber-50/20 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 text-sm" />
                <input
                  type="password"
                  name="password"
                  id="login-password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full rounded-xl sm:rounded-2xl border border-amber-200/80 bg-amber-50/20 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10"
                />
              </div>

              <div className="flex justify-end pt-1">
                <span className="cursor-pointer text-xs font-semibold text-amber-600 hover:text-amber-700 transition">
                  Forgot password?
                </span>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={!isFormValid || loginMutation.isPending}
                className="w-full flex items-center justify-center gap-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500 via-amber-500 to-yellow-500 py-3.5 font-bold text-sm text-white shadow-md shadow-amber-500/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
              >
                {loginMutation.isPending ? (
                  <FaSpinner className="animate-spin text-base" />
                ) : (
                  <>
                    <span>Login</span>
                    <FaArrowRight className="text-xs" />
                  </>
                )}
              </button>

            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 py-1">
              <div className="h-px flex-1 bg-amber-100" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                OR
              </span>
              <div className="h-px flex-1 bg-amber-100" />
            </div>

            {/* Google Login */}
            <div className="relative group">
              <button
                disabled
                className="w-full flex items-center justify-center gap-3 rounded-xl sm:rounded-2xl border border-amber-200/80 bg-white py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-amber-50/60 disabled:opacity-50"
              >
                <FaGoogle className="text-[#DB4437]" />
                <span>Continue with Google</span>
              </button>

              {/* Mobile Badge */}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold text-amber-800 sm:hidden">
                Soon
              </span>

              {/* Desktop Tooltip */}
              <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-3.5 py-1 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 whitespace-nowrap hidden sm:block">
                Coming Soon 🚀
              </div>
            </div>

            {/* Footer */}
            <div className="pt-2 text-center text-xs sm:text-sm text-slate-600">
              <span>Don't have an account?</span>
              <Link
                href="/signup"
                className="ml-1.5 font-bold text-amber-600 hover:text-amber-700 hover:underline transition"
              >
                Create Account
              </Link>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}