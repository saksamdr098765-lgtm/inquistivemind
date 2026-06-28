"use client";

import { useState } from "react";
import {
  FaBookOpen,
  FaChevronDown,
  FaChevronUp,
  FaPlayCircle,
} from "react-icons/fa";

export default function CourseModules({ modules }) {
  const [openModule, setOpenModule] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-yellow-200/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-700">
            COURSE CURRICULUM
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Course
            <span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-[#D6451B] bg-clip-text text-transparent">
              Modules
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Follow a structured roadmap designed to build your skills
            step-by-step with practical lessons and guided learning.
          </p>

        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-4">

          {modules?.map((module, index) => {
            const isOpen = openModule === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-yellow-100 bg-white shadow-sm transition-all duration-300 hover:border-yellow-300 hover:shadow-lg"
              >

                {/* Header */}
                <button
                  onClick={() =>
                    setOpenModule(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 p-5 text-left lg:p-6"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-md">
                      <FaBookOpen />
                    </div>

                    <div>

                      <h3 className="text-base font-bold text-slate-900 lg:text-lg">
                        Module {index + 1}: {module.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {module.lessons?.length || 0} Lessons
                      </p>

                    </div>

                  </div>

                  <div className="rounded-full bg-yellow-50 p-2 text-yellow-600">

                    {isOpen ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}

                  </div>

                </button>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-[1200px]" : "max-h-0"
                  }`}
                >

                  <div className="border-t border-yellow-100 bg-gradient-to-b from-yellow-50/40 to-white p-5 lg:p-6">

                    <p className="mb-6 leading-7 text-slate-600">
                      {module.description}
                    </p>

                    <div className="space-y-3">

                      {module.lessons?.map((lesson, lessonIndex) => (

                        <div
                          key={lessonIndex}
                          className="flex items-start gap-3 rounded-2xl border border-yellow-100 bg-white p-4 transition hover:border-yellow-300 hover:bg-yellow-50/40"
                        >

                          <div className="mt-0.5 text-yellow-500">
                            <FaPlayCircle />
                          </div>

                          <span className="text-sm leading-6 text-slate-700">
                            {lesson}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}