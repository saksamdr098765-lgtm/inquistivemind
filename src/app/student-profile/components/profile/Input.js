"use client";

import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, icon, error, className = "", required = false, ...props },
  ref
) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-3.5 text-slate-400 pointer-events-none text-base">
            {icon}
          </span>
        )}

        <input
          ref={ref}
          {...props}
          className={`w-full min-h-[46px] rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#D6451B]/20 ${
            icon ? "pl-11" : ""
          } ${
            error
              ? "border-red-300 focus:border-red-500 bg-red-50/10"
              : "border-slate-200 focus:border-[#D6451B] hover:border-slate-300"
          }`}
        />
      </div>

      {error && (
        <p className="text-xs font-medium text-red-500 mt-0.5">
          {typeof error === "string" ? error : error?.message}
        </p>
      )}
    </div>
  );
});

export default Input;