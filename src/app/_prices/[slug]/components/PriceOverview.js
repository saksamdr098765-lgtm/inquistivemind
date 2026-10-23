import { FiCheckCircle, FiShield, FiCreditCard } from "react-icons/fi";

export default function PriceOverview({ priceCard, testTitle }) {
  if (!priceCard) return null;

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-yellow-600">
            Fee Structure Overview
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Detailed Cost Breakdown for {testTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We believe high quality language education should be accessible and transparent. Below is the itemized breakdown of everything included in your tuition fee.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800 font-bold mb-4">
              <FiCheckCircle className="text-xl" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">100% All-Inclusive</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              No extra charges for course registration, printed study materials, audio files, or mock test evaluations.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800 font-bold mb-4">
              <FiCreditCard className="text-xl" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Easy Installments</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Pay your course fee in 2 convenient installments with zero interest or hidden service processing fees.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800 font-bold mb-4">
              <FiShield className="text-xl" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Demo Class Guarantee</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Attend your first class risk-free. If you are not completely satisfied, request a full refund or batch transfer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
