import { FiCheckCircle } from "react-icons/fi";

export default function WhyServiceMatters({ service }) {
  if (!service.whyMatters) return null;

  return (
    <section className="py-16 bg-white border-b border-amber-100 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-100 px-3.5 py-1 text-xs font-bold text-amber-900 uppercase tracking-wider">
            Key Advantages
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {service.whyMatters.title}
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.whyMatters.points?.map((pt, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-2xl border border-amber-200/80 bg-gradient-to-r from-amber-50/50 via-white to-yellow-50/30 p-6 shadow-xs transition-all hover:border-amber-400 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-slate-950 font-bold shadow-sm">
                <FiCheckCircle className="text-xl" />
              </div>
              <p className="text-base font-semibold text-slate-800 leading-snug">
                {pt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
