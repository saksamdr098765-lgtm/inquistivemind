import Link from "next/link";
import { locations } from "@/app/data/locations";
import { FiMapPin, FiArrowRight, FiGlobe, FiNavigation } from "react-icons/fi";

export default function BlogLocations() {
  return (
    <section className="my-10 rounded-3xl border border-amber-200/70 bg-gradient-to-br from-amber-50/40 via-white to-slate-50/50 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-amber-100 pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-100/90 px-3 py-1 text-xs font-bold text-amber-900 mb-2">
            <FiMapPin className="text-amber-600" />
            <span>Locations & Areas We Serve</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Learn French In-Person or Online
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Convenient study centers across Punjab and interactive virtual classrooms worldwide.
          </p>
        </div>

        <Link
          href="/locations"
          className="inline-flex items-center gap-1.5 rounded-xl border border-amber-200 bg-white px-4 py-2 text-xs font-bold text-amber-900 shadow-sm transition-all hover:bg-amber-50 shrink-0 self-start sm:self-auto"
        >
          <span>All Centers</span>
          <FiArrowRight size={14} className="text-amber-700" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {locations.map((loc) => (
          <div
            key={loc.slug}
            className="group flex flex-col justify-between rounded-2xl border border-amber-100 bg-white p-5 shadow-xs transition-all duration-300 hover:border-amber-300 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1 rounded-md bg-amber-100/80 px-2.5 py-0.5 text-[11px] font-bold text-amber-900">
                  {loc.city === "Online Global" ? (
                    <FiGlobe className="text-amber-700" />
                  ) : (
                    <FiNavigation className="text-amber-700" />
                  )}
                  <span>{loc.city}</span>
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  {loc.hours?.split("|")[0]}
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                {loc.title}
              </h4>

              <p className="mt-1.5 text-xs text-slate-600 line-clamp-2">
                {loc.shortDescription}
              </p>

              {/* Areas Served */}
              {loc.areas && loc.areas.length > 0 && (
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-amber-900/70 mb-1.5">
                    Areas Served:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.areas.map((area, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-slate-100/80 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <span className="text-xs text-slate-500 truncate">
                {loc.address}
              </span>
              <Link
                href={`/locations/${loc.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-900 transition-colors shrink-0"
              >
                <span>Details</span>
                <FiArrowRight size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
