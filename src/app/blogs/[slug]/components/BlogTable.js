
import React from "react";

export default function BlogTable({ block, index }) {
  return (
    <div
      key={index}
      className="my-8 overflow-x-auto rounded-2xl border border-yellow-100 bg-white shadow-sm shadow-yellow-100/30"
    >
      {block.title && (
        <h3 className="border-b border-yellow-100 bg-yellow-50/70 px-6 py-4 text-lg font-semibold text-slate-900">
          {block.title}
        </h3>
      )}

      <table className="w-full border-collapse text-left">
        <thead className="bg-yellow-50">
          <tr>
            {block.headers.map((header, i) => (
              <th
                key={i}
                className="border-b border-yellow-100 px-5 py-4 text-sm font-semibold text-slate-900"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {block.rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="transition-colors even:bg-slate-50 hover:bg-yellow-50"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border-b border-slate-100 px-5 py-4 text-sm text-slate-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

