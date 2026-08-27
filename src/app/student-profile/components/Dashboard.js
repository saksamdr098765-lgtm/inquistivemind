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
      title: "Enrolled Batches",
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
    <div className="space-y-8">
      {/* Hero Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 p-6 sm:p-8 text-slate-900 shadow-lg shadow-yellow-200/50"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-900 backdrop-blur-md">
              Student Dashboard
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Welcome Back, {capitalizeFirstLetter(user?.fullName)} 👋
            </h1>
            <p className="mt-2 text-slate-800 font-medium text-sm leading-relaxed">
              Continue your French language learning journey and track your batch schedule and course progress.
            </p>

            <div className="mt-6">
              <PortalButton
                variant="secondary"
                icon={FaArrowRight}
                iconPosition="right"
                onClick={() => router.push("/student-profile/batches")}
              >
                Resume Learning
              </PortalButton>
            </div>
          </div>

          {/* Current Course Overview Pill */}
          <div className="rounded-2xl border border-slate-900/10 bg-slate-900/5 p-5 backdrop-blur-md lg:w-80 shadow-inner">
            <p className="text-xs uppercase font-bold tracking-wider text-slate-800">Current Course</p>
            <h3 className="mt-1 text-xl font-extrabold text-slate-900">French Language Academy</h3>
            <p className="text-xs text-slate-700 font-medium">Intermediate Level</p>

            <div className="mt-4">
              <PortalProgressBar progress={78} label="Course Progress" color="from-yellow-500 to-amber-600" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Metrics Stats Grid */}
      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Course Progress Widget */}
        <PortalCard header="Current Learning Progress" className="relative">
          <CommingSoon />
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-bold text-slate-900">French Language • Intermediate</h4>
              <p className="text-xs text-slate-400 mt-0.5">Comprehensive speaking, grammar & vocabulary</p>
            </div>

            <PortalProgressBar progress={78} label="Overall Completion" />

            <div className="grid grid-cols-2 gap-3 pt-3">
              <div className="rounded-2xl bg-yellow-50/80 p-3.5 border border-yellow-200/80">
                <span className="text-[11px] font-bold uppercase text-yellow-800">Current Module</span>
                <h5 className="font-bold text-slate-800 text-sm mt-0.5">Module 8 of 10</h5>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3.5 border border-slate-100">
                <span className="text-[11px] font-semibold uppercase text-slate-400">Completion</span>
                <h5 className="font-bold text-yellow-600 text-sm mt-0.5">78% Complete</h5>
              </div>
            </div>

            <div className="pt-2">
              <PortalButton size="sm">Continue Next Module</PortalButton>
            </div>
          </div>
        </PortalCard>

        {/* Live Classes Widget */}
        <PortalCard header="Upcoming Live Classes">
          {classes && classes.length > 0 ? (
            <div className="space-y-3">
              {classes.map((item) => (
                <div
                  key={item._id}
                  className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-yellow-400 transition-all"
                >
                  <div>
                    <PortalBadge variant="active" size="sm">Upcoming</PortalBadge>
                    <h4 className="font-bold text-slate-900 text-sm mt-1.5">{item.title}</h4>
                    <p className="text-xs text-yellow-600 font-semibold mt-0.5">
                      {formatISTDateTime(item.meetingDate)}
                    </p>
                  </div>

                  <a
                    href={item.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-xs font-extrabold text-slate-900 hover:bg-yellow-500 transition-colors shadow-xs"
                  >
                    <FaVideo />
                    <span>Join Live</span>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600 border border-yellow-200 text-2xl mb-3">
                <FaVideo />
              </div>
              <h4 className="font-bold text-slate-800 text-base">No Upcoming Classes</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                No live sessions scheduled right now. Check back later.
              </p>
            </div>
          )}
        </PortalCard>
      </div>

      {/* Streak and Announcements Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Daily Streak Card */}
        <PortalCard header="Learning Activity Streak" className="relative">
          <CommingSoon />
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-50 text-2xl text-yellow-600 border border-yellow-200">
                <FaFire />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">15 Day Active Streak 🔥</h3>
                <p className="text-xs text-slate-400">Consistent daily study bonus</p>
              </div>
            </div>

            <PortalProgressBar progress={80} label="Weekly Goal (8/10 Lessons)" />
          </div>
        </PortalCard>

        {/* Announcements List */}
        <PortalCard header="Academy Announcements">
          {announcements && announcements.length > 0 ? (
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {announcements.map((item) => (
                <div
                  key={item._id}
                  className="p-4 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white transition-all space-y-2"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-slate-700">
                      {item.createdBy?.fullName || "Academy Admin"}
                    </span>
                    <span>{formatISTDateTime(item.createdAt)}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.message}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <FaBullhorn className="mx-auto text-3xl text-slate-300 mb-2" />
              <h4 className="font-bold text-slate-800 text-sm">No Announcements</h4>
              <p className="text-xs text-slate-400 mt-1">You're all caught up for now.</p>
            </div>
          )}
        </PortalCard>
      </div>
    </div>
  );
}