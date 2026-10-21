import { FaClock, FaUsers, FaCalendarAlt, FaAward } from "react-icons/fa";

export default function QuickFacts({ course }) {
  if (!course) return null;

  const facts = [
    {
      icon: FaClock,
      label: "Duration",
      value: `${course.durationWeeks} Weeks`,
      sub: `${course.hoursPerWeek} Hours / Week`,
    },
    {
      icon: FaUsers,
      label: "Class Size",
      value: course.classSize || "Small Group",
      sub: "High speaking time guaranteed",
    },
    {
      icon: FaCalendarAlt,
      label: "Next Cohort",
      value: course.nextBatch?.date || "Rolling Admissions",
      sub: "Flexible Morning/Evening options",
    },
    {
      icon: FaAward,
      label: "Certification",
      value: course.examAlignment?.exam || "Academy Certificate",
      sub: "Mapped to official standards",
    },
  ];

  return (
    <section className="relative bg-white py-12 sm:py-16 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {facts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs transition hover:border-yellow-400 hover:shadow-md hover:shadow-yellow-100/80"
              >
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700 mb-3">
                  <Icon className="text-lg sm:text-xl" />
                </div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  {fact.label}
                </p>
                <h3 className="mt-1 text-base sm:text-lg font-extrabold text-slate-950 leading-snug">
                  {fact.value}
                </h3>
                <p className="mt-0.5 text-xs text-slate-500">
                  {fact.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
