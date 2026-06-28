"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

const categories = [
  {
    title: "English Language",
    courses: "10+ Courses",
    image: "/courses/english2.jpg",
    description:
      "Spoken English, IELTS preparation, grammar, vocabulary, communication skills, and interview training.",
    slug: "english-speaking-mastery",
  },
  {
    title: "French Language",
    courses: "6+ Courses",
    image: "/courses/french2.jpg",
    description:
      "Learn French from beginner to advanced levels with DELF, TEF, and immigration-focused preparation.",
    slug: "french-language-program",
  },
  {
    title: "School Classes (1–12)",
    courses: "All Subjects",
    image: "/courses/academic2.png",
    description:
      "Expert coaching for students from Class 1 to 12 with personalized attention and exam preparation.",
    slug: "academic-excellence-program",
  },
];

export default function CourseCategories() {
  const router = useRouter();

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
          className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >

          <div>

            <p className="text-[10px] font-medium tracking-[0.35em] text-slate-400">
              PROGRAMS
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Explore Our
              <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-sky-400 bg-clip-text text-transparent">
                {" "}Learning Programs
              </span>
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-amber-500 to-sky-400" />

          </div>

          <p className="max-w-xl text-lg leading-8 text-slate-600">
            Whether you want to improve your language skills,
            prepare for international opportunities, or excel in
            academics, we have a program designed for your success.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {categories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .45,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-72 overflow-hidden">

                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />

                <div className="absolute left-6 top-6">

                  <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-amber-600 shadow">
                    {category.courses}
                  </span>

                </div>

                <div className="absolute bottom-6 left-6 right-6">

                  <h3 className="text-3xl font-bold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-white/80">
                    {category.description}
                  </p>
                                    <button
                    onClick={() =>
                      router.push(`/course/${category.slug}`)
                    }
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-amber-400 transition-all duration-300 group-hover:gap-4 group-hover:text-yellow-300"
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