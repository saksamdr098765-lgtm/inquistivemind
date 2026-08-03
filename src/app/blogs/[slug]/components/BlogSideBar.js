
import SITE_CONFIG from "@/app/siteConfig";
import Link from "next/link";
import {
  FiActivity,
  FiArrowRight,
  FiPhone,
} from "react-icons/fi";

export default function BlogSidebar({
  currentBlog,
  blogs,
}) {
  const recentBlogs = blogs
    .filter((blog) => blog.slug !== currentBlog.slug)
    .slice(0, 4);

  const categories = [...new Set(blogs.map((b) => b.category))];

  return (
    <aside className="space-y-5 sm:space-y-6">
      {/* Recent Articles */}
      <div className="rounded-2xl border border-yellow-100 bg-white p-5 shadow-sm shadow-yellow-100/30 sm:rounded-3xl sm:p-6">
        <h3 className="mb-5 text-lg font-bold text-slate-900">
          Recent Articles
        </h3>

        <div className="space-y-5">
          {recentBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group block rounded-xl transition hover:bg-yellow-50 hover:p-2"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-yellow-600">
                {blog.category}
              </p>

              <h4 className="mt-2 text-base font-semibold leading-6 text-slate-900 transition-colors group-hover:text-yellow-600">
                {blog.title}
              </h4>

              <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors group-hover:text-yellow-600">
                Read Article

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="rounded-2xl border border-yellow-100 bg-white p-5 shadow-sm shadow-yellow-100/30 sm:rounded-3xl sm:p-6">
        <h3 className="mb-5 text-lg font-bold text-slate-900">
          Categories
        </h3>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-yellow-100 bg-yellow-50 px-3 py-1.5 text-xs font-semibold text-yellow-700 sm:text-sm"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 p-5 text-white shadow-xl shadow-yellow-100/50 sm:rounded-3xl sm:p-6">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
          <FiActivity className="h-7 w-7" />
        </div>

        <h3 className="text-2xl font-bold">
          Book Your Health Checkup
        </h3>

        <p className="mt-3 text-sm leading-7 text-yellow-50">
          Get accurate laboratory testing with modern technology,
          trusted professionals, and quick report delivery.
        </p>

        <Link
          href="/packages"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-yellow-700 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-50 sm:w-auto"
        >
          View Packages

          <FiArrowRight />
        </Link>
      </div>

      {/* Contact */}
      <div className="rounded-2xl border border-yellow-100 bg-white p-5 shadow-sm shadow-yellow-100/30 sm:rounded-3xl sm:p-6">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-yellow-50 p-3 text-yellow-600 ring-1 ring-yellow-100">
            <FiPhone className="h-5 w-5" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Need Assistance?
            </p>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="mt-1 block text-lg font-semibold text-slate-900 transition-colors hover:text-yellow-600"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

