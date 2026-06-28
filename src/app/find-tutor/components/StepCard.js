"use client";

import { motion } from "framer-motion";
import { FaCheck, FaArrowRight } from "react-icons/fa";

/* =========================
   MAIN STEP CARD
========================= */
export default function StepCard({
  title,
  subtitle,
  options,
  selected,
  onSelect,
  multiSelect = false,
}) {
  const safeOptions = Array.isArray(options) ? options : [];

  const isSelected = (item) => {
    const value = item?.title || item;
    if (multiSelect) return selected?.includes(value);
    return selected === value;
  };

  if (!safeOptions.length) {
    return (
      <div className="text-center text-slate-500">
        No options available for this step
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="w-full"
    >
      {/* HEADER */}
      <div className="mb-10 text-center">
        <div className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-5 py-2 text-[10px] tracking-[0.35em] text-yellow-600">
          PERSONALIZED LEARNING
        </div>

        <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
          {title}
        </h2>

        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            {subtitle}
          </p>
        )}
      </div>

      {/* OPTIONS */}
      <div className="grid gap-5">
        {safeOptions.map((item, index) => {
          const label = item?.title || item;
          const Icon = item?.icon;

          return (
            <motion.button
              key={label + index}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(label)}
              className={`group relative overflow-hidden rounded-3xl border p-6 text-left transition-all ${
                isSelected(item)
                  ? "border-yellow-400 bg-yellow-50 shadow-lg"
                  : "border-slate-200 bg-white hover:border-yellow-300 hover:shadow-md"
              }`}
            >
              {/* glow */}
              {isSelected(item) && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-amber-50 opacity-60" />
              )}

              <div className="relative flex items-center gap-5">
                {Icon && (
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-500">
                    <Icon />
                  </div>
                )}

                <div className="flex-1">
                  <div className="text-lg font-semibold text-slate-900">
                    {label}
                  </div>

                  {item?.subtitle && (
                    <div className="mt-1 text-sm text-slate-500">
                      {item.subtitle}
                    </div>
                  )}
                </div>

                {isSelected(item) ? (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-white">
                    <FaCheck />
                  </div>
                ) : (
                  <FaArrowRight className="text-slate-300 group-hover:text-yellow-500" />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

/* =========================
   BUDGET SELECTOR
========================= */
export function BudgetSelector({ value, onChange, budgets }) {
  return (
    <div className="text-center">
      <div className="mb-10">
        <div className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-5 py-2 text-[10px] tracking-[0.35em] text-yellow-600">
          BUDGET
        </div>

        <h2 className="mt-6 text-4xl font-bold text-slate-900">
          What's your budget?
        </h2>

        <p className="mt-4 text-slate-600">
          Choose a comfortable learning range.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {(budgets || []).map((budget) => (
          <button
            key={budget}
            onClick={() => onChange(budget)}
            className={`rounded-2xl border p-6 transition-all ${
              value === budget
                ? "border-yellow-400 bg-yellow-400 text-white shadow-lg"
                : "border-slate-200 bg-white hover:border-yellow-300"
            }`}
          >
            <div className="text-lg font-semibold">{budget}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* =========================
   AVAILABILITY SELECTOR
========================= */
export function AvailabilitySelector({ selected = [], toggleDay, days = [] }) {
  return (
    <div className="text-center">
      <div className="mb-10">
        <div className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-5 py-2 text-[10px] tracking-[0.35em] text-yellow-600">
          SCHEDULE
        </div>

        <h2 className="mt-6 text-4xl font-bold text-slate-900">
          When are you available?
        </h2>

        <p className="mt-4 text-slate-600">
          Select all days that work for you.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => toggleDay(day)}
            className={`rounded-2xl border p-5 transition-all ${
              selected.includes(day)
                ? "border-yellow-400 bg-yellow-400 text-white"
                : "border-slate-200 bg-white hover:border-yellow-300"
            }`}
          >
            <div className="text-sm font-semibold">{day}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* =========================
   CONTACT FORM
========================= */
export function ContactForm({ form, update }) {
  return (
    <div className="text-center">
      <div className="mb-10">
        <div className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-5 py-2 text-[10px] tracking-[0.35em] text-yellow-600">
          ALMOST DONE
        </div>

        <h2 className="mt-6 text-4xl font-bold text-slate-900">
          Tell us about yourself
        </h2>

        <p className="mt-4 text-slate-600">
          We'll connect you with the right tutor.
        </p>
      </div>

      <div className="mx-auto max-w-xl space-y-4">
        {["name", "email", "phone"].map((field) => (
          <input
            key={field}
            type={
              field === "email"
                ? "email"
                : field === "phone"
                ? "tel"
                : "text"
            }
            placeholder={
              field === "name"
                ? "Full Name"
                : field === "email"
                ? "Email Address"
                : "Phone Number"
            }
            value={form[field] || ""}
            onChange={(e) => update(field, e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
          />
        ))}
      </div>
    </div>
  );
}