"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaUsers,
  FaUserTie,
  FaBookOpen,
  FaLayerGroup,
  FaVideo,
  FaBell,
  FaBullhorn,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaUserSlash
} from "react-icons/fa";

import CommingSoon from "@/app/Components/ui/CommingSoon";
import DashboardSkeleton from "@/app/Skeletons/DashBoardSkeleton";
import { useAdminGetAllAnnoucements } from "@/Hooks/useAdminGetAllAnnouncements";
import { useAdminGetAllClasses } from "@/Hooks/useAdminGetAllClasses";
import { useAdminGetRecentActivities } from "@/Hooks/useAdminGetRecentEnrollments";
import { useAdminGetStats } from "@/Hooks/useAdminGetStats";
import { formatISTDateTime } from "@/Utils/formatDate";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalStatCard from "@/app/Components/portal-ui/PortalStatCard";
import PortalTable from "@/app/Components/portal-ui/PortalTable";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";

const quickActions = [
  { action: "New Course", path: "/admin-panel/add-course", icon: FaBookOpen },
  { action: "Create Batch", path: "/admin-panel/add-batch", icon: FaLayerGroup },
  { action: "Announcement", path: "/admin-panel/add-announcement", icon: FaBullhorn },
  { action: "Add Student", path: "/admin-panel/add-student", icon: FaUsers },
];

