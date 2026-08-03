"use client";

import { useEffect, useState } from "react";

export default function TableOfContents({ content }) {
  const headings = content.filter(
    (item) => item.type === "heading" && item.level === 2
  );

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
    <aside className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
      {/* Background (Hero Theme) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative">
        {/* Header */}
        <div className="mb-6">
          <span className="inline-flex rounded-full border border-yellow-100 bg-yellow-50 px-3 py-1 text-xs font-semibold tracking-wide text-yellow-700">
            Quick Navigation
          </span>

          <h3 className="mt-4 text-2xl font-bold text-slate-900">
            Table of Contents
          </h3>
        </div>

        {/* Navigation */}
        <nav aria-label="Table of contents">
          <ul className="space-y-2">
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
                    className={`block rounded-2xl border-l-4 px-4 py-3 text-sm leading-6 transition-all duration-300 ${
                      active
                        ? "border-yellow-500 bg-yellow-50 font-semibold text-yellow-700 shadow-sm"
                        : "border-transparent text-slate-600 hover:border-yellow-300 hover:bg-yellow-50/60 hover:text-yellow-700"
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