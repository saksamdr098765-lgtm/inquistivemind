"use client";

import { useState } from "react";
import {
  FaPhoneAlt,
  FaUserGraduate,
  FaLanguage,
  FaSchool,
  FaCheckCircle,
} from "react-icons/fa";
import SITE_CONFIG from "@/app/siteConfig";

export default function Hero() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: "english",
  });

  const { whatsappNumber } = SITE_CONFIG;

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*New Demo Class Request*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📚 Course: ${form.course}
    `;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">

      {/* Background (same system as onboarding) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.12),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Soft brand glows */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#D6451B]/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-amber-200/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-600 border border-amber-100">
              <FaCheckCircle />
              Free Demo Classes Available
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Learn
              <span className="text-amber-500"> English,</span>
              <span className="block text-[#D6451B]">
                French & School Subjects
              </span>
              With Expert Teachers
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Join live interactive classes for Spoken English, IELTS, French Language,
              and School Tuition from Class 1st to 12th.
            </p>

            {/* FEATURES */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:border-amber-200 transition">
                <FaLanguage className="text-amber-500" />
                <span className="font-medium text-slate-700">English & French</span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:border-amber-200 transition">
                <FaUserGraduate className="text-amber-500" />
                <span className="font-medium text-slate-700">IELTS Preparation</span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:border-amber-200 transition">
                <FaSchool className="text-amber-500" />
                <span className="font-medium text-slate-700">Classes 1st–12th</span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:border-amber-200 transition">
                <FaCheckCircle className="text-amber-500" />
                <span className="font-medium text-slate-700">Live Interactive Classes</span>
              </div>
            </div>

            {/* STATS */}
            <div className="mt-10 flex flex-wrap gap-8">

              <div>
                <h3 className="text-3xl font-bold text-amber-500">500+</h3>
                <p className="text-slate-500">Students</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-sky-500">20+</h3>
                <p className="text-slate-500">Teachers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-amber-500">95%</h3>
                <p className="text-slate-500">Success Rate</p>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl backdrop-blur">

              <h2 className="text-3xl font-bold text-slate-900">
                Register For Free Demo
              </h2>

              <p className="mt-2 text-slate-500">
                Book your free class and speak with our academic advisors.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                />

                <select
                  value={form.course}
                  onChange={(e) =>
                    setForm({ ...form, course: e.target.value })
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                >
                  <option value="english">Spoken English</option>
                  <option value="ielts">IELTS Preparation</option>
                  <option value="french">French Language</option>
                  <option value="school">School Classes (1st-12th)</option>
                </select>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 px-6 py-4 font-semibold text-slate-900 shadow-lg hover:scale-[1.02] transition"
                >
                  Book Free Demo Class
                </button>

                <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                  <FaPhoneAlt />
                  Call / WhatsApp:
                  <span className="font-semibold text-slate-900">
                    +91 XXXXX XXXXX
                  </span>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}