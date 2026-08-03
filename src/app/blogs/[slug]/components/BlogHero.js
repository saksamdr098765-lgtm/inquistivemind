import SITE_CONFIG from "@/app/siteConfig";
import Image from "next/image";
import { FiCalendar, FiClock, FiUser } from "react-icons/fi";

export default function BlogHero({ blog }) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-white px-6 py-10 lg:px-10 lg:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative space-y-8">
        {/* Category */}
        <div>
          <span className="inline-flex items-center rounded-full border border-yellow-100 bg-yellow-50 px-4 py-2 text-sm font-semibold tracking-wide text-yellow-700">
            {blog.category}
          </span>
        </div>

        {/* Title */}
        <div className="max-w-5xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {blog.title}
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600 lg:text-xl">
            {blog.excerpt}
          </p>
        </div>

        {/* Author & Meta */}
        <div className="flex flex-col gap-6 border-y border-yellow-100 py-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Author */}
          <div className="flex items-center gap-4">
            {blog.author.image ? (
              <Image
                src={blog.author.image || SITE_CONFIG.logo}
                alt={blog.author.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-yellow-100 transition-all duration-300 hover:ring-yellow-300"
              />
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-50 text-yellow-600 ring-2 ring-yellow-100">
                <FiUser className="h-6 w-6" />
              </div>
            )}

            <div>
              <p className="text-lg font-semibold text-slate-900">
                {blog.author.name}
              </p>

              <p className="text-sm text-slate-500">
                {blog.author.role || "Language Trainer"}
              </p>
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <FiCalendar className="text-yellow-500" />
              <span>{blog.publishedAt}</span>
            </div>

            <div className="flex items-center gap-2">
              <FiClock className="text-yellow-500" />
              <span>{blog.readingTime}</span>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="overflow-hidden rounded-3xl border border-yellow-100 bg-white shadow-xl shadow-yellow-100/40">
          <Image
            src={blog.coverImage || "/icon1.png"}
            alt={blog.title}
            width={1600}
            height={900}
            priority
            className="aspect-[16/9] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}