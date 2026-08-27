"use client";

import { motion } from "framer-motion";
import PortalButton from "./PortalButton";

export default function PortalEmptyState({
  icon: Icon,
  title = "No data found",
  description = "There are no items to display right now.",
  actionText,
  onAction,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`rounded-[32px] border border-dashed border-slate-200 bg-white/60 p-8 sm:p-12 text-center backdrop-blur-xs ${className}`}
    >
      {Icon && (
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-50 text-yellow-600 text-3xl shadow-xs border border-yellow-200/60">
          <Icon />
        </div>
      )}
      <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
      <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500 leading-relaxed">
        {description}
      </p>
      {actionText && onAction && (
        <div className="mt-6">
          <PortalButton onClick={onAction}>{actionText}</PortalButton>
        </div>
      )}
    </motion.div>
  );
}
