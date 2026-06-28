"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

const students = [
  {
    name: "Priya Sharma",
    result: "IELTS 7.5",
    achievement: "Canada Study Visa",
    quote:
      "The speaking practice and mock tests helped me achieve my target band score and secure admission abroad.",
  },
  {
    name: "Arjun Verma",
    result: "English Fluency",
    achievement: "Confident Public Speaker",
    quote:
      "Earlier I was afraid to speak English. Now I confidently communicate during interviews and presentations.",
  },
  {
    name: "Simran Kaur",
    result: "92%",
    achievement: "Class 10 Excellence",
    quote:
      "The personalized guidance improved my academic performance and boosted my confidence in school.",
  },
];

export default function StudentSuccess() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >

          <p className="text-[10px] font-medium tracking-[0.35em] text-slate-400">
            SUCCESS STORIES
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Real Results.
            <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-sky-400 bg-clip-text text-transparent">
              {" "}Real Transformations.
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-amber-500 to-sky-400" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Thousands of students have improved their English,
            mastered French, achieved higher grades, and unlocked
            better opportunities through our expert-led programs.
          </p>

        </motion.div>

        {/* Testimonials */}

        <div className="grid gap-8 lg:grid-cols-3">

          {students.map((student, index) => (

            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .45,
                delay: index * .1,
              }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="flex items-center justify-between">

                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
                  {student.result}
                </span>

                <FaQuoteLeft className="text-3xl text-amber-200" />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {student.achievement}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                "{student.quote}"
              </p>

              <div className="mt-6 flex gap-1 text-amber-400">

                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}

              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 font-bold text-white shadow-lg">
                  {student.name.charAt(0)}
                </div>

                <div>

                  <h4 className="font-semibold text-slate-900">
                    {student.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    Student
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["5000", "Students Trained"],
            ["95", "Success Rate"],
            ["100", "Live Batches"],
            ["4.9", "Average Rating"],
          ].map(([value, label], index) => (

            <motion.div
              key={label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .4,
                delay: index * .08,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-lg"
            >

              <div className="text-3xl font-bold text-amber-500">

                {label === "Success Rate" ? (
                  <>
                    <CountUp end={95} />%
                  </>
                ) : label === "Average Rating" ? (
                  <>
                    <CountUp end={4.9} decimals={1} />★
                  </>
                ) : (
                  <>
                    <CountUp end={Number(value)} />+
                  </>
                )}

              </div>

              <div className="mt-2 text-sm text-slate-500">
                {label}
              </div>

            </motion.div>

          ))}
                  </div>

        {/* CTA */}


      </div>
    </section>
  );
}