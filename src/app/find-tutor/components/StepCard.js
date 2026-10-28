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
      <div className="py-8 text-center text-xs sm:text-sm text-slate-500">
        No options available for this step
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
      className="w-full"
    >
      {/* HEADER */}
      <div className="mb-6 sm:mb-8 text-center">
        <div className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-3.5 py-1 text-[9px] sm:text-[10px] font-bold tracking-[0.25em] sm:tracking-[0.35em] text-yellow-700 uppercase">
          PERSONALIZED LEARNING
        </div>

        <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug sm:leading-tight">
          {title}
        </h2>

        {subtitle && (
          <p className="mx-auto mt-1.5 sm:mt-2.5 max-w-xl text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* OPTIONS */}
      <div className="grid gap-2.5 sm:gap-3.5">
        {safeOptions.map((item, index) => {
          const label = item?.title || item;
          const Icon = item?.icon;
          const active = isSelected(item);

          return (
            <motion.button
              key={label + index}
              whileTap={{ scale: 0.985 }}
              onClick={() => onSelect(label)}
              className={`group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border p-3.5 sm:p-4 lg:p-5 text-left transition-all touch-manipulation cursor-pointer ${
                active
                  ? "border-yellow-400 bg-yellow-50/80 shadow-md ring-1 ring-yellow-400/30"
                  : "border-slate-200/90 bg-white hover:border-yellow-300 hover:bg-slate-50/60 hover:shadow-xs"
              }`}
            >
              {/* Active glow */}
              {active && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/70 via-amber-50/50 to-transparent pointer-events-none" />
              )}

              <div className="relative flex items-center gap-3 sm:gap-4 lg:gap-5">
                {Icon && (
                  <div
                    className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl text-base sm:text-xl transition-colors ${
                      active
                        ? "bg-yellow-400 text-slate-950 shadow-xs"
                        : "bg-yellow-50 text-yellow-600 group-hover:bg-yellow-100/80"
                    }`}
                  >
                    <Icon />
                  </div>
                )}

                <div className="flex-1 min-w-0 pr-1">
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 leading-snug truncate">
                    {label}
                  </div>

                  {item?.subtitle && (
                    <div className="mt-0.5 text-xs sm:text-sm text-slate-500 leading-normal line-clamp-2">
                      {item.subtitle}
                    </div>
                  )}
                </div>

                {active ? (
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-slate-950 text-xs sm:text-sm shadow-xs">
                    <FaCheck />
                  </div>
                ) : (
                  <FaArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-slate-300 group-hover:text-yellow-500 group-hover:translate-x-0.5 transition-transform" />
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
      <div className="mb-6 sm:mb-8">
        <div className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-3.5 py-1 text-[9px] sm:text-[10px] font-bold tracking-[0.25em] sm:tracking-[0.35em] text-yellow-700 uppercase">
          BUDGET
        </div>

        <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
          What's your budget?
        </h2>

        <p className="mt-1.5 sm:mt-2.5 text-xs sm:text-sm md:text-base text-slate-600">
          Choose a comfortable learning range.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
        {(budgets || []).map((budget) => {
          const active = value === budget;
          return (
            <button
              key={budget}
              type="button"
              onClick={() => onChange(budget)}
              className={`rounded-xl sm:rounded-2xl border p-3.5 sm:p-5 text-center transition-all touch-manipulation cursor-pointer ${
                active
                  ? "border-yellow-400 bg-yellow-400 text-slate-950 font-bold shadow-md ring-1 ring-yellow-400/40"
                  : "border-slate-200 bg-white hover:border-yellow-300 text-slate-800"
              }`}
            >
              <div className="text-sm sm:text-base font-semibold">{budget}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* =========================
   AVAILABILITY SELECTOR
========================= */
export function AvailabilitySelector({
  selected = [],
  toggleDay,
  days = [],
  description = "Select all options that work for you.",
}) {
  // Check if items are compact day names (like "Mon", "Tue") or longer time slots
  const isTimeSlot = days.some(
    (d) => typeof d === "string" && (d.includes("AM") || d.includes("PM") || d.length > 5)
  );

  return (
    <div className="text-center">
      <div className="mb-6 sm:mb-8">
        <div className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-3.5 py-1 text-[9px] sm:text-[10px] font-bold tracking-[0.25em] sm:tracking-[0.35em] text-yellow-700 uppercase">
          SCHEDULE
        </div>

        <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
          {isTimeSlot ? "Preferred Time Slots" : "When are you available?"}
        </h2>

        <p className="mt-1.5 sm:mt-2.5 text-xs sm:text-sm md:text-base text-slate-600">
          {description}
        </p>
      </div>

      {isTimeSlot ? (
        // Mobile-first clean stack for Time Slots (fits time range on 1 line)
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {days.map((slot) => {
            const active = selected.includes(slot);
            return (
              <button
                key={slot}
                type="button"
                onClick={() => toggleDay(slot)}
                className={`flex items-center justify-between rounded-xl sm:rounded-2xl border px-4 py-3 sm:py-3.5 text-left transition-all touch-manipulation cursor-pointer ${
                  active
                    ? "border-yellow-400 bg-yellow-50 text-slate-950 font-semibold shadow-xs ring-1 ring-yellow-400/40"
                    : "border-slate-200 bg-white hover:border-yellow-300 text-slate-700"
                }`}
              >
                <span className="text-xs sm:text-sm font-medium">{slot}</span>
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] transition-colors ${
                    active
                      ? "border-yellow-400 bg-yellow-400 text-slate-950"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {active && <FaCheck className="h-2.5 w-2.5" />}
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        // Responsive Days grid: 4 on first row, 3 on second row on mobile, 7 on tablet/desktop
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5 sm:gap-2.5">
          {days.map((day) => {
            const active = selected.includes(day);
            return (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={`flex min-h-[44px] flex-col items-center justify-center rounded-xl sm:rounded-2xl border p-2 sm:p-3 transition-all touch-manipulation cursor-pointer ${
                  active
                    ? "border-yellow-400 bg-yellow-400 text-slate-950 font-bold shadow-xs ring-1 ring-yellow-400/40"
                    : "border-slate-200 bg-white hover:border-yellow-300 text-slate-700"
                }`}
              >
                <div className="text-xs sm:text-sm font-semibold">{day}</div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* =========================
   CONTACT FORM
========================= */
export function ContactForm({ form, update, isTutor = false }) {
  const fields = [
    { key: "name", label: "Full Name", type: "text", placeholder: "e.g. John Doe", autoCap: "words", required: true },
    { key: "email", label: "Email Address", type: "email", placeholder: "name@example.com", autoCap: "none", required: true },
    { key: "phone", label: "Phone Number (10 digits)", type: "tel", placeholder: "e.g. 9876543210", autoCap: "none", required: true },
    ...(isTutor
      ? [
          { key: "city", label: "City / Location", type: "text", placeholder: "e.g. New Delhi, Mumbai, etc.", autoCap: "words", required: false },
          { key: "password", label: "Create Password (optional - to log in upon approval)", type: "password", placeholder: "At least 8 characters", autoCap: "none", required: false },
        ]
      : []),
  ];

  return (
    <div className="text-center">
      <div className="mb-6 sm:mb-8">
        <div className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-3.5 py-1 text-[9px] sm:text-[10px] font-bold tracking-[0.25em] sm:tracking-[0.35em] text-yellow-700 uppercase">
          {isTutor ? "TUTOR REGISTRATION" : "ALMOST THERE"}
        </div>

        <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
          {isTutor ? "Your Contact & Account Details" : "Tell us about yourself"}
        </h2>

        <p className="mt-1.5 sm:mt-2.5 text-xs sm:text-sm md:text-base text-slate-600">
          {isTutor
            ? "We'll use this information to reach you and link your tutor account."
            : "We'll connect you with the right tutor."}
        </p>
      </div>

      <div className="mx-auto max-w-xl space-y-3 sm:space-y-4 text-left">
        {fields.map(({ key, label, type, placeholder, autoCap, required }) => (
          <div key={key}>
            <div className="flex items-center justify-between mb-1">
              <label
                htmlFor={`contact-${key}`}
                className="block text-xs font-semibold text-slate-700"
              >
                {label}
              </label>
              {!required && (
                <span className="text-[10px] text-slate-400 font-medium">Optional</span>
              )}
            </div>
            <input
              id={`contact-${key}`}
              type={type}
              autoCapitalize={autoCap}
              placeholder={placeholder}
              value={form[key] || ""}
              onChange={(e) => update(key, e.target.value)}
              className="w-full rounded-xl sm:rounded-2xl border border-slate-200 bg-white px-4 py-3 sm:py-3.5 text-base text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
