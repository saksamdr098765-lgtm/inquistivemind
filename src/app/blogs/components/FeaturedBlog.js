import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

export default function FeaturedBlog({ blog }) {
  if (!blog) return null;

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      {/* Background (same as Hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-yellow-100 bg-yellow-50 px-4 py-2 text-sm font-semibold tracking-wide text-yellow-700">
              Featured Article
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              Editor  Pick
            </h2>
          </div>
        </div>

        <Link
          href={`/blogs/${blog.slug}`}
          className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-200 hover:shadow-xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Category */}
              <div className="absolute left-6 top-6">
                <span className="rounded-full border border-yellow-100 bg-white/95 px-4 py-2 text-sm font-semibold text-yellow-700 backdrop-blur">
                  {blog.category}
                </span>
              </div>

              {/* Subtle Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
              {/* Meta */}
              <div className="mb-5 flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <FiCalendar className="text-yellow-500" />
                  {blog.publishedAt}
                </span>

                <span className="flex items-center gap-2">
                  <FiClock className="text-yellow-500" />
                  {blog.readingTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-yellow-600 lg:text-4xl">
                {blog.title}
              </h2>

              {/* Excerpt */}
              <p className="mt-5 text-base leading-8 text-slate-600 lg:text-lg">
                {blog.excerpt}
              </p>

              {/* Footer */}
              <div className="mt-8 flex flex-col gap-6 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Written by
                  </p>

                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    {blog.author.name}
                  </p>
                </div>

                <span className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-500 px-6 py-4 text-base font-semibold text-white transition-all duration-300 group-hover:bg-[#D6451B] sm:w-auto">
                  Read Article

                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}