"use client";

import Image from "next/image";
import { FaBars, FaChevronDown, FaTimes, FaArrowRight } from "react-icons/fa";
import dynamic from "next/dynamic";
import { memo } from "react";
import TrackedLink from "../tracking/TrackedLink";
import TrackedButton from "../tracking/TrackedButton";

const ProfileDropDown = dynamic(() => import("./ProfileDropDown"));

function DesktopNav({
  links,
  user,
  portalConfig,
  profileRef,
  profileItems,
  profileOpen,
  capitalizeFirstLetter,
  open,
  handleLogout,
  toggleProfile,
  toggleMenu,
}) {
  const PortalIcon = portalConfig?.icon;

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
      {/* Brand Logo */}
      <TrackedLink
        href="/"
        label="Navbar Logo"
        category="Header Navigation"
        className="flex items-center gap-2.5 sm:gap-3 shrink-0"
      >
        <Image
          src="/icon1.webp"
          alt="Inquisitive Mind Academy"
          width={40}
          height={40}
          priority
          className="object-contain w-9 h-9 sm:w-10 sm:h-10"
        />

        <div className="shrink-0">
          <h2 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
            Inquisitive Mind
          </h2>
          <p className="text-[9px] sm:text-[10px] tracking-[0.3em] font-bold text-yellow-600">
            ACADEMY
          </p>
        </div>
      </TrackedLink>

      {/* Desktop Main Navigation Links (Visible on lg >= 1024px) */}
      <nav className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3.5 shrink min-w-0">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <TrackedLink
              key={item.name}
              href={item.path}
              label={`Nav Link: ${item.name}`}
              category="Header Navigation"
              className="flex items-center gap-1.5 rounded-2xl px-2.5 py-1.5 xl:px-3 xl:py-2 text-xs xl:text-sm font-semibold text-slate-700 transition-all hover:bg-yellow-50 hover:text-yellow-700 whitespace-nowrap shrink-0"
            >
              <Icon className="text-yellow-600 text-xs xl:text-sm shrink-0" />
              <span>{item.name}</span>
            </TrackedLink>
          );
        })}
      </nav>

      {/* Desktop Actions & Portal Quick-Access (Visible on lg >= 1024px) */}
      <div className="hidden lg:flex items-center gap-2.5 xl:gap-4 shrink-0">
        {!user ? (
          <>
            <TrackedLink
              href="/login"
              label="Header Login"
              category="Header Auth"
              className="text-xs xl:text-sm font-bold text-slate-700 hover:text-yellow-600 transition-all px-3 py-2"
            >
              Login
            </TrackedLink>

            <TrackedLink
              href="/signup"
              label="Header Enroll Now"
              category="Header Auth"
              className="rounded-full bg-yellow-400 hover:bg-yellow-500 active:scale-95 px-5 py-2 xl:px-6 xl:py-2.5 text-xs xl:text-sm font-extrabold text-slate-950 transition-all shadow-xs hover:shadow-md hover:shadow-yellow-200"
            >
              Enroll Now
            </TrackedLink>
          </>
        ) : (
          <div className="flex items-center gap-2 xl:gap-3">
            {/* Quick Access Portal Pill */}
            {portalConfig && (
              <TrackedLink
                href={portalConfig.href}
                label={`Header Open ${portalConfig.name}`}
                category="Header Portal"
                className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-slate-950 font-extrabold px-3 py-1.5 xl:px-4 xl:py-2 text-xs shadow-xs transition-all border border-yellow-500/30 whitespace-nowrap"
              >
                {PortalIcon && <PortalIcon className="text-xs sm:text-sm shrink-0 text-slate-950" />}
                <span className="hidden xl:inline">{portalConfig.name}</span>
                <span className="xl:hidden">{portalConfig.shortName}</span>
                <FaArrowRight className="text-[10px] shrink-0" />
              </TrackedLink>
            )}

            {/* Profile Avatar & Dropdown */}
            <div className="relative" ref={profileRef}>
              <TrackedButton
                onClick={toggleProfile}
                label="Toggle Profile Dropdown"
                category="Header Profile"
                className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-white p-1 xl:pr-3 transition-all hover:border-yellow-400 hover:shadow-sm"
              >
                {user.profileImage?.url ? (
                  <Image
                    src={user.profileImage.url}
                    alt={user.fullName || user.name || "User"}
                    width={36}
                    height={36}
                    className="rounded-full object-cover object-top shrink-0 w-9 h-9"
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-sm font-extrabold text-slate-950 shadow-xs">
                    {(user?.fullName || user?.name || "U").charAt(0).toUpperCase()}
                  </div>
                )}

                <div className="hidden text-left xl:block max-w-[120px]">
                  <h3 className="text-xs font-bold text-slate-900 truncate">
                    {capitalizeFirstLetter(user?.fullName || user?.name || "User")}
                  </h3>
                  <p className="text-[10px] uppercase font-bold text-yellow-600 truncate">
                    {user.role}
                  </p>
                </div>

                <FaChevronDown
                  className={`text-xs text-slate-400 transition-transform duration-200 ${
                    profileOpen ? "rotate-180 text-yellow-600" : ""
                  }`}
                />
              </TrackedButton>

              <ProfileDropDown
                user={user}
                portalConfig={portalConfig}
                profileOpen={profileOpen}
                profileItems={profileItems}
                handleLogout={handleLogout}
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile View Header Right (< 1024px) */}
      <div className="flex items-center gap-2 lg:hidden">
        {user && portalConfig && (
          <TrackedLink
            href={portalConfig.href}
            label={`Mobile Direct Portal: ${portalConfig.name}`}
            category="Header Mobile"
            className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400 px-3 py-1.5 text-xs font-extrabold text-slate-950 shadow-xs active:scale-95"
          >
            {PortalIcon && <PortalIcon className="text-xs shrink-0" />}
            <span>{portalConfig.shortName}</span>
          </TrackedLink>
        )}

        <TrackedButton
          onClick={toggleMenu}
          label="Toggle Mobile Menu"
          category="Header Mobile"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-800 hover:bg-yellow-50 hover:border-yellow-300 active:scale-95 transition-all"
          aria-label="Toggle Navigation Menu"
        >
          {open ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
        </TrackedButton>
      </div>
    </div>
  );
}

export default memo(DesktopNav);
