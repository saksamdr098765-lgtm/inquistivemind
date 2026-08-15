import Link from "next/link";
import { FiBookOpen, FiArrowRight } from "react-icons/fi";

export default function LocationCentralHub({ location }) {
  const rawHub = location?.centralHub;

  if (!rawHub) return null;

  // Dynamically extract items whether centralHub is an array or object
  const hubItems = Array.isArray(rawHub)
    ? rawHub
    : typeof rawHub === "object"
    ? Object.values(rawHub).filter((item) => item && item.title && item.href)
    : [];

  if (hubItems.length === 0) return null;

  return (
    <section className="py-14 sm:py-16 bg-slate-50/60 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-3xl mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
            <FiBookOpen />
            <span>Resource Hub</span>
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Central Resource Hub for {location.city}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Directly access featured learning programs and opportunities for {location.city}.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 gap-6 ${
            hubItems.length === 1
              ? "max-w-xl"
              : hubItems.length === 2
              ? "md:grid-cols-2"
              : "md:grid-cols-3"
          }`}
        >
          {hubItems.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-yellow-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                    {item.badge || "Featured Resource"}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800 shrink-0">
                    <FiBookOpen className="text-xl" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc || item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={item.href}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-5 py-3 text-xs font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-xs"
                >
                  <span>{item.buttonText || "Explore Details"}</span>
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
