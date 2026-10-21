export default function Testimonials({ course }) {
  // Strict empty-state safety: only render if verified real testimonial data exists
  if (!course?.testimonials || course.testimonials.length === 0) {
    return null;
  }

  return (
    <section className="relative bg-slate-50 py-16 sm:py-20 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-[10px] font-bold tracking-[0.35em] text-yellow-600 uppercase">
            STUDENT EXPERIENCES
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Real Feedback from Academy Learners
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between"
            >
              <p className="text-sm text-slate-700 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-bold text-slate-950">
                  {t.name?.charAt(0) || "S"}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role || "Verified Student"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
