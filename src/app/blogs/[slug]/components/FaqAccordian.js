"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQAccordion({ faq }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {faq.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 ${
              isOpen
                ? "border-yellow-200 shadow-lg"
                : "border-slate-200 hover:border-yellow-200 hover:shadow-md"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
              aria-expanded={isOpen}
            >
              <span
                className={`flex-1 text-base font-semibold transition-colors sm:text-lg ${
                  isOpen ? "text-yellow-700" : "text-slate-900"
                }`}
              >
                {item.question}
              </span>

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-slate-100 text-slate-500 group-hover:bg-yellow-50"
                }`}
              >
                <FiChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] border-t border-yellow-100"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 py-5">
                  <p className="text-base leading-8 text-slate-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}