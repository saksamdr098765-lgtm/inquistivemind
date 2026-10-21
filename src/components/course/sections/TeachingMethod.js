import { FaChalkboardTeacher, FaComments, FaClipboardCheck, FaSyncAlt } from "react-icons/fa";

export default function TeachingMethod({ course }) {
  if (!course?.method || course.method.length === 0) return null;

  const icons = [FaComments, FaChalkboardTeacher, FaClipboardCheck, FaSyncAlt];

  return (
    <section className="relative bg-white py-16 sm:py-20 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.35em] text-yellow-600 uppercase">
            PEDAGOGICAL EXCELLENCE
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Our Interactive Teaching Methodology
          </h2>
          <div className="mt-3 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Language fluency cannot be memorized from a textbook. We build conversational reflexes through deliberate, structured live practice.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {course.method.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="group rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-200 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-100/70 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950 font-bold shadow-md shadow-yellow-200 mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
