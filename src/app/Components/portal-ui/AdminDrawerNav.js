"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChartLine,
  FaUsers,
  FaBookOpen,
  FaCog,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaShieldAlt
} from "react-icons/fa";
import useAuthStore from "@/store/authStore";
import { useLogoutMutation } from "@/app/mutations/AuthenticationMutations";

const adminNavItems = [
  { name: "Dashboard", href: "/admin-panel/dashboard", icon: FaChartLine },
  { name: "Students", href: "/admin-panel/student", icon: FaUsers },
  { name: "Courses", href: "/admin-panel/courses", icon: FaBookOpen },
  { name: "Profile", href: "/admin-panel/profile", icon: FaUserCircle },
  { name: "Settings", href: "/admin-panel/settings", icon: FaCog },
];

export default function AdminDrawerNav({ children }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  const logoutMutation = useLogoutMutation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 flex flex-col lg:flex-row">
      {/* Mobile Header Navigation (< 1024px) */}
      <header className="lg:hidden sticky top-0 z-40 flex items-center justify-between border-b border-slate-200/80 bg-white/95 px-4 py-3 backdrop-blur-md shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-yellow-50 hover:border-yellow-300 active:scale-95 transition-all"
            aria-label="Open Navigation Menu"
          >
            <FaBars className="text-lg text-slate-800" />
          </button>
          <Link href="/admin-panel/dashboard" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-950 font-bold shadow-xs">
              <FaShieldAlt className="text-sm" />
            </div>
            <span className="font-extrabold text-slate-900 tracking-tight text-base">Admin Portal</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/admin-panel/profile"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-800 font-bold border border-yellow-300"
          >
            {user?.fullName?.charAt(0) || "A"}
          </Link>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="lg:hidden fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="lg:hidden fixed inset-y-0 left-0 z-50 w-72 bg-white p-6 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-950 font-bold shadow-xs">
                      <FaShieldAlt />
                    </div>
                    <div>
                      <h2 className="font-extrabold text-slate-900">Admin Panel</h2>
                      <p className="text-xs font-semibold text-yellow-600">Inquisitive Mind</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Close menu"
                  >
                    <FaTimes className="text-lg" />
                  </button>
                </div>

                <nav className="mt-6 space-y-1.5">
                  {adminNavItems.map((item) => {
                    const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all ${
                          isActive
                            ? "bg-yellow-400 text-slate-950 shadow-md shadow-yellow-200/60 font-extrabold"
                            : "text-slate-600 hover:bg-yellow-50 hover:text-yellow-700"
                        }`}
                      >
                        <Icon className={`text-lg ${isActive ? "text-slate-950" : "text-yellow-600"}`} />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-4 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-800 border border-yellow-300">
                    {user?.fullName?.charAt(0) || "A"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-slate-900">{user?.fullName || "Administrator"}</p>
                    <p className="truncate text-xs text-slate-500">{user?.email}</p>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-rose-50 text-rose-600 font-bold text-sm hover:bg-rose-100 transition-colors"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Fixed Sidebar (>= 1024px) */}
      <aside className="hidden lg:flex flex-col justify-between w-72 shrink-0 border-r border-slate-200/80 bg-white p-6 min-h-screen sticky top-0">
        <div>
          <div className="flex items-center gap-3.5 pb-6 border-b border-slate-100">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-950 font-extrabold shadow-xs">
              <FaShieldAlt className="text-lg" />
            </div>
            <div>
              <h1 className="font-extrabold text-slate-900 text-lg tracking-tight">Admin Console</h1>
              <p className="text-[10px] tracking-[0.25em] font-bold text-yellow-600 uppercase">
                INQUISITIVE MIND
              </p>
            </div>
          </div>

          <nav className="mt-8 space-y-2">
            {adminNavItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/admin-panel/dashboard" && pathname?.startsWith(item.href));
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-yellow-400 text-slate-950 shadow-md shadow-yellow-200/60 font-extrabold"
                      : "text-slate-600 hover:bg-yellow-50 hover:text-yellow-700"
                  }`}
                >
                  <Icon className={`text-lg ${isActive ? "text-slate-950" : "text-yellow-600"}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-100 space-y-4">
          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-800 text-base border border-yellow-300">
              {user?.fullName?.charAt(0) || "A"}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-slate-900">{user?.fullName || "Admin"}</p>
              <p className="truncate text-xs text-slate-400 font-medium">{user?.role || "admin"}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition-all"
          >
            <FaSignOutAlt />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-10">{children}</main>
    </div>
  );
}
