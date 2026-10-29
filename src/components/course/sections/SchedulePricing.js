import Link from "next/link";
import { FaCheck, FaWhatsapp, FaArrowRight, FaCalendarAlt } from "react-icons/fa";

export default function SchedulePricing({ course }) {
  if (!course) return null;

  const hasPrice = course.price && course.price.plans && course.price.plans.length > 0;
  const encodedWhatsapp = encodeURIComponent(
    `Hello! I would like to inquire about the batch schedules and course fee for ${course.title} at Inquisitive Mind Academy.`
  );
  const whatsappUrl = `https://wa.me/919855293752?text=${encodedWhatsapp}`;

  return (
    <section id="pricing" className="relative bg-gradient-to-b from-white via-amber-50/25 to-white py-16 sm:py-20 lg:py-24 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.35em] text-yellow-600 uppercase">
            ENROLLMENT & FEES
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Batch Schedules & Tuition Options
          </h2>
          <div className="mt-3 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Transparent pricing with zero hidden admission fees. All plans include live training hours and course materials.
          </p>
        </div>

        {/* Next Batch Timing Bar */}
        {course.nextBatch && (
          <div className="mt-8 mx-auto max-w-3xl rounded-2xl border border-yellow-300 bg-amber-50/80 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 font-bold shadow-xs">
                <FaCalendarAlt />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-yellow-900">Next Upcoming Batch</p>
                <p className="text-sm sm:text-base font-extrabold text-slate-950">{course.nextBatch.date}</p>
              </div>
            </div>
            <Link
              href="/book-free-trial"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-yellow-400 px-5 py-2 text-xs sm:text-sm font-bold text-slate-950 transition hover:bg-yellow-500 shadow-sm"
            >
              <span>Reserve Seat</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        )}

        {/* Pricing Cards or Fallback */}
        {hasPrice ? (
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {course.price.plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition duration-200 bg-white ${
                  plan.popular
                    ? "border-2 border-yellow-400 shadow-xl shadow-yellow-100"
                    : "border border-slate-200/90 shadow-sm hover:border-yellow-300 hover:shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 right-6">
                    <span className="rounded-full bg-yellow-400 px-3 py-1 text-[11px] font-bold text-slate-950 uppercase tracking-wider shadow-sm">
                      Most Selected
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="mt-1 text-xs text-slate-500 font-medium">{plan.billingPeriod}</p>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-950">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">all inclusive</span>
                  </div>

                  <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <FaCheck className="mt-1 text-xs text-yellow-500 shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 space-y-2.5">
                  <Link
                    href="/book-free-trial"
                    className={`flex min-h-[46px] w-full items-center justify-center rounded-full text-sm font-bold transition ${
                      plan.popular
                        ? "bg-yellow-400 text-slate-950 hover:bg-yellow-500 shadow-md shadow-yellow-200"
                        : "bg-yellow-400/90 text-slate-950 hover:bg-yellow-400 shadow-xs"
                    }`}
                  >
                    Enroll via Free Trial
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/30"
                  >
                    <FaWhatsapp className="text-emerald-600 text-base" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Fallback when fees are custom or empty */
          <div className="mt-10 mx-auto max-w-xl rounded-3xl border border-yellow-200 bg-white p-8 text-center shadow-md shadow-yellow-100/50">
            <h3 className="text-xl font-bold text-slate-900">
              Customized Tuition Schedule & Fee Details
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Batch slots and fee structures vary depending on one-on-one executive mentorship or small group formats.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 shadow-md"
              >
                <FaWhatsapp className="text-lg" />
                <span>Ask for Fees on WhatsApp</span>
              </a>
              <Link
                href="/book-free-trial"
                className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-yellow-500 shadow-sm"
              >
                Book Free Trial Class
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
