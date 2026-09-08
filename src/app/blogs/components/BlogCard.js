import Image from "next/image";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
} from "react-icons/fi";
import TrackedLink from "@/app/Components/tracking/TrackedLink";

export default function BlogCard({ blog }) {
  return (
    <TrackedLink
      href={`/blogs/${blog.slug}`}
      label={`Blog Card: ${blog.title}`}
      category="Blog Listing"
      className="group flex flex-row lg:flex-col h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-200 hover:shadow-xl min-h-[44px]"
    >
      {/* Cover Image */}
      <div className="relative w-32 sm:w-48 lg:w-full shrink-0 overflow-hidden bg-slate-900/5 p-1.5 flex items-center justify-center">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          width={700}
          height={450}
          className="aspect-square sm:aspect-[16/10] lg:aspect-[16/10] h-full w-full object-contain transition duration-700 group-hover:scale-105"
        />

        {/* Category badge on desktop/tablet */}
        <span className="hidden sm:inline-block absolute left-3.5 top-3.5 sm:left-4 sm:top-4 rounded-full border border-yellow-100 bg-white/95 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-yellow-700 backdrop-blur shadow-xs">
          {blog.category}
        </span>

        {/* Optional subtle gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-5 lg:p-6 min-w-0">
        <div>
          {/* Category badge on mobile */}
          <div className="sm:hidden mb-1">
            <span className="inline-block rounded-full border border-yellow-100 bg-yellow-50 px-2 py-0.5 text-[10px] font-bold text-yellow-700">
              {blog.category}
            </span>
          </div>

          {/* Meta */}
          <div className="mb-1.5 sm:mb-3 flex flex-wrap items-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-slate-500">
            <span className="flex items-center gap-1 sm:gap-1.5">
              <FiCalendar className="text-yellow-500 shrink-0 text-xs" />
              <span>{blog.publishedAt}</span>
            </span>

            <span className="flex items-center gap-1 sm:gap-1.5">
              <FiClock className="text-yellow-500 shrink-0 text-xs" />
              <span>{blog.readingTime}</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="line-clamp-2 text-xs sm:text-lg md:text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-yellow-600">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="mt-1 sm:mt-2.5 line-clamp-2 flex-1 text-[11px] sm:text-sm leading-relaxed text-slate-600">
            {blog.excerpt}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-2.5 pt-2 sm:mt-5 sm:pt-4 flex items-center justify-between border-t border-slate-100">
          <div>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400">
              By
            </p>

            <p className="text-[11px] sm:text-xs font-semibold text-slate-900 line-clamp-1">
              {blog.author.name}
            </p>
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-yellow-600 transition-colors group-hover:text-[#D6451B] shrink-0">
            <span>Read</span>

            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </TrackedLink>
  );
}