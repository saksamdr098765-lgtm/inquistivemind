import React from "react";
import { FaLock } from "react-icons/fa";

export default function CommingSoon({
  badgeText = "Coming Soon",
  title,
  message = "We're building something exciting for your learning journey.",
  icon: Icon = FaLock,
  fullPage = false,
}) {
  const content = (
    <div className="flex flex-col items-center gap-3 text-center px-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-950 shadow-xl">
        <Icon className="text-xl" />
      </div>

      <div className="rounded-full border border-orange-200 bg-white px-5 py-2 shadow-md">
        <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-sm font-extrabold text-transparent uppercase tracking-wider">
          {badgeText}
        </span>
      </div>

      {title && (
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
          {title}
        </h3>
      )}

      <p className="max-w-md text-center text-xs sm:text-sm text-slate-600 leading-relaxed">
        {message}
      </p>
    </div>
  );

  if (fullPage) {
    return (
      <div className="min-h-[420px] py-12 flex items-center justify-center rounded-2xl sm:rounded-[28px] border border-slate-200/80 bg-white/80 backdrop-blur-md shadow-xs">
        {content}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center backdrop-blur-[3px] bg-white/70 rounded-2xl sm:rounded-[28px] p-4">
      {content}
    </div>
  );
}
