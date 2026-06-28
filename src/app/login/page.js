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

  // const { handleError } = useContext(AuthContext);
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
  <section className="relative min-h-screen overflow-hidden bg-white">

  {/* Background */}
  <div className="absolute inset-0">
    <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-yellow-200/20 blur-3xl" />
    <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />
  </div>

  <div className="relative mx-auto flex min-h-screen max-w-md items-center px-5 py-12">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >

      {/* Logo */}

      <div className="text-center">

        <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-xs font-semibold tracking-wide text-yellow-700">
          STUDENT LOGIN
        </span>

        <img
          src="/icon1.png"
          alt="IMA"
          className="mx-auto mt-6 h-20 w-20 object-contain"
        />

        <h1 className="mt-6 text-3xl font-bold text-slate-900">
          Welcome Back
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Continue your learning journey with expert-led classes.
        </p>

      </div>

      {/* Card */}

      <div className="mt-8 rounded-[30px] border border-yellow-100 bg-white p-6 shadow-lg">

        {/* Email */}

        <div className="relative">

          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />

          <input
            type="email"
            name="email"
            id="login-email"
            autoComplete="email"
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full rounded-2xl border border-yellow-100 bg-white py-3.5 pl-12 pr-4 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
          />

        </div>

        {/* Password */}

        <div className="relative mt-4">

          <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />

          <input
            type="password"
            name="password"
            id="login-password"
            autoComplete="current-password"
            onChange={handleChange}
            placeholder="Password"
            className="w-full rounded-2xl border border-yellow-100 bg-white py-3.5 pl-12 pr-4 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
          />

        </div>

        <div className="mt-3 text-right">

          <span className="cursor-pointer text-xs font-medium text-amber-600 hover:text-[#D6451B]">
            Forgot password?
          </span>

        </div>
                {/* Login Button */}

        <button
          disabled={!isFormValid || loginMutation.isPending}
          onClick={handleLogin}
          className="
            mt-6
            flex w-full items-center justify-center gap-3
            rounded-2xl
            bg-gradient-to-r
            from-yellow-500
            via-amber-500
            to-[#D6451B]
            py-3.5
            font-semibold
            text-white
            shadow-md
            transition-all duration-300
            hover:scale-[1.02]
            hover:shadow-lg
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          {loginMutation.isPending ? (
            <FaSpinner className="animate-spin" />
          ) : (
            <>
              Login
              <FaArrowRight className="text-sm" />
            </>
          )}
        </button>

        {/* Divider */}

        <div className="my-7 flex items-center gap-3">
          <div className="h-px flex-1 bg-yellow-100" />

          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
            OR
          </span>

          <div className="h-px flex-1 bg-yellow-100" />
        </div>

        {/* Google */}

        <button
          disabled
          className="
            flex w-full items-center justify-center gap-3
            rounded-2xl
            border border-yellow-100
            bg-white
            py-3.5
            font-medium
            text-slate-700
            transition
            hover:bg-yellow-50
            disabled:opacity-40
          "
        >
          <FaGoogle className="text-[#DB4437]" />
          Continue with Google
        </button>

      </div>

      {/* Footer */}

      <p className="mt-8 text-center text-sm text-slate-600">
        Don't have an account?

        <Link
          href="/signup"
          className="ml-2 font-semibold text-amber-600 transition hover:text-[#D6451B]"
        >
          Create Account
        </Link>
      </p>

    </motion.div>

  </div>

</section>
  );
}