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
    <section className="mt-10 overflow-hidden rounded-3xl border border-yellow-100 bg-gradient-to-br from-yellow-50 via-white to-amber-50 shadow-xl shadow-yellow-100/40">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-500 px-6 py-6 text-white">
        <h2 className="text-2xl font-bold">
          Quick Information
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-yellow-50">
          Important information about this test before you book.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 p-5 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = icons[item.key];

          return (
            <div
              key={item.key}
              className="group rounded-2xl border border-yellow-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-100/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600 ring-1 ring-yellow-100 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-yellow-200">
                <Icon size={22} />
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                {item.label}
              </p>

              <p className="mt-2 text-base font-bold leading-6 text-slate-900">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

