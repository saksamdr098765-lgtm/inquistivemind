"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
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
      aria-label="Student Breakthrough Stories"
      className="relative w-full overflow-hidden bg-slate-50/70 py-14 sm:py-20 lg:py-24 text-slate-900"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/80 bg-yellow-100/70 px-4 py-1.5 text-[11px] sm:text-xs font-bold tracking-[0.25em] text-yellow-950 uppercase shadow-xs">
            <BsStars className="text-yellow-600" />
            <span>{testimonials.eyebrow}</span>
          </div>

          <h2 className="mt-3.5 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            {testimonials.title}
          </h2>

          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto px-2">
            {testimonials.subtitle}
          </p>

          {/* Authentic Student Badge */}
          <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 shadow-2xs">
            <FaCheckCircle className="text-yellow-500 text-xs" />
            <span className="text-xs font-bold text-slate-700">Authentic Student Experiences</span>
          </div>
        </header>

        {/* Video Cards: Mobile Snap Carousel + Desktop Grid */}
        <div className="mt-8 sm:mt-12 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 sm:pb-0 scrollbar-none">
          {videoStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="w-[80vw] max-w-[310px] sm:w-auto shrink-0 snap-center group relative"
            >
              <button
                type="button"
                onClick={() => setActiveVideo(story)}
                aria-label={`Watch ${story.name}'s transformation video`}
                className="relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-950 shadow-lg transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-yellow-400 group-hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 block text-left cursor-pointer active:scale-98"
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

                {/* Top Badge: Pure Verification, Zero False Stars */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-white">
                    <FaCheckCircle className="text-yellow-400 text-xs" />
                    <span>Verified Student</span>
                  </span>

                  <span className="rounded-full bg-yellow-400/90 text-slate-950 font-bold px-2 py-0.5 text-[10px]">
                    Video Story
                  </span>
                </div>

                {/* Floating Play Button with Gold Glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex h-13 w-13 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/25 backdrop-blur-md border border-white/50 shadow-2xl transition-all duration-300 group-hover:scale-115 group-hover:bg-yellow-400 group-hover:border-yellow-300 group-hover:shadow-yellow-400/50">
                    <FaPlay className="ml-1 h-5 w-5 sm:h-6 sm:w-6 text-white transition-colors duration-300 group-hover:text-slate-950" />
                  </div>
                </div>

                {/* Bottom Content Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <span className="inline-block rounded-md bg-yellow-400 text-slate-950 px-2 py-0.5 text-[11px] sm:text-xs font-black tracking-tight shadow-2xs">
                    {story.result}
                  </span>

                  <h3 className="mt-2.5 text-base sm:text-xl font-black text-white tracking-tight leading-snug group-hover:text-yellow-300 transition-colors">
                    {story.name}
                  </h3>

                  <p className="mt-0.5 text-[11px] sm:text-xs text-slate-300 font-medium truncate">
                    {story.course} • {story.location}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <p className="mt-2 sm:hidden text-center text-[10px] text-slate-400 font-medium">
          ← Swipe to view more student stories →
        </p>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-sm p-3 sm:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-[340px] sm:max-w-sm md:max-w-md max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-lg font-bold text-white backdrop-blur-md border border-white/20 transition hover:bg-black/90 cursor-pointer active:scale-95"
            >
              <FaTimes />
            </button>

            <video
              controls
              autoPlay
              playsInline
              className="w-full aspect-[9/16] object-cover bg-black max-h-[70vh]"
            >
              <source src={activeVideo.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="p-3.5 bg-slate-950 text-white text-xs border-t border-slate-800">
              <p className="font-bold text-sm text-yellow-400">{activeVideo.name}</p>
              <p className="text-slate-400 mt-0.5">{activeVideo.course} • {activeVideo.result}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
