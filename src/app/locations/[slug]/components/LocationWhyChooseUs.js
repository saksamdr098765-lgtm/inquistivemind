import { FiCheckCircle, FiAward } from "react-icons/fi";

export default function LocationWhyChooseUs({ location }) {
  const points = location.whyChoose || [
    {
      title: "Certified NCLC 9+ & DELF Tutors",
      description: "Learn directly from native and bilingual language experts with proven track records in DELF & TEF Canada success.",
    },
    {
      title: "Guaranteed Small Batch Sizes (Max 8–10)",
      description: "Strict student caps per batch ensure every candidate gets at least 25 minutes of dedicated speaking practice per session.",
    },
    {
      title: "Smart Classroom Tech & Audio Labs",
      description: "Equipped with interactive digital whiteboards and listening comprehension station setups for authentic exam practice.",
    },
    {
      title: "98% First-Time Exam Pass Rate",
      description: "Structured curriculum aligned with Alliance Française and FEI standards to ensure passing results.",
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
            <FiAward />
            <span>Center Excellence</span>
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Choose Inquisitive Mind Academy in {location.city}?
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Discover what sets our {location.city} learning center apart for French language mastery, TEF Canada preparation, and official DELF diplomas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 bg-gradient-to-br from-yellow-50/50 via-white to-sky-50/30 p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-800 font-extrabold mb-4 text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {pt.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pt.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-yellow-700">
                <FiCheckCircle />
                <span>Verified Quality</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
