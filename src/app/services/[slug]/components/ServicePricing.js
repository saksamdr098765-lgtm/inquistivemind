import SITE_CONFIG from "@/app/siteConfig";
import { FiCheck } from "react-icons/fi";

export default function ServicePricing({ service }) {
  const p = service.pricing;
  if (!p) return null;

  return (
    <section className="py-16 bg-slate-50/50 border-b border-slate-100">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
            Transparent Pricing
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Course Investment & Fee Plan
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md p-8 sm:p-10 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-800">
              {p.planName}
            </span>

            <div className="flex items-baseline gap-3">
              <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                {p.fee}
              </span>
              {p.originalFee && (
                <span className="text-lg text-slate-400 line-through">
                  {p.originalFee}
                </span>
              )}
            </div>

            <p className="text-sm font-semibold text-slate-500">
              {p.duration}
            </p>

            <ul className="space-y-2.5 pt-2">
              {p.includes?.map((inc, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <FiCheck className="text-yellow-500 font-bold shrink-0" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>

            {p.discountNote && (
              <p className="text-xs font-medium text-amber-700 pt-2">
                * {p.discountNote}
              </p>
            )}
          </div>

          <div className="md:col-span-5 flex flex-col gap-3 justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
                `Hi Inquisitive Mind Academy, I want to enroll in ${service.title} (${p.fee}).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center rounded-full bg-yellow-500 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-md"
            >
              Enroll Now via WhatsApp
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-full text-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all"
            >
              Call Counseling Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
