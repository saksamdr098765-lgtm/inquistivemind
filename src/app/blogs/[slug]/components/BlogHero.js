import SITE_CONFIG from "@/app/siteConfig";
import Image from "next/image";
import { FiCalendar, FiClock, FiUser, FiBookOpen, FiCheck } from "react-icons/fi";

export default function BlogHero({ blog }) {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-amber-100/80 bg-gradient-to-br from-amber-50/40 via-white to-orange-50/30 px-6 py-10 lg:px-12 lg:py-14 shadow-xl shadow-amber-500/5">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.12),transparent_65%)]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative space-y-8">
        {/* Category & Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-100/80 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide text-amber-900 shadow-sm">
            <FiBookOpen className="text-amber-600" />
            <span>{blog.category}</span>
          </span>
          {blog.featured && (
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3.5 py-1 text-xs font-bold text-white shadow-sm">
              ★ Featured Guide
            </span>
          )}

          {/* CTA Features Badges */}
          {blog.cta?.features?.map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-white/90 px-3.5 py-1 text-xs font-semibold text-amber-900 shadow-sm transition-all hover:bg-amber-50"
            >
              <FiCheck className="text-amber-600 font-bold shrink-0" />
              <span>{feature}</span>
            </span>
          ))}
        </div>

        {/* Title & Excerpt */}
        <div className="max-w-5xl">
          <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {blog.title}
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
            {blog.excerpt}
          </p>
        </div>

        {/* Author & Meta */}
        <div className="flex flex-col gap-6 border-y border-amber-100/80 py-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Author */}
          <div className="flex items-center gap-4">
            {blog.author?.image ? (
              <Image
                src={blog.author.image}
                alt={blog.author.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-amber-400/60 shadow-md"
              />
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-800 ring-2 ring-amber-300">
                <FiUser className="h-6 w-6" />
              </div>
            )}

            <div>
              <p className="text-base font-bold text-slate-900">
                {blog.author?.name || SITE_CONFIG.name}
              </p>

              <p className="text-xs font-medium text-amber-700">
                {blog.author?.role || "Certified Language Faculty"}
              </p>
            </div>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 border border-amber-100 shadow-sm">
              <FiCalendar className="text-amber-500 text-base" />
              <span>Published: {blog.publishedAt}</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 border border-amber-100 shadow-sm">
              <FiClock className="text-amber-500 text-base" />
              <span>{blog.readingTime || "7 min read"}</span>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        {blog.coverImage && (
          <div className="overflow-hidden rounded-3xl border border-amber-200/60 bg-white shadow-2xl shadow-amber-500/10">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              width={1600}
              height={900}
              priority
              className="aspect-[16/9] w-full object-cover transition-transform duration-700 hover:scale-102"
            />
          </div>
        )}
      </div>
    </section>
  );
}