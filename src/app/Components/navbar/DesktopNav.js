import Link from "next/link";
import Image from "next/image";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import dynamic from "next/dynamic";
import { memo } from "react";
import TrackedLink from "../tracking/TrackedLink";
import TrackedButton from "../tracking/TrackedButton";

const ProfileDropDown = dynamic(() => import("./ProfileDropDown"));

function DesktopNav({
  links,
  user,
  profileRef,
  profileItems,
  profileOpen,
  capitalizeFirstLetter,
  open,
  handleLogout,
  toggleProfile,
  toggleMenu,
}) {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
      {/* Logo */}
      <TrackedLink
        href="/"
        label="Navbar Logo"
        category="Header Navigation"
        className="flex items-center gap-3"
      >
        <Image
          src="/icon1.webp"
          alt="Inquisitive Mind Academy"
          width={44}
          height={44}
          priority
          className="object-contain"
        />

        <div>
          <h2 className="text-sm font-bold text-slate-900">
            Inquisitive Mind
          </h2>

          <p className="text-[10px] tracking-[0.35em] text-yellow-500">
            ACADEMY
          </p>
        </div>
      </TrackedLink>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex items-center gap-2 xl:gap-5">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <TrackedLink
              key={item.name}
              href={item.path}
              label={`Nav Link: ${item.name}`}
              category="Header Navigation"
              className="flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-yellow-50 hover:text-yellow-600"
            >
              <Icon className="text-yellow-500 shrink-0" />
              {item.name}
            </TrackedLink>
          );
        })}
      </nav>

      {/* Desktop Actions */}
      <div className="hidden lg:flex items-center gap-5">
        {!user ? (
          <>
            <TrackedLink
              href="/login"
              label="Header Login"
              category="Header Auth"
              className="text-sm font-medium text-slate-600 transition hover:text-yellow-500"
            >
              Login
            </TrackedLink>

            <TrackedLink
              href="/signup"
              label="Header Enroll Now"
              category="Header Auth"
              className="rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-200"
            >
              Enroll Now
            </TrackedLink>
          </>
        ) : (
          <div className="relative" ref={profileRef}>
            {/* Profile Button */}
            <TrackedButton
              onClick={toggleProfile}
              label="Toggle Profile Dropdown"
              category="Header Profile"
              className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-2 py-2 transition hover:border-yellow-400 hover:shadow-lg"
            >
              {user.profileImage.url ? (
                <Image
                  src={user.profileImage.url}
                  alt={user.fullName}
                  width={44}
                  height={44}
                  className="rounded-full object-cover object-top shrink-0"
                />
              ) : (
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-lg font-bold text-white">
                  {user.fullName.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="hidden text-left xl:block">
                <h3 className="text-sm font-semibold text-slate-900">
                  {capitalizeFirstLetter(user?.fullName)}
                </h3>

                <p className="text-xs capitalize text-slate-500">
                  {user.role}
                </p>
              </div>

              <FaChevronDown
                className={`text-sm text-slate-500 transition ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </TrackedButton>
            <ProfileDropDown
              user={user}
              profileOpen={profileOpen}
              profileItems={profileItems}
              handleLogout={handleLogout}
            />
          </div>
        )}
      </div>

      {/* Mobile Toggle (Min 44x44px Touch Target) */}
      <TrackedButton
        onClick={toggleMenu}
        label="Toggle Mobile Menu"
        category="Header Mobile"
        className="flex h-11 w-11 items-center justify-center text-xl text-slate-900 lg:hidden"
        aria-label="Toggle Menu"
      >
        {open ? <FaTimes /> : <FaBars />}
      </TrackedButton>
    </div>
  );
}

export default memo(DesktopNav);