"use client";

import { forwardRef } from "react";

const Select = forwardRef(function Select(
  {
    label,
    icon,
    options = [],
    error,
    className = "",
    placeholder = "Select an option",
    required = false,
    ...props
  },
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
          <span className="absolute left-3.5 text-slate-400 pointer-events-none text-base z-10">
            {icon}
          </span>
        )}

        <select
          ref={ref}
          {...props}
          className={`w-full min-h-[46px] appearance-none rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium text-slate-900 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#D6451B]/20 ${
            icon ? "pl-11" : ""
          } ${
            error
              ? "border-red-300 focus:border-red-500 bg-red-50/10"
              : "border-slate-200 focus:border-[#D6451B] hover:border-slate-300"
          }`}
        >
          {placeholder && <option value="">{placeholder}</option>}

          {options.map((option) => (
            <option
              key={typeof option === "object" ? option.value : option}
              value={typeof option === "object" ? option.value : option}
            >
              {typeof option === "object" ? option.label : option}
            </option>
          ))}
        </select>

        <svg
          className="pointer-events-none absolute right-3.5 text-slate-400 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {error && (
        <p className="text-xs font-medium text-red-500 mt-0.5">
          {typeof error === "string" ? error : error?.message}
        </p>
      )}
    </div>
  );
});

export default Select;