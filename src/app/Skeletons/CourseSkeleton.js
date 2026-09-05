"use client";

export default function CoursesSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8 space-y-6">

        {/* Yellow Theme Hero Banner Skeleton */}
        <div className="animate-pulse relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-200 p-5 sm:p-8 shadow-md">
          <div className="absolute -right-10 -top-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/30 blur-3xl pointer-events-none" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="space-y-3 flex-1">
              <div className="h-5 w-28 rounded-full bg-white/40 backdrop-blur-md" />
              <div className="h-8 sm:h-10 w-64 rounded-xl bg-white/50" />
              <div className="h-4 w-full max-w-lg rounded bg-white/40" />
              <div className="h-4 w-3/4 max-w-md rounded bg-white/40" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:w-[320px]">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/30 border border-white/40 p-4 space-y-2"
                >
                  <div className="h-3 w-16 rounded bg-white/40" />
                  <div className="h-7 w-12 rounded bg-white/50" />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Course Cards Grid Skeleton */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <CourseCardSkeleton key={index} />
          ))}
        </div>

      </div>
    </div>
  );
}

export function CourseCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl sm:rounded-[28px] border border-amber-100/80 bg-white shadow-sm flex flex-col">
      
      {/* Image Skeleton */}
      <div className="h-40 sm:h-48 animate-pulse bg-slate-200 shrink-0" />

      <div className="space-y-4 p-4 sm:p-5 flex-1 flex flex-col justify-between">

        <div className="space-y-3">
          {/* Badge & Title */}
          <div className="h-5 w-20 rounded-full bg-amber-100/80 animate-pulse" />
          <div className="h-6 w-3/4 rounded bg-slate-200 animate-pulse" />

          {/* Description */}
          <div className="space-y-2 pt-1">
            <div className="h-3 rounded bg-slate-100 animate-pulse" />
            <div className="h-3 rounded bg-slate-100 animate-pulse" />
            <div className="h-3 w-2/3 rounded bg-slate-100 animate-pulse" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="rounded-xl bg-amber-50/70 border border-amber-100/60 p-3 space-y-1"
            >
              <div className="h-3 w-14 rounded bg-amber-100/60 animate-pulse" />
              <div className="h-4 w-16 rounded bg-slate-200 animate-pulse" />
            </div>
          ))}
        </div>

        {/* Meta & Button */}
        <div className="space-y-3 border-t border-slate-100 pt-4">
          <div className="flex justify-between items-center">
            <div className="h-4 w-14 rounded bg-slate-200 animate-pulse" />
            <div className="h-6 w-20 rounded-full bg-amber-100/70 animate-pulse" />
          </div>

          <div className="h-11 w-full rounded-xl bg-amber-200/80 animate-pulse" />
        </div>

      </div>
    </div>
  );
}