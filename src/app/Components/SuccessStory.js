
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import Link from "next/link";

const stories = [
  {
    name: "Anjali Sharma",
    result: "B1 → C1 in 6 Months",
    video: "/students/anjali.mp4",
    thumbnail: "/logo.jpg",
  },
  {
    name: "Rahul Mehta",
    result: "IELTS 7.5 Score",
    video: "/students/rahul.mp4",
 thumbnail: "/logo.jpg",
  },
  {
    name: "Sofia Martin",
    result: "Fluent Conversation Level",
    video: "/students/anjali.mp4",
   thumbnail: "/logo.jpg",
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
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.10),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] tracking-[0.35em] text-slate-400">
            REAL TRANSFORMATIONS
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Stories of{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-400   bg-clip-text text-transparent">
              real change
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 " />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            These are not testimonials. These are transformations of real
            people who learned to speak confidently in real life.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="text-3xl font-bold text-slate-900">
                {isInView && (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    separator=","
                  />
                )}
                {stat.suffix}
              </div>

              <p className="mt-2 text-sm text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Stories */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <button
                type="button"
                onClick={() => setActiveVideo(story)}
                className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-black shadow-xl"
              >
                <img
                  src={story.thumbnail}
                  alt={story.name}
                  loading="lazy"
                  className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition group-hover:scale-110 sm:h-20 sm:w-20">
                    <svg
                      viewBox="0 0 24 24"
                      fill="white"
                      className="ml-1 h-7 w-7 sm:h-8 sm:w-8"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs text-white backdrop-blur">
                    Student Success
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-white">
                    {story.name}
                  </h3>

                  <p className="mt-1 text-sm text-sky-300">
                    {story.result}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
        {/* CTA */}
        <div className="mt-16 text-center sm:mt-20 lg:mt-24">
          <h3 className="text-2xl font-semibold text-slate-900">
            Your transformation starts here
          </h3>

          <p className="mt-3 text-slate-600">
            Join learners who turned hesitation into confidence.
          </p>

          <Link
            href="/courses"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-yellow-500 px-8 py-3 font-medium text-white shadow-md shadow-yellow-200 transition hover:bg-yellow-600 sm:w-auto"
          >
            Start Your Journey
          </Link>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white/20"
            >
              ×
            </button>

            <video
              controls
              autoPlay
              playsInline
              className="w-full rounded-3xl"
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


