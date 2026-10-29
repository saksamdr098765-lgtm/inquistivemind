"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaSearch, FaChalkboardTeacher } from "react-icons/fa";
import TrackedLink from "../tracking/TrackedLink";

export default function MobileFloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 400px, hide near the very bottom footer
      const scrollPos = window.scrollY;
      const isPastHero = scrollPos > 350;
      setVisible(isPastHero);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-40 sm:hidden"
        >
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-2xl shadow-slate-900/15 backdrop-blur-md">
            <TrackedLink
              href="/find-tutor"
              label="Mobile Floating CTA - Find Tutor"
              category="Mobile Sticky Bar"
              className="flex-1 flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-yellow-400 px-3 py-2 text-xs font-bold text-slate-950 shadow-xs"
            >
              <FaSearch className="text-[11px]" />
              <span>Find a Tutor</span>
            </TrackedLink>

            <TrackedLink
              href="/become-a-tutor"
              label="Mobile Floating CTA - Teach"
              category="Mobile Sticky Bar"
              className="flex-1 flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-white border border-yellow-300 px-3 py-2 text-xs font-bold text-slate-900 shadow-xs hover:bg-yellow-50"
            >
              <FaChalkboardTeacher className="text-yellow-600 text-xs" />
              <span>Become a Tutor</span>
            </TrackedLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
