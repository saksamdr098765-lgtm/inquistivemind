"use client";

export default function PortalSkeleton({ type = "card", count = 1 }) {
  const items = Array.from({ length: count });

  if (type === "stat") {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="h-14 w-14 rounded-2xl bg-slate-200" />
              <div className="h-6 w-16 rounded-full bg-slate-200" />
            </div>
            <div className="mt-6 space-y-2">
              <div className="h-8 w-24 rounded-lg bg-slate-200" />
              <div className="h-4 w-32 rounded bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "table") {
    return (
      <div className="animate-pulse space-y-4 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="h-8 w-48 rounded-lg bg-slate-200" />
        <div className="space-y-3">
          {items.map((_, i) => (
            <div key={i} className="h-14 w-full rounded-2xl bg-slate-100" />
          ))}
        </div>
      </div>
    );
  }

  if (type === "profile") {
    return (
      <div className="animate-pulse grid gap-6 lg:grid-cols-[300px_1fr]">
        <div className="h-96 rounded-[28px] bg-slate-200" />
        <div className="space-y-6">
          <div className="h-64 rounded-[28px] bg-slate-200" />
          <div className="h-64 rounded-[28px] bg-slate-200" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm space-y-4"
        >
          <div className="h-6 w-3/4 rounded bg-slate-200" />
          <div className="h-4 w-full rounded bg-slate-100" />
          <div className="h-4 w-5/6 rounded bg-slate-100" />
          <div className="h-10 w-full rounded-xl bg-slate-200" />
        </div>
      ))}
    </div>
  );
}
