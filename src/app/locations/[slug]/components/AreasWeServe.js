import { FiMapPin } from "react-icons/fi";

export default function AreasWeServe({ location }) {
  if (!location.areas || !location.areas.length) return null;

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-yellow-600">
            Nearby Access
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Areas & Localities We Serve Near {location.city}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Students commute to our {location.city} campus from all neighboring sectors and localities across the tricity region.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {location.areas.map((area, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
            >
              <FiMapPin className="text-yellow-500" />
              <span>{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
