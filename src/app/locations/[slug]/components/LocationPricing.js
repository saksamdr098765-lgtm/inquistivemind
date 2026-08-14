import Link from "next/link";
import { prices } from "@/app/data/prices";
import { FiDollarSign, FiArrowRight, FiCheck } from "react-icons/fi";

export default function LocationPricing({ location }) {
  return (
    <section className="py-16 bg-slate-50/50 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
              <FiDollarSign />
              <span>Transparent Pricing</span>
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Course Fee Structure & Price Plans
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Clear upfront fees with zero hidden charges and flexible installment plans.
            </p>
          </div>

          <Link
            href="/prices"
            className="inline-flex items-center gap-1 text-sm font-bold text-yellow-700 hover:text-yellow-800 shrink-0"
          >
            <span>View All Price Pages</span>
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prices.map((p) => (
            <div
              key={p.slug}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-yellow-300 hover:shadow-md"
            >
              <div>
                <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-800">
                  {p.hero.badge || "Featured Plan"}
                </span>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {p.hero.title}
                </h3>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-900">
                    ₹{p.priceCard.offerPrice.toLocaleString()}
                  </span>
                  <span className="text-sm text-slate-400 line-through">
                    ₹{p.priceCard.regularPrice.toLocaleString()}
                  </span>
                </div>

                <p className="text-xs font-semibold text-slate-500 mt-1">
                  {p.priceCard.duration}
                </p>

                <ul className="mt-4 space-y-2 pt-3 border-t border-slate-100">
                  {p.priceCard.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <FiCheck className="text-yellow-500 font-bold shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={`/prices/${p.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-yellow-500 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-xs"
                >
                  <span>View Fee & Installments</span>
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
