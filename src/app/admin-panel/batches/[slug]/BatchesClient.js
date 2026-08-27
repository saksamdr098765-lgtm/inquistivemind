"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaLayerGroup,
  FaPlus,
  FaUsers,
  FaClock,
  FaChalkboardTeacher,
  FaEye,
  FaEdit,
} from "react-icons/fa";

import { useAdminGetAllBatches } from "@/Hooks/useAdminGetBatches";
import BatchesSkeleton from "@/app/Skeletons/BatchSkeleton";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalStatCard from "@/app/Components/portal-ui/PortalStatCard";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import PortalEmptyState from "@/app/Components/portal-ui/PortalEmptyState";

export default function BatchesClient({ slug }) {
  const router = useRouter();
  const { data: batches, isLoading } = useAdminGetAllBatches(slug);

  if (isLoading) return <BatchesSkeleton />;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[32px] bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div>
          <span className="inline-flex rounded-full bg-yellow-400/15 border border-yellow-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300 backdrop-blur-md">
            Batch Operations
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Manage{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Batches
            </span>
          </h1>
          <p className="mt-1 text-slate-300 font-medium text-sm max-w-xl">
            Create classroom & online live batches, schedule timings, and assign trainers.
          </p>
        </div>

        <PortalButton
          variant="primary"
          icon={FaPlus}
          onClick={() => router.push("/admin-panel/add-batch")}
        >
          Create New Batch
        </PortalButton>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid gap-5 sm:grid-cols-3">
        <PortalStatCard
          title="Total Batches"
          value={batches?.length || 0}
          icon={<FaLayerGroup />}
          colorScheme="yellow"
        />
        <PortalStatCard
          title="Enrolled Students"
          value={batches?.reduce((sum, batch) => sum + (batch?.students?.length || 0), 0) || 0}
          icon={<FaUsers />}
          colorScheme="emerald"
        />
        <PortalStatCard
          title="Assigned Trainers"
          value={batches?.reduce((sum, batch) => sum + (batch?.trainers?.length || 0), 0) || 0}
          icon={<FaChalkboardTeacher />}
          colorScheme="violet"
        />
      </div>

      {/* Batches Cards */}
      {batches && batches.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

                <div className="mt-3">
                  <PortalBadge variant={batch.enrollmentOpen ? "active" : "blocked"} size="sm">
                    {batch.enrollmentOpen ? "Enrollment Open" : "Enrollment Closed"}
                  </PortalBadge>
                </div>

                <p className="mt-4 line-clamp-2 text-xs text-slate-500 min-h-[32px]">
                  {batch.description || "No specific batch description configured."}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-yellow-50/60 p-3 border border-yellow-200/60">
                    <p className="text-[11px] font-bold uppercase text-yellow-800">Students</p>
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
                    <span>Days</span>
                    <strong className="text-slate-800">
                      {batch?.schedule?.days?.length ? batch.schedule.days.join(", ") : "Not Set"}
                    </strong>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Timing</span>
                    <strong className="text-slate-800">
                      {batch?.schedule?.startTime || "--"} - {batch?.schedule?.endTime || "--"}
                    </strong>
                  </div>
                  <div className="flex justify-between text-slate-500 capitalize">
                    <span>Platform</span>
                    <strong className="text-slate-800">{batch.meetingPlatform}</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
                <button
                  onClick={() =>
                    router.push(`/admin-panel/batches/${slug}/batch?batchId=${batch._id}`)
                  }
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-blue-50 py-2.5 text-blue-700 font-bold text-xs hover:bg-blue-100 transition-colors"
                >
                  <FaEye /> View Detail
                </button>

                <button
                  onClick={() =>
                    router.push(`/admin-panel/batches/${slug}/edit-batch?batchId=${batch._id}`)
                  }
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-yellow-50 text-yellow-800 border border-yellow-200 font-bold text-xs hover:bg-yellow-100 transition-colors"
                >
                  <FaEdit /> Edit
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <PortalEmptyState
          icon={FaLayerGroup}
          title="No Batches Found"
          description="Create your first batch for this course to begin assigning students and scheduling live classes."
          actionText="Create New Batch"
          onAction={() => router.push("/admin-panel/add-batch")}
        />
      )}
    </div>
  );
}