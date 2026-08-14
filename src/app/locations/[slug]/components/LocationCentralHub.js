import Link from "next/link";
import { FiBookOpen, FiDollarSign, FiFileText, FiArrowRight } from "react-icons/fi";

export default function LocationCentralHub({ location }) {
  const hub = location?.centralHub || {
    service: {
      title: "TEF Canada French Exam Prep",
      desc: "Target NCLC Level 7+ for Canadian PR Express Entry & PNP Points",
      href: "/services/tef-canada-immigration-prep",
    },
    price: {
      title: "TEF Canada Prep Fee & Installments",
      desc: "Transparent package pricing with 1-on-1 mock speaking evaluation",
      href: "/prices/tef-canada-prep-bundle-fee",
    },
    blog: {
      title: "TEF vs TCF Canada Exam Comparison",
      desc: "Comprehensive score equivalency, fees, and strategy breakdown",
      href: "/blogs/what-is-tef-tcf-exam-comparison-scores-fees",
    },
  };

  return (
    <section className="py-16 bg-slate-50/60 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
            <FiBookOpen />
            <span>Central Interlinking Hub</span>
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Central Resource Hub for {location.city} Center
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Directly connect to featured service programs, official fee structures, and exam preparation guides for this campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Particular Service Page */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs transition-all hover:border-yellow-300 hover:shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                  Featured Service
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800">
                  <FiBookOpen className="text-xl" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                {hub.service.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {hub.service.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link
                href={hub.service.href}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-5 py-3 text-xs font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-xs"
              >
                <span>Explore Service Details</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Card 2: Particular Price Page */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs transition-all hover:border-yellow-300 hover:shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">
                  Official Price Page
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800">
                  <FiDollarSign className="text-xl" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                {hub.price.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {hub.price.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link
                href={hub.price.href}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-5 py-3 text-xs font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-xs"
              >
                <span>View Complete Fee Plans</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Card 3: Particular Blog Page */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs transition-all hover:border-yellow-300 hover:shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-900">
                  Knowledge Guide
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800">
                  <FiFileText className="text-xl" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                {hub.blog.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {hub.blog.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link
                href={hub.blog.href}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-5 py-3 text-xs font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-xs"
              >
                <span>Read Related Blog</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
