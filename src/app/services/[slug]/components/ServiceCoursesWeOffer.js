import Link from "next/link";
import { courses } from "@/app/data/courses";
import { FiBookOpen, FiArrowRight, FiClock, FiTag, FiCheckCircle } from "react-icons/fi";

export default function ServiceCoursesWeOffer({ service }) {
  // If service has relatedCourses slugs, filter those, otherwise show first 3 popular courses
  const relatedSlugs = service?.relatedCourses || [];
  const matchedCourses = courses.filter((c) => relatedSlugs.includes(c.slug));
  const displayCourses = matchedCourses.length > 0 ? matchedCourses : courses.slice(0, 3);

  if (!displayCourses.length) return null;

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
              <FiBookOpen />
              <span>Structured Programs</span>
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              French Courses & Certification Programs We Offer
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Enroll in live interactive batches, exam preparation modules, or customized learning tracks.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-yellow-700 hover:text-yellow-800 shrink-0"
          >
            <span>View All Courses</span>
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayCourses.map((course) => (
            <div
              key={course.slug}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:border-yellow-300"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={course.coverImage}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {course.badge && (
                    <div className="absolute top-3 left-3 rounded-full bg-yellow-500 px-3 py-1 text-[11px] font-bold text-slate-950 shadow-md">
                      {course.badge}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                    <span className="inline-flex items-center gap-1 font-semibold text-yellow-700">
                      <FiTag />
                      <span>{course.category}</span>
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <FiClock />
                      <span>{course.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                    {course.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {course.shortDescription}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400">Course Fee</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-extrabold text-slate-900">
                          ₹{course.price?.toLocaleString()}
                        </span>
                        {course.originalPrice && (
                          <span className="text-xs text-slate-400 line-through">
                            ₹{course.originalPrice?.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <FiCheckCircle />
                      <span>Live Batch</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/course/${course.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-xs font-bold text-white transition-all hover:bg-yellow-500 hover:text-slate-950 shadow-sm"
                >
                  <span>Explore Course Details</span>
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
