"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGraduationCap,
  FaUserGraduate,
  FaBriefcase,
  FaBook,
  FaGlobe,
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";


const requests = [
  {
    id: "RID-001",
    subject: "English",
    language: "English",
    goal: "Speak confidently during office meetings and presentations.",
    level: "Beginner",
    availability: "Weekdays",
    timeSlot: "7:00 PM - 8:00 PM",
  },
  {
    id:"RID-002",
    subject: "French",
    language: "French",
    goal: "Prepare for a university exchange program and improve speaking.",
    level: "A1 Beginner",
    availability: "Weekends",
    timeSlot: "10:00 AM - 12:00 PM",
  },
  {
 
  id: "RID-005",
  subject: "Mathematics",
  language: "Academics",
  goal: "Prepare for Class 10 board examinations.",
  level: "Class 10",
  availability: "Weekends",
  timeSlot: "11:00 AM - 1:00 PM",
},
  {
    id:"RID-004",
    subject: "Hindi",
    language: "Hindi",
    goal: "Improve conversational Hindi for daily communication.",
    level: "Beginner",
    availability: "Monday - Friday",
    timeSlot: "8:00 PM - 9:00 PM",
  },
 {
  id: "RID-006",
  subject: "Science",
  language: "Academics",
  goal: "Strengthen concepts in Physics, Chemistry, and Biology.",
  level: "Class 9",
  availability: "Weekdays",
  timeSlot: "6:00 PM - 8:00 PM",
},
];

export default function StudentRequirements() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % requests.length);

  const previous = () =>
    setIndex((prev) =>
      prev === 0 ? requests.length - 1 : prev - 1
    );

  useEffect(() => {
    const timer = setInterval(next, 15000);
    return () => clearInterval(timer);
  }, []);

  const current = requests[index];

  return (
    <section className="relative overflow-hidden bg-white py-10">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,.15),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-yellow-600">
            STUDENT MATCHING
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
            Find your
            <span className="block text-yellow-500">
              next student.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Every request is verified. Browse active learners,
            discover their goals, and apply in seconds.
          </p>

        </div>

        {/* Stats */}

        {/* <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">

          {[
            ["127+", "Active Students"],
            ["42", "English Requests"],
            ["18", "French Requests"],
            ["96%", "Successful Matches"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-yellow-100 bg-yellow-50/40 p-6"
            >
              <h3 className="text-4xl font-bold text-slate-900">
                {number}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {label}
              </p>
            </div>
          ))}

        </div> */}

        {/* Main Layout */}

        <div className="mt-16 grid items-center gap-20 lg:grid-cols-[1fr_460px]">

          {/* Left */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">

              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

              Live Requests

            </span>

            <h3 className="mt-8 text-4xl font-bold leading-tight text-slate-900">
              Swipe through
              <br />
              real student requests.
            </h3>

            <p className="mt-8 max-w-lg text-lg leading-8 text-slate-600">
              Every learner joins with a goal, preferred schedule,
              and learning level. Find the students who match your
              expertise and start teaching.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">

              <Link
                href="/become-a-tutor"
                className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300"
              >
                Become a Tutor
              </Link>

              <button
                onClick={previous}
                className="rounded-full border border-slate-200 px-6 py-4 transition hover:border-yellow-400"
              >
                Previous
              </button>

            </div>

          </div>

          {/* Card Stack */}

          <div className="relative mx-auto h-[520px] w-full max-w-md">

            {/* Third Card */}

            <motion.div
              className="absolute left-8 top-8 h-full w-full rounded-[42px] border border-yellow-100 bg-yellow-50/40"
              animate={{
                rotate: 6,
                scale: 0.9,
              }}
            />

            {/* Second Card */}

            <motion.div
              className="absolute left-4 top-4 h-full w-full rounded-[42px] border border-yellow-200 bg-white"
              animate={{
                rotate: 3,
                scale: 0.95,
              }}
            />

            {/* Active Card */}

            <AnimatePresence mode="wait">

<motion.div
  key={current.id}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.35 }}
  className="absolute inset-0 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
>
  <div className="flex h-full flex-col">

    {/* Header */}
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">
          <FaBook />
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900">
            {current.subject}
          </h3>

          <p className="text-sm text-slate-500">
            {current.language}
          </p>
        </div>
      </div>

      <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
        {current.level}
      </span>

    </div>

    {/* Goal */}
    <div className="mt-5 rounded-2xl bg-slate-50 p-4">

      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Learning Goal
      </p>

      <p className="line-clamp-3 text-sm leading-6 text-slate-700">
        {current.goal}
      </p>

    </div>

    {/* Details */}
    <div className="mt-5 grid grid-cols-2 gap-3">

      <div className="flex items-center gap-3 rounded-xl border p-3">

        <FaCalendarAlt className="text-yellow-500" />

        <div>
          <p className="text-xs text-slate-400">
            Availability
          </p>

          <p className="text-sm font-semibold">
            {current.availability}
          </p>
        </div>

      </div>

      <div className="flex items-center gap-3 rounded-xl border p-3">

        <FaClock className="text-yellow-500" />

        <div>
          <p className="text-xs text-slate-400">
            Time
          </p>

          <p className="text-sm font-semibold">
            {current.timeSlot}
          </p>
        </div>

      </div>

      <div className="flex items-center gap-3 rounded-xl border p-3">

        <FaGraduationCap className="text-yellow-500" />

        <div>
          <p className="text-xs text-slate-400">
            Level
          </p>

          <p className="text-sm font-semibold">
            {current.level}
          </p>
        </div>

      </div>

      <div className="flex items-center gap-3 rounded-xl border p-3">

        <FaGlobe className="text-yellow-500" />

        <div>
          <p className="text-xs text-slate-400">
            Language
          </p>

          <p className="text-sm font-semibold">
            {current.language}
          </p>
        </div>

      </div>

    </div>

    {/* Footer */}
    <Link
      href={`/become-a-tutor?id=${current.id}`}
      className="mt-auto flex h-12 items-center justify-center gap-2 rounded-2xl bg-yellow-400 font-semibold text-slate-900 transition hover:bg-yellow-300"
    >
      Apply Now
      <FaArrowRight size={13} />
    </Link>

  </div>
</motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>
  );
}