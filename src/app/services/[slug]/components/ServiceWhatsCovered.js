import { FiCheckCircle } from "react-icons/fi";

export default function ServiceWhatsCovered({ service }) {
  const items = service.whatsCovered || [];
  if (!items.length) return null;

  return (
    <section className="py-16 bg-slate-50/50 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-3xl mb-10">
          <span className="rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
            Curriculum & Modules
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What&apos;s Covered In This Program
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700 font-bold">
                <FiCheckCircle className="text-xl text-yellow-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
