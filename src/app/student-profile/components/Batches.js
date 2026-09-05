"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaEye, FaUsers } from "react-icons/fa";

import { useGetStudentBatches } from "@/Hooks/useGetStudentBatches";
import { formatISTDateTime } from "@/Utils/formatDate";
import BatchesSkeleton from "@/app/Skeletons/BatchSkeleton";

import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import PortalEmptyState from "@/app/Components/portal-ui/PortalEmptyState";

export default function Batches() {
  const { data: batches, isLoading } = useGetStudentBatches();
  const router = useRouter();

  if (isLoading) return <BatchesSkeleton />;

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
            Student Dashboard
          </span>
          <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            My Enrolled Batches
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Access assigned live classroom batches, schedule details, and meeting platforms.
          </p>
        </div>

        <div className="relative grid grid-cols-2 gap-2.5 sm:gap-3 w-full sm:w-auto">
          <div className="rounded-xl sm:rounded-2xl border border-white/30 bg-white/15 p-2.5 sm:p-3.5 backdrop-blur-md text-center min-w-[100px]">
            <p className="text-[10px] uppercase font-bold text-amber-100">Batches</p>
            <p className="mt-0.5 text-base sm:text-xl font-extrabold text-white">{batches?.length || 0}</p>
          </div>
          <div className="rounded-xl sm:rounded-2xl border border-white/30 bg-white/15 p-2.5 sm:p-3.5 backdrop-blur-md text-center min-w-[100px]">
            <p className="text-[10px] uppercase font-bold text-amber-100">Active</p>
            <p className="mt-0.5 text-base sm:text-xl font-extrabold text-white">
              {batches?.filter((b) => b.status === "active").length || 0}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Batches Cards Grid */}
      {batches && batches.length > 0 ? (
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {batches.map((batch) => (
            <motion.div
              key={batch._id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl sm:rounded-[28px] border border-slate-200/90 bg-white p-4 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-base sm:text-lg font-extrabold text-slate-900">
                      {batch.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{batch.course?.title}</p>
                  </div>
                  <PortalBadge variant={batch.status}>{batch.status}</PortalBadge>
                </div>

                <p className="mt-2 sm:mt-3 line-clamp-2 text-xs text-slate-500 min-h-[32px]">
                  {batch.description || "Active batch classroom environment."}
                </p>

                <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="rounded-xl sm:rounded-2xl bg-yellow-50/60 p-2.5 sm:p-3 border border-yellow-200/60">
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase text-yellow-800">Class Size</p>
                    <p className="mt-0.5 font-extrabold text-slate-900 text-xs sm:text-sm">
                      {batch.students?.length || 0} / {batch.maxStudents}
                    </p>
                  </div>

                  <div className="rounded-xl sm:rounded-2xl bg-slate-50 p-2.5 sm:p-3 border border-slate-100">
                    <p className="text-[10px] sm:text-[11px] font-semibold uppercase text-slate-400">Trainers</p>
                    <p className="mt-0.5 font-bold text-slate-800 text-xs sm:text-sm">
                      {batch.trainers?.length || 0}
                    </p>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 rounded-xl sm:rounded-2xl bg-slate-50/70 p-3 border border-slate-100 space-y-1.5 sm:space-y-2 text-xs">
                  <div className="flex justify-between text-slate-500">
                    <span>Start Date</span>
                    <strong className="text-slate-800">
                      {formatISTDateTime(batch.startDate).split(",")[0]}
                    </strong>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Schedule</span>
                    <strong className="text-slate-800">
                      {batch?.schedule?.days?.length ? batch.schedule.days.join(", ") : "TBD"}
                    </strong>
                  </div>
                  <div className="flex justify-between text-slate-500 capitalize">
                    <span>Platform</span>
                    <strong className="text-slate-800">{batch.meetingPlatform}</strong>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 sm:mt-5 border-t border-slate-100 pt-3 sm:pt-4">
                <PortalButton
                  className="w-full"
                  size="sm"
                  icon={FaEye}
                  onClick={() => router.push(`/student-profile/classes?batchId=${batch._id}`)}
                >
                  Enter Batch Room
                </PortalButton>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <PortalEmptyState
          icon={FaUsers}
          title="No Batches Assigned"
          description="Your assigned learning batches will appear here once registered."
        />
      )}
    </div>
  );
}
