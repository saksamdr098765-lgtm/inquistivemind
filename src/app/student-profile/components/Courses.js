"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaBookOpen, FaArrowRight } from "react-icons/fa";

import { useGetStudentBatches } from "@/Hooks/useGetStudentBatches";
import capitalizeFirstLetter from "@/Utils/captilizeFirstLetter";
import CoursesSkeleton from "@/app/Skeletons/CourseSkeleton";

import PortalButton from "@/app/Components/portal-ui/PortalButton";
import PortalEmptyState from "@/app/Components/portal-ui/PortalEmptyState";

export default function Courses() {
  const { data: batches, isLoading } = useGetStudentBatches();
  const router = useRouter();

  if (isLoading) return <CoursesSkeleton />;

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
            Student Portal
          </span>
          <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            My Enrolled Courses
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Access your course materials, lesson notes, and active learning modules.
          </p>
        </div>

        <div className="relative flex gap-3 w-full sm:w-auto">
          <div className="rounded-xl sm:rounded-2xl border border-white/30 bg-white/15 p-2.5 sm:p-3.5 backdrop-blur-md text-center min-w-[100px] sm:min-w-[110px] w-full sm:w-auto">
            <p className="text-[10px] uppercase font-bold text-amber-100">Enrolled</p>
            <p className="mt-0.5 text-base sm:text-xl font-extrabold text-white">{batches?.length || 0}</p>
          </div>
        </div>
      </motion.div>

      {/* Courses Cards Grid */}
      {batches && batches.length > 0 ? (
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {batches.map(({ course }) => (
            <motion.div
              key={course._id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden rounded-2xl sm:rounded-[28px] border border-slate-200/90 bg-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-36 sm:h-44 overflow-hidden bg-gradient-to-br from-yellow-400 to-amber-500">
                  {course?.thumbnail?.url ? (
                    <img
                      src={course.thumbnail.url}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <FaBookOpen className="text-4xl sm:text-5xl text-slate-950/50" />
                    </div>
                  )}

                  <span className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] sm:text-xs font-bold text-yellow-800 border border-yellow-300">
                    {course?.category || "Course"}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                  <h3 className="line-clamp-2 text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                    {capitalizeFirstLetter(course?.title)}
                  </h3>

                  <p className="line-clamp-2 text-xs text-slate-500 min-h-[32px]">
                    {course?.shortDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                    <div className="rounded-xl sm:rounded-2xl bg-slate-50 p-2.5 sm:p-3 border border-slate-100">
                      <p className="text-[10px] sm:text-[11px] font-semibold uppercase text-slate-400">Duration</p>
                      <p className="mt-0.5 font-bold text-slate-800 text-xs sm:text-sm">
                        {course?.durationInMonths} Months
                      </p>
                    </div>

                    <div className="rounded-xl sm:rounded-2xl bg-yellow-50/60 p-2.5 sm:p-3 border border-yellow-200/60">
                      <p className="text-[10px] sm:text-[11px] font-bold uppercase text-yellow-800">Level</p>
                      <p className="mt-0.5 font-bold text-slate-900 text-xs sm:text-sm capitalize">
                        {course?.level}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-3 sm:p-4 border-t border-slate-100 bg-slate-50/50">
                <PortalButton
                  className="w-full"
                  size="sm"
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