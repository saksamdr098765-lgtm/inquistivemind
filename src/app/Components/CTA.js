import { FaCheckCircle } from "react-icons/fa";
import TrackedLink from "./tracking/TrackedLink";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 text-slate-900">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.12),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <div className="text-[10px] tracking-[0.35em] text-yellow-500 font-bold">
              START YOUR TRANSFORMATION
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
              Speak English with{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                confidence in real life
              </span>
            </h2>

            <p className="mt-6 leading-relaxed text-slate-600 text-sm sm:text-base">
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
                  <FaCheckCircle className="text-yellow-500 shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            {/* Buttons (Min 44x44px touch target) */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <TrackedLink
                href="/find-tutor"
                label="CTA Start Learning Now"
                category="Homepage CTA"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-yellow-500 px-8 py-3 font-medium text-white shadow-md shadow-yellow-200 transition hover:bg-yellow-600 hover:-translate-y-0.5"
              >
                Start Learning Now
              </TrackedLink>

              <TrackedLink
                href="/about"
                label="CTA Watch Demo Class"
                category="Homepage CTA"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 px-8 py-3 text-slate-700 transition hover:bg-yellow-50"
              >
                Watch Demo Class
              </TrackedLink>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-yellow-50/40 to-sky-50/30 p-6 sm:p-8 shadow-lg">
              <div className="text-[10px] tracking-[0.35em] text-slate-500 font-bold">
                LIVE ACTIVITY
              </div>

              <div className="mt-6 space-y-4">
                {[
                  "🇮🇳 Rahul just joined a speaking class",
                  "🇫🇷 Sofia completed fluency session",
                  "🇮🇳 Anjali started live practice",
                  "🇪🇸 Maria joined conversation room",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs sm:text-sm text-slate-700"
                  >
                    <span className="text-yellow-500">●</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Badge */}
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-white px-4 py-2 text-xs text-yellow-600 font-medium">
                🔥 127 students joined today
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 sm:mt-20 text-center text-[10px] tracking-[0.35em] text-slate-500">
          12K+ STUDENTS • GLOBAL COMMUNITY • CERTIFIED TRAINERS
        </div>
      </div>
    </section>
  );
}