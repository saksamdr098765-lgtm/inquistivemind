"use client";

import React, { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FaSignOutAlt, FaTimes, FaArrowRight } from "react-icons/fa";
import TrackedLink from "../tracking/TrackedLink";
import TrackedButton from "../tracking/TrackedButton";

function MobileMenu({
  open,
  closeMenu,
  user,
  portalConfig,
  links,
  profileItems,
  handleLogout,
}) {
  const PortalIcon = portalConfig?.icon;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed inset-0 z-[60] bg-white flex flex-col lg:hidden"
        >
          {/* Header Top */}
          <div className="flex items-center justify-between border-b border-slate-200 px-5 sm:px-6 py-3.5 shrink-0 bg-white">
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
                width={36}
                height={36}
                priority
                className="w-9 h-9 object-contain"
              />

              <div>
                <h2 className="text-sm font-extrabold text-slate-900 leading-tight">
                  Inquisitive Mind
                </h2>
                <p className="text-[9px] tracking-[0.3em] font-bold text-yellow-600">
                  ACADEMY
                </p>
              </div>
            </TrackedLink>

            <TrackedButton
              onClick={closeMenu}
              label="Close Mobile Menu"
              category="Mobile Menu"
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-yellow-50 hover:border-yellow-300 active:scale-95 transition-all"
              aria-label="Close Menu"
            >
              <FaTimes className="text-lg" />
            </TrackedButton>
          </div>

          {/* Scrollable Menu Body */}
          <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 space-y-6">
            {/* User Profile Banner or Guest Auth CTAs */}
            {user ? (
              <div className="rounded-3xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 p-5 text-slate-950 shadow-lg">
                <div className="flex items-center gap-3.5">
                  {user.profileImage?.url ? (
                    <Image
                      src={user.profileImage.url}
                      alt={user.fullName || user.name || "User"}
                      width={56}
                      height={56}
                      className="rounded-full border-2 border-white object-cover object-top shrink-0 shadow-xs w-14 h-14"
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-yellow-400 text-xl font-black shadow-xs shrink-0">
                      {(user?.fullName || user?.name || "U").charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-extrabold text-slate-950 truncate">
                      {user.fullName || user.name || "User"}
                    </h3>
                    <p className="text-xs font-semibold text-slate-900/80 truncate">
                      {user.email}
                    </p>
                    <span className="mt-1.5 inline-flex items-center rounded-full bg-slate-950/15 px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-slate-950 border border-slate-950/20">
                      {user.role}
                    </span>
                  </div>
                </div>

                {/* Prominent Direct Portal Launcher Button */}
                {portalConfig && (
                  <div className="mt-4 pt-3.5 border-t border-slate-950/10">
                    <TrackedLink
                      href={portalConfig.href}
                      onClick={closeMenu}
                      label={`Mobile Launch ${portalConfig.name}`}
                      category="Mobile Portal"
                      className="flex min-h-[48px] w-full items-center justify-between rounded-2xl bg-slate-950 px-4 py-3 text-sm font-extrabold text-yellow-400 shadow-md transition-all hover:bg-slate-900 active:scale-98"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {PortalIcon && <PortalIcon className="text-base text-yellow-400 shrink-0" />}
                        <span className="truncate">Enter {portalConfig.name}</span>
                      </div>
                      <FaArrowRight className="text-xs text-yellow-400 shrink-0 ml-2" />
                    </TrackedLink>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <TrackedLink
                  href="/login"
                  onClick={closeMenu}
                  label="Mobile Login"
                  category="Mobile Auth"
                  className="flex min-h-[44px] items-center justify-center rounded-2xl border border-slate-300 py-2.5 text-center text-sm font-bold text-slate-800 hover:bg-slate-50 transition-all"
                >
                  Login
                </TrackedLink>

                <TrackedLink
                  href="/signup"
                  onClick={closeMenu}
                  label="Mobile Enroll Now"
                  category="Mobile Auth"
                  className="flex min-h-[44px] items-center justify-center rounded-2xl bg-yellow-400 py-2.5 text-center text-sm font-extrabold text-slate-950 transition-all hover:bg-yellow-500 shadow-xs"
                >
                  Enroll Now
                </TrackedLink>
              </div>
            )}

            {/* Portal Specific Nav Items (when logged in) */}
            {user && profileItems && profileItems.length > 0 && (
              <div>
                <h3 className="mb-2.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  {portalConfig?.name || "Workspace"} Actions
                </h3>

                <div className="space-y-1">
                  {profileItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <TrackedLink
                        key={item.title}
                        href={item.href}
                        onClick={closeMenu}
                        label={`Mobile Portal Link: ${item.title}`}
                        category="Mobile Profile"
                        className="flex min-h-[44px] items-center gap-3.5 rounded-2xl px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-yellow-50 hover:text-yellow-700"
                      >
                        {Icon && <Icon className="text-yellow-600 text-base shrink-0" />}
                        <span className="truncate">{item.title}</span>
                      </TrackedLink>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Main Navigation Links */}
            <div>
              <h3 className="mb-2.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                Academy Explore
              </h3>

              <div className="space-y-1">
                {links.map((item) => {
                  const Icon = item.icon;

                  return (
                    <TrackedLink
                      key={item.name}
                      href={item.path}
                      onClick={closeMenu}
                      label={`Mobile Nav: ${item.name}`}
                      category="Mobile Navigation"
                      className="flex min-h-[44px] items-center gap-3.5 rounded-2xl px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-yellow-50 hover:text-yellow-700"
                    >
                      {Icon && <Icon className="text-yellow-600 text-base shrink-0" />}
                      <span>{item.name}</span>
                    </TrackedLink>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="border-t border-slate-200 bg-slate-50 px-5 sm:px-6 py-4 shrink-0">
            {user && (
              <TrackedButton
                onClick={() => {
                  closeMenu();
                  handleLogout();
                }}
                label="Mobile Logout"
                category="Mobile Auth"
                className="flex min-h-[44px] w-full items-center justify-center gap-2.5 rounded-2xl border border-rose-200 bg-white py-2.5 text-sm font-bold text-rose-600 transition hover:bg-rose-50 active:scale-98 shadow-xs"
              >
                <FaSignOutAlt />
                <span>Sign Out</span>
              </TrackedButton>
            )}

            <p className={`${user ? "mt-3" : ""} text-center text-[11px] font-medium text-slate-400`}>
              © 2026 Inquisitive Mind Academy. All rights reserved.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default memo(MobileMenu);
