import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";

export default function RelatedPosts({ blogs = [] }) {
  if (!blogs.length) return null;

  return (
    <section className="relative mt-8 sm:mt-12 overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-white px-4 py-6 sm:px-8 sm:py-12 lg:mt-16 lg:px-10 lg:py-16 shadow-xl shadow-amber-500/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_60%)]" />

      <div className="relative">
        <div className="mb-6 sm:mb-10 text-center">
          <span className="inline-flex rounded-full border border-amber-200 bg-amber-100/80 px-3.5 py-1 text-xs font-bold tracking-wide text-amber-900">
            Continue Reading
          </span>

          <h2 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            Related Articles & Learning Guides
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-600">
            Expand your knowledge with more guides on French language, DELF exam prep, vocabulary building, and study techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group flex flex-row lg:flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-amber-100/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
            >
              <div className="relative w-28 sm:w-44 lg:w-full shrink-0 overflow-hidden bg-slate-100">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  width={700}
                  height={450}
                  className="aspect-square sm:aspect-[16/10] lg:aspect-[16/10] h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <span className="hidden sm:inline-block absolute left-3.5 top-3.5 sm:left-4 sm:top-4 rounded-full border border-amber-200 bg-white/95 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold text-amber-900 backdrop-blur shadow-xs">
                  {blog.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-3 sm:p-5 lg:p-6 min-w-0">
                <div>
                  <div className="sm:hidden mb-1">
                    <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-900">
                      {blog.category}
                    </span>
                  </div>

                  <div className="mb-1.5 sm:mb-3 flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="text-amber-500 shrink-0 text-xs" />
                      <span>{blog.publishedAt}</span>
                    </span>

                    <span className="flex items-center gap-1">
                      <FiClock className="text-amber-500 shrink-0 text-xs" />
                      <span>{blog.readingTime}</span>
                    </span>
                  </div>

                  <h3 className="line-clamp-2 text-xs sm:text-base lg:text-lg font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-amber-800">
                    {blog.title}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-[11px] sm:text-xs leading-relaxed text-slate-600">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="mt-2.5 sm:mt-5 inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-amber-700 transition-colors duration-300 group-hover:text-amber-900 shrink-0">
                  <span>Read Article</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}