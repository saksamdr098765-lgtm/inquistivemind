import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

export default function PreviousNext({
  currentBlog,
  blogs,
}) {
  const currentIndex = blogs.findIndex(
    (blog) => blog.slug === currentBlog.slug
  );

  const previous =
    currentIndex > 0 ? blogs[currentIndex - 1] : null;

  const next =
    currentIndex < blogs.length - 1
      ? blogs[currentIndex + 1]
      : null;

  return (
    <section className="relative mt-16 overflow-hidden rounded-[2rem] bg-white px-6 py-14 lg:mt-20 lg:px-8 lg:py-16">
      {/* Background (matches Hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative grid gap-6 md:grid-cols-2">
        {/* Previous */}
        {previous ? (
          <Link
            href={`/blogs/${previous.slug}`}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-200 hover:shadow-xl"
          >
            <div className="mb-5 flex items-center gap-2 text-yellow-600">
              <FiArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />

              <span className="text-sm font-semibold">
                Previous Article
              </span>
            </div>

            <span className="inline-flex rounded-full border border-yellow-100 bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-700">
              {previous.category}
            </span>

            <h3 className="mt-5 text-xl font-bold leading-8 text-slate-900 transition-colors duration-300 group-hover:text-yellow-600">
              {previous.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-base leading-8 text-slate-600">
              {previous.excerpt}
            </p>
          </Link>
        ) : (
          <div className="hidden md:block" />
        )}

        {/* Next */}
        {next ? (
          <Link
            href={`/blogs/${next.slug}`}
            className="group rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-200 hover:shadow-xl md:text-right"
          >
            <div className="mb-5 flex items-center gap-2 text-yellow-600 md:justify-end">
              <span className="text-sm font-semibold">
                Next Article
              </span>

              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>

            <span className="inline-flex rounded-full border border-yellow-100 bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-700">
              {next.category}
            </span>

            <h3 className="mt-5 text-xl font-bold leading-8 text-slate-900 transition-colors duration-300 group-hover:text-yellow-600">
              {next.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-base leading-8 text-slate-600">
              {next.excerpt}
            </p>
          </Link>
        ) : (
          <div className="hidden md:block" />
        )}
      </div>
    </section>
  );
}