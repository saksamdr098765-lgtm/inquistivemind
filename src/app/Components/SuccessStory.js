"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import Link from "next/link";

const stories = [
  {
    name: "Mansi Sharma",
    result: "B1 → C1 in 6 Months",
    video: "/students/anjali.mp4",
    thumbnail: "/students/anjali.jpg",
  },
  {
    name: "Ishika",
    result: "IELTS 7.5 Score",
    video: "/students/rahul.mp4",
    thumbnail: "/students/rahul.jpg",
  },
  {
    name: "Ishita Dutt Sharma",
    result: "Fluent Conversation Level",
    video: "/students/sofia.mp4",
    thumbnail: "/students/sofia.jpg",
  },
];

const stats = [
  {
    value: 12,
    suffix: "K+",
    label: "Students",
  },
  {
    value: 98,
    suffix: "%",
    label: "Success Rate",
  },
  {
    value: 25,
    suffix: "+",
    label: "Countries",
  },
];

export default function SuccessStories() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="relative w-full overflow-hidden overflow-x-clip bg-gradient-to-b from-white via-amber-50/20 to-white py-14 sm:py-20 lg:py-24 text-slate-900">
      {/* Background Architectural Patterns */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(250,204,21,0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none absolute left-0 sm:-left-10 bottom-20 h-64 w-64 rounded-full bg-yellow-300/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 sm:-right-10 top-20 h-64 w-64 rounded-full bg-sky-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center w-full min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/80 bg-yellow-100/70 px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-bold tracking-[0.25em] text-yellow-900 shadow-sm backdrop-blur-sm uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500" />
            </span>
            <span>REAL TRANSFORMATIONS</span>
          </div>

          <h2 className="mt-3.5 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
            Stories of{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">
              real change
            </span>
          </h2>

          <div className="mx-auto mt-3.5 sm:mt-5 h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500" />

          <p className="mx-auto mt-3.5 sm:mt-4 max-w-2xl text-xs sm:text-base text-slate-600 font-normal leading-relaxed">
            These are not testimonials. These are transformations of real
            people who learned to speak confidently in real life.
          </p>
        </header>

     

             

        {/* Stories Video Grid - Mobile-First responsive card design */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 w-full min-w-0">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.35 }}
              className="group w-full min-w-0"
            >
              <button
                type="button"
                onClick={() => setActiveVideo(story)}
                aria-label={`Watch ${story.name}'s transformation video`}
                className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-950 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-yellow-400/80 group-hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 block text-left"
              >
                <img
                  src={story.thumbnail || "/logo.jpg"}
                  alt={story.name}
                  loading="lazy"
                  className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[9/14] w-full object-cover object-center transition duration-500 group-hover:scale-105"
                />

                {/* Gradient Vignette for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Floating Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:border-yellow-300 group-hover:shadow-yellow-400/40">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1 h-5 w-5 sm:h-7 sm:w-7 text-white transition-colors duration-300 group-hover:text-slate-950"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Content Card Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold text-white backdrop-blur-md border border-white/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                    Student Transformation
                  </span>

                  <h3 className="mt-2.5 sm:mt-3 text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-yellow-300 transition-colors">
                    {story.name}
                  </h3>

                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-semibold text-sky-300 leading-snug">
                    {story.result}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center w-full min-w-0">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
            Your transformation starts here
          </h3>

          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-md mx-auto">
            Join learners who turned hesitation into confidence.
          </p>

          <div className="mt-6 sm:mt-7 flex justify-center w-full">
            <Link
              href="/courses"
              className="inline-flex min-h-[48px] sm:min-h-[52px] w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-3.5 text-sm sm:text-base font-bold text-slate-950 shadow-lg shadow-yellow-400/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-400/40 focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
            >
              <span>Start Your Journey</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Video Modal - Mobile-first responsive sizing */}
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
              className="absolute top-3 right-3 z-10 flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-black/60 text-2xl font-bold text-white backdrop-blur-md border border-white/20 transition hover:bg-black/90 hover:scale-105"
            >
              ×
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
          </div>
        </div>
      )}
    </section>
  );
}
