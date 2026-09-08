import SITE_CONFIG from "@/app/siteConfig";
import Image from "next/image";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiBookOpen,
  FiCheck,
  FiRefreshCw,
  FiShield,
  FiAward,
} from "react-icons/fi";

export default function BlogHero({ blog }) {
  const updatedDate = blog.lastUpdated || blog.updatedAt;

  return (
    <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] border border-amber-100/80 bg-gradient-to-br from-amber-50/40 via-white to-orange-50/30 px-4 py-6 sm:px-8 sm:py-10 lg:px-12 lg:py-14 shadow-xl shadow-amber-500/5">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.12),transparent_65%)]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative space-y-6 sm:space-y-8">
        {/* Category & Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-100/80 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-bold tracking-wide text-amber-900 shadow-xs">
            <FiBookOpen className="text-amber-600 shrink-0" />
            <span>{blog.category}</span>
          </span>
          {blog.featured && (
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 sm:px-3.5 sm:py-1 text-xs font-bold text-white shadow-xs">
              ★ Featured Guide
            </span>
          )}

          {/* CTA Features Badges */}
          {blog.cta?.features?.map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-white/90 px-3 py-1 text-xs font-semibold text-amber-900 shadow-xs transition-all hover:bg-amber-50"
            >
              <FiCheck className="text-amber-600 font-bold shrink-0" />
              <span>{feature}</span>
            </span>
          ))}
        </div>

        {/* Title & Excerpt */}
        <div className="max-w-5xl">
          <h1 className="text-2xl font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            {blog.title}
          </h1>

          <p className="mt-3 sm:mt-5 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg lg:text-xl">
            {blog.excerpt}
          </p>
        </div>

        {/* Author & Meta */}
        <div className="flex flex-col gap-4 border-y border-amber-100/80 py-4 sm:py-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Author info */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            {blog.author?.image ? (
              <Image
                src={blog.author.image}
                alt={blog.author.name || "Author"}
                width={56}
                height={56}
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover object-top ring-2 ring-amber-400/60 shadow-md shrink-0"
              />
            ) : (
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-amber-100 text-amber-800 ring-2 ring-amber-300 shrink-0">
                <FiUser className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
            )}

            <div>
              <p className="text-sm sm:text-base font-bold text-slate-900">
                {blog.author?.name || SITE_CONFIG.name}
              </p>

              <p className="text-xs font-medium text-amber-700">
                {blog.author?.role || "Certified Language Faculty"}
              </p>

              {blog.author?.credentials && (
                <p className="mt-0.5 text-xs text-slate-500 font-medium flex items-center gap-1">
                  <FiAward className="text-amber-500 shrink-0" />
                  <span>{blog.author.credentials}</span>
                </p>
              )}
            </div>
          </div>

          {/* Meta Information & Reviewer */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-slate-600">
            <div className="flex items-center gap-1.5 rounded-xl bg-white px-3 py-1.5 border border-amber-100 shadow-xs sm:px-3.5 sm:py-2">
              <FiCalendar className="text-amber-500 text-sm sm:text-base shrink-0" />
              <span>Published: {blog.publishedAt}</span>
            </div>

            {updatedDate && (
              <div className="flex items-center gap-1.5 rounded-xl bg-white px-3 py-1.5 border border-amber-100 shadow-xs sm:px-3.5 sm:py-2">
                <FiRefreshCw className="text-amber-500 text-sm sm:text-base shrink-0" />
                <span>Updated: {updatedDate}</span>
              </div>
            )}

            <div className="flex items-center gap-1.5 rounded-xl bg-white px-3 py-1.5 border border-amber-100 shadow-xs sm:px-3.5 sm:py-2">
              <FiClock className="text-amber-500 text-sm sm:text-base shrink-0" />
              <span>{blog.readingTime || "7 min read"}</span>
            </div>

            {blog.reviewedBy?.name && (
              <div className="flex items-center gap-1.5 rounded-xl bg-amber-50/90 px-3 py-1.5 border border-amber-200/80 text-amber-900 font-semibold shadow-xs sm:px-3.5 sm:py-2">
                <FiShield className="text-amber-600 text-sm sm:text-base shrink-0" />
                <span>
                  Reviewed by <strong>{blog.reviewedBy.name}</strong>
                  {blog.reviewedBy.role ? ` (${blog.reviewedBy.role})` : ""}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Cover Image */}
        {blog.coverImage && (
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-amber-200/60 bg-slate-900/5 p-2 sm:p-4 flex items-center justify-center shadow-2xl shadow-amber-500/10">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              width={1600}
              height={900}
              priority
              className="w-full h-auto max-h-[500px] sm:max-h-[600px] object-contain transition-transform duration-700 hover:scale-102"
            />
          </div>
        )}
      </div>
    </section>
  );
}