export default function Dashboard() {
  const router = useRouter();
  const { data, isLoading: statsLoading } = useAdminGetStats();
  const { data: recentStudents, isLoading: activitiesLoading } = useAdminGetRecentActivities();
  const { data: classes, isLoading: classesLoading } = useAdminGetAllClasses();
  const { data: announcements, isLoading: annoucementsLoading } = useAdminGetAllAnnoucements();

  const stats = [
    {
      title: "Total Students",
      value: data?.totalStudents,
      growth: "+12%",
      icon: <FaUsers />,
      colorScheme: "yellow",
    },
    {
      title: "Active Trainers",
      value: data?.totalTeachers,
      growth: "+3%",
      icon: <FaUserTie />,
      colorScheme: "violet",
    },
    {
      title: "Active Courses",
      value: data?.totalCourses,
      growth: "+5%",
      icon: <FaBookOpen />,
      colorScheme: "emerald",
    },
    {
      title: "Active Batches",
      value: data?.totalBatches,
      growth: "+8%",
      icon: <FaLayerGroup />,
      colorScheme: "orange",
    },
  ];

  const recentColumns = [
    {
      header: "Student",
      key: "name",
      render: (student) => (
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-800 border border-yellow-300">
            {student?.name?.charAt(0) || "S"}
          </div>
          <div>
            <h4 className="font-bold text-slate-900">{student?.name}</h4>
            <p className="text-xs text-slate-400">Recent Enrollee</p>
          </div>
        </div>
      ),
    },
    {
      header: "Course",
      key: "course",
      render: (student) => <span className="max-w-[200px] truncate block font-medium">{student?.course}</span>,
    },
    {
      header: "Batch",
      key: "batch",
      render: (student) => <span className="max-w-[160px] truncate block text-slate-600">{student?.batch}</span>,
    },
    {
      header: "Status",
      key: "status",
      render: (student) => <PortalBadge variant={student?.status}>{student?.status}</PortalBadge>,
    },
  ];

  if (statsLoading || classesLoading || annoucementsLoading || activitiesLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Premium Executive Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[32px] bg-slate-900 border border-slate-800 p-6 sm:p-8 lg:p-10 text-white shadow-2xl"
      >
        <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400/15 border border-yellow-400/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow-300 backdrop-blur-md">
              <FaChartLine />
              Admin Command Center
            </span>

            <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight text-white">
              Welcome Back,{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Admin 👋
              </span>
            </h1>

            <p className="mt-3 text-slate-300 font-medium leading-relaxed text-sm sm:text-base">
              Overview student admissions, course enrollments, live classes, and academy operations in real-time.
            </p>
          </div>

          {/* Quick Overview Summary Badge */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md lg:w-80 shadow-inner">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-bold text-sm tracking-wide text-white">Student Metrics</h3>
              <FaBell className="text-yellow-400" />
            </div>

            <div className="mt-4 space-y-3 text-sm font-semibold">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400" /> Approved
                </span>
                <span className="font-extrabold text-base text-yellow-300">{data?.approvedStudents || 0}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-2">
                  <FaClock className="text-amber-400" /> Pending
                </span>
                <span className="font-extrabold text-base text-yellow-300">{data?.pendingStudents || 0}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-2">
                  <FaUserSlash className="text-rose-400" /> Blocked
                </span>
                <span className="font-extrabold text-base text-yellow-300">{data?.blockedStudents || 0}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Performance Statistics */}
      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <PortalStatCard
            key={item.title}
            index={index}
            title={item.title}
            value={item.value}
            growth={item.growth}
            icon={item.icon}
            colorScheme={item.colorScheme}
          />
        ))}
      </section>

      {/* Analytics Chart & Quick Actions Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Revenue Overview Widget */}
        <PortalCard className="lg:col-span-2 relative" padding="p-6 sm:p-8">
          <CommingSoon />
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Revenue & Enrollment Analytics</h3>
              <p className="text-xs text-slate-400 mt-0.5">Monthly breakdown of student registrations</p>
            </div>
            <button className="rounded-xl border border-slate-200 px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50">
              This Year
            </button>
          </div>

          <div className="mt-8 flex h-60 items-end justify-between gap-3 pt-6 border-t border-slate-100">
            {[45, 60, 80, 70, 95, 75, 100, 88, 110, 95, 120, 130].map((height, idx) => (
              <motion.div
                key={idx}
                initial={{ height: 0 }}
                animate={{ height }}
                transition={{ delay: idx * 0.04, duration: 0.5 }}
                className="flex-1 rounded-t-xl bg-gradient-to-t from-yellow-400 to-amber-500 opacity-90 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>

          <div className="mt-4 flex justify-between text-xs font-semibold text-slate-400">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </PortalCard>

        {/* Quick Actions Card */}
        <PortalCard header="Quick Actions">
          <div className="grid grid-cols-2 gap-3.5">
            {quickActions.map(({ action, path, icon: Icon }) => (
              <Link
                key={action}
                href={path}
                className="group flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-yellow-50 hover:border-yellow-400 transition-all text-center min-h-[90px]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-yellow-600 group-hover:bg-yellow-400 group-hover:text-slate-950 transition-all shadow-xs mb-2 border border-yellow-200">
                  <Icon className="text-base" />
                </div>
                <span className="text-xs font-bold text-slate-800 group-hover:text-yellow-800">{action}</span>
              </Link>
            ))}
          </div>
        </PortalCard>
      </div>

      {/* Recent Admissions & Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Admissions Table */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between px-1">
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Recent Admissions</h2>
              <p className="text-xs text-slate-400">Latest registered student profiles</p>
            </div>
            <PortalButton
              variant="yellowOutline"
              size="sm"
              onClick={() => router.push("/admin-panel/student")}
            >
              View All Students
            </PortalButton>
          </div>

          <PortalTable
            columns={recentColumns}
            data={recentStudents || []}
            emptyTitle="No recent admissions"
            emptyDescription="New student registrations will appear here."
            renderMobileCard={(student) => (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-800 border border-yellow-300">
                      {student?.name?.charAt(0) || "S"}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{student?.name}</h4>
                      <p className="text-xs text-slate-400">{student?.course}</p>
                    </div>
                  </div>
                  <PortalBadge variant={student?.status}>{student?.status}</PortalBadge>
                </div>
                <div className="text-xs text-slate-500 pt-2 border-t border-slate-100 flex justify-between">
                  <span>Batch: <strong className="text-slate-700">{student?.batch}</strong></span>
                </div>
              </div>
            )}
          />
        </div>

        {/* Live Classes & Announcements */}
        <div className="space-y-6">
          {/* Today's Live Classes */}
          <PortalCard header="Today's Live Classes">
            <div className="space-y-3.5">
              {classes?.length > 0 ? (
                classes.slice(0, 3).map((item) => (
                  <div
                    key={item?._id}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item?.title}</h4>
                      <p className="text-xs text-yellow-700 font-semibold mt-1">
                        {formatISTDateTime(item?.meetingDate)}
                      </p>
                    </div>
                    <a
                      href={item?.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 font-bold hover:bg-yellow-300 shadow-xs"
                    >
                      <FaVideo className="text-sm" />
                    </a>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600 text-xl mb-2 border border-yellow-200">
                    <FaVideo />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">No Upcoming Classes</p>
                  <p className="text-xs text-slate-400 mt-1">No live classes scheduled for today.</p>
                </div>
              )}
            </div>
          </PortalCard>

          {/* Announcements */}
          <PortalCard header="Recent Announcements">
            <div className="space-y-3">
              {announcements?.length > 0 ? (
                announcements.slice(0, 3).map((item) => (
                  <div
                    key={item?._id || item?.title}
                    className="p-3.5 rounded-2xl border border-slate-100 bg-white"
                  >
                    <h4 className="font-bold text-slate-900 text-sm">{item?.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {formatISTDateTime(item?.publishAt)}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <FaBullhorn className="mx-auto text-2xl text-slate-300 mb-2" />
                  <p className="text-sm font-semibold text-slate-700">No Announcements</p>
                  <p className="text-xs text-slate-400 mt-1">You are all caught up.</p>
                </div>
              )}
            </div>
          </PortalCard>
        </div>
      </div>
    </div>
  );
}