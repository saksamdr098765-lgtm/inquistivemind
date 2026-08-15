import Link from "next/link";
import { locations } from "@/app/data/locations";
import { FiMapPin, FiArrowRight } from "react-icons/fi";

export default function LocationOtherAreas({ currentSlug }) {
  const otherLocations = locations.filter((loc) => loc.slug !== currentSlug);
  if(!otherLocations.length) return
  return (
    <section className="py-16 bg-slate-50/50 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
              <FiMapPin />
              <span>Network of Campuses</span>
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Other Study Centers & Locations We Serve
            </h2>
          </div>

          <Link
            href="/locations"
            className="inline-flex items-center gap-1 text-sm font-bold text-yellow-700 hover:text-yellow-800"
          >
            <span>All Locations</span>
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {otherLocations.map((loc) => (
            <div
              key={loc.slug}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-yellow-300 hover:shadow-md"
            >
              <div>
                <span className="inline-block rounded-md bg-yellow-100 px-2.5 py-0.5 text-[11px] font-bold text-yellow-800 mb-2">
                  {loc.city} Center
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                  {loc.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {loc.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={`/locations/${loc.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-yellow-600 hover:text-yellow-800 transition-colors"
                >
                  <span>Explore {loc.city} Campus</span>
                  <FiArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
