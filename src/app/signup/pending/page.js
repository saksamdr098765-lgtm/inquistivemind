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
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-slate-50/50 pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6">

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative w-full max-w-lg my-auto"
      >
        <div className="overflow-hidden rounded-2xl sm:rounded-[32px] border border-amber-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-8 shadow-xl space-y-6">

          {/* Icon Header */}
          <div className="text-center space-y-3">
            <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 shadow-lg shadow-amber-500/20 text-3xl sm:text-4xl text-white">
              <FaCheckCircle />
            </div>

            <span className="inline-flex rounded-full bg-amber-100 border border-amber-200 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-800">
              Registration Completed
            </span>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              You're Almost There!
            </h1>

            <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed max-w-sm mx-auto">
              Welcome to <span className="font-bold text-amber-600">Inquisitive Mind Academy</span>. Your account was created successfully and is awaiting review.
            </p>
          </div>

          {/* Status Card */}
          <div className="rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-yellow-50/40 to-white p-4 sm:p-5 space-y-3">
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-amber-100 shadow-xs text-amber-600 text-lg">
                <FaClock />
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-sm text-slate-900">
                  What happens next?
                </h3>

                <ul className="space-y-1.5 text-xs sm:text-sm font-medium text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Our team reviews your registration.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> You'll receive an approval notification.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Login & begin your learning journey.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Estimate Notice */}
          <div className="rounded-xl bg-amber-50/60 border border-amber-100 p-4 text-center">
            <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
              Most accounts are approved within <span className="font-bold text-amber-700">24 hours</span>. Need quicker access? Contact our support team.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500 via-amber-500 to-yellow-500 py-3.5 font-bold text-sm text-white shadow-md shadow-amber-500/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
            >
              <FaHome />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-amber-200/80 bg-white py-3.5 font-semibold text-sm text-slate-700 transition hover:bg-amber-50/60"
            >
              <FaHeadset />
              <span>Contact Support</span>
            </Link>
          </div>

        </div>
      </motion.div>
    </section>
  );
}