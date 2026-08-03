import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

export default function RelatedPosts({ blogs = [] }) {
  if (!blogs.length) return null;

  return (
    <section className="relative mt-16 overflow-hidden rounded-[2rem] bg-white px-6 py-14 lg:mt-20 lg:px-8 lg:py-20">
      {/* Background (matches Hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-yellow-100 bg-yellow-50 px-4 py-2 text-sm font-semibold tracking-wide text-yellow-700">
            Continue Reading
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Related Articles
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Continue your learning journey with more articles on Spoken
            English, French language, IELTS preparation, grammar,
            vocabulary, and academic success.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-200 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  width={700}
                  height={450}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-5 top-5 rounded-full border border-yellow-100 bg-white/95 px-3 py-1 text-xs font-semibold text-yellow-700 backdrop-blur">
                  {blog.category}
                </span>

                {/* Hover Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <FiCalendar className="text-yellow-500" />
                    {blog.publishedAt}
                  </span>

                  <span className="flex items-center gap-2">
                    <FiClock className="text-yellow-500" />
                    {blog.readingTime}
                  </span>
                </div>

                <h3 className="line-clamp-2 text-2xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-yellow-600">
                  {blog.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-base leading-8 text-slate-600">
                  {blog.excerpt}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 font-semibold text-yellow-600 transition-colors duration-300 group-hover:text-[#D6451B]">
                  Read Article

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