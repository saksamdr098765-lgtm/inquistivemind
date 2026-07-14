"use client";

import {
  FaLanguage,
  FaGraduationCap,
  FaSchool,
  FaChalkboardTeacher,
  FaUsers,
  FaAward,
} from "react-icons/fa";

export default function AboutAcademy() {
  const features = [
    {
      icon: <FaLanguage />,
      title: "English & French Training",
      description:
        "Practical language learning focused on speaking confidence, communication skills, and real-world usage.",
    },
    {
      icon: <FaGraduationCap />,
      title: "IELTS Preparation",
      description:
        "Structured coaching with mock tests, speaking practice, and personalized guidance to achieve your target band score.",
    },
    {
      icon: <FaSchool />,
      title: "Classes 1st to 12th",
      description:
        "Academic support for school students with experienced teachers and concept-based learning.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Live Interactive Classes",
      description:
        "Learn directly from expert teachers through engaging live sessions and doubt-solving support.",
    },
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">

      {/* Background system (same as Hero + onboarding) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* soft glow */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-yellow-300/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-sky-300/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-flex items-center rounded-full border border-yellow-100 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-600">
              About Our Academy
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Building Confidence,
              <span className="block text-yellow-500">
                Knowledge & Success
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We are dedicated to helping students improve communication skills,
              achieve academic excellence, and prepare for global opportunities
              through structured learning and expert guidance.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Whether you're learning Spoken English, preparing for IELTS,
              studying French, or improving school subjects, our programs are
              designed for real measurable progress.
            </p>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3">

              <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:border-yellow-200 transition">
                <FaUsers className="text-2xl text-yellow-500" />
                <h3 className="mt-3 text-3xl font-bold text-slate-900">500+</h3>
                <p className="text-sm text-slate-500">Students Trained</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:border-yellow-200 transition">
                <FaChalkboardTeacher className="text-2xl text-yellow-500" />
                <h3 className="mt-3 text-3xl font-bold text-slate-900">20+</h3>
                <p className="text-sm text-slate-500">Expert Teachers</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:border-yellow-200 transition col-span-2 md:col-span-1">
                <FaAward className="text-2xl text-yellow-500" />
                <h3 className="mt-3 text-3xl font-bold text-slate-900">95%</h3>
                <p className="text-sm text-slate-500">Success Rate</p>
              </div>

            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="grid gap-5 sm:grid-cols-2">

            {features.map((item) => (
              <div
                key={item.title}
                className="group rounded-[28px] border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-yellow-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-500 text-2xl group-hover:bg-yellow-100 transition">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}