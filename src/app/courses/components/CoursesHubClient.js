"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FaClock, FaSignal, FaArrowRight, FaFilter, FaLaptopHouse, FaSearch, FaCheck } from "react-icons/fa";

export default function CoursesHubClient({ allCourses }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMode, setSelectedMode] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Programs" },
    { id: "french", label: "French Language (A1–C2)" },
    { id: "english", label: "English Speaking" },
    { id: "school", label: "School Tuition (1–12)" },
    { id: "exam", label: "TEF / DELF Exam Prep" },
  ];

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      // Category filter
      if (activeCategory === "french" && !(course.slug.includes("french") && course.type !== "exam")) {
        return false;
      }
      if (activeCategory === "english" && !course.slug.includes("english")) {
        return false;
      }
      if (activeCategory === "school" && course.type !== "school") {
        return false;
      }
      if (activeCategory === "exam" && course.type !== "exam") {
        return false;
      }

      // Mode filter
      if (selectedMode !== "all") {
        if (selectedMode === "online" && course.mode !== "online" && course.mode !== "both") return false;
        if (selectedMode === "hybrid" && course.mode !== "both" && course.mode !== "home") return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesDesc = course.heroSubtitle?.toLowerCase().includes(query) || course.shortTitle?.toLowerCase().includes(query);
        const matchesLevel = course.level?.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesLevel) return false;
      }

      return true;
    });
  }, [allCourses, activeCategory, selectedMode, searchQuery]);

  return (
    <div className="mt-12 sm:mt-16">
      {/* Search and Filters Toolbar */}
      <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
        {/* Category Pills (Min 44px touch targets) */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`min-h-[44px] rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition cursor-pointer select-none ${
                activeCategory === cat.id
                  ? "bg-yellow-400 text-slate-950 shadow-md shadow-yellow-200 ring-2 ring-yellow-400/50"
                  : "bg-amber-50/70 text-slate-700 hover:bg-amber-100/80 border border-yellow-200/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Secondary Bar: Mode Filter & Search */}
        <div className="mt-5 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
            <FaLaptopHouse className="text-yellow-600 text-base" />
            <span className="font-medium">Mode:</span>
            <div className="flex rounded-xl bg-slate-100 p-1">
              <button
                onClick={() => setSelectedMode("all")}
                className={`min-h-[36px] px-3 rounded-lg text-xs font-semibold transition ${
                  selectedMode === "all" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600"
                }`}
              >
                All Modes
              </button>
              <button
                onClick={() => setSelectedMode("online")}
                className={`min-h-[36px] px-3 rounded-lg text-xs font-semibold transition ${
                  selectedMode === "online" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600"
                }`}
              >
                Live Online
              </button>
              <button
                onClick={() => setSelectedMode("hybrid")}
                className={`min-h-[36px] px-3 rounded-lg text-xs font-semibold transition ${
                  selectedMode === "hybrid" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600"
                }`}
              >
                Hybrid / Offline
              </button>
            </div>
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[240px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by level, exam, or title..."
              aria-label="Search courses"
              className="min-h-[44px] w-full rounded-2xl border border-slate-200/90 bg-slate-50 px-4 py-2 pl-9 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-yellow-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="mt-8 flex items-center justify-between">
        <p className="text-xs sm:text-sm text-slate-500 font-medium">
          Showing <strong className="text-slate-900">{filteredCourses.length}</strong> of {allCourses.length} programs
        </p>
        {(activeCategory !== "all" || selectedMode !== "all" || searchQuery) && (
          <button
            onClick={() => {
              setActiveCategory("all");
              setSelectedMode("all");
              setSearchQuery("");
            }}
            className="text-xs text-yellow-600 hover:underline font-semibold cursor-pointer"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Course Cards Grid - Server-Rendered HTML Links without JS dependency */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCourses.map((course) => (
          <article
            key={course.slug}
            className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-200 hover:-translate-y-1.5 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-100"
          >
            <div>
              {/* Level & Mode Badges */}
              <div className="flex items-center justify-between gap-2">
                <span className="inline-block rounded-full bg-yellow-50 border border-yellow-200 px-3 py-1 text-xs font-bold text-yellow-800">
                  {course.level}
                </span>

                <span className="text-[11px] font-semibold text-slate-500 capitalize bg-slate-100 px-2.5 py-0.5 rounded-full">
                  {course.mode === "both" ? "Online & Hybrid" : course.mode}
                </span>
              </div>

              {/* Course Title Link */}
              <h2 className="mt-4 text-xl font-bold tracking-tight text-slate-900 group-hover:text-yellow-600 transition">
                <Link href={`/courses/${course.slug}`} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {course.title}
                </Link>
              </h2>

              <p className="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                {course.heroSubtitle}
              </p>

              {/* Highlights & Quick Meta */}
              <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <FaClock className="text-yellow-500" /> Duration:
                  </span>
                  <span className="font-semibold text-slate-800">{course.durationWeeks} Weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Class Size:</span>
                  <span className="font-semibold text-slate-800">{course.classSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Target Exam:</span>
                  <span className="font-semibold text-slate-800">{course.examAlignment?.exam || "Academy Certificate"}</span>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">Tuition from</p>
                <p className="text-base font-extrabold text-slate-900">
                  {course.price?.currency === "INR" ? `₹${course.price.from.toLocaleString()}` : "Custom Fee"}
                </p>
              </div>

              <span className="inline-flex min-h-[44px] items-center gap-1.5 text-xs sm:text-sm font-bold text-yellow-600 group-hover:text-yellow-700 transition">
                <span>View Details</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-12 text-center">
          <p className="text-lg font-bold text-slate-900">No courses match your filter criteria.</p>
          <p className="mt-1 text-sm text-slate-500">Try selecting "All Programs" or clearing your search keywords.</p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSelectedMode("all");
              setSearchQuery("");
            }}
            className="mt-4 inline-flex min-h-[44px] items-center rounded-full bg-yellow-400 px-6 py-2 text-xs font-bold text-slate-950 transition hover:bg-yellow-300"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
