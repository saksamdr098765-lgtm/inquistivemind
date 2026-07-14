"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import CountUp from "react-countup";
import { FaArrowRight } from "react-icons/fa";

const goals = [
  {
    title: "English Language",
    subtitle:
      "Spoken English • IELTS • Communication Skills • Interview Preparation",
    image: "/courses/english1.avif",
    slug: "english-speaking-mastery",
  },
  {
    title: "French Language",
    subtitle:
      "DELF • TEF • Immigration Pathways • Study Abroad Preparation",
    image: "/courses/french1.avif",
    slug: "french-language-program",
  },
  {
    title: "School Classes",
    subtitle:
      "Classes 1-12 • Academic Excellence • Subject Support • Exam Preparation",
    image: "/courses/academic1.avif",
    slug: "academic-excellence-program",
  },
];

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >

          <p className="text-[10px] font-medium tracking-[0.35em] text-slate-400">
            ENGLISH • FRENCH • SCHOOL EDUCATION
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-6xl lg:text-7xl">
            Learn Languages.
            <br />

            <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
              Build Your Future.
            </span>
          </h1>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-500 to-sky-400" />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Join our expert-led English Language, French Language and
            School Education programs designed to improve communication,
            academic excellence and unlock global opportunities.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <button
              onClick={() => router.push("/find-tutor")}
              className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-yellow-600"
            >
              Enroll Now
            </button>

            <button
              onClick={() => router.push("/about")}
              className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Book Free Demo
            </button>

          </div>

          {/* Stats */}

          <div className="mt-14 flex flex-wrap justify-center gap-12">

            <div>
              <div className="text-4xl font-bold text-yellow-500">
                <CountUp end={2000} />+
              </div>
              <p className="mt-2 text-sm text-slate-500">
                Students
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold text-sky-500">
                <CountUp end={25} />+
              </div>
              <p className="mt-2 text-sm text-slate-500">
                Trainers
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold text-yellow-500">
                <CountUp end={98} />%
              </div>
              <p className="mt-2 text-sm text-slate-500">
                Success Rate
              </p>
            </div>

          </div>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {goals.map((goal, index) => (

            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .45,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
            >

              <div className="relative h-72 overflow-hidden">

                <img
                  src={goal.image}
                  alt={goal.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white">
                    {goal.title}
                  </h3>

                  <p className="mt-3 text-white/80">
                    {goal.subtitle}
                  </p>
                                    <button
                    onClick={() =>
                      router.push(`/course/${goal.slug}`)
                    }
                    className="mt-6 flex items-center gap-2 font-semibold text-yellow-400 transition-all duration-300 group-hover:gap-4"
                  >
                    Explore Program
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}

   
      </div>
    </section>
  );
}