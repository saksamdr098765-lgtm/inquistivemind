export function NotesSkeleton() {
  return (
    <div className="rounded-2xl sm:rounded-[32px] max-w-7xl border border-amber-100/80 bg-white p-4 sm:p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-7 w-40 animate-pulse rounded-xl bg-slate-200" />
          <div className="h-4 w-64 animate-pulse rounded bg-slate-100" />
        </div>

        <div className="h-9 w-24 animate-pulse rounded-full bg-amber-100/80" />
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl sm:rounded-3xl border border-amber-100/60 bg-white space-y-4 p-5"
          >
            <div className="flex justify-between items-center">
              <div className="h-6 w-20 animate-pulse rounded-full bg-amber-100/80" />
              <div className="h-6 w-16 animate-pulse rounded-full bg-slate-100" />
            </div>

            <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />

            <div className="space-y-2">
              <div className="h-3 animate-pulse rounded bg-slate-100" />
              <div className="h-3 animate-pulse rounded bg-slate-100" />
              <div className="h-3 w-2/3 animate-pulse rounded bg-slate-100" />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="h-16 animate-pulse rounded-xl bg-amber-50/60 border border-amber-100/40" />
              <div className="h-16 animate-pulse rounded-xl bg-amber-50/60 border border-amber-100/40" />
            </div>

            <div className="border-t border-slate-100 pt-4">
              <div className="h-11 animate-pulse rounded-xl bg-amber-200/80" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}