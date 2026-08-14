import { FiClock, FiGlobe, FiLayers, FiUsers, FiAward, FiStar } from "react-icons/fi";

export default function ServiceQuickInfo({ service }) {
  const info = service.quickInfo;
  if (!info) return null;

  const items = [
    { icon: FiClock, label: "Duration", value: info.duration, color: "text-yellow-500" },
    { icon: FiGlobe, label: "Learning Mode", value: info.mode, color: "text-sky-500" },
    { icon: FiLayers, label: "Target Level", value: info.level, color: "text-amber-500" },
    { icon: FiUsers, label: "Batch Size", value: info.batchSize, color: "text-emerald-500" },
    { icon: FiAward, label: "Certification", value: info.certification, color: "text-indigo-500" },
    { icon: FiStar, label: "Rating & Reviews", value: info.rating, color: "text-yellow-500" },
  ];

  return (
    <section className="py-8 bg-white/60 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs flex flex-col justify-between"
              >
                <Icon className={`text-xl ${item.color} mb-2`} />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 leading-snug">
                    {item.value}
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
