export default function ServiceProcess({ service }) {
  if (!service.process || !service.process.length) return null;

  return (
    <section className="py-16 bg-white border-b border-amber-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-100 px-3.5 py-1 text-xs font-bold text-amber-900 uppercase tracking-wider">
            Methodology
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Learning & Mentoring Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {service.process.map((p, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-amber-200/80 bg-gradient-to-b from-amber-50/40 via-white to-yellow-50/20 p-6 flex flex-col justify-between shadow-xs transition-all hover:border-amber-400 hover:shadow-md"
            >
              <div>
                <span className="text-3xl font-black text-amber-500">
                  {p.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-medium">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
