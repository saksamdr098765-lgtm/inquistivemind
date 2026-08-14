import Link from "next/link";
import SITE_CONFIG from "@/app/siteConfig";
import { FiCheck, FiMapPin, FiArrowRight, FiDollarSign } from "react-icons/fi";

export default function ServicePricingAndAreas({ service }) {
  const p = service.pricing;
  const areas = service.areasWeServe || [];

  return (
    <section className="py-16 bg-slate-50/60 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
            Investment & Locations
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pricing, Fee Plans & Study Centers We Serve
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Check the dedicated fee breakdown for this service and explore our physical study centers or global online batches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Pricing & Fee Link */}
          {p && (
            <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-800">
                    {p.planName}
                  </span>
                  <FiDollarSign className="text-yellow-500 text-xl" />
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {p.fee}
                  </span>
                  {p.originalFee && (
                    <span className="text-sm text-slate-400 line-through">
                      {p.originalFee}
                    </span>
                  )}
                </div>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  {p.duration}
                </p>

                <ul className="mt-6 space-y-2.5 pt-4 border-t border-slate-100">
                  {p.includes?.map((inc, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <FiCheck className="text-yellow-500 font-bold shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                {p.pricePageLink && (
                  <Link
                    href={p.pricePageLink}
                    className="w-full text-center inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-md"
                  >
                    <span>{p.pricePageTitle || "View Complete Fee Details"}</span>
                    <FiArrowRight />
                  </Link>
                )}
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
                    `Hi, I want to inquire about fee and pricing for ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all"
                >
                  Ask Fee via WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* Right Column: Locations & Study Centers */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl border border-slate-200 bg-gradient-to-br from-yellow-50/40 via-white to-sky-50/30 p-6 sm:p-8 shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FiMapPin className="text-yellow-600 text-xl" />
                <h3 className="text-xl font-bold text-slate-900">
                  Study Centers & Locations We Serve
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                We offer both interactive online classes globally and in-person classroom coaching at our flagship Punjab centers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {areas.map((loc, idx) => (
                  <Link
                    key={idx}
                    href={loc.href || "/locations"}
                    className="group rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs transition-all hover:border-yellow-300 hover:shadow-sm"
                  >
                    <span className="inline-block rounded-md bg-yellow-100 px-2 py-0.5 text-[10px] font-bold text-yellow-800 mb-1">
                      {loc.city}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                      {loc.center}
                    </h4>
                    <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-yellow-600 group-hover:text-yellow-800">
                      <span>View Center</span>
                      <FiArrowRight size={11} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60">
              <Link
                href="/locations"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-yellow-700 transition-colors"
              >
                <span>Browse All Physical & Virtual Centers</span>
                <FiArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
