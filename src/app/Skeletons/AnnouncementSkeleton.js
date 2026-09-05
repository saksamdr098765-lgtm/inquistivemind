export function AnnouncementsSkeleton() {
  return (
    <div className="rounded-2xl sm:rounded-[32px] max-w-7xl border border-amber-100/80 bg-white p-4 sm:p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-7 w-56 animate-pulse rounded-xl bg-slate-200" />
          <div className="h-4 w-72 animate-pulse rounded bg-slate-100" />
        </div>

        <div className="h-9 w-24 animate-pulse rounded-full bg-amber-100/80" />
      </div>

      <div className="space-y-4 sm:space-y-5">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl sm:rounded-3xl border border-amber-100/60 bg-white p-4 sm:p-5 flex gap-4"
          >
            <div className="h-12 w-12 sm:h-14 sm:w-14 animate-pulse rounded-2xl bg-amber-100/80 shrink-0" />

            <div className="flex-1 space-y-3">
              <div className="flex gap-2">
                <div className="h-5 w-20 animate-pulse rounded-full bg-amber-100/80" />
                <div className="h-5 w-16 animate-pulse rounded-full bg-slate-100" />
              </div>

              <div className="h-5 w-2/3 animate-pulse rounded bg-slate-200" />

              <div className="space-y-2">
                <div className="h-3 animate-pulse rounded bg-slate-100" />
                <div className="h-3 animate-pulse rounded bg-slate-100" />
                <div className="h-3 w-3/4 animate-pulse rounded bg-slate-100" />
              </div>

              <div className="pt-2 flex justify-between items-center">
                <div className="h-4 w-28 animate-pulse rounded bg-slate-100" />
                <div className="h-4 w-20 animate-pulse rounded bg-amber-100/60" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}