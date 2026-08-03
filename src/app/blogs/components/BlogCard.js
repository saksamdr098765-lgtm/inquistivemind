import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

export default function BlogCard({ blog }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-200 hover:shadow-xl"
    >
      {/* Cover Image */}
      <div className="relative overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          width={700}
          height={450}
          className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-5 top-5 rounded-full border border-yellow-100 bg-white/95 px-3 py-1 text-xs font-semibold text-yellow-700 backdrop-blur">
          {blog.category}
        </span>

        {/* Optional subtle gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Meta */}
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

        {/* Title */}
        <h3 className="line-clamp-2 text-2xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-yellow-600">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-4 line-clamp-3 flex-1 leading-7 text-slate-600">
          {blog.excerpt}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400">
              By
            </p>

            <p className="font-semibold text-slate-900">
              {blog.author.name}
            </p>
          </div>

          <span className="inline-flex items-center gap-2 font-semibold text-yellow-600 transition-colors group-hover:text-[#D6451B]">
            Read More

            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}