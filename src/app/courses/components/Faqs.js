"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlus,
  FaMinus,
  FaHeadset,
  FaWhatsapp,
} from "react-icons/fa";
import SITE_CONFIG from "@/app/siteConfig";
import { useRouter } from "next/navigation";

const faqs = [
  {
    question: "Who can join your courses?",
    answer:
      "We offer English Speaking, IELTS, PTE, French Language, and academic classes for students from 6th to 12th grade. Both beginners and advanced learners are welcome.",
  },
  {
    question: "Are the classes live or recorded?",
    answer:
      "All classes are conducted live by experienced trainers. Students can interact, ask questions, and participate in activities during every session.",
  },
  {
    question: "Do you provide IELTS and PTE preparation?",
    answer:
      "Yes. We provide complete IELTS and PTE preparation including speaking practice, mock tests, writing evaluation, and personalized feedback.",
  },
  {
    question: "Can school students join online tuition classes?",
    answer:
      "Yes. We offer subject-specific coaching and academic support for students from classes 6th to 12th.",
  },
  {
    question: "Do I get certificates after completing a course?",
    answer:
      "Yes. Students receive completion certificates after successfully finishing their course requirements.",
  },
  {
    question: "How are French language classes conducted?",
    answer:
      "French classes focus on speaking, listening, reading, writing, grammar, and DELF exam preparation through live interactive sessions.",
  },
  {
    question: "Can I attend classes from anywhere?",
    answer:
      "Absolutely. Our academy is fully online, allowing students to learn from anywhere in India and around the world.",
  },
  {
    question: "How do I enroll?",
    answer:
      "Simply contact our team through WhatsApp or phone. We will guide you in selecting the right course and batch.",
  },
];
const {whatsappNumber}=SITE_CONFIG
export default function FAQs() {
  const [active, setActive] = useState(0);
  const router=useRouter()

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 h-fit"
          >

            <p className="text-[10px] font-medium tracking-[0.35em] text-slate-400">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Everything You
              <span className="bg-gradient-to-r from-amber-500  to-yellow-400 bg-clip-text text-transparent">
                {" "}Need To Know
              </span>
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Find answers about English Speaking,
              IELTS, PTE, French Language and
              academic coaching programs.
            </p>

            {/* Support Card */}

            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-amber-100 to-yellow-100 text-2xl text-amber-500">
                <FaHeadset />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Need Help Choosing?
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Speak with our advisors and we'll help you
                choose the perfect course for your goals.
              </p>

              <button className="mt-6 flex items-center gap-3 rounded-full bg-amber-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-600">
                <FaWhatsapp />
                Chat on WhatsApp
              </button>

            </div>

          </motion.div>

          {/* FAQ List */}

          <div className="space-y-5">

            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:border-amber-200 hover:shadow-xl"
                >

                  <button
                    onClick={() =>
                      setActive(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between p-6 text-left"
                  >

                    <span className="pr-6 text-lg font-semibold text-slate-900">
                      {faq.question}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-500">

                      {isOpen ? <FaMinus /> : <FaPlus />}

                    </div>

                  </button>

                                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-100 px-6 pb-6 pt-4">
                          <p className="leading-8 text-slate-600">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-24 max-w-5xl"
        >
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-r from-amber-50 via-white to-sky-50 p-8 shadow-xl md:p-12">

            <div className="text-center">

              <p className="text-[10px] font-medium tracking-[0.35em] text-slate-400">
                STILL HAVE QUESTIONS?
              </p>

              <h3 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
                Let's Find The
                <span className="bg-gradient-to-r from-amber-500 to-yellow-400  bg-clip-text text-transparent">
                  {" "}Perfect Course
                </span>
              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Our education advisors are ready to guide you in choosing
                the right English, IELTS, PTE, French or School program
                based on your goals.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                <button onClick={()=>{
      window.open(
        `https://wa.me/${whatsappNumber}`,
        "_blank"
      );}} className="rounded-full bg-amber-500 px-8 py-3 font-semibold text-white shadow-lg shadow-amber-500/30 transition-all hover:-translate-y-1 hover:bg-amber-600">
                  Talk To An Advisor
                </button>

                <button onClick={()=>{router.push('/about')}} className="rounded-full border border-slate-300 bg-white px-8 py-3 font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-600">
                  Book Demo
                </button>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

                    