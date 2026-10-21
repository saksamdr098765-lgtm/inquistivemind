import { FaCheck, FaTimes } from "react-icons/fa";

export default function WhoItsFor({ course }) {
  const hasFor = course?.whoItsFor && course.whoItsFor.length > 0;
  const hasNotFor = course?.whoItsNotFor && course.whoItsNotFor.length > 0;

  if (!hasFor && !hasNotFor) return null;

  return (
    <section className="relative bg-white py-16 sm:py-20 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.35em] text-yellow-600 uppercase">
            STUDENT FIT & ELIGIBILITY
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Is This Course the Right Fit for You?
          </h2>
          <div className="mt-3 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            We value your time and learning investment. Self-qualify below to make sure this program matches your exact goals.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Who It's For */}
          {hasFor && (
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/20 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 font-bold">
                  <FaCheck className="text-base" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    This Course Is For You If...
                  </h3>
                  <p className="text-xs text-slate-500">Ideal candidate profile</p>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {course.whoItsFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Who It's NOT For */}
          {hasNotFor && (
            <div className="rounded-3xl border border-slate-200 bg-slate-50/40 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold">
                  <FaTimes className="text-base" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    This May NOT Be For You If...
                  </h3>
                  <p className="text-xs text-slate-500">Mismatched expectations</p>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {course.whoItsNotFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                      ✕
                    </span>
                    <span className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
