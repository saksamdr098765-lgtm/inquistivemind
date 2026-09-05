"use client";

import { motion } from "framer-motion";

export default function PortalStatCard({
  title,
  value,
  icon,
  growth,
  badgeText,
  colorScheme = "yellow",
  index = 0,
}) {
  const schemes = {
    yellow: {
      bg: "bg-yellow-50/90",
      text: "text-yellow-700",
      border: "border-yellow-200/90",
      accentBg: "bg-yellow-400/20",
    },
    orange: {
      bg: "bg-amber-50/90",
      text: "text-amber-700",
      border: "border-amber-200/90",
      accentBg: "bg-amber-400/20",
    },
    blue: {
      bg: "bg-blue-50/90",
      text: "text-blue-700",
      border: "border-blue-200/90",
      accentBg: "bg-blue-400/20",
    },
    violet: {
      bg: "bg-violet-50/90",
      text: "text-violet-700",
      border: "border-violet-200/90",
      accentBg: "bg-violet-400/20",
    },
    emerald: {
      bg: "bg-emerald-50/90",
      text: "text-emerald-700",
      border: "border-emerald-200/90",
      accentBg: "bg-emerald-400/20",
    },
  };

  const activeScheme = schemes[colorScheme] || schemes.yellow;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-[26px] border ${activeScheme.border} bg-white p-6 shadow-xs hover:shadow-md transition-all`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${activeScheme.bg} ${activeScheme.text} text-xl font-bold border ${activeScheme.border}`}
        >
          {icon}
        </div>
        {growth && (
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
            {growth}
          </span>
        )}
        {badgeText && (
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {badgeText}
          </span>
        )}
      </div>

      <div className="mt-5">
        <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {value !== undefined && value !== null ? value : "0"}
        </h3>
        <p className="mt-1 text-sm font-semibold text-slate-500">{title}</p>
      </div>
    </motion.div>
  );
}
