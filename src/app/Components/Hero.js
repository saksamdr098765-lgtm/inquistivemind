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
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-20"
    >
      {/* Mobile Background */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src="/classroom.jpg"
          alt="Students learning at Inquisitive Mind Academy"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-24 left-10 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="absolute bottom-24 right-10 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl" />

      {/* Desktop Layout */}
      <div className="hidden min-h-screen lg:grid lg:grid-cols-2">
        {/* Image Side */}
        <div className="relative overflow-hidden">
          <img
            src="/classroom.jpg"
            alt="Students learning at Inquisitive Mind Academy"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-900/20" />
        </div>

        {/* Content Side */}
        <div className="flex items-center bg-gradient-to-br from-amber-50 via-white to-sky-50 px-12 xl:px-20">
          <HeroContent index={index} desktop />
        </div>
      </div>

      {/* Mobile Content */}
      <div className="relative z-10 flex min-h-screen items-end px-6 pb-16 lg:hidden">
        <HeroContent index={index} />
      </div>
    </section>
  );
}

function HeroContent({ index, desktop = false }) {
  return (
    <div className="max-w-xl">
      {/* Tag */}
      <div
        className={`mb-5 inline-flex rounded-full px-4 py-2 text-xs font-semibold tracking-[0.2em] ${
          desktop
            ? "bg-yellow-100 text-amber-700"
            : "bg-white/10 text-yellow-300 backdrop-blur-sm"
        }`}
      >
        INQUISITIVE MIND ACADEMY
      </div>

      {/* Heading */}
      <h1
        className={`font-extrabold leading-[1.05] ${
          desktop
            ? "text-5xl xl:text-7xl text-slate-900"
            : "text-4xl text-white"
        }`}
      >
        Igniting
        <span className="block text-yellow-500">
          Inquisitive Minds
        </span>
        <span
          className={`block ${
            desktop ? "text-slate-900" : "text-white"
          }`}
        >
          For Tomorrow
        </span>
      </h1>

      {/* Description */}
      <p
        className={`mt-6 text-lg leading-relaxed ${
          desktop ? "text-slate-600" : "text-white/80"
        }`}
      >
        Empowering students through engaging learning experiences,
        critical thinking, innovation, and academic excellence.
      </p>

      {/* Animated Word */}
      <div className="mt-5 flex items-center gap-2 text-sm">
        <span
          className={
            desktop ? "text-slate-500" : "text-white/60"
          }
        >
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

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/courses"
          className="rounded-full bg-yellow-400 px-8 py-3 font-semibold text-slate-900 shadow-lg shadow-yellow-400/30 transition-all hover:-translate-y-1 hover:bg-yellow-500"
        >
          Explore Programs
        </Link>

        <Link
          href="/about"
          className={`flex items-center gap-2 font-medium transition ${
            desktop
              ? "text-slate-700 hover:text-sky-600"
              : "text-white hover:text-sky-300"
          }`}
        >
          Learn More
          <FaArrowRight size={12} />
        </Link>
      </div>

      {/* Stats */}
      <div
        className={`mt-14 flex gap-10 ${
          desktop ? "text-slate-500" : "text-white/70"
        }`}
      >
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
    </div>
  );
}