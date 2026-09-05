"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaEye, FaUsers } from "react-icons/fa";

import { useGetStudentBatches } from "@/Hooks/useGetStudentBatches";
import { formatISTDateTime } from "@/Utils/formatDate";
import BatchesSkeleton from "@/app/Skeletons/BatchSkeleton";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import PortalEmptyState from "@/app/Components/portal-ui/PortalEmptyState";

export default function Batches() {
  const { data: batches, isLoading } = useGetStudentBatches();
  const router = useRouter();

  if (isLoading) return <BatchesSkeleton />;

  return (
    <div className="space-y-8">
      {/* Executive Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[32px] bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div>
          <span className="inline-flex rounded-full bg-yellow-400/15 border border-yellow-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300 backdrop-blur-md">
            Student Dashboard
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            My Enrolled{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Batches
            </span>
          </h1>
          <p className="mt-1 text-slate-300 font-medium text-sm max-w-xl">
            Access assigned live classroom batches, schedule details, and meeting platforms.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md text-center min-w-[110px]">
            <p className="text-[10px] uppercase font-bold text-slate-400">Batches</p>
            <p className="mt-1 text-xl font-extrabold text-yellow-300">{batches?.length || 0}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md text-center min-w-[110px]">
            <p className="text-[10px] uppercase font-bold text-slate-400">Active</p>
            <p className="mt-1 text-xl font-extrabold text-yellow-300">
              {batches?.filter((b) => b.status === "active").length || 0}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Batches Cards Grid */}
      {batches && batches.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {batches.map((batch) => (
            <motion.div
              key={batch._id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-[28px] border border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-lg font-extrabold text-slate-900">
                      {batch.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{batch.course?.title}</p>
                  </div>
                  <PortalBadge variant={batch.status}>{batch.status}</PortalBadge>
                </div>

                <p className="mt-3 line-clamp-2 text-xs text-slate-500 min-h-[32px]">
                  {batch.description || "Active batch classroom environment."}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-yellow-50/60 p-3 border border-yellow-200/60">
                    <p className="text-[11px] font-bold uppercase text-yellow-800">Class Size</p>
                    <p className="mt-0.5 font-extrabold text-slate-900 text-sm">
                      {batch.students?.length || 0} / {batch.maxStudents}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-3 border border-slate-100">
                    <p className="text-[11px] font-semibold uppercase text-slate-400">Trainers</p>
                    <p className="mt-0.5 font-bold text-slate-800 text-sm">
                      {batch.trainers?.length || 0}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-slate-50/70 p-3.5 border border-slate-100 space-y-2 text-xs">
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
              <div className="mt-5 border-t border-slate-100 pt-4">
                <PortalButton
                  className="w-full"
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
