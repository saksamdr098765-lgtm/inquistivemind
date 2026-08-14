import Link from "next/link";
import { courses } from "@/app/data/courses";
import { FiArrowRight, FiClock, FiCheckCircle } from "react-icons/fi";

export default function PopularCourses({ location }) {
  const centerCourses = courses.filter((c) =>
    (location.courses || []).includes(c.slug)
  );
  const display = centerCourses.length ? centerCourses : courses.slice(0, 3);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-600">
              Curriculum & Programs
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Popular Courses at {location.city} Center
            </h2>
          </div>
          <Link
            href="/courses"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-yellow-600 hover:text-yellow-700"
          >
            <span>View All Courses</span>
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {display.map((course) => (
            <div
              key={course.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div>
                <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">
                  {course.level}
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                  {course.shortDescription}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <FiClock className="text-yellow-500" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400">Course Fee</span>
                  <p className="text-lg font-bold text-slate-900">
                    ₹{course.price.toLocaleString()}
                  </p>
                </div>
                <Link
                  href={`/courses/${course.slug}`}
                  className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-yellow-500 hover:text-slate-900 transition-all"
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
