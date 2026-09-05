"use client";

import { motion } from "framer-motion";

export default function PortalTable({
  columns = [],
  data = [],
  renderMobileCard,
  keyExtractor = (item, index) => item._id || item.id || index,
  emptyTitle = "No records found",
  emptyDescription = "There are no items matching your criteria.",
  isLoading = false,
  className = "",
}) {
  if (isLoading) {
    return (
      <div className="animate-pulse space-y-4 rounded-[28px] border border-slate-200 bg-white p-6">
        <div className="h-6 w-1/4 rounded bg-slate-200" />
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 w-full rounded-2xl bg-slate-100" />
          ))}
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="rounded-[28px] border border-dashed border-slate-200 bg-white/80 p-10 text-center">
        <h3 className="text-lg font-bold text-slate-800">{emptyTitle}</h3>
        <p className="mt-1 text-sm text-slate-500">{emptyDescription}</p>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-xs ${className}`}>
      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70 text-xs font-bold uppercase tracking-wider text-slate-500">
              {columns.map((col, idx) => (
                <th
                  key={col.key || idx}
                  className={`px-6 py-4 ${col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"} ${col.headerClassName || ""}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {data.map((item, index) => (
              <motion.tr
                key={keyExtractor(item, index)}
                whileHover={{ backgroundColor: "#FAF5F0" }}
                className="transition-colors duration-150"
              >
                {columns.map((col, idx) => (
                  <td
                    key={col.key || idx}
                    className={`px-6 py-4 font-medium text-slate-700 ${col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"} ${col.cellClassName || ""}`}
                  >
                    {col.render ? col.render(item, index) : item[col.key]}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Stack View (< 1024px) */}
      <div className="block lg:hidden divide-y divide-slate-100 p-4 space-y-4 divide-y-0">
        {data.map((item, index) => (
          <div
            key={keyExtractor(item, index)}
            className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs"
          >
            {renderMobileCard ? (
              renderMobileCard(item, index)
            ) : (
              <div className="space-y-3">
                {columns.map((col, idx) => (
                  <div key={col.key || idx} className="flex justify-between items-center text-sm">
                    <span className="text-xs font-semibold uppercase text-slate-400">
                      {col.header}
                    </span>
                    <div className="font-medium text-slate-800">
                      {col.render ? col.render(item, index) : item[col.key]}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
