import Link from "next/link";
import { services } from "@/app/data/services";
import { FiBookOpen, FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function LocationOtherServices() {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
              <FiBookOpen />
              <span>Full Portfolio</span>
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Other Specialized Educational Services We Offer
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Explore our full range of French language coaching programs available both online and in-person.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm font-bold text-yellow-700 hover:text-yellow-800 shrink-0"
          >
            <span>All Services</span>
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <div
              key={svc.slug}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/50 p-6 shadow-xs transition-all hover:bg-white hover:border-yellow-300 hover:shadow-md"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                  {svc.title}
                </h3>
                <p className="mt-1 text-xs font-bold text-yellow-600 line-clamp-1">
                  {svc.subtitle}
                </p>
                <p className="mt-3 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {svc.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60">
                <Link
                  href={`/services/${svc.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1 text-xs font-bold text-slate-900 hover:text-yellow-700 transition-colors"
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
