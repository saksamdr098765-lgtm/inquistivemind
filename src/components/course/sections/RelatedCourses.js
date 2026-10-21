import Link from "next/link";
import { FaArrowRight, FaBookOpen, FaClock } from "react-icons/fa";
import { getRelatedCourses } from "@/app/data/courses";

export default function RelatedCourses({ course }) {
  if (!course) return null;

  const relatedList = getRelatedCourses(course.slug);
  const blogLinks = course.blogLinks || [];

  return (
    <section className="relative bg-white py-16 sm:py-20 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold tracking-[0.35em] text-yellow-600 uppercase">
            RELATED OPPORTUNITIES
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Explore Related Courses & Study Guides
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
        </div>

        {/* Related Courses Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedList.slice(0, 3).map((rel) => (
            <div
              key={rel.slug}
              className="group rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs transition hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-100 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block rounded-full bg-yellow-100/80 border border-yellow-300 px-3 py-1 text-xs font-bold text-yellow-900">
                  {rel.level}
                </span>

                <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-yellow-700 transition">
                  {rel.shortTitle || rel.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {rel.heroSubtitle}
                </p>

                <div className="mt-4 flex items-center gap-3 text-xs text-slate-500 border-t border-slate-100 pt-3">
                  <span className="flex items-center gap-1">
                    <FaClock className="text-yellow-500" /> {rel.durationWeeks} Weeks
                  </span>
                  <span>•</span>
                  <span className="capitalize">{rel.mode}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={`/courses/${rel.slug}`}
                  className="inline-flex min-h-[44px] items-center gap-2 text-xs sm:text-sm font-bold text-yellow-700 hover:text-yellow-800 transition"
                >
                  <span>View Course Details</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Related Blog Posts / Study Guides for Internal Linking */}
        {blogLinks.length > 0 && (
          <div className="mt-12 rounded-3xl border border-yellow-200/90 bg-amber-50/30 p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <FaBookOpen className="text-yellow-600" />
              <span>Recommended Guides & Articles</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {blogLinks.map((blog, idx) => (
                <Link
                  key={idx}
                  href={`/blogs/${blog.slug}`}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-yellow-200/70 bg-white p-4 transition hover:border-yellow-400 hover:shadow-sm group min-h-[56px]"
                >
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-yellow-800">
                    {blog.title}
                  </span>
                  <FaArrowRight className="text-xs text-slate-400 group-hover:text-yellow-600 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
