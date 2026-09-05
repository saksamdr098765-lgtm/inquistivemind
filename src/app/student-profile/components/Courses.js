"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaBookOpen, FaArrowRight } from "react-icons/fa";

import { useGetStudentBatches } from "@/Hooks/useGetStudentBatches";
import capitalizeFirstLetter from "@/Utils/captilizeFirstLetter";
import CoursesSkeleton from "@/app/Skeletons/CourseSkeleton";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import PortalEmptyState from "@/app/Components/portal-ui/PortalEmptyState";

export default function Courses() {
  const { data: batches, isLoading } = useGetStudentBatches();
  const router = useRouter();

  if (isLoading) return <CoursesSkeleton />;

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
            Student Portal
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            My Enrolled{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Courses
            </span>
          </h1>
          <p className="mt-1 text-slate-300 font-medium text-sm max-w-xl">
            Access your course materials, lesson notes, and active learning modules.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md text-center min-w-[110px]">
            <p className="text-[10px] uppercase font-bold text-slate-400">Enrolled</p>
            <p className="mt-1 text-xl font-extrabold text-yellow-300">{batches?.length || 0}</p>
          </div>
        </div>
      </motion.div>

      {/* Courses Cards Grid */}
      {batches && batches.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {batches.map(({ course }) => (
            <motion.div
              key={course._id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-yellow-400 to-amber-500">
                  {course?.thumbnail?.url ? (
                    <img
                      src={course.thumbnail.url}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <FaBookOpen className="text-5xl text-slate-950/50" />
                    </div>
                  )}

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-yellow-800 border border-yellow-300">
                    {course?.category || "Course"}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <h3 className="line-clamp-2 text-lg font-extrabold text-slate-900 leading-snug">
                    {capitalizeFirstLetter(course?.title)}
                  </h3>

                  <p className="line-clamp-2 text-xs text-slate-500 min-h-[32px]">
                    {course?.shortDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-2xl bg-slate-50 p-3 border border-slate-100">
                      <p className="text-[11px] font-semibold uppercase text-slate-400">Duration</p>
                      <p className="mt-0.5 font-bold text-slate-800 text-sm">
                        {course?.durationInMonths} Months
                      </p>
                    </div>

                    <div className="rounded-2xl bg-yellow-50/60 p-3 border border-yellow-200/60">
                      <p className="text-[11px] font-bold uppercase text-yellow-800">Level</p>
                      <p className="mt-0.5 font-bold text-slate-900 text-sm capitalize">
                        {course?.level}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                <PortalButton
                  className="w-full"
                  icon={FaArrowRight}
                  iconPosition="right"
                  onClick={() => router.push("/student-profile/batches")}
                >
                  Continue Learning
                </PortalButton>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <PortalEmptyState
          icon={FaBookOpen}
          title="No Enrolled Courses Found"
          description="You are currently not enrolled in any course. Explore our academy courses to get started."
          actionText="Browse Courses"
          onAction={() => router.push("/courses")}
        />
      )}
    </div>
  );
}