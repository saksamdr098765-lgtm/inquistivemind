"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaGraduationCap,
} from "react-icons/fa";

import { coursesData } from "../data";

const frenchLevels = coursesData
  .filter(
    (course) =>
      course.category === "French Language" &&
      /^French (A1|A2|B1|B2|C1|C2)/i.test(course.title)
  )
  .sort((a, b) => {
    const order = ["A1", "A2", "B1", "B2", "C1", "C2"];

    const getLevel = (title) =>
      order.find((lvl) => title.includes(lvl));

    return (
      order.indexOf(getLevel(a.title)) -
      order.indexOf(getLevel(b.title))
    );
  });

const colors = {
  A1: "bg-yellow-400",
  A2: "bg-yellow-500",
  B1: "bg-yellow-500",
  B2: "bg-orange-500",
  C1: "bg-[#D6451B]",
  C2: "bg-slate-900",
};

export default function FrenchCourseLevels() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-yellow-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-700">
            FRENCH LEARNING PATH
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
            Choose Your
            <span className="block bg-gradient-to-r from-yellow-500 via-yellow-600 to-[#D6451B] bg-clip-text text-transparent">
              French Level
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Learn French step-by-step following the internationally recognized
            CEFR framework from A1 Beginner to C2 Mastery.
          </p>
        </div>

        {/* Levels */}

     <div className="mt-16 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 scrollbar-hide md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 xl:grid-cols-3">
          {frenchLevels.map((course, index) => {
            const level = course.level.match(/A1|A2|B1|B2|C1|C2/)?.[0];

            return (
              <motion.div
                key={course._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}

  className="group flex w-[85%] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-yellow-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-xl md:w-auto"
           >
                {/* Image */}

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.thumbnail.url}
                    alt={course.title}
                    // fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <div
                    className={`absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl ${
                      colors[level]
                    } text-xl font-bold text-white`}
                  >
                    {level}
                  </div>

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-900 backdrop-blur">
                      {course.durationInMonths} Months
                    </span>
                  </div>
                </div>

                {/* Content */}

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {course.title.replace("Course", "")}
                  </h3>

                  <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
                    {course.shortDescription}
                  </p>

                  <div className="mt-6 space-y-3">
                    {course.learningOutcomes
                      .slice(0, 3)
                      .map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <FaCheckCircle className="mt-1 text-yellow-500" />

                          <span className="text-sm text-slate-700">
                            {item}
                          </span>
                        </div>
                      ))}
                  </div>

                  <Link
                    href={`/course/${course.slug}`}
                    className="mt-8 inline-flex items-center gap-3 font-semibold text-yellow-600 transition group-hover:gap-4"
                  >
                    View Course
                    <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}

        <div className="mt-20 rounded-[32px] border border-yellow-200 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-2xl text-white">
            <FaGraduationCap />
          </div>

          <h3 className="mt-6 text-3xl font-bold text-slate-900">
            Not Sure Which French Level Is Right for You?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Take our free placement assessment and receive a personalized
            recommendation based on your current French proficiency.
          </p>

          <Link
            href="/placement-test"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-white transition hover:bg-yellow-600"
          >
            Take Free Placement Test
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}