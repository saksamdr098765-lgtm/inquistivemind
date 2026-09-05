"use client";

export default function DashboardSkeleton() {
  return (
    <div className="animate-pulse py-4 md:py-8 lg:py-10">
      <div className="mx-auto max-w-7xl space-y-4 px-3 sm:px-4 md:space-y-6 lg:space-y-8">

        {/* Yellow Theme Hero Banner Skeleton */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-200 p-5 sm:p-8 shadow-md">
          <div className="absolute -right-10 -top-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/30 blur-3xl pointer-events-none" />
          <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex-1 space-y-3">
              <div className="h-5 w-28 rounded-full bg-white/40 backdrop-blur-md" />
              <div className="h-8 sm:h-10 w-64 rounded-xl bg-white/50" />
              <div className="h-4 w-full max-w-md rounded bg-white/40" />
              <div className="h-4 w-3/4 max-w-sm rounded bg-white/40" />
              <div className="mt-4 h-11 w-40 rounded-xl bg-white/60" />
            </div>

            <div className="w-full lg:w-72 rounded-2xl bg-white/30 p-4 border border-white/40 space-y-3">
              <div className="h-3 w-24 rounded bg-white/40" />
              <div className="h-6 w-36 rounded bg-white/50" />
              <div className="h-3 w-20 rounded bg-white/40" />
              <div className="h-2 rounded-full bg-white/40 mt-3" />
            </div>
          </div>
        </div>

        {/* 2x2 Mobile / 4-col Desktop Stat Cards Skeleton */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="rounded-2xl sm:rounded-3xl border border-amber-100/80 bg-white p-4 shadow-sm space-y-3"
            >
              <div className="flex justify-between items-center">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-amber-100/70" />
                <div className="h-4 w-12 rounded-full bg-amber-50" />
              </div>
              <div className="h-6 w-16 rounded bg-slate-200" />
              <div className="h-3 w-24 rounded bg-slate-100" />
            </div>
          ))}
        </div>

        {/* Course + Classes Cards Skeleton */}
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">

          {/* Course Card Skeleton */}
          <div className="rounded-2xl sm:rounded-3xl border border-amber-100/80 bg-white p-5 sm:p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-lg bg-amber-100" />
              <div className="h-6 w-44 rounded bg-slate-200" />
            </div>
            <div className="h-3 w-32 rounded bg-slate-100" />
            <div className="h-3 rounded-full bg-slate-100" />
            <div className="flex justify-between pt-2">
              <div>
                <div className="h-3 w-20 rounded bg-slate-100" />
                <div className="mt-1 h-5 w-16 rounded bg-amber-100/70" />
              </div>
              <div>
                <div className="h-3 w-20 rounded bg-slate-100" />
                <div className="mt-1 h-5 w-14 rounded bg-slate-200" />
              </div>
            </div>
            <div className="h-11 w-full sm:w-40 rounded-xl bg-amber-200/80" />
          </div>

          {/* Classes Card Skeleton */}
          <div className="rounded-2xl sm:rounded-3xl border border-amber-100/80 bg-white p-5 sm:p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="h-6 w-40 rounded bg-slate-200" />
              <div className="h-4 w-16 rounded bg-amber-100" />
            </div>
            {[1, 2].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 space-y-2"
              >
                <div className="h-4 w-20 rounded bg-amber-100/70" />
                <div className="h-5 w-3/4 rounded bg-slate-200" />
                <div className="h-3 w-1/2 rounded bg-slate-100" />
                <div className="h-10 w-full sm:w-36 rounded-xl bg-amber-200/70 mt-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Streak + Announcements Skeleton */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Streak Card Skeleton */}
          <div className="rounded-2xl sm:rounded-3xl border border-amber-100/80 bg-white p-5 sm:p-6 shadow-sm space-y-4">
            <div className="flex gap-4 items-center">
              <div className="h-14 w-14 rounded-2xl bg-amber-100" />
              <div className="space-y-2">
                <div className="h-5 w-36 rounded bg-slate-200" />
                <div className="h-3 w-28 rounded bg-slate-100" />
              </div>
            </div>
            <div className="h-3 rounded-full bg-slate-100" />
            <div className="h-3 w-40 rounded bg-slate-100" />
          </div>

          {/* Announcements Skeleton */}
          <div className="rounded-2xl sm:rounded-3xl border border-amber-100/80 bg-white p-5 sm:p-6 shadow-sm space-y-4">
            <div className="h-6 w-48 rounded bg-slate-200" />
            {[1, 2].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 flex gap-4"
              >
                <div className="h-10 w-10 rounded-xl bg-amber-100/70 shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-20 rounded bg-amber-100/60" />
                  <div className="h-4 w-3/4 rounded bg-slate-200" />
                  <div className="h-3 w-full rounded bg-slate-100" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}