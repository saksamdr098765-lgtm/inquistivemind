import Link from "next/link";
import { services } from "@/app/data/services";
import { FiBookOpen, FiArrowRight } from "react-icons/fi";

export default function PriceRelatedServices({ priceSlug }) {
  if (!services || !services.length) return null;

  return (
    <section className="py-14 sm:py-16 bg-slate-50/60 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
              <FiBookOpen />
              <span>Related Services & Programs</span>
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Specialized Coaching Services & Programs
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm font-bold text-yellow-700 hover:text-yellow-800 shrink-0"
          >
            <span>View All Services</span>
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(0, 3).map((item) => (
            <div
              key={item.slug}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-all duration-300 hover:border-yellow-300 hover:shadow-lg"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-2.5 py-0.5 text-xs font-bold text-slate-950 shadow-xs">
                      {item.targetAudience || "Service"}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/services/${item.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 transition-all group-hover:bg-yellow-500 group-hover:text-slate-950 group-hover:border-yellow-500 shadow-2xs"
                >
                  <span>Explore Service</span>
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
