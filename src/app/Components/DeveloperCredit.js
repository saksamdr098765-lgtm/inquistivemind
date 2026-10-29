"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function DeveloperCredit() {
  const pathname = usePathname();

  // Hide developer credit on Admin Panel, Student Profile, Teacher Profile, Login, Signup, and Forget Password pages
  if (
    pathname?.startsWith("/admin-panel") ||
    pathname?.startsWith("/student-profile") ||
    pathname?.startsWith("/teacher-profile") ||
    pathname?.startsWith("/login") ||
    pathname?.startsWith("/signup") ||
    pathname?.startsWith("/forget-password")
  ) {
    return null;
  }

  return (
    <aside aria-label="Developer Attribution" className="bg-slate-50 border-t border-slate-100 py-3 text-center">
      <p className="text-[11px] text-slate-400">
        Engineered with precision for Inquisitive Mind Academy • Crafted by{" "}
        <a
          href="https://rohitdevstack.online"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-yellow-700 hover:text-yellow-900 transition underline underline-offset-2"
        >
          Rohit Kumar
        </a>
      </p>
    </aside>
  );
}
