"use client";
import { useState, useRef, useEffect, useMemo,useCallback } from "react";

import {
  FaUserCircle,
  FaHome,
  FaBookOpen,
  FaCog,
  FaInfoCircle,
  FaUsers,
  FaChalkboardTeacher,
  FaSearch,
  FaBlog,
  FaBook
} from "react-icons/fa";
import useAuthStore from "@/store/authStore";
import capitalizeFirstLetter from "@/Utils/captilizeFirstLetter";
import {  useLogoutMutation } from "../mutations/AuthenticationMutations";
import DesktopNav from "./navbar/DesktopNav";

import dynamic from "next/dynamic";
import { BsJournalText } from "react-icons/bs";
const MobileMenu=dynamic(()=>import("./navbar/MobileMenu"))
const links = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "Courses", path: "/courses", icon: FaBookOpen },
  { name: "Find Tutor", path: "/find-tutor", icon: FaSearch },
  { name: "Become a Tutor", path: "/become-a-tutor", icon: FaChalkboardTeacher },
  { name: "Blogs", path: "/blogs", icon: BsJournalText },
  { name: "About", path: "/about", icon: FaInfoCircle },
];
export default function Navbar() {
  const logoutMutation=useLogoutMutation()

  const [open, setOpen] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
 const user=useAuthStore((state)=>state.user)


useEffect(() => {

  const handler = (e) => {

    if (
      profileRef.current &&
      !profileRef.current.contains(e.target)
    ) {
      setProfileOpen(false);
    }

  };

  document.addEventListener(
    "mousedown",
    handler
  );

  return () =>
    document.removeEventListener(
      "mousedown",
      handler
    );

}, []);
const path = useMemo(() => {
    if (user?.role === "admin") return "admin-panel";
    if (user?.role === "teacher") return "teacher-profile";
    return "student-profile";
}, [user?.role]);

const profileItems = useMemo(() => [
  {
    title: "Dashboard",
    icon: FaHome,
    href: `/${path}/dashboard`,
  },
  {
    title: "My Profile",
    icon: FaUserCircle,
    href: `/${path}/profile`,
  },
  {
    title: "My Courses",
    icon: FaBookOpen,
    href: `/${path}/courses`,
  },
  ...(path === "student-profile"
    ? [
        {
          title: "My Batches",
          icon: FaUsers,
          href: `/${path}/batches`,
        },
      ]
    : []),
  ...(path === "admin-panel"
    ? [
        {
          title: "My Students",
          icon: FaUsers,
          href: `/${path}/student`,
        },
      ]
    : []),
  {
    title: "Settings",
    icon: FaCog,
    href: `/${path}/settings`,
  },
], [path]);
const handleLogout = useCallback(() => {
  logoutMutation.mutate();
}, [logoutMutation]);

const toggleMenu = useCallback(() => {
  setOpen(prev => !prev);
}, []);

const closeMenu = useCallback(() => {
  setOpen(false);
}, []);

const toggleProfile = useCallback(() => {
  setProfileOpen(prev => !prev);
}, []);

const closeProfile = useCallback(() => {
  setProfileOpen(false);
}, []);
  return (
<header
  className={`fixed top-0 left-0 z-50 w-full border-b border-slate-200/60 shadow-sm transition-all ${
    open
      ? "bg-white"
      : "bg-white"
  }`}
>
    <DesktopNav links={links} toggleProfile={toggleProfile} toggleMenu={toggleMenu} profileItems={profileItems} user={user} profileRef={profileRef}  capitalizeFirstLetter={capitalizeFirstLetter} open={open}   profileOpen={profileOpen} handleLogout={handleLogout}></DesktopNav>

      {/* Mobile Menu */}
 <MobileMenu open={open} closeMenu={closeMenu} user={user} links={links} profileItems={profileItems} handleLogout={handleLogout}></MobileMenu>

    </header>
  );
}


