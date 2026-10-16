"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaVideo,
  FaClock,
  FaArrowRight,
  FaUserCircle,
  FaCog,
  FaCalendarAlt,
  FaBookOpen,
} from "react-icons/fa";

import capitalizeFirstLetter from "@/Utils/captilizeFirstLetter";
import CommingSoon from "@/app/Components/ui/CommingSoon";
import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalStatCard from "@/app/Components/portal-ui/PortalStatCard";
import PortalProgressBar from "@/app/Components/portal-ui/PortalProgressBar";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";

export default function TeacherDashboard({ user }) {
  const router = useRouter();

  const teacherStats = [
    {
      title: "Assigned Batches",
      value: "Coming Soon",
      icon: <FaUsers />,
      colorScheme: "yellow",
    },
    {
      title: "Live Classes",
      value: "Coming Soon",
      icon: <FaVideo />,
      colorScheme: "violet",
    },
    {
      title: "Active Students",
      value: "Coming Soon",
      icon: <FaChalkboardTeacher />,
      colorScheme: "orange",
    },
    {
      title: "Teaching Hours",
      value: "Coming Soon",
      icon: <FaClock />,
      colorScheme: "emerald",
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Hero Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-500 to-yellow-500 p-5 sm:p-8 text-white shadow-lg"
      >
        <div className="absolute -right-10 -top-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />

        <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 border border-white/30 px-3 py-0.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
              Teacher Dashboard
            </span>
            <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Welcome Back, {capitalizeFirstLetter(user?.fullName || "Instructor")} 👋
            </h1>
            <p className="mt-1 sm:mt-2 text-orange-100 font-medium text-xs sm:text-sm leading-relaxed">
              Manage your batch schedule, live class host links, and student assignments.
            </p>

            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2.5">
              <PortalButton
                variant="secondary"
                size="sm"
                icon={FaUserCircle}
                onClick={() => router.push("/teacher-profile/profile")}
              >
                My Profile
              </PortalButton>
              <PortalButton
                variant="ghost"
                size="sm"
                icon={FaCog}
                onClick={() => router.push("/teacher-profile/settings")}
                className="bg-white/15 text-white hover:bg-white/25 border border-white/30"
              >
                Settings
              </PortalButton>
            </div>
          </div>

          {/* Current Batch Overview Pill (Desktop/Tablet) */}
          <div className="hidden lg:block rounded-2xl border border-white/20 bg-white/10 p-4 sm:p-5 backdrop-blur-md lg:w-80 shadow-inner text-white">
            <p className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-orange-100">
              Instructor Status
            </p>
            <h3 className="mt-0.5 text-lg sm:text-xl font-extrabold text-white">
              Inquisitive Mind Academy
            </h3>
            <p className="text-xs text-orange-100 font-medium">Faculty & Teaching Portal</p>

            <div className="mt-3">
              <PortalProgressBar
                progress={100}
                label="Teacher Portal Beta"
                color="from-yellow-400 to-amber-500"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Metrics Stats Grid (2x2 on Mobile, 4-col on Desktop) */}
      <section className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {teacherStats.map((item, index) => (
          <PortalStatCard
            key={item.title}
            index={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
            colorScheme={item.colorScheme}
          />
        ))}
      </section>

      {/* Live Classes & Batch Attendance Grid */}
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Live Classes Widget with Coming Soon */}
        <PortalCard header="Upcoming Teaching Sessions" className="relative" padding="p-4 sm:p-6">
          <CommingSoon
            title="Live Class Host Suite"
            message="We are setting up one-click live class hosting with Zoom & Google Meet integrations for teachers."
          />
          <div className="space-y-3 opacity-30 select-none">
            <div className="p-3 sm:p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-center justify-between">
              <div>
                <PortalBadge variant="active" size="sm">Scheduled</PortalBadge>
                <h4 className="font-bold text-slate-900 text-sm mt-1">DELF B1 Intermediate French</h4>
                <p className="text-xs text-yellow-600 font-semibold mt-0.5">Today • 05:00 PM - 06:30 PM</p>
              </div>
              <span className="rounded-xl bg-yellow-400 px-3 py-1.5 text-xs font-bold text-slate-900">
                Host Room
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-center justify-between">
              <div>
                <PortalBadge variant="active" size="sm">Scheduled</PortalBadge>
                <h4 className="font-bold text-slate-900 text-sm mt-1">Spoken French Beginner Intensive</h4>
                <p className="text-xs text-yellow-600 font-semibold mt-0.5">Tomorrow • 11:00 AM - 12:30 PM</p>
              </div>
              <span className="rounded-xl bg-yellow-400 px-3 py-1.5 text-xs font-bold text-slate-900">
                Host Room
              </span>
            </div>
          </div>
        </PortalCard>

        {/* Batch Attendance Roster Widget with Coming Soon */}
        <PortalCard header="Assigned Batches & Attendance" className="relative" padding="p-4 sm:p-6">
          <CommingSoon
            title="Batch Management"
            message="Batch student rosters, daily attendance registers, and class logs are coming soon to your portal."
          />
          <div className="space-y-3 opacity-30 select-none">
            <div className="rounded-xl bg-yellow-50/80 p-3 border border-yellow-200/80">
              <span className="text-xs font-bold uppercase text-yellow-800">Batch Alpha • 24 Students</span>
              <h5 className="font-bold text-slate-800 text-sm mt-0.5">Grammar & Pronunciation</h5>
              <PortalProgressBar progress={65} label="Syllabus Progress" />
            </div>

            <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
              <span className="text-xs font-semibold uppercase text-slate-400">Batch Beta • 18 Students</span>
              <h5 className="font-bold text-slate-800 text-sm mt-0.5">TEF Canada Exam Prep</h5>
              <PortalProgressBar progress={40} label="Syllabus Progress" />
            </div>
          </div>
        </PortalCard>
      </div>

      {/* Curriculum & Teaching Materials Grid */}
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Coursework & Notes Card with Coming Soon */}
        <PortalCard header="Lesson Plans & Uploaded Notes" className="relative" padding="p-4 sm:p-6">
          <CommingSoon
            title="Teaching Material Hub"
            message="Upload PDF lecture notes, practice worksheets, and lesson guides directly to your batches."
          />
          <div className="space-y-2.5 opacity-30 select-none">
            <div className="p-3 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaBookOpen className="text-yellow-600 text-xl" />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">French Verbs & Conjugations</h4>
                  <p className="text-[11px] text-slate-400">PDF Document • 14 Pages</p>
                </div>
              </div>
              <span className="text-xs text-yellow-600 font-bold">Preview</span>
            </div>

            <div className="p-3 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaBookOpen className="text-yellow-600 text-xl" />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Oral Communication Drills</h4>
                  <p className="text-[11px] text-slate-400">PDF Document • 8 Pages</p>
                </div>
              </div>
              <span className="text-xs text-yellow-600 font-bold">Preview</span>
            </div>
          </div>
        </PortalCard>

        {/* Quick Portal Navigation Card */}
        <PortalCard header="Teacher Account Navigation" padding="p-4 sm:p-6">
          <div className="space-y-3">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Keep your teacher profile information and contact details updated. Manage your account security and password anytime.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => router.push("/teacher-profile/profile")}
                className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-yellow-50 hover:border-yellow-300 transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800">
                    <FaUserCircle className="text-lg" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm">My Profile</h5>
                    <p className="text-[11px] text-slate-400">View & Edit Details</p>
                  </div>
                </div>
                <FaArrowRight className="text-slate-400 text-xs" />
              </button>

              <button
                onClick={() => router.push("/teacher-profile/settings")}
                className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-yellow-50 hover:border-yellow-300 transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <FaCog className="text-lg" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm">Account Settings</h5>
                    <p className="text-[11px] text-slate-400">Password & Security</p>
                  </div>
                </div>
                <FaArrowRight className="text-slate-400 text-xs" />
              </button>
            </div>
          </div>
        </PortalCard>
      </div>
    </div>
  );
}
