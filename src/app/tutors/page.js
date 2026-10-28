"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import {
  FaStar,
  FaSearch,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaClock,
  FaLaptop,
  FaFilter,
  FaCheckCircle,
  FaArrowRight,
  FaUserGraduate,
} from "react-icons/fa";
import useDebounce from "@/Hooks/useDebounce";
import { usePublicTutors } from "@/Hooks/usePublicTutors";

const subjectOptions = [
  { label: "All Subjects", value: "" },
  { label: "French", value: "French" },
  { label: "German", value: "German" },
  { label: "English", value: "English" },
  { label: "Mathematics", value: "Mathematics" },
  { label: "Science", value: "Science" },
  { label: "Spanish", value: "Spanish" },
];

const modeOptions = [
  { label: "All Teaching Modes", value: "" },
  { label: "Online Classes", value: "Online" },
  { label: "Offline / Home", value: "Offline" },
  { label: "Hybrid Teaching", value: "Hybrid" },
];

function TutorsDirectoryContent() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("");
  const [mode, setMode] = useState("");
  const [sort, setSort] = useState("rating");

  const debouncedSearch = useDebounce(search, 350);

  const { data, isLoading } = usePublicTutors({
    page,
    limit: 12,
    search: debouncedSearch,
    subject,
    mode,
    sort,
  });

  const tutors = data?.tutors || [];
  const pagination = data?.pagination || {};

  return (
    <div className="min-h-screen bg-slate-50/60 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <FaCheckCircle className="text-amber-500" /> Verified Educators
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Find Your Expert Tutor
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Learn French, German, English, and academic subjects with certified, background-checked instructors. Live 1-on-1 or group classes.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-4 sm:p-5 shadow-sm mb-8 backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="relative sm:col-span-2">
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search tutors by name, subject, or keywords..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            </div>

            <select
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                setPage(1);
              }}
              className="w-full px-3 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
            >
              {subjectOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            <select
              value={mode}
              onChange={(e) => {
                setMode(e.target.value);
                setPage(1);
              }}
              className="w-full px-3 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
            >
              {modeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tutors Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="rounded-3xl border border-slate-200 bg-white p-6 animate-pulse space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-slate-200" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-3/4" />
                    <div className="h-3 bg-slate-200 rounded w-1/2" />
                  </div>
                </div>
                <div className="h-3 bg-slate-200 rounded w-full" />
                <div className="h-3 bg-slate-200 rounded w-5/6" />
                <div className="h-10 bg-slate-100 rounded-xl" />
              </div>
            ))}
          </div>
        ) : tutors.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8 max-w-lg mx-auto">
            <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-amber-50 text-amber-600 text-2xl mb-4">
              <FaUserGraduate />
            </div>
            <h3 className="text-lg font-bold text-slate-800">No Tutors Found</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-6">
              We couldn't find any published tutors matching your criteria. Try adjusting your search or submit your requirement to get matched.
            </p>
            <Link
              href="/find-tutor"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:from-amber-500 hover:to-yellow-500 transition"
            >
              Post a Tutor Requirement <FaArrowRight />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.map((tutor) => (
              <div
                key={tutor.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-lg hover:border-amber-300 transition-all duration-300"
              >
                <div>
                  {/* Tutor Header */}
                  <div className="flex items-start gap-4">
                    {tutor.profileImage ? (
                      <img
                        src={tutor.profileImage}
                        alt={tutor.fullName}
                        className="h-16 w-16 rounded-2xl object-cover border border-slate-100 shadow-2xs"
                      />
                    ) : (
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-400 font-extrabold text-slate-950 text-xl shadow-2xs">
                        {tutor.fullName?.charAt(0) || "T"}
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 text-xs text-amber-700 font-bold mb-0.5">
                        <FaStar className="text-amber-400 text-xs" />
                        <span>{tutor.rating ? tutor.rating.toFixed(1) : "5.0"}</span>
                        <span className="text-slate-400 font-normal">
                          ({tutor.reviewsCount || 0} reviews)
                        </span>
                      </div>

                      <h3 className="font-extrabold text-slate-900 text-base leading-snug truncate">
                        {tutor.fullName}
                      </h3>

                      <p className="text-xs text-slate-500 truncate mt-0.5">
                        {tutor.headline || `${tutor.subject} Educator`}
                      </p>
                    </div>
                  </div>

                  {/* Highlights / Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200/60">
                      📚 {tutor.subject}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                      💻 {tutor.mode || "Online"}
                    </span>
                    {tutor.experience && (
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                        💼 {tutor.experience}
                      </span>
                    )}
                  </div>

                  {/* Bio summary */}
                  {tutor.bio && (
                    <p className="mt-3 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {tutor.bio}
                    </p>
                  )}

                  {/* Schedule badges */}
                  {tutor.availability && tutor.availability.length > 0 && (
                    <div className="mt-3 text-[11px] text-slate-500">
                      <strong>Days:</strong> {tutor.availability.slice(0, 4).join(", ")}
                      {tutor.availability.length > 4 ? "..." : ""}
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    {tutor.hourlyRate?.min ? (
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">Fee</span>
                        <span className="font-extrabold text-slate-900 text-sm">
                          ₹{tutor.hourlyRate.min}
                          {tutor.hourlyRate.max ? ` - ₹${tutor.hourlyRate.max}` : ""}/hr
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Available
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/tutors/${tutor.id}`}
                      className="px-3.5 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs transition"
                    >
                      Profile
                    </Link>
                    <Link
                      href={`/find-tutor`}
                      className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs transition shadow-2xs"
                    >
                      Book Class
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-4 py-2 rounded-xl border border-slate-200 bg-white font-bold text-xs text-slate-700 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-xs font-semibold text-slate-500">
              Page {page} of {pagination.totalPages}
            </span>
            <button
              disabled={page >= pagination.totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 rounded-xl border border-slate-200 bg-white font-bold text-xs text-slate-700 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TutorsDirectoryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen py-16 text-center text-slate-500 font-semibold">
          Loading tutor directory...
        </div>
      }
    >
      <TutorsDirectoryContent />
    </Suspense>
  );
}
