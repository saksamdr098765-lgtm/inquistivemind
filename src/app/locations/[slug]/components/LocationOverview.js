import { FiCheckCircle } from "react-icons/fi";

export default function LocationOverview({ location }) {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-yellow-600">
            Center Overview
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            About Our {location.city} Center
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {location.shortDescription} Our {location.city} campus provides a supportive, fully immersive learning environment equipped with digital smart boards, language listening stations, and small batch sizes to guarantee personal attention.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {location.whyChoose?.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800 font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
