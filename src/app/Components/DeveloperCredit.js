"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function DeveloperCredit() {
  const pathname = usePathname();

  // Hide developer credit on Admin Panel, Student Profile, Login, and Signup pages
  if (
    pathname?.startsWith("/admin-panel") ||
    pathname?.startsWith("/student-profile") ||
    pathname?.startsWith("/login") ||
    pathname?.startsWith("/signup")
  ) {
    return null;
  }

  return (
    <>
      {/* COPYRIGHT */}
      <div className="mt-14 border-t border-slate-100 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Inquisitive Mind Academy. All Rights Reserved.
      </div>
      <div className="py-4">
        <p className="text-center text-xs text-slate-500">
          Designed & Developed with ❤️ by{" "}
          <a
            href="https://rohitdevstack.online"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#D6451B] transition cursor-pointer hover:text-yellow-600"
          >
            Rohit Kumar
          </a>
        </p>
      </div>
    </>
  );
}
