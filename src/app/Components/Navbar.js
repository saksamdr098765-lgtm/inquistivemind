"use client";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { usePathname } from "next/navigation";

import {
  FaUserCircle,
  FaHome,
  FaBookOpen,
  FaCog,
  FaInfoCircle,
  FaUsers,
  FaChalkboardTeacher,
  FaSearch,
  FaShieldAlt,
  FaGraduationCap,
  FaVideo,
  FaClipboardList,
} from "react-icons/fa";
import { BsJournalText } from "react-icons/bs";
import useAuthStore from "@/store/authStore";
import capitalizeFirstLetter from "@/Utils/captilizeFirstLetter";
import { useLogoutMutation } from "../mutations/AuthenticationMutations";
import DesktopNav from "./navbar/DesktopNav";

import dynamic from "next/dynamic";
const MobileMenu = dynamic(() => import("./navbar/MobileMenu"));

const defaultLinks = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "Courses", path: "/courses", icon: FaBookOpen },
  { name: "Find Tutor", path: "/find-tutor", icon: FaSearch },
  { name: "Become a Tutor", path: "/become-a-tutor", icon: FaChalkboardTeacher },
  { name: "Blogs", path: "/blogs", icon: BsJournalText },
  { name: "About", path: "/about", icon: FaInfoCircle },
];

export default function Navbar() {
  const pathname = usePathname();
  const logoutMutation = useLogoutMutation();

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const portalConfig = useMemo(() => {
    if (!user) return null;
    if (user.role === "admin") {
      return {
        name: "Admin Panel",
        shortName: "Admin",
        href: "/admin-panel/dashboard",
        icon: FaShieldAlt,
      };
    }
    if (user.role === "teacher") {
      return {
        name: "Teacher Portal",
        shortName: "Faculty",
        href: "/teacher-profile/dashboard",
        icon: FaChalkboardTeacher,
      };
    }
    return {
      name: "Student Portal",
      shortName: "Portal",
      href: "/student-profile/dashboard",
      icon: FaGraduationCap,
    };
  }, [user]);

  const profileItems = useMemo(() => {
    if (user?.role === "admin") {
      return [
        { title: "Admin Dashboard", icon: FaHome, href: "/admin-panel/dashboard" },
        { title: "Admin Profile", icon: FaUserCircle, href: "/admin-panel/profile" },
        { title: "Courses Management", icon: FaBookOpen, href: "/admin-panel/courses" },
        { title: "Batches Management", icon: FaUsers, href: "/admin-panel/batches" },
        { title: "Students Directory", icon: FaUsers, href: "/admin-panel/student" },
        { title: "Tutor Applications", icon: FaChalkboardTeacher, href: "/admin-panel/tutor-applications" },
        { title: "Student Inquiries", icon: FaClipboardList, href: "/admin-panel/student-requirements" },
        { title: "Console Settings", icon: FaCog, href: "/admin-panel/settings" },
      ];
    }
    if (user?.role === "teacher") {
      return [
        { title: "Teacher Dashboard", icon: FaHome, href: "/teacher-profile/dashboard" },
        { title: "Instructor Profile", icon: FaUserCircle, href: "/teacher-profile/profile" },
        { title: "Assigned Batches", icon: FaUsers, href: "/teacher-profile/batches" },
        { title: "Live Classes", icon: FaVideo, href: "/teacher-profile/classes" },
        { title: "Assigned Courses", icon: FaBookOpen, href: "/teacher-profile/courses" },
        { title: "Enrolled Students", icon: FaGraduationCap, href: "/teacher-profile/students" },
        { title: "Account Settings", icon: FaCog, href: "/teacher-profile/settings" },
      ];
    }
    return [
      { title: "Student Dashboard", icon: FaHome, href: "/student-profile/dashboard" },
      { title: "My Profile", icon: FaUserCircle, href: "/student-profile/profile" },
      { title: "My Enrolled Courses", icon: FaBookOpen, href: "/student-profile/courses" },
      { title: "My Batches", icon: FaUsers, href: "/student-profile/batches" },
      { title: "Live Classes", icon: FaVideo, href: "/student-profile/classes" },
      { title: "Account Settings", icon: FaCog, href: "/student-profile/settings" },
    ];
  }, [user?.role]);

  // Keep navigation clean; hide "Become a Tutor" if user is already an approved teacher or admin
  const navLinks = useMemo(() => {
    const isTeacherOrAdmin = user?.role === "teacher" || user?.role === "admin";
    return defaultLinks.filter((link) => {
      if (isTeacherOrAdmin && link.path === "/become-a-tutor") return false;
      return true;
    });
  }, [user?.role]);

  const handleLogout = useCallback(() => {
    logoutMutation.mutate();
  }, [logoutMutation]);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const toggleProfile = useCallback(() => {
    setProfileOpen((prev) => !prev);
  }, []);

  // Hide global navbar on Admin Panel, Student Profile, and Teacher Profile since they have dedicated portal navigation
  if (
    pathname?.startsWith("/admin-panel") ||
    pathname?.startsWith("/student-profile") ||
    pathname?.startsWith("/teacher-profile")
  ) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b border-slate-200/60 shadow-xs transition-all ${
        open ? "bg-white" : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <DesktopNav
        links={navLinks}
        toggleProfile={toggleProfile}
        toggleMenu={toggleMenu}
        profileItems={profileItems}
        user={user}
        portalConfig={portalConfig}
        profileRef={profileRef}
        capitalizeFirstLetter={capitalizeFirstLetter}
        open={open}
        profileOpen={profileOpen}
        handleLogout={handleLogout}
      />

      {/* Mobile Menu */}
      <MobileMenu
        open={open}
        closeMenu={closeMenu}
        user={user}
        portalConfig={portalConfig}
        links={navLinks}
        profileItems={profileItems}
        handleLogout={handleLogout}
      />
    </header>
  );
}
