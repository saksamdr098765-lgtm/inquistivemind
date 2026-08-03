"use client";

import { FiBookOpen } from "react-icons/fi";

export default function BlogHero({
  totalBlogs,
  search,
  setSearch,
}) {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      {/* Background (same as Hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.12),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Soft Brand Glows */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#D6451B]/10 blur-[70px]" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-yellow-200/30 blur-[70px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-100 bg-yellow-50 px-5 py-2 shadow-sm">
            <FiBookOpen className="text-yellow-500" />

            <span className="font-medium text-yellow-700">
              Inquisitive Mind Academy Blog
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
            Learn English,
            <span className="block text-yellow-500">
              French & Academic Success
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Explore expert articles on Spoken English, French language,
            IELTS preparation, grammar, vocabulary, study techniques,
            and school education. Get practical learning tips to improve
            your communication skills and academic performance.
          </p>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white px-8 py-6 shadow-sm transition-all duration-300 hover:border-yellow-200 hover:shadow-lg">
              <p className="text-3xl font-bold text-yellow-500">
                {totalBlogs}+
              </p>

              <p className="mt-1 text-slate-600">
                Learning Articles
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white px-8 py-6 shadow-sm transition-all duration-300 hover:border-yellow-200 hover:shadow-lg">
              <p className="text-3xl font-bold text-[#D6451B]">
                Expert
              </p>

              <p className="mt-1 text-slate-600">
                Teacher Guidance
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white px-8 py-6 shadow-sm transition-all duration-300 hover:border-yellow-200 hover:shadow-lg">
              <p className="text-3xl font-bold text-yellow-500">
                Weekly
              </p>

              <p className="mt-1 text-slate-600">
                New Articles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}