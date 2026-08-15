import React from "react";

export default function BlogReference({ block, index }) {
  if (!block || !block.items || !block.items.length) return null;

  return (
    <section
      key={index}
      className="my-10 rounded-2xl border border-yellow-100 bg-gradient-to-br from-yellow-50/70 via-white to-amber-50/40 p-6 shadow-sm"
    >
      <h2 className="mb-4 text-2xl font-bold text-slate-900">
        References
      </h2>

      <ul className="space-y-3">
        {block.items.map((item, i) => (
          <li key={i} className="text-sm leading-6 text-slate-700">
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-yellow-700 underline underline-offset-2 transition-colors hover:text-amber-800"
              >
                {item.title}
              </a>
            ) : (
              <span className="font-medium text-slate-900">{item.title}</span>
            )}

            {item.publisher && (
              <span className="text-slate-500">
                {" "}
                — {item.publisher}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
