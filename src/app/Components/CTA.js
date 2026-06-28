"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

export default function CTA() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-white py-28 text-slate-900">

      {/* Background glow (theme aligned) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.12),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            <div className="text-[10px] tracking-[0.35em] text-amber-500">
              START YOUR TRANSFORMATION
            </div>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Speak English with{" "}
              <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-sky-400 bg-clip-text text-transparent">
                confidence in real life
              </span>
            </h2>

            <p className="mt-6 leading-relaxed text-slate-600">
              Stop memorizing rules. Start speaking naturally through live
              practice, real conversations, and guided fluency training.
            </p>

            {/* Trust bullets */}
            <div className="mt-8 space-y-3 text-sm text-slate-700">

              {[
                "Live speaking practice every day",
                "Correct pronunciation in real time",
                "Global speaking community access",
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-amber-500" />
                  {t}
                </div>
              ))}

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <button
                onClick={() => router.push("/find-tutor")}
                className="rounded-full bg-amber-500 px-8 py-3 font-medium text-white shadow-md shadow-amber-200 transition hover:bg-amber-600 hover:-translate-y-0.5"
              >
                Start Learning Now
              </button>

              <button
                onClick={() => router.push("/about")}
                className="rounded-full border border-slate-200 px-8 py-3 text-slate-700 transition hover:bg-amber-50"
              >
                Watch Demo Class
              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-amber-50/40 to-sky-50/30 p-8 shadow-lg">

              <div className="text-[10px] tracking-[0.35em] text-slate-500">
                LIVE ACTIVITY
              </div>

              <div className="mt-6 space-y-4">

                {[
                  "🇮🇳 Rahul just joined a speaking class",
                  "🇫🇷 Sofia completed fluency session",
                  "🇮🇳 Anjali started live practice",
                  "🇪🇸 Maria joined conversation room",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <span className="text-amber-500">●</span>
                    {item}
                  </motion.div>
                ))}

              </div>

              {/* Badge */}
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-xs text-amber-600">
                🔥 127 students joined today
              </div>

            </div>

          </div>

        </div>

        {/* Bottom strip */}
        <div className="mt-20 text-center text-[10px] tracking-[0.35em] text-slate-500">
          12K+ STUDENTS • GLOBAL COMMUNITY • CERTIFIED TRAINERS
        </div>

      </div>
    </section>
  );
}