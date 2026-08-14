"use client";

import { useEffect, useState } from "react";

export default function TableOfContents({ content }) {
  const headings = Array.isArray(content)
    ? content.filter((item) => item.type === "heading" && item.level === 2)
    : [];

  const [activeId, setActiveId] = useState("");

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
    <aside className="relative overflow-hidden rounded-3xl border border-amber-100/80 bg-white p-6 shadow-sm shadow-amber-500/5 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_60%)]" />

      <div className="relative">
        <div className="mb-5 border-b border-amber-100 pb-3">
          <span className="inline-flex rounded-full border border-amber-200 bg-amber-100/80 px-3 py-1 text-xs font-bold text-amber-900">
            Quick Navigation
          </span>

          <h3 className="mt-3 text-lg font-bold text-slate-900">
            Table of Contents
          </h3>
        </div>

        <nav aria-label="Table of contents">
          <ul className="space-y-1.5">
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
                    className={`block rounded-xl border-l-4 px-3.5 py-2.5 text-xs font-semibold leading-relaxed transition-all duration-300 ${
                      active
                        ? "border-amber-500 bg-amber-50 text-amber-900 shadow-sm"
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