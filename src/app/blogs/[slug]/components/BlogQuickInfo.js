import {
  FiBookOpen,
  FiClock,
  FiMonitor,
  FiTrendingUp,
  FiUsers,
  FiAward,
} from "react-icons/fi";

const icons = {
  courseName: FiBookOpen,
  duration: FiClock,
  mode: FiMonitor,
  level: FiTrendingUp,
  batchSize: FiUsers,
  certification: FiAward,
};

export default function BlogQuickInfo({ blog }) {
  if (!blog?.quickInfo) return null;

  const items = [
    {
      key: "courseName",
      label: "Course",
      value: blog.quickInfo.courseName,
    },
    {
      key: "duration",
      label: "Duration",
      value: blog.quickInfo.duration,
    },
    {
      key: "mode",
      label: "Learning Mode",
      value: blog.quickInfo.mode,
    },
    {
      key: "level",
      label: "Level",
      value: blog.quickInfo.level,
    },
    {
      key: "batchSize",
      label: "Batch Size",
      value: blog.quickInfo.batchSize,
    },
    {
      key: "certification",
      label: "Certification",
      value: blog.quickInfo.certification,
    },
  ];

  return (
    <section className="mt-10 overflow-hidden rounded-[2.5rem] border border-amber-200/80 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/40 shadow-xl shadow-amber-500/10">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-950 px-6 py-6 text-white sm:px-8">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl text-white">
          Course Overview & Key Details
        </h2>

        <p className="mt-1.5 max-w-2xl text-xs sm:text-sm text-amber-200/90">
          Essential parameters of our corresponding training module.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 p-5 sm:p-6 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = icons[item.key] || FiBookOpen;

          return (
            <div
              key={item.key}
              className="group rounded-2xl border border-amber-100/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100/80 text-amber-800 ring-1 ring-amber-200 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-amber-500/30">
                <Icon size={22} />
              </div>

              <p className="mt-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-800/80">
                {item.label}
              </p>

              <p className="mt-1.5 text-sm sm:text-base font-bold leading-snug text-slate-900">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
