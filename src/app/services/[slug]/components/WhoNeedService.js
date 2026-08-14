import { FiUserCheck } from "react-icons/fi";

export default function WhoNeedService({ service }) {
  if (!service.whoNeeds || !service.whoNeeds.length) return null;

  return (
    <section className="py-16 bg-slate-50 border-b border-amber-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-100 px-3.5 py-1 text-xs font-bold text-amber-900 uppercase tracking-wider">
            Target Candidates
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Who Should Choose This Program?
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.whoNeeds.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-2xl border border-amber-200/80 bg-white p-6 shadow-xs transition-all hover:border-amber-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-900 font-bold border border-amber-200">
                <FiUserCheck className="text-amber-700 text-xl" />
              </div>
              <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
