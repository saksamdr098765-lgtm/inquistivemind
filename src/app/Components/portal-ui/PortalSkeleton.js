"use client";

export default function PortalSkeleton({ type = "card", count = 1 }) {
  const items = Array.from({ length: count });

  if (type === "stat") {
    return (
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
        {items.map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-2xl sm:rounded-3xl border border-amber-100/80 bg-white p-4 shadow-sm space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-amber-100/80" />
              <div className="h-5 w-14 rounded-full bg-amber-50" />
            </div>
            <div className="space-y-1 pt-1">
              <div className="h-7 w-20 rounded-lg bg-slate-200" />
              <div className="h-3 w-28 rounded bg-slate-100" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "table") {
    return (
      <div className="animate-pulse space-y-4 rounded-2xl sm:rounded-[32px] border border-amber-100/80 bg-white p-5 sm:p-6 shadow-sm">
        <div className="h-7 w-48 rounded-lg bg-slate-200" />
        <div className="space-y-3">
          {items.map((_, i) => (
            <div key={i} className="h-12 sm:h-14 w-full rounded-xl bg-slate-50 border border-slate-100" />
          ))}
        </div>
      </div>
    );
  }

  if (type === "profile") {
    return (
      <div className="animate-pulse space-y-6">
        {/* Profile Hero Header Skeleton */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-200 p-5 sm:p-8 shadow-md">
          <div className="h-4 w-32 rounded bg-white/40 mb-2" />
          <div className="h-8 w-56 rounded-xl bg-white/50 mb-2" />
          <div className="h-4 w-72 rounded bg-white/40" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className="h-80 rounded-2xl sm:rounded-[28px] border border-amber-100/80 bg-white p-6 shadow-sm" />
          <div className="space-y-6">
            <div className="h-60 rounded-2xl sm:rounded-[28px] border border-amber-100/80 bg-white p-6 shadow-sm" />
            <div className="h-60 rounded-2xl sm:rounded-[28px] border border-amber-100/80 bg-white p-6 shadow-sm" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-2xl sm:rounded-[28px] border border-amber-100/80 bg-white p-5 sm:p-6 shadow-sm space-y-4"
        >
          <div className="h-5 w-3/4 rounded bg-slate-200" />
          <div className="h-3 w-full rounded bg-slate-100" />
          <div className="h-3 w-5/6 rounded bg-slate-100" />
          <div className="h-11 w-full rounded-xl bg-amber-200/80" />
        </div>
      ))}
    </div>
  );
}
