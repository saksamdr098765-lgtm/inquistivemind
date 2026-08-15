import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function PreviousNext({ currentBlog, blogs }) {
  const currentIndex = blogs.findIndex(
    (blog) => blog.slug === currentBlog.slug
  );

  const previous = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const next = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  return (
    <section className="relative mt-8 sm:mt-12 overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-white px-4 py-6 sm:px-8 sm:py-10 lg:mt-16">
      <div className="relative grid gap-4 sm:gap-6 md:grid-cols-2">
        {/* Previous */}
        {previous ? (
          <Link
            href={`/blogs/${previous.slug}`}
            className="group rounded-2xl sm:rounded-3xl border border-amber-100/80 bg-slate-50/50 p-4 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-amber-50/30 hover:shadow-xl"
          >
            <div className="mb-2.5 flex items-center gap-2 text-amber-800">
              <FiArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                Previous Article
              </span>
            </div>

            <span className="inline-flex rounded-full border border-amber-200 bg-white px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-amber-900">
              {previous.category}
            </span>

            <h3 className="mt-2.5 text-base sm:text-lg font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-amber-800 line-clamp-2">
              {previous.title}
            </h3>
          </Link>
        ) : (
          <div className="hidden md:block" />
        )}

        {/* Next */}
        {next ? (
          <Link
            href={`/blogs/${next.slug}`}
            className="group rounded-2xl sm:rounded-3xl border border-amber-100/80 bg-slate-50/50 p-4 sm:p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-amber-50/30 hover:shadow-xl md:text-right"
          >
            <div className="mb-2.5 flex items-center gap-2 text-amber-800 md:justify-end">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                Next Article
              </span>
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
            </div>

            <span className="inline-flex rounded-full border border-amber-200 bg-white px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-amber-900">
              {next.category}
            </span>

            <h3 className="mt-2.5 text-base sm:text-lg font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-amber-800 line-clamp-2">
              {next.title}
            </h3>
          </Link>
        ) : (
          <div className="hidden md:block" />
        )}
      </div>
    </section>
  );
}