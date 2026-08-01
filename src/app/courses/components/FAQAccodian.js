"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaMinus, FaPlus, FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";

import SITE_CONFIG from "@/app/siteConfig";
import { trackWhatsAppClick } from "@/lib/traking";
import { faqs } from "./faqData";

const { whatsappNumber } = SITE_CONFIG;

export default function FAQAccordion() {
  const [active, setActive] = useState(0);
  const router = useRouter();

  const handleWhatsApp = () => {
    trackWhatsAppClick("courses");

    window.open(
      `https://wa.me/${whatsappNumber}`,
      "_blank"
    );
  };

  return (
    <>
      {/* FAQ List */}
      <div className="space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = active === index;

          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:border-yellow-200 hover:shadow-xl"
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

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-500">
                  {isOpen ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
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
            </div>
          );
        })}
      </div>

  
    </>
  );
}