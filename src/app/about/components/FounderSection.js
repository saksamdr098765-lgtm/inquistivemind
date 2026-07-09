"use client";

import Image from "next/image";
import { FaQuoteLeft, FaAward } from "react-icons/fa";

export default function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.08),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Founder Image */}
          <div className="order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[36px] bg-amber-300/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-3 shadow-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
                  <Image
                    src="/founder.jpg"
                    alt="Founder of Inquisitive Mind Academy"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute bottom-8 left-8 rounded-2xl border border-white/30 bg-white/90 px-5 py-3 backdrop-blur">
                  <p className="font-semibold text-slate-900">
                    Founder & Mentor
                  </p>
                  <p className="text-sm text-slate-500">
                    Inquisitive Mind Academy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2">
            <span className="inline-flex items-center rounded-full border border-amber-100 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-600">
              Meet Our Founder
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Inspiring Students
              <span className="block text-amber-500">
                To Learn Without Limits
              </span>
            </h2>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
              <FaQuoteLeft className="text-3xl text-amber-400" />

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                "Education is more than passing exams—it's about building
                confidence, communication, and the courage to pursue bigger
                opportunities. Every student deserves guidance that transforms
                knowledge into success."
              </p>
            </div>

            <p className="mt-8 leading-relaxed text-slate-600">
              At Inquisitive Mind Academy, our founder envisioned an academy
              where students don't just memorize concepts—they develop practical
              skills, improve communication, and prepare for academic and career
              success through personalized learning.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <FaAward className="text-2xl text-amber-500" />
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Student-Centered
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Personalized guidance for every learner.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <FaAward className="text-2xl text-amber-500" />
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Practical Learning
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Real communication, confidence, and measurable growth.
                </p>
              </div>
            </div>

            <div className="mt-8 border-l-4 border-amber-400 pl-5">
              <h3 className="text-2xl font-bold text-slate-900">
                Sakshi Goel
              </h3>
              <p className="mt-1 text-slate-500">
                Founder & Lead Educator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}