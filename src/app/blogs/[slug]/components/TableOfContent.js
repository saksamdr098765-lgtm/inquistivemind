"use client";

import { useEffect, useState } from "react";
import { FiChevronDown, FiList } from "react-icons/fi";

export default function TableOfContents({ content }) {
  const headings = Array.isArray(content)
    ? content.filter((item) => item.type === "heading" && item.level === 2)
    : [];

  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const elements = headings
      .map((heading) =>
        document.getElementById(
          heading.text
            .toLowerCase()
            .replace(/[^\w\s]/g, "")
            .replace(/\s+/g, "-")
        )
      )
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <aside className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-amber-100/80 bg-white p-4 sm:p-6 shadow-sm shadow-amber-500/5 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative">
        {/* Header - Toggleable on mobile */}
        <div className="flex items-center justify-between xl:block xl:border-b xl:border-amber-100 xl:pb-3">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-100/80 px-2.5 py-0.5 text-[11px] font-bold text-amber-900 sm:px-3 sm:py-1 sm:text-xs">
              <FiList className="text-amber-600 shrink-0" />
              <span>Quick Navigation</span>
            </span>

            <h3 className="mt-2 text-base font-bold text-slate-900 sm:text-lg">
              Table of Contents
            </h3>
          </div>

          {/* Toggle Button on Mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-200 bg-amber-50/80 text-amber-900 transition hover:bg-amber-100 xl:hidden"
            aria-label="Toggle Table of Contents"
          >
            <FiChevronDown className={`text-base transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Navigation List - Always visible on xl+, collapsible on mobile */}
        <nav
          aria-label="Table of contents"
          className={`mt-4 transition-all duration-300 xl:block ${isOpen ? "block" : "hidden xl:block"}`}
        >
          <ul className="space-y-1 sm:space-y-1.5">
            {headings.map((heading) => {
              const id = heading.text
                .toLowerCase()
                .replace(/[^\w\s]/g, "")
                .replace(/\s+/g, "-");

              const active = activeId === id;

              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-xl border-l-3 sm:border-l-4 px-3 py-2 text-xs font-semibold leading-relaxed transition-all duration-300 ${
                      active
                        ? "border-amber-500 bg-amber-50 text-amber-900 shadow-xs"
                        : "border-transparent text-slate-600 hover:border-amber-300 hover:bg-amber-50/50 hover:text-amber-900"
                    }`}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}