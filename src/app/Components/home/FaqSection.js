"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import HOME_CONTENT from "@/app/data/homeContent";

export default function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openIds, setOpenIds] = useState(["faq-1"]);

  const faqData = HOME_CONTENT.faqs;

  const filteredItems =
    selectedCategory === "all"
      ? faqData.items
      : faqData.items.filter((item) => item.category === selectedCategory);

  const toggleFaq = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative w-full overflow-hidden bg-white py-14 sm:py-20 lg:py-24 text-slate-900"
    >
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/80 bg-yellow-100/70 px-4 py-1.5 text-[11px] sm:text-xs font-bold tracking-[0.25em] text-yellow-950 uppercase shadow-xs">
            <span>{faqData.eyebrow}</span>
          </div>

          <h2 className="mt-3.5 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            {faqData.title}
          </h2>

          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto px-2">
            {faqData.subtitle}
          </p>

          {/* Category Filter Chips: Mobile-First Touch Targets */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2">
            {faqData.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex min-h-[40px] sm:min-h-[42px] items-center justify-center rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer active:scale-95 ${
                  selectedCategory === cat.id
                    ? "bg-yellow-400 text-slate-950 shadow-xs border border-yellow-500/30 font-extrabold"
                    : "bg-slate-100 text-slate-600 hover:bg-yellow-50 hover:text-slate-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </header>

        {/* Accordion List */}
        <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-3.5">
          {filteredItems.map((item) => {
            const isOpen = openIds.includes(item.id);

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-yellow-300 bg-yellow-50/20 shadow-xs"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-900 text-xs sm:text-base transition cursor-pointer gap-3 active:bg-yellow-50/40"
                >
                  <span className="leading-snug flex-1">{item.question}</span>
                  <div
                    className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] sm:text-xs text-slate-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-yellow-400 text-slate-950 font-bold" : ""
                    }`}
                  >
                    <FaChevronDown />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
