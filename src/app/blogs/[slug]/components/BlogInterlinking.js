import Link from "next/link";
import { FiArrowUpRight, FiBookmark, FiMapPin, FiTag, FiDollarSign } from "react-icons/fi";

export default function BlogInterlinking({ block }) {
  if (!block || !block.items || block.items.length === 0) return null;

  const isLocationBlock =
    block.title?.toLowerCase().includes("location") ||
    block.title?.toLowerCase().includes("center");

  return (
    <div className="my-10 overflow-hidden rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/60 via-white to-yellow-50/40 p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-start gap-3 sm:items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-sm">
          {isLocationBlock ? (
            <FiMapPin className="h-5 w-5" />
          ) : (
            <FiBookmark className="h-5 w-5" />
          )}
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            {block.title || "Explore Related Topics"}
          </h3>
          {block.description && (
            <p className="mt-1 text-sm text-slate-600">
              {block.description}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {block.items.map((item, idx) => {
          const href = item.href;
          const isInternal = href && href.startsWith("/");
          const isLocation = href && href.includes("/locations/");
          const isCourse = href && (href.includes("/courses/") || href.includes("/course/"));
          const isPrice = href && href.includes("/prices/");

          const actionText = isLocation
            ? "View Center Details"
            : isCourse
            ? "Explore Course"
            : isPrice
            ? "View Fee Plan"
            : "Explore Service";

          const content = (
            <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-amber-100 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-md">
              <div>
                {(item.badge || isLocation || isPrice || isCourse) && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-amber-100/90 px-2 py-0.5 text-[10px] font-bold text-amber-900 mb-2.5">
                    {isLocation ? (
                      <FiMapPin className="h-3 w-3 text-amber-700 shrink-0" />
                    ) : isPrice ? (
                      <FiDollarSign className="h-3 w-3 text-amber-700 shrink-0" />
                    ) : (
                      <FiTag className="h-3 w-3 text-amber-700 shrink-0" />
                    )}
                    <span>{item.badge || (isLocation ? "Study Center" : isPrice ? "Pricing Plan" : "Course")}</span>
                  </span>
                )}

                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h4>
                  {href && <FiArrowUpRight className="h-4 w-4 shrink-0 text-amber-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                </div>

                {item.description && (
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {item.description}
                  </p>
                )}
              </div>

              {href && (
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-amber-600 group-hover:text-amber-700">
                  <span>{actionText}</span>
                  <span>&rarr;</span>
                </div>
              )}
            </div>
          );

          if (href && href !== "#") {
            if (isInternal) {
              return (
                <Link key={idx} href={href} className="block no-underline">
                  {content}
                </Link>
              );
            }

            return (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block no-underline"
              >
                {content}
              </a>
            );
          }

          // If href is not present, render as simple div
          return (
            <div key={idx} className="block">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
