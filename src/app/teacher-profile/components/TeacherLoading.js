"use client";

export default function TeacherLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50/80">
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Animated Brand Spinner */}
        <div className="relative flex h-14 w-14 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-amber-100" />
          <div className="h-14 w-14 rounded-full border-4 border-amber-500 border-t-transparent animate-spin" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900">Loading Teacher Portal...</h3>
          <p className="text-xs font-medium text-slate-400 mt-1">Preparing your teaching dashboard and batches</p>
        </div>
      </div>
    </div>
  );
}
