import { FiAward } from "react-icons/fi";

export default function ServiceWhyChooseUs({ service }) {
  const points = service.whyChooseUs || [];
  if (!points.length) return null;

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-3xl mb-10">
          <span className="rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Key Advantages of Our Academy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-yellow-50/50 via-white to-sky-50/30 p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700 mb-4 font-bold">
                <FiAward className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {pt.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
