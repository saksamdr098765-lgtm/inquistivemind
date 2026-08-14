import Link from "next/link";
import { courses } from "@/app/data/courses";
import { FiBookOpen, FiArrowRight, FiClock, FiCheckCircle } from "react-icons/fi";

export default function LocationCourses({ location }) {
  const locationCourses = courses.filter((c) =>
    (location.courses || []).includes(c.slug)
  );
  const displayCourses = locationCourses.length ? locationCourses : courses.slice(0, 3);

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
              <FiBookOpen />
              <span>{location.city} Batches</span>
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Popular French Courses at {location.city}
            </h2>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-1 text-sm font-bold text-yellow-700 hover:text-yellow-800 shrink-0"
          >
            <span>View All Courses</span>
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayCourses.map((c) => (
            <div
              key={c.slug}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-yellow-300 hover:shadow-md"
            >
              <div>
                <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">
                  {c.level}
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                  {c.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {c.shortDescription}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <FiClock className="text-yellow-500" />
                  <span>{c.duration}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 font-bold">Course Fee</span>
                  <p className="text-base font-extrabold text-slate-900">
                    ₹{c.price?.toLocaleString()}
                  </p>
                </div>
                <Link
                  href={`/course/${c.slug}`}
                  className="rounded-full bg-yellow-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-xs"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
