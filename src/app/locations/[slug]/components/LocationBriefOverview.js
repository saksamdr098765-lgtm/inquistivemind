import { FiMapPin, FiCheckCircle, FiInfo, FiClock, FiPhone } from "react-icons/fi";

export default function LocationBriefOverview({ location }) {
  const summary =
    location.shortDescription ||
    `Our live interactive online batches and 1-on-1 home tutoring for ${location.city} provide a fully supportive learning environment with certified mentors, real-time speaking drills, and small batch sizes.`;

  const highlights = [
    "Live interactive online sessions with certified French faculty",
    `Personalized 1-on-1 home tutoring across ${location.city} & Tricity`,
    "Small batch guarantee (Max 6-8 students) for personalized evaluation",
  ];

  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-3xl mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
            <FiInfo />
            <span>Online Hub & Home Tutoring Briefing</span>
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {location.city} Learning Overview
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            A quick summary of our live online classes, 1-on-1 home tutoring format, and learning benefits for {location.city} students.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Brief Summary & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                {summary} Whether you are preparing for DELF exams, TEF Canada Express Entry points, or conversational French, our classes for {location.city} offer expert guidance tailored to your goals.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                  Online & Home Tutoring Highlights
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

          {/* Right Column: Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-3xl border border-yellow-200 bg-gradient-to-br from-yellow-50/70 via-white to-amber-50/40 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-500 text-slate-950">
                    <FiMapPin className="text-lg" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {location.city} Service Snapshot
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

              <div className="mt-8 pt-4 border-t border-yellow-200/60 flex flex-col sm:flex-row gap-3">
                <a
                  href="/about"
                  className="flex-1 text-center inline-block rounded-full bg-slate-900 px-6 py-3 text-xs font-bold text-white transition-all hover:bg-yellow-500 hover:text-slate-950 shadow-sm"
                >
                  Book Free Online Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
