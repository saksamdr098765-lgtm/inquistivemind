"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheck,
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLock,
  FaBolt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { studentAvatars, timeSlotRichOptions } from "./data";
import { playSelect, playPop } from "../utils/soundEffects";

/* ====================================================
   MAIN STEP CARD - GAMIFIED CHOICE GRID (MOBILE FIRST)
==================================================== */
export default function StepCard({
  title,
  subtitle,
  options = [],
  selected,
  onSelect,
  multiSelect = false,
  autoAdvance,
  badge = "QUEST SELECTION",
}) {
  const safeOptions = Array.isArray(options) ? options : [];
  const [animatingChoice, setAnimatingChoice] = useState(null);

  // Check if selected is a custom value not in standard options
  const isKnownSelected = safeOptions.some(
    (opt) => !opt.isCustom && (opt.title || opt) === selected
  );
  const [customText, setCustomText] = useState(!isKnownSelected && selected ? selected : "");

  const isSelected = (item) => {
    const value = item?.title || item;
    if (multiSelect) {
      return Array.isArray(selected) ? selected.includes(value) : false;
    }
    if (item?.isCustom) {
      return (!isKnownSelected && !!selected) || selected === value;
    }
    return selected === value;
  };

  const handleCustomChange = (val) => {
    setCustomText(val);
    onSelect(val.trim() ? val : "Other");
  };

  const handleSelect = (item) => {
    const value = item?.title || item;
    playSelect();

    if (item?.isCustom) {
      onSelect(customText.trim() ? customText : value);
      return;
    }

    if (!multiSelect && autoAdvance) {
      setAnimatingChoice(value);
      onSelect(value);
      setTimeout(() => {
        autoAdvance(value);
        setAnimatingChoice(null);
      }, 260);
    } else {
      onSelect(value);
    }
  };

  if (!safeOptions.length) {
    return (
      <div className="py-6 text-center text-xs sm:text-sm text-slate-500">
        No quest options available for this step
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="w-full select-none"
    >
      {/* HEADER */}
      <div className="mb-4 sm:mb-7 text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-yellow-300 bg-yellow-100/95 px-3 py-0.5 text-[8.5px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.25em] text-yellow-950 uppercase shadow-2xs">
          <FaBolt className="text-yellow-600 text-[9px]" />
          <span>{badge}</span>
        </div>

        <h2 className="mt-2 sm:mt-3 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-snug tracking-tight px-1">
          {title}
        </h2>

        {subtitle && (
          <p className="mx-auto mt-1 sm:mt-2 max-w-xl text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium px-2">
            {subtitle}
          </p>
        )}
      </div>

      {/* OPTIONS GRID */}
      <div className="grid gap-2.5 sm:gap-3.5">
        {safeOptions.map((item, index) => {
          const label = item?.title || item;
          const Icon = item?.icon;
          const itemBadge = item?.badge;
          const powerTag = item?.powerTag;
          const active = isSelected(item);
          const isTriggering = animatingChoice === label;

          return (
            <motion.div
              key={label + index}
              whileTap={{ scale: 0.985 }}
              onClick={() => handleSelect(item)}
              className={`group relative w-full overflow-hidden rounded-xl sm:rounded-3xl border-2 p-3 sm:p-5 text-left transition-all touch-manipulation cursor-pointer min-h-[54px] sm:min-h-[64px] ${
                active || isTriggering
                  ? "border-amber-400 bg-amber-50/95 shadow-md ring-2 ring-amber-400/40"
                  : "border-slate-200/90 bg-white hover:border-yellow-300 hover:bg-yellow-50/30"
              }`}
            >
              {/* Active Golden Ambient Glow */}
              {(active || isTriggering) && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/40 via-amber-100/30 to-transparent pointer-events-none" />
              )}

              <div className="relative flex items-center gap-2.5 sm:gap-4 lg:gap-5">
                {/* Icon or Arcade Step Badge */}
                {Icon ? (
                  <div
                    className={`flex h-10 w-10 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl text-base sm:text-2xl transition-all ${
                      active || isTriggering
                        ? "bg-amber-400 text-slate-950 shadow-xs scale-105"
                        : "bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200/80"
                    }`}
                  >
                    <Icon />
                  </div>
                ) : (
                  <div
                    className={`flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl text-xs sm:text-base font-black transition-colors ${
                      active || isTriggering
                        ? "bg-amber-400 text-slate-950 shadow-xs"
                        : "bg-slate-100 text-slate-600 group-hover:bg-yellow-100 group-hover:text-amber-900"
                    }`}
                  >
                    {index + 1}
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0 pr-1">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="text-xs sm:text-base lg:text-lg font-black text-slate-900 leading-snug">
                      {label}
                    </span>

                    {itemBadge && (
                      <span className="inline-flex items-center rounded-full bg-amber-100 border border-amber-300/80 px-2 py-0.2 text-[8.5px] sm:text-[10px] font-extrabold text-amber-950">
                        {itemBadge}
                      </span>
                    )}

                    {powerTag && (
                      <span className="hidden sm:inline-flex items-center rounded-full bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                        {powerTag}
                      </span>
                    )}
                  </div>

                  {item?.subtitle && (
                    <div className="mt-0.5 sm:mt-1 text-[11px] sm:text-sm text-slate-600 leading-normal line-clamp-2 font-medium">
                      {item.subtitle}
                    </div>
                  )}
                </div>

                {/* Status Indicator */}
                {active || isTriggering ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 text-slate-950 text-xs sm:text-sm shadow-xs"
                  >
                    <FaCheck className="stroke-[3]" />
                  </motion.div>
                ) : (
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 group-hover:bg-amber-100 transition-colors">
                    <FaArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-400 group-hover:text-amber-900 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                )}
              </div>

              {/* CUSTOM INLINE TEXT INPUT FOR "OTHER" OPTION */}
              {active && item?.isCustom && (
                <div
                  className="relative mt-3 pt-3 border-t border-amber-300/80"
                  onClick={(e) => e.stopPropagation()}
                >
                  <label className="block text-[11px] sm:text-xs font-black text-slate-700 mb-1">
                    Enter Your Subject or Language:
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="e.g. Spanish, Italian, Japanese, Economics..."
                      value={customText}
                      onChange={(e) => handleCustomChange(e.target.value)}
                      className="flex-1 rounded-xl border-2 border-amber-400 bg-white px-3.5 py-2.5 text-base text-slate-900 outline-none focus:ring-2 focus:ring-amber-200"
                      autoFocus
                    />
                    {customText.trim().length >= 2 && (
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-white text-xs shadow-xs">
                        <FaCheck />
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[10.5px] sm:text-[11px] text-slate-500 font-medium">
                    Type your subject name above, then tap <strong>Continue</strong> below.
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

const facultyAvatars = [
  { id: "prof", emoji: "👨‍🏫", name: "Professor", trait: "Senior Faculty" },
  { id: "lang", emoji: "👩‍🏫", name: "Virtuoso", trait: "Language Coach" },
  { id: "stem", emoji: "🔬", name: "STEM Lead", trait: "Concept Expert" },
  { id: "coach", emoji: "🚀", name: "Board Coach", trait: "Ranker Mentor" },
  { id: "mentor", emoji: "💡", name: "Mentor", trait: "Interactive Guide" },
  { id: "polyglot", emoji: "🌍", name: "Polyglot", trait: "Global Tutor" },
];

/* ====================================================
   CONTACT FORM - STUDENT QUEST PASSPORT & TUTOR FORM
==================================================== */
export function ContactForm({ form, update, isTutor = false }) {
  const activeAvatarList = isTutor ? facultyAvatars : studentAvatars;
  const defaultAvatar = isTutor ? "prof" : "fox";
  const [selectedAvatar, setSelectedAvatar] = useState(form?.avatar || defaultAvatar);

  const handleAvatarSelect = (avatarId) => {
    setSelectedAvatar(avatarId);
    update("avatar", avatarId);
    playPop();
  };

  const fields = [
    {
      key: "name",
      label: "Full Name",
      type: "text",
      placeholder: "e.g. John Doe",
      autoCap: "words",
      icon: FaUser,
      required: true,
      isValid: (val) => !!val && val.trim().length >= 2,
    },
    {
      key: "email",
      label: "Email Address",
      type: "email",
      placeholder: "name@example.com",
      autoCap: "none",
      icon: FaEnvelope,
      required: true,
      isValid: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val || ""),
    },
    {
      key: "phone",
      label: "Phone Number (10 digits)",
      type: "tel",
      placeholder: "e.g. 9876543210",
      autoCap: "none",
      icon: FaPhone,
      required: true,
      isValid: (val) => /^[0-9]{10}$/.test((val || "").replace(/[\s-]/g, "")),
    },
    ...(isTutor
      ? [
          {
            key: "city",
            label: "City / Location",
            type: "text",
            placeholder: "e.g. New Delhi, Mumbai, etc.",
            autoCap: "words",
            icon: FaMapMarkerAlt,
            required: false,
          },
          {
            key: "password",
            label: "Create Password (optional - to log in upon approval)",
            type: "password",
            placeholder: "At least 8 characters",
            autoCap: "none",
            icon: FaLock,
            required: false,
          },
        ]
      : []),
  ];

  const currentAvatarObj =
    activeAvatarList.find((a) => a.id === selectedAvatar) || activeAvatarList[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.25 }}
      className="text-center select-none"
    >
      {/* Header */}
      <div className="mb-4 sm:mb-7">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-yellow-300 bg-yellow-100/95 px-3 py-0.5 text-[8.5px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.25em] text-yellow-950 uppercase shadow-2xs">
          <FaBolt className="text-yellow-600 text-[9px]" />
          <span>{isTutor ? "EDUCATOR INDUCTION • PROFILE" : "QUEST 1 • PLAYER PROFILE"}</span>
        </div>

        <h2 className="mt-2 sm:mt-3 text-lg sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight px-1">
          {isTutor ? "Create Your Faculty Profile" : "Create Your Student Profile"}
        </h2>

        <p className="mt-1 text-xs sm:text-sm md:text-base text-slate-600 max-w-lg mx-auto font-medium px-2">
          {isTutor
            ? "Pick your faculty persona & enter credentials to match with active student inquiries."
            : "Pick your companion avatar & enter details to match with certified faculty."}
        </p>
      </div>

      {/* AVATAR SELECTION (Student or Faculty) */}
      <div className="mb-4 sm:mb-7">
        <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
          {isTutor ? "Choose Your Faculty Persona" : "Choose Your Companion Avatar"}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2.5 max-w-xl mx-auto">
          {activeAvatarList.map((avatar) => {
            const active = selectedAvatar === avatar.id;
            return (
              <button
                key={avatar.id}
                type="button"
                onClick={() => handleAvatarSelect(avatar.id)}
                className={`group relative flex flex-col items-center justify-center p-2 rounded-xl sm:rounded-2xl border-2 transition-all cursor-pointer touch-manipulation min-h-[60px] ${
                  active
                    ? "border-amber-400 bg-amber-50 shadow-md ring-2 ring-amber-400/30 scale-102"
                    : "border-slate-200 bg-white hover:border-yellow-300 hover:bg-yellow-50/40"
                }`}
              >
                <span className="text-2xl sm:text-3xl select-none group-hover:scale-105 transition-transform">
                  {avatar.emoji}
                </span>
                <span className="mt-1 text-[9.5px] sm:text-[10px] font-bold text-slate-800 truncate w-full text-center">
                  {avatar.name.split(" ")[0]}
                </span>
                {active && (
                  <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-slate-950 text-[8px] shadow-xs">
                    <FaCheck />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Passport / Faculty Mini Hologram Card */}
        <div className="mt-3 sm:mt-4 mx-auto max-w-md rounded-2xl border border-yellow-300/80 bg-gradient-to-r from-amber-100/70 via-yellow-50 to-white p-2.5 sm:p-4 shadow-2xs flex items-center gap-2.5 sm:gap-3 text-left">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-amber-400 text-xl sm:text-2xl shadow-xs">
            {currentAvatarObj.emoji}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-black text-slate-900 truncate">
                {form.name?.trim() || (isTutor ? "Faculty Candidate" : "Student Adventurer")}
              </span>
              <span className="rounded-full bg-amber-200/80 px-1.5 py-0.2 text-[8px] sm:text-[9px] font-black text-amber-950">
                {currentAvatarObj.trait}
              </span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-600 truncate mt-0.5">
              {isTutor
                ? (form.city?.trim() ? `Teaching in ${form.city}` : "Ready to receive matched student inquiries")
                : (form.email?.trim() || "Ready to unlock certified tutor matches")}
            </div>
          </div>

          <div className="text-right shrink-0">
            <div className="text-[8px] sm:text-[9px] font-black uppercase text-amber-800">
              {isTutor ? "GUILD" : "STATUS"}
            </div>
            <div className="text-[10px] sm:text-[11px] font-black text-green-700 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              Verified
            </div>
          </div>
        </div>
      </div>

      {/* INPUT FIELDS (text-base prevents iOS Safari Auto-Zoom) */}
      <div className="mx-auto max-w-xl space-y-2.5 sm:space-y-4 text-left">
        {fields.map(
          ({ key, label, type, placeholder, autoCap, icon: FieldIcon, required, isValid }) => {
            const hasValidValue = isValid ? isValid(form[key]) : false;
            return (
              <div key={key}>
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor={`contact-${key}`}
                    className="block text-xs font-black text-slate-700"
                  >
                    {label}
                  </label>
                  {!required && (
                    <span className="text-[10px] text-slate-400 font-semibold">Optional</span>
                  )}
                </div>

                <div className="relative flex items-center">
                  {FieldIcon && (
                    <div className="absolute left-3.5 sm:left-4 pointer-events-none text-slate-400">
                      <FieldIcon className="text-sm" />
                    </div>
                  )}

                  <input
                    id={`contact-${key}`}
                    type={type}
                    autoCapitalize={autoCap}
                    placeholder={placeholder}
                    value={form[key] || ""}
                    onChange={(e) => update(key, e.target.value)}
                    className={`w-full rounded-xl sm:rounded-2xl border bg-white py-3 sm:py-3.5 pr-10 text-base text-slate-900 outline-none transition-all placeholder:text-slate-400 min-h-[48px] ${
                      FieldIcon ? "pl-10 sm:pl-11" : "pl-4"
                    } ${
                      hasValidValue
                        ? "border-green-400 ring-2 ring-green-100"
                        : "border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                    }`}
                  />

                  {/* Validation Tick Bounce */}
                  {hasValidValue && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute right-3.5 sm:right-4 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white text-[10px] shadow-xs"
                    >
                      <FaCheck />
                    </motion.div>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </motion.div>
  );
}

/* ====================================================
   AVAILABILITY SELECTOR - DAYS & TIME SLOTS (MOBILE FIRST)
==================================================== */
export function AvailabilitySelector({
  selected = [],
  toggleDay,
  days = [],
  description = "Select all options that work for you.",
}) {
  const isTimeSlot = days.some(
    (d) =>
      typeof d === "string" &&
      (d.includes("AM") || d.includes("PM") || d.length > 5)
  );

  const handleToggle = (val) => {
    playPop();
    toggleDay(val);
  };

  // Quick Preset Handlers for Days
  const selectWeekdays = () => {
    playPop();
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    weekdays.forEach((d) => {
      if (!selected.includes(d)) toggleDay(d);
    });
  };

  const selectWeekends = () => {
    playPop();
    const weekends = ["Sat", "Sun"];
    weekends.forEach((d) => {
      if (!selected.includes(d)) toggleDay(d);
    });
  };

  const selectAll = () => {
    playPop();
    days.forEach((d) => {
      const val = typeof d === "string" ? d : d.slot;
      if (!selected.includes(val)) toggleDay(val);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.25 }}
      className="text-center select-none"
    >
      {/* Header */}
      <div className="mb-4 sm:mb-7">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-yellow-300 bg-yellow-100/95 px-3 py-0.5 text-[8.5px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.25em] text-yellow-950 uppercase shadow-2xs">
          <FaBolt className="text-yellow-600 text-[9px]" />
          <span>{isTimeSlot ? "SCHEDULE ARENA" : "POWER DAYS"}</span>
        </div>

        <h2 className="mt-2 sm:mt-3 text-lg sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight px-1">
          {isTimeSlot ? "Preferred Time Slots" : "When are you available?"}
        </h2>

        <p className="mt-1 text-xs sm:text-sm md:text-base text-slate-600 max-w-lg mx-auto font-medium px-2">
          {description}
        </p>

        {/* Quick Presets for Days (Mobile First Touch Targets) */}
        {!isTimeSlot && (
          <div className="mt-2.5 sm:mt-4 flex flex-wrap justify-center gap-1.5">
            <button
              type="button"
              onClick={selectWeekdays}
              className="rounded-full border border-yellow-300 bg-yellow-50 px-2.5 py-1 text-[11px] sm:text-xs font-bold text-yellow-900 hover:bg-yellow-100 transition cursor-pointer touch-manipulation min-h-[34px]"
            >
              ⚡ Weekdays (Mon-Fri)
            </button>
            <button
              type="button"
              onClick={selectWeekends}
              className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-[11px] sm:text-xs font-bold text-amber-900 hover:bg-amber-100 transition cursor-pointer touch-manipulation min-h-[34px]"
            >
              🏖️ Weekends (Sat-Sun)
            </button>
            <button
              type="button"
              onClick={selectAll}
              className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] sm:text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer touch-manipulation min-h-[34px]"
            >
              🌟 All 7 Days
            </button>
          </div>
        )}
      </div>

      {isTimeSlot ? (
        /* TIME SLOTS GRID (Single Column on Mobile for easy vertical scrolling) */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {days.map((slotItem) => {
            const slotValue = typeof slotItem === "string" ? slotItem : slotItem?.slot;
            const richData =
              timeSlotRichOptions.find((r) => r.slot === slotValue) || {};
            const active = selected.includes(slotValue);

            return (
              <motion.button
                key={slotValue}
                type="button"
                whileTap={{ scale: 0.985 }}
                onClick={() => handleToggle(slotValue)}
                className={`flex items-center justify-between rounded-xl sm:rounded-2xl border-2 p-3 sm:p-4 text-left transition-all touch-manipulation cursor-pointer min-h-[54px] ${
                  active
                    ? "border-amber-400 bg-amber-50 text-slate-950 font-bold shadow-md ring-2 ring-amber-400/30"
                    : "border-slate-200 bg-white hover:border-yellow-300 hover:bg-yellow-50/30 text-slate-700"
                }`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-1">
                  <div
                    className={`flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl text-sm sm:text-base ${
                      active ? "bg-amber-400 text-slate-950" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <FaClock className="text-xs sm:text-sm" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs sm:text-sm font-black">{slotValue}</span>
                      {richData.badge && (
                        <span className="rounded-full bg-amber-100 px-1.5 py-0.2 text-[8px] sm:text-[9px] font-extrabold text-amber-950">
                          {richData.badge}
                        </span>
                      )}
                    </div>
                    {richData.desc && (
                      <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate mt-0.5">
                        {richData.desc}
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={`flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    active
                      ? "border-amber-400 bg-amber-400 text-slate-950 shadow-xs"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {active && <FaCheck className="text-[9px] sm:text-xs" />}
                </div>
              </motion.button>
            );
          })}
        </div>
      ) : (
        /* DAYS OF THE WEEK RUNES (All 7 Days on 1 Row on Mobile) */
        <div>
          <div className="grid grid-cols-7 gap-1 sm:gap-2.5">
            {days.map((day) => {
              const active = selected.includes(day);
              return (
                <motion.button
                  key={day}
                  type="button"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleToggle(day)}
                  className={`flex min-h-[50px] sm:min-h-[66px] flex-col items-center justify-center rounded-xl sm:rounded-2xl border-2 p-1 sm:p-3 transition-all touch-manipulation cursor-pointer ${
                    active
                      ? "border-amber-400 bg-amber-400 text-slate-950 font-black shadow-md ring-2 ring-amber-400/40"
                      : "border-slate-200 bg-white hover:border-yellow-300 hover:bg-yellow-50/40 text-slate-700 font-bold"
                  }`}
                >
                  <span className="text-xs sm:text-base font-black">{day}</span>
                  <div
                    className={`mt-0.5 sm:mt-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full text-[7px] sm:text-[8px] ${
                      active ? "bg-slate-950 text-amber-400" : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {active ? <FaCheck /> : "+"}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {selected.length > 0 && (
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-200 px-3 py-0.5 text-[11px] sm:text-xs font-bold text-green-800">
              <span className="text-green-600 font-black">✓</span>
              <span>{selected.length} days chosen • Great match rate</span>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

/* ====================================================
   BUDGET SELECTOR (Preserved for compatibility)
==================================================== */
export function BudgetSelector({ value, onChange, budgets = [] }) {
  return (
    <div className="text-center select-none">
      <div className="mb-4 sm:mb-8">
        <div className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-3 py-0.5 text-[9px] sm:text-[10px] font-bold tracking-[0.25em] text-yellow-700 uppercase">
          BUDGET
        </div>

        <h2 className="mt-2 sm:mt-4 text-lg sm:text-2xl md:text-3xl font-extrabold text-slate-900">
          What's your budget?
        </h2>

        <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-slate-600">
          Choose a comfortable learning range.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3.5">
        {budgets.map((budget) => {
          const active = value === budget;
          return (
            <button
              key={budget}
              type="button"
              onClick={() => onChange(budget)}
              className={`rounded-xl sm:rounded-2xl border p-3 sm:p-5 text-center transition-all touch-manipulation cursor-pointer min-h-[48px] ${
                active
                  ? "border-yellow-400 bg-yellow-400 text-slate-950 font-bold shadow-md ring-1 ring-yellow-400/40"
                  : "border-slate-200 bg-white hover:border-yellow-300 text-slate-800"
              }`}
            >
              <div className="text-xs sm:text-base font-semibold">{budget}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
