"use client";

import { forwardRef } from "react";

const PortalSelect = forwardRef(function PortalSelect(
  {
    label,
    error,
    helperText,
    icon: Icon,
    options = [],
    children,
    className = "",
    containerClassName = "",
    required = false,
    ...props
  },
  ref
) {
  return (
    <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
      {label && (
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
          {label}
          {required && <span className="text-rose-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3.5 text-slate-400 pointer-events-none z-10">
            <Icon className="text-base" />
          </div>
        )}
        <select
          ref={ref}
          className={`w-full min-h-[46px] rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium text-slate-900 outline-none transition-all duration-200 focus:ring-2 focus:ring-yellow-400/20 appearance-none cursor-pointer ${
            Icon ? "pl-11" : ""
          } ${
            error
              ? "border-rose-300 focus:border-rose-500 bg-rose-50/10"
              : "border-slate-200 focus:border-yellow-500 hover:border-slate-300"
          } ${className}`}
          {...props}
        >
          {children ? (
            children
          ) : (
            options.map((opt) => (
              <option
                key={typeof opt === "object" ? opt.value : opt}
                value={typeof opt === "object" ? opt.value : opt}
              >
                {typeof opt === "object" ? opt.label : opt}
              </option>
            ))
          )}
        </select>
        <div className="absolute right-3.5 text-slate-400 pointer-events-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      {error && (
        <p className="text-xs font-medium text-rose-500 mt-0.5">{error}</p>
      )}
      {!error && helperText && (
        <p className="text-xs text-slate-400 mt-0.5">{helperText}</p>
      )}
    </div>
  );
});

export default PortalSelect;
