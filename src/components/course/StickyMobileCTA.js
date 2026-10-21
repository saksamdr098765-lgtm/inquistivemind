"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function StickyMobileCTA({ course }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide sticky bar when user scrolls near the final CTA or page bottom to avoid visual overlap
    const finalCtaElement = document.getElementById("final-cta");

    if (!finalCtaElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(finalCtaElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!course) return null;

  const encodedWhatsapp = encodeURIComponent(
    course.cta?.whatsappMessage || `Hello! I would like to book a free trial class for ${course.title} at Inquisitive Mind Academy.`
  );
  const whatsappUrl = `https://wa.me/919878761488?text=${encodedWhatsapp}`;

  return (
    <aside
      aria-label="Mobile Action Bar"
      className={`fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* WhatsApp Quick Action Button (Min 44x44px touch target) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp about this course"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow transition active:scale-95 hover:bg-emerald-700"
        >
          <FaWhatsapp className="text-xl" />
        </a>

        {/* Primary CTA (Free Trial Class) */}
        <Link
          href={`/book-free-trial?course=${encodeURIComponent(course.slug)}`}
          className="flex-1 flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 shadow-md shadow-yellow-200 active:scale-95 transition hover:bg-yellow-300"
        >
          <span>Book Free Trial</span>
          <FaArrowRight className="text-[10px]" />
        </Link>
      </div>
    </aside>
  );
}
