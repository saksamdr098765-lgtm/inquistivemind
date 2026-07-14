"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaVideo,
  FaMicrophone,
  FaChartLine,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";

const journey = [
  {
    step: "01",
    title: "Join Live Classes",
    icon: <FaVideo />,
    desc: "Attend interactive online classes for English, French, IELTS, PTE, and school subjects with experienced instructors.",
  },
  {
    step: "02",
    title: "Practice & Participate",
    icon: <FaMicrophone />,
    desc: "Engage in speaking sessions, quizzes, assignments, and classroom discussions to strengthen learning.",
  },
  {
    step: "03",
    title: "Get Expert Feedback",
    icon: <FaChartLine />,
    desc: "Receive personalized feedback on pronunciation, grammar, communication skills, and academic performance.",
  },
  {
    step: "04",
    title: "Learn With Community",
    icon: <FaUsers />,
    desc: "Collaborate with fellow students, participate in group activities, and improve confidence together.",
  },
  {
    step: "05",
    title: "Achieve Your Goals",
    icon: <FaCertificate />,
    desc: "Earn certificates, improve grades, crack language exams, and unlock better opportunities.",
  },
];

export default function LearningExperience() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="mx-auto max-w-3xl text-center"
        >

          <p className="text-[10px] font-medium tracking-[0.35em] text-slate-400">
            LEARNING EXPERIENCE
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            A Simple Path to
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-400  bg-clip-text text-transparent">
              {" "}Success
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Our structured approach helps every learner build confidence,
            improve consistently, and achieve measurable results.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="mt-16 space-y-5">
          {journey.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .45,
                delay: index * .08,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-yellow-200 hover:shadow-xl"
            >

              <div className="flex flex-col gap-5 md:flex-row">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-100 to-yellow-100 text-2xl text-yellow-500">
                  {item.icon}
                </div>

                <div className="flex-1">

                  <div className="text-xs font-semibold tracking-[0.3em] text-yellow-500">
                    STEP {item.step}
                  </div>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.desc}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}
        </div>

    


      </div>
    </section>
  );
}