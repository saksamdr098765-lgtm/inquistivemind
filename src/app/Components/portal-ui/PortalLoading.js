"use client";

import { usePathname } from "next/navigation";
import { FaGraduationCap, FaShieldAlt, FaChalkboardTeacher } from "react-icons/fa";

export default function PortalLoading({
  type,
  title,
  subtitle,
}) {
  const pathname = usePathname();

  const isAdmin = type === "admin" || (!type && pathname?.startsWith("/admin-panel"));
  const isTeacher = type === "teacher" || (!type && pathname?.startsWith("/teacher-profile"));
  const isStudent = type === "student" || (!type && pathname?.startsWith("/student-profile"));

  let displayTitle = title;
  let displaySubtitle = subtitle;
  let Icon = FaGraduationCap;
  let badgeText = "Portal";

  if (isAdmin) {
    displayTitle = displayTitle || "Loading Admin Panel...";
    displaySubtitle = displaySubtitle || "Preparing administrative controls and management data";
    Icon = FaShieldAlt;
    badgeText = "Admin Panel";
  } else if (isTeacher) {
    displayTitle = displayTitle || "Loading Teacher Portal...";
    displaySubtitle = displaySubtitle || "Preparing your teaching dashboard, classes, and batches";
    Icon = FaChalkboardTeacher;
    badgeText = "Teacher Portal";
  } else if (isStudent) {
    displayTitle = displayTitle || "Loading Student Portal...";
    displaySubtitle = displaySubtitle || "Preparing your course materials, batches, and live classes";
    Icon = FaGraduationCap;
    badgeText = "Student Portal";
  } else {
    displayTitle = displayTitle || "Loading Inquisitive Mind...";
    displaySubtitle = displaySubtitle || "Please wait while we prepare your learning experience";
    Icon = FaGraduationCap;
    badgeText = "Inquisitive Mind Academy";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50/80 p-4">
      <div className="flex flex-col items-center gap-4 text-center max-w-sm">
        {/* Animated Brand Spinner with Center Icon */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-amber-100" />
          <div className="h-16 w-16 rounded-full border-4 border-amber-500 border-t-transparent animate-spin" />
          <div className="absolute flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-950 font-bold shadow-xs">
            <Icon className="text-sm" />
          </div>
        </div>

        <div>
          <span className="inline-block text-[10px] uppercase font-extrabold tracking-widest text-amber-600 mb-1">
            {badgeText}
          </span>
          <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
            {displayTitle}
          </h3>
          <p className="text-xs font-medium text-slate-500 mt-1 leading-relaxed">
            {displaySubtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
