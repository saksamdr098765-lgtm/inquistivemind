"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { memo } from "react";
import { FaSignOutAlt, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import ProfileItem from "./ProfileItem";
import TrackedLink from "../tracking/TrackedLink";
import TrackedButton from "../tracking/TrackedButton";

function ProfileDropDown({
  profileOpen,
  user,
  portalConfig,
  profileItems,
  handleLogout,
}) {
  const PortalIcon = portalConfig?.icon;

  return (
    <AnimatePresence>
      {profileOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: 8,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 8,
            scale: 0.98,
          }}
          transition={{
            duration: 0.18,
            ease: "easeOut",
          }}
          className="absolute right-0 mt-3 w-72 sm:w-80 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-2xl z-50"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 p-5 text-slate-950">
            <div className="flex items-center gap-3.5">
              {user.profileImage?.url ? (
                <Image
                  src={user.profileImage.url}
                  alt={user.fullName || user.name || "User"}
                  width={52}
                  height={52}
                  className="rounded-full border-2 border-white object-cover object-top shrink-0 shadow-xs w-13 h-13"
                />
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-yellow-400 text-lg font-extrabold shadow-xs shrink-0">
                  {(user?.fullName || user?.name || "U").charAt(0).toUpperCase()}
                </div>
              )}

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-extrabold text-slate-950 truncate">
                  {user.fullName || user.name || "User"}
                </h3>
                <p className="text-xs font-semibold text-slate-900/80 truncate">
                  {user.email}
                </p>
                <span className="mt-1 inline-flex items-center rounded-full bg-slate-950/10 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-slate-950 border border-slate-950/20">
                  {user.role}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Launch Portal Action */}
          {portalConfig && (
            <div className="p-2.5 bg-yellow-50/80 border-b border-yellow-100">
              <TrackedLink
                href={portalConfig.href}
                label={`Dropdown Open ${portalConfig.name}`}
                category="Header Portal"
                className="flex items-center justify-between rounded-xl bg-slate-950 hover:bg-slate-900 active:scale-95 px-3.5 py-2.5 text-xs font-extrabold text-yellow-400 shadow-xs transition-all"
              >
                <div className="flex items-center gap-2 truncate">
                  {PortalIcon && <PortalIcon className="text-sm text-yellow-400 shrink-0" />}
                  <span className="truncate">Launch {portalConfig.name}</span>
                </div>
                <FaArrowRight className="text-[10px] text-yellow-400 shrink-0 ml-1.5" />
              </TrackedLink>
            </div>
          )}

          {/* Nav Items List */}
          <div className="max-h-64 overflow-y-auto space-y-0.5 p-2 pr-1">
            {profileItems.map((item) => (
              <ProfileItem key={item.title} {...item} />
            ))}
          </div>

          {/* Logout Action */}
          <div className="border-t border-slate-100 p-2.5">
            <TrackedButton
              onClick={handleLogout}
              label="Dropdown Logout"
              category="Header Auth"
              className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-bold text-rose-600 transition hover:bg-rose-50 active:scale-98"
            >
              <FaSignOutAlt className="shrink-0" />
              <span>Sign Out</span>
            </TrackedButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default memo(ProfileDropDown);
