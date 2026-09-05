"use client";

export default function ProfileSkeleton() {
  return (
    <div className="animate-pulse min-h-screen bg-gradient-to-b from-amber-50/30 via-white to-slate-50">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 py-4 sm:py-6 lg:px-8 space-y-6">

        {/* Yellow Theme Hero Banner Skeleton */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-200 p-5 sm:p-8 shadow-md">
          <div className="absolute -right-10 -top-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/30 blur-3xl pointer-events-none" />
          <div className="relative flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">

            <div className="flex-1 space-y-3">
              <div className="h-5 w-32 rounded-full bg-white/40 backdrop-blur-md" />
              <div className="h-8 sm:h-10 w-56 rounded-xl bg-white/50" />
              <div className="h-4 w-full max-w-xl rounded bg-white/40" />
              <div className="h-4 w-3/4 max-w-lg rounded bg-white/40" />
            </div>

            <div className="grid grid-cols-2 gap-3 w-full lg:w-[300px]">
              <div className="rounded-2xl bg-white/30 p-4 h-20 border border-white/40 space-y-2">
                <div className="h-3 w-16 rounded bg-white/40" />
                <div className="h-6 w-12 rounded bg-white/50" />
              </div>
              <div className="rounded-2xl bg-white/30 p-4 h-20 border border-white/40 space-y-2">
                <div className="h-3 w-16 rounded bg-white/40" />
                <div className="h-6 w-12 rounded bg-white/50" />
              </div>
            </div>

          </div>
        </div>

        {/* Content Layout Skeleton */}
        <div className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">

          {/* Sidebar Avatar & Details Skeleton */}
          <div className="rounded-2xl sm:rounded-3xl border border-amber-100/80 bg-white p-5 sm:p-6 shadow-sm space-y-5">

            <div className="mx-auto h-28 w-28 rounded-full bg-amber-100/80" />
            <div className="h-6 w-40 mx-auto rounded bg-slate-200" />
            <div className="h-4 w-48 mx-auto rounded bg-slate-100" />

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="h-16 rounded-2xl bg-amber-50/70 border border-amber-100/60" />
              <div className="h-16 rounded-2xl bg-amber-50/70 border border-amber-100/60" />
            </div>

            <div className="space-y-3 pt-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-12 rounded-xl bg-slate-50 border border-slate-100"
                />
              ))}
            </div>

          </div>

          {/* Editable Form Sections Skeleton */}
          <div className="space-y-6">

            {[1, 2, 3].map((section) => (
              <div
                key={section}
                className="rounded-2xl sm:rounded-3xl border border-amber-100/80 bg-white p-5 sm:p-6 shadow-sm space-y-4"
              >
                <div className="space-y-2">
                  <div className="h-6 w-48 rounded bg-slate-200" />
                  <div className="h-3 w-72 rounded bg-slate-100" />
                </div>

                <div className="grid gap-4 md:grid-cols-2 pt-2">
                  {[1, 2, 3, 4].map((field) => (
                    <div
                      key={field}
                      className="h-12 rounded-xl bg-slate-50 border border-slate-100"
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* Action Buttons Skeleton */}
            <div className="flex gap-4 pt-2">
              <div className="h-11 w-full sm:w-36 rounded-xl bg-amber-200/80" />
              <div className="h-11 w-full sm:w-36 rounded-xl bg-slate-200" />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}