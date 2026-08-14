import { FiCheckCircle, FiInfo, FiZap } from "react-icons/fi";

export default function ServiceBriefOverview({ service }) {
  const overview = service?.briefOverview;
  const summary =
    overview?.summary ||
    service?.description ||
    "This specialized educational program is designed to deliver targeted language training with certified instructors, interactive live practice, and comprehensive study materials.";

  const highlights = overview?.highlights || [
    "Comprehensive coverage of core skills & exam task formats",
    "Personalized feedback from certified language master trainers",
    "Real exam computer-based mock tests & timed drills",
    "Flexible batch timings for students, professionals, and job seekers",
  ];

  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-3xl mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
            <FiInfo />
            <span>Service Briefing</span>
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Service Overview in Brief
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            A quick summary of what this educational program offers and how it helps you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Summary & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                {summary}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                  Core Program Highlights
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

          {/* Right Column: Key Takeaway Box */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-3xl border border-yellow-200 bg-gradient-to-br from-yellow-50/70 via-white to-amber-50/40 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-500 text-slate-950">
                    <FiZap className="text-lg" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Key Program Takeaways
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Enrolling in this service connects you with certified language faculty who guide you step-by-step from foundational concepts to advanced exam strategy.
                </p>

                <div className="mt-6 space-y-2.5 pt-4 border-t border-yellow-200/60">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-800">
                    <span>Mentorship Type</span>
                    <span className="text-yellow-700">1-on-1 & Small Batches</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-800">
                    <span>Mock Evaluations</span>
                    <span className="text-yellow-700">Included (Timed Drills)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-800">
                    <span>Certificate</span>
                    <span className="text-yellow-700">Official IMA Completion</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#consultation"
                  className="w-full text-center inline-block rounded-full bg-slate-900 px-6 py-3 text-xs font-bold text-white transition-all hover:bg-yellow-500 hover:text-slate-950 shadow-sm"
                >
                  Book Academic Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
