import { FiMapPin, FiCheckCircle, FiInfo, FiClock, FiPhone } from "react-icons/fi";

export default function LocationBriefOverview({ location }) {
  const summary =
    location.shortDescription ||
    `Our ${location.city} campus provides a modern, fully immersive learning environment equipped with digital smart boards, language audio stations, and small batch sizes for maximum personal attention.`;

  const highlights = [
    `Centrally located campus in ${location.city} with convenient transport connectivity`,
    "Certified native and bilingual French language faculty on site",
    "Smart interactive classrooms with dedicated listening & speaking stations",
    "Small batch guarantee (Max 8-10 students) for individual evaluation",
  ];

  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-3xl mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
            <FiInfo />
            <span>Center Briefing</span>
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {location.city} Center in Brief
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            A quick summary of our physical campus, smart facilities, and learning atmosphere in {location.city}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Brief Summary & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                {summary} Whether you are preparing for DELF exams, TEF Canada Express Entry points, or conversational French, our {location.city} center offers expert guidance tailored to your goals.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                  Center Key Highlights
                </h3>
                <ul className="space-y-3">
                  {highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <FiCheckCircle className="text-yellow-500 mt-1 shrink-0 font-bold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Campus Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-3xl border border-yellow-200 bg-gradient-to-br from-yellow-50/70 via-white to-amber-50/40 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-500 text-slate-950">
                    <FiMapPin className="text-lg" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {location.city} Campus Snapshot
                  </h3>
                </div>

                <div className="space-y-3 pt-2 text-xs font-semibold text-slate-800">
                  <div className="flex items-start gap-2">
                    <FiMapPin className="text-yellow-600 shrink-0 mt-0.5" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiPhone className="text-yellow-600 shrink-0" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiClock className="text-yellow-600 shrink-0" />
                    <span>{location.hours}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-yellow-200/60">
                <a
                  href="#booking"
                  className="w-full text-center inline-block rounded-full bg-slate-900 px-6 py-3 text-xs font-bold text-white transition-all hover:bg-yellow-500 hover:text-slate-950 shadow-sm"
                >
                  Visit {location.city} Center & Demo Class
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
