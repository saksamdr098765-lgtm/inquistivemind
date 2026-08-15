"use client";

import Image from "next/image";
import { FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import { FiUser, FiCheck } from "react-icons/fi";

export default function BlogReviews({ blog }) {
  const reviews = blog?.reviews;

  if (!reviews || !Array.isArray(reviews) || reviews.length === 0) {
    return null;
  }

  // Calculate average rating dynamically
  const totalRating = reviews.reduce((acc, curr) => acc + (curr.rating || 5), 0);
  const avgRating = (totalRating / reviews.length).toFixed(1);

  return (
    <section className="relative mt-10 sm:mt-14 overflow-hidden max-w-full rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] border border-amber-200/80 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30 p-4 sm:p-8 lg:p-10 shadow-xl shadow-amber-500/5">
      {/* Radial Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.12),transparent_65%)] pointer-events-none" />

      <div className="relative space-y-6 sm:space-y-8 min-w-0">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-amber-200/70 pb-5 sm:pb-6 min-w-0">
          <div className="space-y-2 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-100/90 px-3.5 py-1 text-xs font-bold text-amber-900 shadow-xs">
                <FaCheckCircle className="text-amber-600 shrink-0" />
                <span>Verified Student Feedback</span>
              </span>

              {/* Rating Pill */}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/80 bg-white px-3.5 py-1 text-xs font-bold text-amber-950 shadow-xs">
                <span className="text-amber-500 font-extrabold">★ {avgRating}</span>
                <span className="text-slate-400">•</span>
                <span>{reviews.length} {reviews.length === 1 ? "Review" : "Reviews"}</span>
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 break-words">
              Student Reviews & Success Stories
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed break-words">
              Read transparent feedback from learners who achieved their DELF certifications, TEF Canada goals, and fluency targets with Inquisitive Mind Academy.
            </p>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 min-w-0">
          {reviews.map((review, index) => (
            <div
              key={review.id || index}
              className="group flex flex-col justify-between min-w-0 break-words max-w-full rounded-2xl sm:rounded-3xl border border-amber-200/80 bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/10 space-y-4"
            >
              {/* Author Header */}
              <div className="flex items-start gap-3.5 min-w-0">
                {review.avatar ? (
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    width={48}
                    height={48}
                    className="h-11 w-11 sm:h-12 sm:w-12 rounded-full object-cover object-top ring-2 ring-amber-400/80 shadow-md shrink-0"
                  />
                ) : (
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-amber-100 text-amber-800 ring-2 ring-amber-300 shrink-0">
                    <FiUser className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 break-words">
                      {review.author}
                    </h3>

                    {/* Rating Stars */}
                    <div className="flex items-center gap-0.5 text-amber-400 text-xs sm:text-sm shrink-0">
                      {[...Array(review.rating || 5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>

                  {review.role && (
                    <p className="mt-0.5 text-xs font-semibold text-amber-800 leading-snug break-words">
                      {review.role}
                    </p>
                  )}

                  <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/70">
                      <FiCheck className="text-emerald-600 font-bold shrink-0 text-xs" />
                      <span>Verified Student</span>
                    </span>

                    {review.date && (
                      <span className="text-slate-400">• {review.date}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Review Comment Quote Box */}
              <div className="relative rounded-2xl border-l-4 border-amber-400 bg-amber-50/50 p-3.5 sm:p-4 text-xs sm:text-sm text-slate-700 leading-relaxed italic break-words">
                <FaQuoteLeft className="absolute right-3 top-3 text-amber-200/80 text-sm pointer-events-none" />
                <p className="relative z-10">"{review.comment}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
