import Link from "next/link";
import { courses } from "@/app/data/courses";
import { FiCheckCircle, FiClock, FiArrowRight } from "react-icons/fi";

export default function RelatedCourses({ relatedCourses = [] }) {
  const recommended = courses.filter((course) =>
    relatedCourses.includes(course.slug)
  );

  const displayCourses = recommended.length > 0 ? recommended : courses.slice(0, 2);

  return (
    <section className="mt-12 sm:mt-16 lg:mt-20">
      <div className="mb-8">
        <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800 sm:px-4 sm:py-1.5 sm:text-sm">
          Recommended Learning
        </span>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Related Academy Courses
        </h2>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          Accelerate your fluency by enrolling in our expert-led, interactive courses.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {displayCourses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-yellow-300 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {course.level}
                </span>
                {/* <span className="text-sm font-bold text-yellow-600">
                  ₹{course.price.toLocaleString()}
                </span> */}
              </div>
              <h3 className="mt-3 text-lg font-bold text-slate-900">
                {course.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600 line-clamp-2">
                {course.shortDescription}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <FiClock className="text-yellow-500" />
                <span>{course.duration}</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link
                href={`/course/${course.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700"
              >
                <span>View Course Details</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
