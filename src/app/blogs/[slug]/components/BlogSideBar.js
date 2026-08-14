import SITE_CONFIG from "@/app/siteConfig";
import Link from "next/link";
import { FiBookOpen, FiArrowRight, FiPhone, FiCheckCircle } from "react-icons/fi";

export default function BlogSidebar({ currentBlog, blogs }) {
  const recentBlogs = blogs
    .filter((blog) => blog.slug !== currentBlog.slug)
    .slice(0, 4);

  const categories = [...new Set(blogs.map((b) => b.category))];

  return (
    <aside className="space-y-6">
      {/* Recent Articles */}
      <div className="rounded-3xl border border-amber-100/80 bg-white p-6 shadow-sm shadow-amber-500/5">
        <h3 className="mb-5 text-lg font-bold text-slate-900 border-b border-amber-100 pb-3">
          Recent Articles
        </h3>

        <div className="space-y-4">
          {recentBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group block rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-amber-200 hover:bg-amber-50/50"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                {blog.category}
              </p>

              <h4 className="mt-1.5 text-sm font-bold leading-snug text-slate-900 transition-colors group-hover:text-amber-800 line-clamp-2">
                {blog.title}
              </h4>

              <span className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 transition-colors group-hover:text-amber-900">
                <span>Read Article</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="rounded-3xl border border-amber-100/80 bg-white p-6 shadow-sm shadow-amber-500/5">
        <h3 className="mb-4 text-lg font-bold text-slate-900 border-b border-amber-100 pb-3">
          Explore Categories
        </h3>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold text-amber-800 transition-all hover:bg-amber-100 cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Academy Demo CTA */}
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 p-6 text-white shadow-xl shadow-amber-500/10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
          <FiBookOpen className="h-6 w-6" />
        </div>

        <h3 className="text-xl font-bold text-white">
          Book Your Free Demo Class
        </h3>

        <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
          Experience our interactive teaching methods with certified French trainers. Reserve your spot today!
        </p>

        <Link
          href="/courses"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-bold text-slate-950 shadow-md transition-all duration-300 hover:bg-amber-400"
        >
          <span>Explore Courses</span>
          <FiArrowRight />
        </Link>
      </div>

      {/* Contact Card */}
      <div className="rounded-3xl border border-amber-100/80 bg-white p-6 shadow-sm shadow-amber-500/5">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-amber-100/80 p-3.5 text-amber-800 ring-1 ring-amber-200">
            <FiPhone className="h-5 w-5" />
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
              Need Help Deciding?
            </p>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="mt-1 block text-base font-bold text-slate-900 transition-colors hover:text-amber-800"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
