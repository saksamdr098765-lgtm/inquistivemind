import { FiEdit3, FiUserCheck, FiPlayCircle } from "react-icons/fi";

export default function ServiceHowItWorks({ service }) {
  const steps = service.howItWorks || [
    { step: "01", title: "Post Your Requirement", desc: "Share your target exam date, preferred batch timing, and current level." },
    { step: "02", title: "Certified Tutor Assignment", desc: "Get matched with a specialized trainer who prepares your custom roadmap." },
    { step: "03", title: "Start Live Classes & Mocks", desc: "Begin interactive live classes, daily speaking practice, and mock tests." },
  ];

  const icons = [FiEdit3, FiUserCheck, FiPlayCircle];

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple 3-Step Process To Get Started
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((p, idx) => {
            const Icon = icons[idx] || FiEdit3;
            return (
              <div
                key={idx}
                className="relative rounded-3xl border border-slate-200 bg-gradient-to-b from-yellow-50/40 via-white to-white p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-yellow-500">
                      {p.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700">
                      <Icon className="text-xl" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
