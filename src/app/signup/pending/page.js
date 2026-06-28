"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaClock,
  FaHome,
  FaHeadset,
} from "react-icons/fa";

export default function PendingApprovalPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 py-12 sm:px-6 lg:py-20">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-amber-200/20 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative w-full max-w-lg"
      >
        <div className="rounded-3xl border border-yellow-100 bg-white p-6 shadow-xl sm:p-8">

          {/* Success Icon */}

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg">

            <FaCheckCircle className="text-4xl text-white" />

          </div>

          {/* Badge */}

          <div className="mt-6 flex justify-center">

            <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-xs font-semibold tracking-wide text-yellow-700">
              REGISTRATION COMPLETED
            </span>

          </div>

          {/* Heading */}

          <h1 className="mt-5 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            You're Almost There!
          </h1>

          <p className="mt-4 text-center text-sm leading-7 text-slate-600 sm:text-base">
            Welcome to
            <span className="font-semibold text-[#D6451B]">
              {" "}
              Inquisitive Mind Academy
            </span>
            .
          </p>

          <p className="mt-2 text-center text-sm leading-7 text-slate-500">
            Your account has been created successfully and is currently awaiting approval from our team.
          </p>

          {/* Status Card */}

          <div className="mt-8 rounded-3xl border border-yellow-200 bg-gradient-to-r from-yellow-50 via-amber-50 to-white p-5">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">

                <FaClock className="text-lg text-[#D6451B]" />

              </div>

              <div>

                <h3 className="font-semibold text-slate-900">
                  What happens next?
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-slate-600">

                  <li>✓ Our team reviews your registration.</li>

                  <li>✓ You'll receive an approval email.</li>

                  <li>✓ Login and begin your learning journey.</li>

                </ul>

              </div>

            </div>

          </div>

          {/* Notice */}

          <div className="mt-6 rounded-3xl border border-yellow-100 bg-yellow-50 p-5">

            <p className="text-center text-sm leading-7 text-slate-600">

              Most accounts are approved within

              <span className="font-semibold text-[#D6451B]">
                {" "}24 hours.
              </span>

              <br />

              Need quicker access? Our support team is happy to help.

            </p>

          </div>

          {/* Buttons */}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/"
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-500 to-[#D6451B] py-3.5 font-semibold text-white shadow-md transition hover:scale-[1.02]"
            >
              <FaHome />
              Back to Home
            </Link>

            <Link
              href="/contact"
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-yellow-200 bg-white py-3.5 font-semibold text-slate-700 transition hover:bg-yellow-50"
            >
              <FaHeadset />
              Contact Support
            </Link>

          </div>

        </div>
      </motion.div>
    </section>
  );
}