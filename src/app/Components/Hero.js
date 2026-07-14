"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaArrowRight } from "react-icons/fa";

const words = [
  "Curiosity",
  "Creativity",
  "Innovation",
  "Excellence",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 pt-20 "
    >
      {/* Decorative Glow */}
      <div className="absolute left-8 top-24 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="absolute right-6 bottom-20 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden">
        {/* Hero Image */}
        <div className="relative h-[62vh] overflow-hidden">
          <img
            src="/classroom1.jpg"
            alt="Students learning"
            className="h-full w-full object-cover object-[55%_15%]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

          {/* Academy Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute left-5 top-5 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-white backdrop-blur-md"
          >
            INQUISITIVE MIND ACADEMY
          </motion.div>
        </div>

        {/* Floating Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative -mt-10 rounded-t-[36px] bg-white px-6 pt-8 pb-10"
        >
          <HeroContent index={index} mobile />
        </motion.div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden min-h-screen lg:grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src="/classroom1.jpg"
            alt="Students learning"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-900/20" />
        </div>

        {/* Content */}
        <div className="flex items-center bg-gradient-to-br from-yellow-50 via-white to-sky-50 px-12 xl:px-20">
          <HeroContent index={index} desktop />
        </div>
      </div>
    </section>
  );
}
function HeroContent({ index, desktop = false, mobile = false }) {
  return (
    <div className="mx-auto max-w-xl">
      {/* ---------------- MOBILE ---------------- */}
      {mobile && (
        <>
          <h1 className="text-[2.7rem] font-extrabold leading-[1.05] text-slate-900">
            Igniting
            <span className="block text-yellow-500">
              Inquisitive Minds
            </span>
            <span className="block">For Tomorrow</span>
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Empowering students through engaging learning experiences,
            critical thinking, innovation, and academic excellence.
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm">
            <span className="text-slate-500">
              Driven by
            </span>

            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="font-semibold text-sky-600"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/courses"
              className="flex items-center justify-center rounded-full bg-yellow-400 px-8 py-4 font-semibold text-slate-900 shadow-lg transition hover:bg-yellow-500"
            >
              Explore Programs
            </Link>

            <Link
              href="/about"
              className="flex items-center justify-center gap-2 rounded-full border border-slate-200 px-8 py-4 font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Learn More
              <FaArrowRight size={12} />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
              <div className="text-2xl font-bold text-yellow-500">
                <CountUp end={5000} duration={2} />+
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Learners
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
              <div className="text-2xl font-bold text-sky-500">
                <CountUp end={50} duration={2} />+
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Educators
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
              <div className="text-2xl font-bold text-red-500">
                <CountUp end={98} duration={2} />%
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Success
              </p>
            </div>
          </div>
        </>
      )}

      {/* ---------------- DESKTOP ---------------- */}
      {desktop && (
        <>
          <div className="mb-5 inline-flex rounded-full bg-yellow-100 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-yellow-700">
            INQUISITIVE MIND ACADEMY
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.05] text-slate-900 xl:text-7xl">
            Igniting
            <span className="block text-yellow-500">
              Inquisitive Minds
            </span>
            <span className="block">
              For Tomorrow
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Empowering students through engaging learning experiences,
            critical thinking, innovation, and academic excellence.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm">
            <span className="text-slate-500">
              Driven by
            </span>

            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="font-semibold text-sky-500"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="rounded-full bg-yellow-400 px-8 py-3 font-semibold text-slate-900 shadow-lg shadow-yellow-400/30 transition hover:-translate-y-1 hover:bg-yellow-500"
            >
              Explore Programs
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-2 font-medium text-slate-700 transition hover:text-sky-600"
            >
              Learn More
              <FaArrowRight size={12} />
            </Link>
          </div>

          <div className="mt-14 flex gap-10 text-slate-500">
            <div>
              <div className="text-3xl font-bold text-yellow-500">
                <CountUp end={5000} duration={2} />+
              </div>
              <div className="text-sm">Learners</div>
            </div>

            <div>
              <div className="text-3xl font-bold text-sky-500">
                <CountUp end={50} duration={2} />+
              </div>
              <div className="text-sm">Educators</div>
            </div>

            <div>
              <div className="text-3xl font-bold text-red-500">
                <CountUp end={98} duration={2} />%
              </div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}