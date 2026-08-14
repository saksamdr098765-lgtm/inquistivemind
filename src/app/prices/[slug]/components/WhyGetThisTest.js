import { FiCheckCircle } from "react-icons/fi";

export default function WhyGetThisTest({ testTitle, whyGetTest }) {
  if (!whyGetTest) return null;

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-yellow-600">
            Enrollment Benefits
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {whyGetTest.title || `Why Choose ${testTitle}?`}
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyGetTest.points?.map((pt, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800 font-bold">
                <FiCheckCircle className="text-yellow-600 text-xl" />
              </div>
              <p className="text-sm font-semibold text-slate-800 leading-snug">
                {pt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
