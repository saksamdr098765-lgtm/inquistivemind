import Link from "next/link";
import { blogs } from "@/app/data/blogs";
import { FiBookOpen, FiArrowRight } from "react-icons/fi";

export default function LocationBlogs({ location }) {
  if (!blogs || !blogs.length) return null;
  const displayBlogs = blogs.slice(0, 2);

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
              <FiBookOpen />
              <span>Blogs Central Hub</span>
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              French Exam Guides & Language Articles
            </h2>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-1 text-sm font-bold text-yellow-700 hover:text-yellow-800"
          >
            <span>All Articles</span>
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/50 p-6 transition-all hover:bg-white hover:border-yellow-300 hover:shadow-md"
            >
              <div>
                <span className="text-xs font-bold text-yellow-700 uppercase tracking-wider">
                  {blog.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                  {blog.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-yellow-700">
                <span>Read Full Article</span>
                <FiArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
