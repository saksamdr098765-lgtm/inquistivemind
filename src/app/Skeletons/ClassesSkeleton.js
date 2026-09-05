export function ClassLinksSkeleton() {
  return (
    <div className="rounded-2xl sm:rounded-[32px] max-w-7xl border border-amber-100/80 bg-white p-4 sm:p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-7 w-48 animate-pulse rounded-xl bg-slate-200" />
          <div className="h-4 w-72 animate-pulse rounded bg-slate-100" />
        </div>

        <div className="h-9 w-24 animate-pulse rounded-full bg-amber-100/80" />
      </div>

      <div className="space-y-4 sm:space-y-5">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl sm:rounded-3xl border border-amber-100/60 bg-white p-4 sm:p-5 space-y-4"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <div className="h-6 w-20 animate-pulse rounded-full bg-amber-100/80" />
                <div className="h-6 w-20 animate-pulse rounded-full bg-slate-100" />
              </div>
              <div className="h-6 w-16 animate-pulse rounded-full bg-amber-50 border border-amber-100/60" />
            </div>

            <div className="h-6 w-1/2 animate-pulse rounded bg-slate-200" />

            <div className="space-y-2">
              <div className="h-3 animate-pulse rounded bg-slate-100" />
              <div className="h-3 animate-pulse rounded bg-slate-100" />
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 pt-2">
              {[...Array(4)].map((_, j) => (
                <div
                  key={j}
                  className="h-16 animate-pulse rounded-xl bg-amber-50/60 border border-amber-100/40"
                />
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <div className="h-11 flex-1 animate-pulse rounded-xl bg-amber-200/80" />
              <div className="h-11 flex-1 animate-pulse rounded-xl bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}