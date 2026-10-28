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
  isFetching = false,
  className = "",
  onRowClick,
  selectedRowId,
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
    <div className={`relative w-full overflow-hidden rounded-2xl lg:rounded-[28px] border-0 lg:border lg:border-slate-200/80 bg-transparent lg:bg-white lg:shadow-xs ${className}`}>
      {/* Top indeterminate progress bar when refetching */}
      {isFetching && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 animate-pulse z-40" />
      )}

      {/* Loading overlay when refetching / changing filter */}
      {isFetching && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-white/50 backdrop-blur-[1px] transition-all duration-200">
          <div className="inline-flex items-center gap-2.5 rounded-2xl bg-slate-900/90 px-4 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-md">
            <svg
              className="h-3.5 w-3.5 animate-spin text-amber-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3.5"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            <span>Updating records...</span>
          </div>
        </div>
      )}

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
            {data.map((item, index) => {
              const rowKey = keyExtractor(item, index);
              const isSelected = selectedRowId && rowKey === selectedRowId;
              return (
                <motion.tr
                  key={rowKey}
                  onClick={() => onRowClick && onRowClick(item)}
                  whileHover={{ backgroundColor: isSelected ? "#FEF3C7" : "#FAF5F0" }}
                  className={`transition-colors duration-150 ${
                    onRowClick ? "cursor-pointer" : ""
                  } ${
                    isSelected
                      ? "bg-amber-50/90 font-medium ring-1 ring-inset ring-amber-300"
                      : ""
                  }`}
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
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Stack View (< 1024px) - Clean, Un-nested Modern Cards */}
      <div className="block lg:hidden p-0 space-y-3">
        {data.map((item, index) => {
          const rowKey = keyExtractor(item, index);
          const isSelected = selectedRowId && rowKey === selectedRowId;
          return (
            <div
              key={rowKey}
              onClick={() => onRowClick && onRowClick(item)}
              className={`rounded-2xl border bg-white p-4 sm:p-5 shadow-xs transition duration-150 ${
                onRowClick ? "cursor-pointer active:scale-[0.99]" : ""
              } ${
                isSelected
                  ? "border-amber-400 bg-amber-50/50 ring-2 ring-amber-300"
                  : "border-slate-200/90 hover:border-slate-300"
              }`}
            >
              {renderMobileCard ? (
                renderMobileCard(item, index)
              ) : (
                <div className="space-y-3 min-w-0">
                  {columns.map((col, idx) => (
                    <div key={col.key || idx} className="flex justify-between items-center text-sm gap-2 min-w-0">
                      <span className="text-xs font-semibold uppercase text-slate-400 shrink-0">
                        {col.header}
                      </span>
                      <div className="font-medium text-slate-800 min-w-0 break-words text-right">
                        {col.render ? col.render(item, index) : item[col.key]}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
