"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaBookOpen,
  FaVideo,
  FaUsers,
  FaCertificate,
  FaCog,
} from "react-icons/fa";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: FaHome },
  { id: "profile", label: "Profile", icon: FaUser },
  { id: "courses", label: "Enrolled Courses", icon: FaBookOpen },
  { id: "classes", label: "Live Classes", icon: FaVideo },
  { id: "batches", label: "My Batches", icon: FaUsers },
  { id: "certificates", label: "Certificates", icon: FaCertificate },
  { id: "settings", label: "Settings", icon: FaCog },
];

export default function StudentNavbar({ section }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 overflow-x-auto scrollbar-none pb-2"
    >
      <div className="inline-flex min-w-max gap-2 rounded-[28px] border border-slate-200/90 bg-white p-2 shadow-xs backdrop-blur-md">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = section === item.id;

          return (
            <button
              key={item.id}
              onClick={() => router.push(`/student-profile/${item.id}`)}
              className={`relative flex min-h-[44px] items-center gap-2.5 rounded-2xl px-5 py-2.5 text-sm font-bold transition-all duration-200 focus:outline-none ${
                active
                  ? "text-slate-900"
                  : "text-slate-600 hover:bg-yellow-50 hover:text-yellow-600"
              }`}
            >
              {active && (
                <motion.div
                  layoutId="student-nav-pill"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                  className="absolute inset-0 rounded-2xl bg-yellow-400 shadow-sm shadow-yellow-200/60"
                />
              )}

              <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                <Icon className={active ? "text-slate-900" : "text-yellow-500"} />
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}