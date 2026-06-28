"use client";

import {
  FaUserPlus,
  FaVideo,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Register For Free Demo",
    icon: <FaUserPlus />,
    description:
      "Fill out the demo registration form and our team will contact you to schedule your free class.",
  },
  {
    number: "02",
    title: "Attend Live Demo Class",
    icon: <FaVideo />,
    description:
      "Experience our teaching style, interact with trainers, and understand the learning process before joining.",
  },
  {
    number: "03",
    title: "Join Your Batch",
    icon: <FaUsers />,
    description:
      "Choose the right course and get added to a batch that matches your level and learning goals.",
  },
  {
    number: "04",
    title: "Learn & Achieve Results",
    icon: <FaTrophy />,
    description:
      "Attend classes, complete assignments, receive feedback, and achieve your academic or language goals.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">

      {/* Background system (same as entire UI kit) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* soft glows */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-amber-300/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-sky-300/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-amber-100 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-600">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Start Learning In
            <span className="block text-amber-500">
              4 Simple Steps
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Getting started is easy. From your first demo class to achieving your goals,
            we guide you every step of the way.
          </p>

        </div>

        {/* STEPS */}
        <div className="relative mt-20">

          {/* desktop line */}
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-amber-100 lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">

            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative rounded-[32px] border border-slate-200 bg-white p-8 text-center transition-all hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl"
              >

                {/* step number */}
                <div className="absolute right-5 top-5 text-5xl font-black text-slate-100">
                  {step.number}
                </div>

                {/* icon */}
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-50 text-amber-500 text-3xl group-hover:bg-amber-100 transition">
                  {step.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {step.description}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}