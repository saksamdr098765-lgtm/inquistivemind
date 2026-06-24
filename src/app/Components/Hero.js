"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CountUp from "react-countup";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a]" />

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6451B]/20 blur-[180px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Nodes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
            }}
            className="absolute h-3 w-3 rounded-full bg-[#D6451B]"
            style={{
              left: `${10 + i * 7}%`,
              top: `${15 + (i % 5) * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#D6451B]/30 bg-[#D6451B]/10 px-4 py-2 text-sm text-[#D6451B]"
          >
            Curiosity Driven Education
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-5xl font-black leading-none text-white md:text-7xl lg:text-8xl"
          >
            Every Great
            <br />
            Discovery Begins
            <br />
            With A
            <span className="text-[#D6451B]"> Question.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
          >
            At Inquisitive Mind Academy, we nurture curiosity,
            critical thinking, creativity, and confidence—helping
            learners transform questions into knowledge and
            knowledge into impact.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/courses"
              className="rounded-full bg-[#D6451B] px-7 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore Programs
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-white hover:bg-white/10"
            >
              Our Story
              <FaArrowRight />
            </Link>
          </motion.div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <div className="text-3xl font-bold text-[#D6451B]">
                <CountUp end={5000} />+
              </div>
              <p className="mt-1 text-white/60">
                Curious Learners
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <div className="text-3xl font-bold text-[#D6451B]">
                <CountUp end={50} />+
              </div>
              <p className="mt-1 text-white/60">
                Expert Mentors
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <div className="text-3xl font-bold text-[#D6451B]">
                <CountUp end={98} />%
              </div>
              <p className="mt-1 text-white/60">
                Success Rate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Question Mark */}
      <motion.div
        animate={{
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute right-[-80px] top-1/2 hidden -translate-y-1/2 select-none lg:block"
      >
        <span className="text-[500px] font-black text-[#D6451B]/10">
          ?
        </span>
      </motion.div>
    </section>
  );
}