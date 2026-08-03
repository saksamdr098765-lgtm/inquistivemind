import BlogCard from "./BlogCard";

export default function BlogGrid({ blogs = [] }) {
  if (!blogs.length) return null;

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      {/* Background (matches Hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-yellow-100 bg-yellow-50 px-4 py-2 text-sm font-semibold tracking-wide text-yellow-700">
              Latest Articles
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              Explore Learning Resources
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Discover expert-written articles on English speaking, French
              language learning, IELTS preparation, grammar tips, vocabulary
              building, and school education to help students achieve academic
              and career success.
            </p>
          </div>

          {/* Stats Card */}
          <div className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-yellow-200 hover:shadow-lg sm:w-auto sm:min-w-[190px]">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Total Articles
            </p>

            <p className="mt-2 text-4xl font-bold text-yellow-500">
              {blogs.length}
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </section>
  );
}