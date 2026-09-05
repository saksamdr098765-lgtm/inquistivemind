"use client";

export default function BatchesSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8 space-y-6">

        {/* Yellow Theme Hero Banner Skeleton */}
        <div className="animate-pulse relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-200 p-5 sm:p-8 shadow-md">
          <div className="absolute -right-10 -top-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/30 blur-3xl pointer-events-none" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="space-y-3 flex-1">
              <div className="h-5 w-32 rounded-full bg-white/40 backdrop-blur-md" />
              <div className="h-8 sm:h-10 w-72 rounded-xl bg-white/50" />
              <div className="h-4 w-full max-w-lg rounded bg-white/40" />
              <div className="h-4 w-3/4 max-w-md rounded bg-white/40" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:w-[320px]">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/30 border border-white/40 p-4 space-y-2"
                >
                  <div className="h-3 w-16 rounded bg-white/40" />
                  <div className="h-7 w-12 rounded bg-white/50" />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Batch Cards Grid Skeleton */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <BatchCardSkeleton key={index} />
          ))}
        </div>

      </div>
    </div>
  );
}

export function BatchCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl sm:rounded-[28px] border border-amber-100/80 bg-white p-4 sm:p-6 shadow-sm space-y-4">

      {/* Header */}
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 space-y-2">
          <div className="h-5 w-40 rounded bg-slate-200" />
          <div className="h-3 w-28 rounded bg-slate-100" />
        </div>

        <div className="h-6 w-20 rounded-full bg-amber-100/80" />
      </div>

      {/* Description */}
      <div className="space-y-2 pt-1">
        <div className="h-3 rounded bg-slate-100" />
        <div className="h-3 rounded bg-slate-100" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="rounded-xl bg-amber-50/70 border border-amber-100/60 p-3 space-y-1"
          >
            <div className="h-3 w-14 rounded bg-amber-100/60" />
            <div className="h-4 w-16 rounded bg-slate-200" />
          </div>
        ))}
      </div>

      {/* Schedule Box */}
      <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 space-y-2">
        <div className="h-3 w-20 rounded bg-slate-200" />
        <div className="h-3 w-full rounded bg-slate-100" />
        <div className="h-3 w-32 rounded bg-slate-100" />
      </div>

      {/* Action Button */}
      <div className="border-t border-slate-100 pt-3">
        <div className="h-11 w-full rounded-xl bg-amber-200/80" />
      </div>

    </div>
  );
}