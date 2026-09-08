import React, { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FaSignOutAlt, FaTimes } from "react-icons/fa";
import TrackedLink from "../tracking/TrackedLink";
import TrackedButton from "../tracking/TrackedButton";

function MobileMenu({
  open,
  closeMenu,
  user,
  links,
  profileItems,
  handleLogout,
}) {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col lg:hidden"
          >
            {/* Header Top */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 shrink-0">
              <TrackedLink
                href="/"
                onClick={closeMenu}
                label="Mobile Menu Logo"
                category="Mobile Menu"
                className="flex items-center gap-3 min-h-[44px]"
              >
                <Image
                  src="/icon1.webp"
                  alt="Inquisitive Mind Academy"
                  width={40}
                  height={40}
                  priority
                />

                <div>
                  <h2 className="font-bold text-slate-900">Inquisitive Mind</h2>
                  <p className="text-[10px] tracking-[0.35em] text-yellow-500">
                    ACADEMY
                  </p>
                </div>
              </TrackedLink>

              <TrackedButton
                onClick={closeMenu}
                label="Close Mobile Menu"
                category="Mobile Menu"
                className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-slate-100"
                aria-label="Close Menu"
              >
                <FaTimes size={22} />
              </TrackedButton>
            </div>

            {/* Scrollable Menu Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {/* User Profile Banner or Auth CTAs */}
              {user ? (
                <div className="rounded-3xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-sky-400 p-6 text-white shadow-xl">
                  <div className="flex items-center gap-4">
                    {user.profileImage?.url ? (
                      <Image
                        src={user.profileImage.url}
                        alt={user.fullName}
                        width={64}
                        height={64}
                        className="rounded-full border-2 border-white object-cover object-top shrink-0"
                      />
                    ) : (
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-2xl font-bold">
                        {user.fullName?.[0]}
                      </div>
                    )}

                    <div>
                      <h2 className="text-lg font-semibold">{user.fullName}</h2>
                      <p className="text-sm text-yellow-100">{user.email}</p>
                      <span className="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs capitalize">
                        {user.role}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <TrackedLink
                    href="/login"
                    onClick={closeMenu}
                    label="Mobile Login"
                    category="Mobile Auth"
                    className="flex min-h-[44px] items-center justify-center rounded-2xl border py-3 text-center font-semibold text-slate-800"
                  >
                    Login
                  </TrackedLink>

                  <TrackedLink
                    href="/signup"
                    onClick={closeMenu}
                    label="Mobile Enroll Now"
                    category="Mobile Auth"
                    className="flex min-h-[44px] items-center justify-center rounded-2xl bg-yellow-400 py-3 text-center font-semibold text-slate-900 transition hover:bg-yellow-500"
                  >
                    Enroll Now
                  </TrackedLink>
                </div>
              )}

              {/* Main Nav Links */}
              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Navigation
                </h3>

                <div className="space-y-1">
                  {links.map((item) => (
                    <TrackedLink
                      key={item.name}
                      href={item.path}
                      onClick={closeMenu}
                      label={`Mobile Nav: ${item.name}`}
                      category="Mobile Navigation"
                      className="flex min-h-[44px] items-center rounded-2xl px-4 py-3 font-medium text-slate-800 transition hover:bg-yellow-50 hover:text-yellow-600"
                    >
                      {item.name}
                    </TrackedLink>
                  ))}
                </div>
              </div>

              {/* Account Links (if logged in) */}
              {user && (
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Account
                  </h3>

                  <div className="space-y-1">
                    {profileItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <TrackedLink
                          key={item.title}
                          href={item.href}
                          onClick={closeMenu}
                          label={`Mobile Account: ${item.title}`}
                          category="Mobile Profile"
                          className="flex min-h-[44px] items-center gap-4 rounded-2xl px-4 py-3 font-medium text-slate-800 transition hover:bg-yellow-50"
                        >
                          <Icon className="text-yellow-500 shrink-0" />
                          <span>{item.title}</span>
                        </TrackedLink>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-slate-200 bg-white p-6 shrink-0">
              {user && (
                <TrackedButton
                  onClick={handleLogout}
                  label="Mobile Logout"
                  category="Mobile Auth"
                  className="flex min-h-[44px] w-full items-center justify-center gap-3 rounded-2xl border border-red-200 py-3 font-semibold text-red-600 transition hover:bg-red-50"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </TrackedButton>
              )}

              <p className={`${user ? "mt-4" : ""} text-center text-xs text-slate-400`}>
                © 2026 Inquisitive Mind Academy
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default memo(MobileMenu);