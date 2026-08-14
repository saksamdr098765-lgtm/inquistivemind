import { FiCheckCircle, FiAward } from "react-icons/fi";

export default function LocationWhyChoose({ location }) {
  const whyPoints = location.whyChoose || [
    {
      title: "Small Batch Sizes",
      description: "Maximum 8-10 students per batch to ensure individual speaking time and evaluation.",
    },
    {
      title: "98% DELF Exam Pass Rate",
      description: "Proven curriculum with mock exam simulations designed around official FEI standards.",
    },
    {
      title: "Central Accessible Campus",
      description: "Situated in a prime accessible commercial hub with full public transport connectivity.",
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
            <FiAward />
            <span>Local Center Advantages</span>
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Choose Our {location.city} Study Center?
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Our {location.city} campus provides a fully equipped, supportive learning environment designed for rapid French language acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyPoints.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 bg-gradient-to-br from-yellow-50/50 via-white to-sky-50/30 p-6 shadow-xs"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800 font-bold mb-4">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
