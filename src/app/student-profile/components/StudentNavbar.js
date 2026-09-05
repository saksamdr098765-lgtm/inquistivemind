"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaBookOpen,
  FaVideo,
  FaUsers,
  FaCog,
} from "react-icons/fa";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: FaHome },
  { id: "profile", label: "Profile", icon: FaUser },
  { id: "courses", label: "Courses", icon: FaBookOpen },
  { id: "classes", label: "Live Classes", icon: FaVideo },
  { id: "batches", label: "My Batches", icon: FaUsers },
  { id: "settings", label: "Settings", icon: FaCog },
];

export default function StudentNavbar({ section }) {
  const router = useRouter();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 rounded-[28px] border border-slate-200/90 bg-white p-2 sm:p-2.5 shadow-sm backdrop-blur-md"
    >
      <div className="grid grid-cols-3 sm:flex sm:items-center sm:justify-start gap-1.5 sm:gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = section === item.id;

          return (
            <button
              key={item.id}
              onClick={() => router.push(`/student-profile/${item.id}`)}
              className={`relative flex min-h-[46px] flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 rounded-2xl px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 focus:outline-none ${
                active
                  ? "bg-yellow-400 text-slate-950 shadow-md shadow-yellow-200/60 font-extrabold"
                  : "text-slate-600 hover:bg-yellow-50 hover:text-yellow-700"
              }`}
            >
              <Icon className={`text-sm sm:text-base shrink-0 ${active ? "text-slate-950" : "text-yellow-600"}`} />
              <span className="truncate text-center sm:text-left">{item.label}</span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}