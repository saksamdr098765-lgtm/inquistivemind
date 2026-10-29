"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaUsers, FaCalendarAlt, FaClock, FaChalkboardTeacher, FaVideo, FaBookOpen } from "react-icons/fa";

import { useTeacherBatches } from "@/Hooks/useTeacherBatches";
import { formatISTDateTime } from "@/Utils/formatDate";
import capitalizeFirstLetter from "@/Utils/captilizeFirstLetter";
import BatchesSkeleton from "@/app/Skeletons/BatchSkeleton";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import PortalEmptyState from "@/app/Components/portal-ui/PortalEmptyState";

export default function TeacherBatches() {
  const router = useRouter();
  const { data: batches, isLoading } = useTeacherBatches();

  if (isLoading) return <BatchesSkeleton />;

  const activeCount = (batches || []).filter((b) => b.status === "active").length;
  const totalStudents = (batches || []).reduce((acc, b) => acc + (b.students?.length || 0), 0);

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Hero Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-500 to-yellow-500 p-5 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6"
      >
        <div className="absolute -right-10 -top-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />
        <div className="relative">
          <span className="inline-flex rounded-full bg-white/20 border border-white/30 px-3 py-0.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
            Teacher Portal
          </span>
          <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Assigned Batches
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            View assigned classrooms, meeting platforms, student rosters, and schedules.
          </p>
        </div>

        <div className="relative grid grid-cols-2 gap-2.5 sm:gap-3 w-full sm:w-auto">
          <div className="rounded-xl sm:rounded-2xl border border-white/30 bg-white/15 p-2.5 sm:p-3.5 backdrop-blur-md text-center min-w-[100px]">
            <p className="text-[10px] uppercase font-bold text-amber-100">Batches</p>
            <p className="mt-0.5 text-base sm:text-xl font-extrabold text-white">
              {batches?.length || 0}
            </p>
          </div>
          <div className="rounded-xl sm:rounded-2xl border border-white/30 bg-white/15 p-2.5 sm:p-3.5 backdrop-blur-md text-center min-w-[100px]">
            <p className="text-[10px] uppercase font-bold text-amber-100">Students</p>
            <p className="mt-0.5 text-base sm:text-xl font-extrabold text-white">
              {totalStudents}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Batches List */}
      {!batches || batches.length === 0 ? (
        <PortalCard padding="p-8">
          <PortalEmptyState
            title="No Assigned Batches Yet"
            description="You currently have no batches assigned by the administration. As soon as you are assigned to a class, it will appear here."
            icon={FaUsers}
          />
        </PortalCard>
      ) : (
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {batches.map((batch) => (
            <motion.div
              key={batch._id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl sm:rounded-[28px] border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                    {batch.name}
                  </h3>
                  <PortalBadge variant={batch.status === "active" ? "active" : "upcoming"}>
                    {batch.status || "Upcoming"}
                  </PortalBadge>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {batch.course?.title || "Language Course"}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs">
                  <div className="rounded-xl bg-yellow-50/70 p-2.5 border border-yellow-200/60">
                    <span className="text-[10px] uppercase font-bold text-yellow-800">Enrolled</span>
                    <p className="font-extrabold text-slate-900 mt-0.5">
                      {batch.students?.length || 0} Students
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-200/70">
                    <span className="text-[10px] uppercase font-semibold text-slate-500">Platform</span>
                    <p className="font-bold text-slate-800 mt-0.5 capitalize">
                      {batch.meetingPlatform || "Zoom"}
                    </p>
                  </div>
                </div>

                {batch.schedule && (batch.schedule.days?.length > 0 || batch.schedule.startTime) && (
                  <div className="mt-3 p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 text-xs">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Timetable</span>
                    <p className="text-slate-700 font-medium mt-0.5">
                      {batch.schedule.days?.length > 0 ? batch.schedule.days.join(", ") : "Weekly"}
                      {batch.schedule.startTime && ` • ${batch.schedule.startTime}`}
                      {batch.schedule.endTime && ` - ${batch.schedule.endTime}`}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                <PortalButton
                  variant="secondary"
                  size="sm"
                  icon={FaVideo}
                  onClick={() => router.push(`/teacher-profile/classes?batchId=${batch._id}`)}
                  className="w-full justify-center"
                >
                  Live Classes
                </PortalButton>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
