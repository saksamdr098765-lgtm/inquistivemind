"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function ServiceFAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!service.faq || !service.faq.length) return null;

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-yellow-600">
            Got Questions?
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Service FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {service.faq.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 focus:outline-none"
              >
                <span>{item.question}</span>
                <FiChevronDown
                  className={`text-yellow-500 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
