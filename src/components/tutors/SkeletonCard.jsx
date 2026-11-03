"use client";

export default function SkeletonCard() {
  return (
    <div className="w-full max-w-[390px] mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-sm p-4 sm:p-5 flex flex-col justify-between animate-pulse space-y-4">
      {/* Top Header Row */}
      <div className="flex items-center justify-between">
        <div className="h-6 w-24 rounded-full bg-slate-200" />
        <div className="h-6 w-16 rounded-full bg-slate-200" />
      </div>

      {/* Main Image Shimmer */}
      <div className="w-full aspect-[4/3] rounded-2xl bg-slate-100" />

      {/* Information Rows */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="h-6 w-36 rounded-lg bg-slate-200" />
          <div className="h-6 w-14 rounded-lg bg-yellow-100" />
        </div>
        <div className="h-4 w-full rounded-md bg-slate-100" />
        <div className="h-4 w-3/4 rounded-md bg-slate-100" />
      </div>

      {/* Chips */}
      <div className="flex gap-2">
        <div className="h-6 w-20 rounded-lg bg-slate-100" />
        <div className="h-6 w-24 rounded-lg bg-slate-100" />
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="h-8 w-20 rounded-lg bg-slate-200" />
        <div className="h-10 w-32 rounded-xl bg-yellow-300" />
      </div>
    </div>
  );
}
