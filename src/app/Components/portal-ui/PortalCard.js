"use client";

import { motion } from "framer-motion";

export default function PortalCard({
  children,
  className = "",
  header,
  action,
  hoverable = false,
  padding = "p-6 sm:p-8",
  ...props
}) {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`rounded-[28px] border border-slate-200/80 bg-white/95 backdrop-blur-xs shadow-sm hover:shadow-md transition-all duration-300 ${padding} ${className}`}
      {...props}
    >
      {(header || action) && (
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100">
          <div>
            {typeof header === "string" ? (
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">{header}</h2>
            ) : (
              header
            )}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}
      {children}
    </motion.div>
  );
}
