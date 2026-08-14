import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";

export default function RelatedPosts({ blogs = [] }) {
  if (!blogs.length) return null;

  return (
    <section className="relative mt-12 overflow-hidden rounded-[2.5rem] bg-white px-6 py-12 lg:mt-16 lg:px-10 lg:py-16 shadow-xl shadow-amber-500/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_60%)]" />

      <div className="relative">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full border border-amber-200 bg-amber-100/80 px-4 py-1.5 text-xs font-bold tracking-wide text-amber-900">
            Continue Reading
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            Related Articles & Learning Guides
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
            Expand your knowledge with more guides on French language, DELF exam prep, vocabulary building, and study techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group overflow-hidden rounded-3xl border border-amber-100/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  width={700}
                  height={450}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full border border-amber-200 bg-white/95 px-3 py-1 text-xs font-bold text-amber-900 backdrop-blur shadow-sm">
                  {blog.category}
                </span>
              </div>

              <div className="p-6">
                <div className="mb-3 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="text-amber-500" />
                    {blog.publishedAt}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FiClock className="text-amber-500" />
                    {blog.readingTime}
                  </span>
                </div>

                <h3 className="line-clamp-2 text-lg font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-amber-800">
                  {blog.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">
                  {blog.excerpt}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-amber-700 transition-colors duration-300 group-hover:text-amber-900">
                  <span>Read Full Article</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}