"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaFire,
  FaArrowRight,
  FaBullhorn,
  FaVideo,
  FaChalkboardTeacher,
  FaUsers,
  FaStickyNote,
  FaFilePdf,
} from "react-icons/fa";

import { useStudentsAllAnnouncements } from "@/Hooks/useStudentAllAnnoucements";
import { useStudentsAllClasses } from "@/Hooks/useStudentAllClasses";
import { useStudentStatics } from "@/Hooks/useStudentsStatics";
import capitalizeFirstLetter from "@/Utils/captilizeFirstLetter";
import { formatISTDateTime } from "@/Utils/formatDate";

import CommingSoon from "@/app/Components/ui/CommingSoon";
import DashboardSkeleton from "@/app/Skeletons/DashBoardSkeleton";
import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalStatCard from "@/app/Components/portal-ui/PortalStatCard";
import PortalProgressBar from "@/app/Components/portal-ui/PortalProgressBar";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";

export default function Dashboard({ user }) {
  const { data: announcements, isLoading: announcementsLoading } = useStudentsAllAnnouncements();
  const { data: classes, isLoading: classesLoading } = useStudentsAllClasses();
  const { data: statics, isLoading: staticsLoading } = useStudentStatics();
  const router = useRouter();

  const stats = [
    {
      title: "Live Classes",
      value: statics?.classes || 0,
      icon: <FaChalkboardTeacher />,
      colorScheme: "yellow",
    },
    {
      title: "Batches",
      value: statics?.batches || 0,
      icon: <FaUsers />,
      colorScheme: "violet",
    },
    {
      title: "Class Notes",
      value: statics?.notesCount || 0,
      icon: <FaStickyNote />,
      colorScheme: "orange",
    },
    {
      title: "PDF Resources",
      value: statics?.pdfsCount || 0,
      icon: <FaFilePdf />,
      colorScheme: "emerald",
    },
  ];

  if (announcementsLoading || classesLoading || staticsLoading) {
    return <DashboardSkeleton />;
  }

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
              Student Dashboard
            </span>
            <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Welcome Back, {capitalizeFirstLetter(user?.fullName)} 👋
            </h1>
            <p className="mt-1 sm:mt-2 text-orange-100 font-medium text-xs sm:text-sm leading-relaxed">
              Track your batch schedule, class materials, and learning progress.
            </p>

            <div className="mt-4 sm:mt-6">
              <PortalButton
                variant="secondary"
                size="sm"
                icon={FaArrowRight}
                iconPosition="right"
                onClick={() => router.push("/student-profile/batches")}
              >
                Resume Learning
              </PortalButton>
            </div>
          </div>

          {/* Current Course Overview Pill (Desktop/Tablet visible) */}
          <div className="hidden lg:block rounded-2xl border border-white/20 bg-white/10 p-4 sm:p-5 backdrop-blur-md lg:w-80 shadow-inner text-white">
            <p className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-orange-100">Current Course</p>
            <h3 className="mt-0.5 text-lg sm:text-xl font-extrabold text-white">French Language Academy</h3>
            <p className="text-xs text-orange-100 font-medium">Intermediate Level</p>

            <div className="mt-3">
              <PortalProgressBar progress={78} label="Course Progress" color="from-yellow-400 to-amber-500" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Metrics Stats Grid (2x2 on Mobile, 4-col on Desktop) */}
      <section className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {stats.map((item, index) => (
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

      {/* Current Course & Live Classes Grid */}
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Live Classes Widget */}
        <PortalCard header="Upcoming Live Classes" padding="p-4 sm:p-6">
          {classes && classes.length > 0 ? (
            <div className="space-y-2.5">
              {classes.map((item) => (
                <div
                  key={item._id}
                  className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/80 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:border-yellow-400 transition-all"
                >
                  <div>
                    <PortalBadge variant="active" size="sm">Upcoming</PortalBadge>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm mt-1">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-yellow-600 font-semibold mt-0.5">
                      {formatISTDateTime(item.meetingDate)}
                    </p>
                  </div>

                  <a
                    href={item.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-yellow-400 px-3.5 py-2 text-xs font-extrabold text-slate-900 hover:bg-yellow-500 transition-colors shadow-xs shrink-0"
                  >
                    <FaVideo />
                    <span>Join Live</span>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 sm:py-8">
              <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600 border border-yellow-200 text-xl sm:text-2xl mb-2 sm:mb-3">
                <FaVideo />
              </div>
              <h4 className="font-bold text-slate-800 text-sm sm:text-base">No Upcoming Classes</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                No live sessions scheduled right now. Check back later.
              </p>
            </div>
          )}
        </PortalCard>

        {/* Course Progress Widget */}
        <PortalCard header="Current Learning Progress" className="relative" padding="p-4 sm:p-6">
          <CommingSoon />
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">French Language • Intermediate</h4>
              <p className="text-xs text-slate-400 mt-0.5">Comprehensive speaking, grammar & vocabulary</p>
            </div>

            <PortalProgressBar progress={78} label="Overall Completion" />

            <div className="grid grid-cols-2 gap-2.5 pt-1 sm:pt-3">
              <div className="rounded-xl sm:rounded-2xl bg-yellow-50/80 p-3 border border-yellow-200/80">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase text-yellow-800">Current Module</span>
                <h5 className="font-bold text-slate-800 text-xs sm:text-sm mt-0.5">Module 8 of 10</h5>
              </div>
              <div className="rounded-xl sm:rounded-2xl bg-slate-50 p-3 border border-slate-100">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase text-slate-400">Completion</span>
                <h5 className="font-bold text-yellow-600 text-xs sm:text-sm mt-0.5">78% Complete</h5>
              </div>
            </div>
          </div>
        </PortalCard>
      </div>

      {/* Streak and Announcements Grid */}
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Announcements List */}
        <PortalCard header="Academy Announcements" padding="p-4 sm:p-6">
          {announcements && announcements.length > 0 ? (
            <div className="space-y-2.5 max-h-64 sm:max-h-96 overflow-y-auto pr-1">
              {announcements.map((item) => (
                <div
                  key={item._id}
                  className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white transition-all space-y-1 sm:space-y-2"
                >
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-700">
                      {item.createdBy?.fullName || "Academy Admin"}
                    </span>
                    <span>{formatISTDateTime(item.createdAt)}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.message}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 sm:py-8">
              <FaBullhorn className="mx-auto text-2xl sm:text-3xl text-slate-300 mb-2" />
              <h4 className="font-bold text-slate-800 text-xs sm:text-sm">No Announcements</h4>
              <p className="text-xs text-slate-400 mt-1">You're all caught up for now.</p>
            </div>
          )}
        </PortalCard>

        {/* Daily Streak Card */}
        <PortalCard header="Learning Activity Streak" className="relative" padding="p-4 sm:p-6">
          <CommingSoon />
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-yellow-50 text-xl sm:text-2xl text-yellow-600 border border-yellow-200">
                <FaFire />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">15 Day Active Streak 🔥</h3>
                <p className="text-xs text-slate-400">Consistent daily study bonus</p>
              </div>
            </div>

            <PortalProgressBar progress={80} label="Weekly Goal (8/10 Lessons)" />
          </div>
        </PortalCard>
      </div>
    </div>
  );
}