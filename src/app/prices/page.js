import Link from "next/link";
import { prices } from "@/app/data/prices";
import SITE_CONFIG from "@/app/siteConfig";
import { FiCheckCircle, FiClock, FiArrowRight, FiShield, FiTag } from "react-icons/fi";

export const metadata = {
  title: "Course Tuition Fees & Batch Prices | Inquisitive Mind Academy",
  description:
    "Transparent pricing for French language courses, DELF B2 prep masterclasses, TEF Canada immigration bundles, and 1-on-1 private tutoring.",
  keywords: [
    "French course fee",
    "French tuition price",
    "DELF coaching fee",
    "TEF Canada prep price",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/prices`,
  },
};

export default function PricesPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold text-yellow-800">
            <FiTag />
            <span>Transparent Pricing & Special Batch Discounts</span>
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Affordable Tuition Plans & Exam Prep Bundles
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Invest in your future with complete transparency. All plans include live instruction, coursebooks, audio workbooks, and mock tests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prices.map((p) => (
            <div
              key={p.slug}
              className={`flex flex-col justify-between rounded-3xl border ${
                p.priceCard.popular
                  ? "border-yellow-400 shadow-xl ring-2 ring-yellow-400/20"
                  : "border-slate-200 shadow-sm"
              } bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-xl`}
            >
              <div>
                {p.priceCard.badge && (
                  <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-800 mb-4">
                    {p.priceCard.badge}
                  </span>
                )}
                <h2 className="text-2xl font-bold text-slate-900">
                  {p.hero.title}
                </h2>
                <p className="mt-2 text-xs text-slate-600 line-clamp-2">
                  {p.hero.subtitle}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900">
                    ₹{p.priceCard.offerPrice.toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold text-slate-400 line-through">
                    ₹{p.priceCard.regularPrice.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md">
                    {p.priceCard.discount}
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <FiClock className="text-yellow-500" />
                  <span>{p.priceCard.duration}</span>
                </div>

                <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                  {p.priceCard.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <FiCheckCircle className="text-yellow-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  href={`/prices/${p.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-yellow-500 hover:text-slate-900 shadow-sm"
                >
                  <span>View Fee Breakdown</span>
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
