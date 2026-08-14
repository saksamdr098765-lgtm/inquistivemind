import Link from "next/link";
import { FiMapPin, FiArrowRight } from "react-icons/fi";

export default function ServiceAreasWeServe({ service }) {
  const areas = service.areasWeServe || [];
  if (!areas.length) return null;

  return (
    <section className="py-16 bg-slate-50/50 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
            <FiMapPin />
            <span>Locations & Study Centers</span>
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Areas We Serve (Offline & Online)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((loc, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:border-yellow-300 hover:shadow-md"
            >
              <div>
                <span className="inline-block rounded-md bg-yellow-100 px-2.5 py-0.5 text-[11px] font-bold text-yellow-800 mb-2">
                  {loc.city}
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                  {loc.center}
                </h3>
              </div>

              <Link
                href={loc.href || "/locations"}
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-yellow-600 hover:text-yellow-800 transition-colors"
              >
                <span>View Center</span>
                <FiArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
