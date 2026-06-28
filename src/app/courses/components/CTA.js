"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaArrowRight,
  FaLanguage,
  FaGraduationCap,
  FaSchool,
  FaBookReader,
} from "react-icons/fa";

export default function CTA() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 shadow-2xl">

          <div className="grid lg:grid-cols-2">

            {/* ================= Left Side ================= */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 md:p-12 lg:p-16"
            >
              <div className="inline-flex rounded-full bg-white/10 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-yellow-300 backdrop-blur-sm">
                START YOUR LEARNING JOURNEY
              </div>

              <h2 className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Learn English,
                <span className="block text-yellow-400">
                  French & School Subjects
                </span>
                <span className="block">
                  With Expert Teachers
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                Whether you're preparing for IELTS, improving spoken English,
                learning French, or excelling in school education, our expert
                educators are here to help you achieve your goals.
              </p>

              {/* Buttons */}

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => router.push("/find-tutor")}
                  className="rounded-full bg-yellow-400 px-8 py-3 font-semibold text-slate-900 shadow-lg shadow-yellow-400/30 transition-all hover:-translate-y-1 hover:bg-yellow-500"
                >
                  Enroll Now
                </button>

                <button
                  onClick={() => router.push("/about")}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3 font-medium text-white transition hover:border-sky-400 hover:text-sky-300"
                >
                  Book Free Demo
                  <FaArrowRight size={12} />
                </button>
              </div>

              {/* Stats */}

              <div className="mt-14 grid grid-cols-3 gap-8">
                <div>
                  <h3 className="text-4xl font-bold text-yellow-400">
                    500+
                  </h3>

                  <p className="mt-2 text-white/60">
                    Students
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-sky-400">
                    20+
                  </h3>

                  <p className="mt-2 text-white/60">
                    Teachers
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-red-400">
                    95%
                  </h3>

                  <p className="mt-2 text-white/60">
                    Success Rate
                  </p>
                </div>
              </div>
            </motion.div>
                        {/* ================= Right Side ================= */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="border-t border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:border-l lg:border-t-0 lg:p-16"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  {
                    icon: <FaLanguage />,
                    title: "Spoken English",
                    desc: "Improve fluency, grammar, confidence and communication skills.",
                  },
                  {
                    icon: <FaGraduationCap />,
                    title: "IELTS Preparation",
                    desc: "Mock tests, speaking practice and personalized feedback.",
                  },
                  {
                    icon: <FaBookReader />,
                    title: "French Language",
                    desc: "Beginner to advanced French with DELF preparation.",
                  },
                  {
                    icon: <FaSchool />,
                    title: "School Classes",
                    desc: "Expert coaching from Class 1–12 for academic excellence.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.1,
                    }}
                    className="group rounded-[28px] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:bg-white/10"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-xl text-slate-900 shadow-lg shadow-yellow-400/30 transition group-hover:scale-110">
                      {item.icon}
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-white/70">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Trust Card */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 p-8"
              >
                <div className="inline-flex rounded-full bg-yellow-400/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-yellow-300">
                  FREE DEMO AVAILABLE
                </div>

                <h3 className="mt-5 text-3xl font-bold leading-tight text-white">
                  Experience Our Classes
                  <span className="block text-yellow-400">
                    Before You Enroll
                  </span>
                </h3>

                <p className="mt-5 leading-8 text-white/70">
                  Attend a free live class, meet our expert teachers,
                  understand our teaching methodology and confidently
                  choose the perfect course for your learning journey.
                </p>

                <button
                  onClick={() => router.push("/about")}
                  className="mt-8 flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-3 font-semibold text-slate-900 shadow-lg shadow-yellow-400/30 transition-all hover:-translate-y-1 hover:bg-yellow-500"
                >
                  Book Free Demo
                  <FaArrowRight />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}