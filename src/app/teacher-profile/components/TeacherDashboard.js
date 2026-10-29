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
  FaExternalLinkAlt,
} from "react-icons/fa";

import capitalizeFirstLetter from "@/Utils/captilizeFirstLetter";
import { formatISTDateTime } from "@/Utils/formatDate";
import { useTeacherStats } from "@/Hooks/useTeacherStats";
import { useTeacherClasses } from "@/Hooks/useTeacherClasses";
import { useTeacherBatches } from "@/Hooks/useTeacherBatches";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalStatCard from "@/app/Components/portal-ui/PortalStatCard";
import PortalProgressBar from "@/app/Components/portal-ui/PortalProgressBar";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import DashboardSkeleton from "@/app/Skeletons/DashBoardSkeleton";

export default function TeacherDashboard({ user }) {
  const router = useRouter();
  const { data: stats, isLoading: statsLoading } = useTeacherStats();
  const { data: classes, isLoading: classesLoading } = useTeacherClasses();
  const { data: batches, isLoading: batchesLoading } = useTeacherBatches();

  if (statsLoading || classesLoading || batchesLoading) {
    return <DashboardSkeleton />;
  }

  const teacherStats = [
    {
      title: "Assigned Batches",
      value: stats?.batches || 0,
      icon: <FaUsers />,
      colorScheme: "yellow",
    },
    {
      title: "Scheduled Classes",
      value: stats?.classes || 0,
      icon: <FaVideo />,
      colorScheme: "violet",
    },
    {
      title: "Enrolled Students",
      value: stats?.students || 0,
      icon: <FaChalkboardTeacher />,
      colorScheme: "orange",
    },
    {
      title: "Courses Taught",
      value: stats?.courses || 0,
      icon: <FaBookOpen />,
      colorScheme: "emerald",
    },
  ];

  const upcomingClasses = (classes || []).slice(0, 3);
  const activeBatches = (batches || []).slice(0, 3);

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
              Faculty Portal
            </span>
            <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Welcome Back, {capitalizeFirstLetter(user?.fullName || "Instructor")} 👋
            </h1>
            <p className="mt-1 sm:mt-2 text-orange-100 font-medium text-xs sm:text-sm leading-relaxed">
              Manage your assigned batch schedules, launch live classrooms, and monitor enrolled student rosters.
            </p>

            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2.5">
              <PortalButton
                variant="secondary"
                size="sm"
                icon={FaVideo}
                onClick={() => router.push("/teacher-profile/classes")}
              >
                Live Classes
              </PortalButton>
              <PortalButton
                variant="ghost"
                size="sm"
                icon={FaUsers}
                onClick={() => router.push("/teacher-profile/batches")}
                className="bg-white/15 text-white hover:bg-white/25 border border-white/30"
              >
                My Batches
              </PortalButton>
            </div>
          </div>

          {/* Current Batch Overview Pill */}
          <div className="hidden lg:block rounded-2xl border border-white/20 bg-white/10 p-4 sm:p-5 backdrop-blur-md lg:w-80 shadow-inner text-white">
            <p className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-orange-100">
              Instructor Status
            </p>
            <h3 className="mt-0.5 text-lg sm:text-xl font-extrabold text-white">
              Inquisitive Mind Academy
            </h3>
            <p className="text-xs text-orange-100 font-medium">Faculty Teaching Hub</p>

            <div className="mt-3">
              <PortalProgressBar
                progress={100}
                label="Teacher Portal Active"
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

      {/* Live Classes & Batch Schedules Grid */}
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Scheduled Live Classes */}
        <PortalCard header="Upcoming Live Classes" padding="p-4 sm:p-6">
          {upcomingClasses.length === 0 ? (
            <div className="text-center py-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600 mb-3 border border-yellow-200">
                <FaVideo className="text-xl" />
              </div>
              <h4 className="font-bold text-slate-800 text-sm">No Upcoming Classes Scheduled</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Schedule a class meeting link from the Live Classes tab for your assigned batches.
              </p>
              <div className="mt-4">
                <PortalButton
                  variant="secondary"
                  size="sm"
                  onClick={() => router.push("/teacher-profile/classes")}
                >
                  Go to Live Classes
                </PortalButton>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {upcomingClasses.map((cls) => (
                <div
                  key={cls._id}
                  className="p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 bg-white hover:border-yellow-300 transition-all shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800 font-bold">
                      <FaVideo className="text-sm" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-900 text-sm">{cls.title}</h4>
                        <PortalBadge variant={cls.status === "live" ? "active" : "upcoming"}>
                          {cls.status || "Scheduled"}
                        </PortalBadge>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {cls.batch?.name || "Assigned Batch"} • {formatISTDateTime(cls.meetingDate)}
                      </p>
                    </div>
                  </div>

                  <a
                    href={cls.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold text-xs px-3.5 py-2 shadow-xs transition-all w-full sm:w-auto justify-center"
                  >
                    Launch <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              ))}
              <div className="pt-2 text-right">
                <button
                  onClick={() => router.push("/teacher-profile/classes")}
                  className="text-xs font-bold text-yellow-700 hover:text-yellow-800 inline-flex items-center gap-1"
                >
                  View All Classes <FaArrowRight className="text-[10px]" />
                </button>
              </div>
            </div>
          )}
        </PortalCard>

        {/* Assigned Batches Summary */}
        <PortalCard header="Assigned Batches" padding="p-4 sm:p-6">
          {activeBatches.length === 0 ? (
            <div className="text-center py-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600 mb-3 border border-yellow-200">
                <FaUsers className="text-xl" />
              </div>
              <h4 className="font-bold text-slate-800 text-sm">No Batches Assigned Yet</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                The academy administrator will assign you to active language batches and student classrooms.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {activeBatches.map((batch) => (
                <div
                  key={batch._id}
                  className="rounded-xl bg-slate-50 p-3.5 border border-slate-200/80 hover:border-yellow-300 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-yellow-800">
                      {batch.course?.title || "Language Course"}
                    </span>
                    <PortalBadge variant={batch.status === "active" ? "active" : "upcoming"}>
                      {batch.status || "Active"}
                    </PortalBadge>
                  </div>
                  <h5 className="font-bold text-slate-900 text-sm mt-1">{batch.name}</h5>
                  <div className="flex items-center justify-between text-xs text-slate-500 mt-2 pt-2 border-t border-slate-200/60">
                    <span>👥 {batch.students?.length || 0} Students Enrolled</span>
                    <span className="capitalize">Platform: {batch.meetingPlatform || "Zoom"}</span>
                  </div>
                </div>
              ))}
              <div className="pt-2 text-right">
                <button
                  onClick={() => router.push("/teacher-profile/batches")}
                  className="text-xs font-bold text-yellow-700 hover:text-yellow-800 inline-flex items-center gap-1"
                >
                  Manage All Batches <FaArrowRight className="text-[10px]" />
                </button>
              </div>
            </div>
          )}
        </PortalCard>
      </div>

      {/* Navigation Quick Links Card */}
      <PortalCard header="Teacher Account Navigation" padding="p-4 sm:p-6">
        <div className="space-y-3">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Keep your teacher profile information and subjects updated. Access your assigned students, courses, and security settings anytime.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
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
              onClick={() => router.push("/teacher-profile/students")}
              className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-yellow-50 hover:border-yellow-300 transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-800">
                  <FaChalkboardTeacher className="text-lg" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-xs sm:text-sm">Enrolled Students</h5>
                  <p className="text-[11px] text-slate-400">Roster & Details</p>
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
  );
}
