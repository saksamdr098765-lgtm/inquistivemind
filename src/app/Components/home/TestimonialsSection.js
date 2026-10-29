"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaPlay,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import HOME_CONTENT from "@/app/data/homeContent";

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState(null);
  const testimonials = HOME_CONTENT.testimonials;
  const videoStories = testimonials.videoStories;

  return (
    <section
      id="testimonials"
      aria-label="Student Video Transformations"
      className="relative w-full overflow-hidden bg-slate-50/70 py-16 sm:py-24 text-slate-900"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {/* Section Header: Headline Max 6 Words, Caption Max 1 Line */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/80 bg-yellow-100/70 px-4 py-1 text-[11px] font-bold tracking-[0.25em] text-yellow-950 uppercase shadow-xs">
            <span>{testimonials.eyebrow}</span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl leading-tight">
            {testimonials.title}
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal truncate">
            {testimonials.subtitle}
          </p>

          {/* Rating Summary Badge */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-1.5 shadow-xs">
            <div className="flex items-center gap-1 text-amber-500 font-black text-sm">
              <FaStar className="text-yellow-400" />
              <span>{testimonials.summaryBadge.score} / 5</span>
            </div>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-bold text-slate-700">
              {testimonials.summaryBadge.totalReviews} {testimonials.summaryBadge.subtext}
            </span>
          </div>
        </header>

        {/* Video Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videoStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.35 }}
              className="group relative"
            >
              <button
                type="button"
                onClick={() => setActiveVideo(story)}
                aria-label={`Watch ${story.name}'s transformation video`}
                className="relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-950 shadow-lg transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-yellow-400 group-hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 block text-left cursor-pointer"
              >
                {/* Poster Thumbnail */}
                <img
                  src={story.thumbnail}
                  alt={story.name}
                  loading="lazy"
                  className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[9/13] w-full object-cover object-center transition duration-500 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-semibold text-white">
                    <FaCheckCircle className="text-yellow-400 text-xs" />
                    <span>Verified Student</span>
                  </span>

                  <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-1 text-xs font-bold text-amber-400">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span>5.0</span>
                  </span>
                </div>

                {/* Floating Play Button with Gold Glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/25 backdrop-blur-md border border-white/50 shadow-2xl transition-all duration-300 group-hover:scale-115 group-hover:bg-yellow-400 group-hover:border-yellow-300 group-hover:shadow-yellow-400/50">
                    <FaPlay className="ml-1 h-5 w-5 sm:h-6 sm:w-6 text-white transition-colors duration-300 group-hover:text-slate-950" />
                  </div>
                </div>

                {/* Bottom Content Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <span className="inline-block rounded-lg bg-yellow-400 text-slate-950 px-2.5 py-0.5 text-xs font-bold tracking-tight shadow-sm">
                    {story.result}
                  </span>

                  <h3 className="mt-3 text-xl font-black text-white tracking-tight leading-snug group-hover:text-yellow-300 transition-colors">
                    {story.name}
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-300 font-medium truncate">
                    {story.course} • {story.location}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl font-bold text-white backdrop-blur-md border border-white/20 transition hover:bg-black/90 cursor-pointer"
            >
              <FaTimes />
            </button>

            <video
              controls
              autoPlay
              playsInline
              className="w-full aspect-[9/16] object-cover bg-black"
            >
              <source src={activeVideo.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="p-4 bg-slate-950 text-white text-xs border-t border-slate-800">
              <p className="font-bold text-sm text-yellow-400">{activeVideo.name}</p>
              <p className="text-slate-400 mt-0.5">{activeVideo.course} • {activeVideo.result}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
