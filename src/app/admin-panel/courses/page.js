"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaBookOpen,
  FaPlus,
  FaUsers,
  FaClock,
  FaEdit,
  FaTrash,
  FaEye,
  FaGraduationCap,
  FaSpinner,
} from "react-icons/fa";

import { useAdminGetAllCourses } from "@/Hooks/useAdminGetCourses";
import capitalizeFirstLetter from "@/Utils/captilizeFirstLetter";
import { useAdminGetStats } from "@/Hooks/useAdminGetStats";
import { useDeleteCourseMutation } from "@/app/mutations/coursesMutations";

import CoursesSkeleton from "@/app/Skeletons/CourseSkeleton";
import PortalStatCard from "@/app/Components/portal-ui/PortalStatCard";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import PortalEmptyState from "@/app/Components/portal-ui/PortalEmptyState";

export default function Courses() {
  const router = useRouter();
  const { data: courses, isLoading: courseLoading } = useAdminGetAllCourses();
  const { data: stats, isLoading: statsLoading } = useAdminGetStats();
  const deleteCourse = useDeleteCourseMutation();

  if (courseLoading || statsLoading) return <CoursesSkeleton />;

  return (
    <div className="space-y-4 sm:space-y-6 max-w-7xl mx-auto">
      {/* Executive Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-500 to-yellow-500 p-5 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6"
      >
        <div className="absolute -right-10 -top-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />

        <div className="relative">
          <span className="inline-flex rounded-full bg-white/20 border border-white/30 px-3 py-0.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
            Catalog Management
          </span>
          <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Manage Academy Courses
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Organize modules, pricing, enrollment status, and course materials.
          </p>
        </div>

        <PortalButton
          variant="secondary"
          size="sm"
          icon={FaPlus}
          onClick={() => router.push("/admin-panel/add-course")}
          className="w-full sm:w-auto"
        >
          Add New Course
        </PortalButton>
      </motion.div>

      {/* Course Stats Grid (2x2 on Mobile, 4-col on Desktop) */}
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        <PortalStatCard
          title="Active Courses"
          value={stats?.totalCourses}
          icon={<FaBookOpen />}
          colorScheme="yellow"
        />
        <PortalStatCard
          title="Enrolled Students"
          value={stats?.totalStudents}
          icon={<FaUsers />}
          colorScheme="emerald"
        />
        <PortalStatCard
          title="Active Trainers"
          value={stats?.totalTeachers}
          icon={<FaGraduationCap />}
          colorScheme="orange"
        />
        <PortalStatCard
          title="Active Batches"
          value={stats?.totalBatches}
          icon={<FaClock />}
          colorScheme="violet"
        />
      </div>

      {/* Courses Cards Grid */}
      {courses && courses.length > 0 ? (
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <motion.div
              key={course._id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden rounded-2xl sm:rounded-[28px] border border-slate-200/90 bg-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-yellow-400 to-amber-500">
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

                  <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
                    <PortalBadge variant={course?.enrollmentOpen ? "active" : "blocked"}>
                      {course?.enrollmentOpen ? "Open" : "Closed"}
                    </PortalBadge>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                  <h3 className="line-clamp-2 text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                    {capitalizeFirstLetter(course?.title)}
                  </h3>

                  <p className="line-clamp-2 text-xs text-slate-500 min-h-[32px]">
                    {course?.shortDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                    <div className="rounded-xl sm:rounded-2xl bg-yellow-50/60 p-2.5 sm:p-3 border border-yellow-200/60">
                      <p className="text-[10px] sm:text-[11px] font-bold uppercase text-yellow-800">Price</p>
                      <p className="mt-0.5 font-extrabold text-slate-900 text-sm sm:text-base">₹{course?.price}</p>
                    </div>

                    <div className="rounded-xl sm:rounded-2xl bg-slate-50 p-2.5 sm:p-3 border border-slate-100">
                      <p className="text-[10px] sm:text-[11px] font-semibold uppercase text-slate-400">Duration</p>
                      <p className="mt-0.5 font-bold text-slate-800 text-sm sm:text-base">
                        {course?.durationInMonths} Months
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 pt-2 border-t border-slate-100 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Difficulty Level</span>
                      <span className="font-semibold text-slate-700 capitalize">{course?.level}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Language</span>
                      <span className="font-semibold text-slate-700">{course?.language}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Publish Status</span>
                      <PortalBadge variant={course?.status}>{course?.status}</PortalBadge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-3 sm:p-4 border-t border-slate-100 bg-slate-50/50 flex gap-2">
                <button
                  onClick={() => router.push(`/admin-panel/batches/${course?.slug}`)}
                  className="flex-1 min-h-[38px] sm:min-h-[42px] flex items-center justify-center gap-1.5 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs hover:bg-blue-100 transition-colors"
                  title="View Batches"
                >
                  <FaEye /> View Batches
                </button>

                <button
                  onClick={() =>
                    router.push(`/admin-panel/courses/edit-course?courseId=${course?._id}`)
                  }
                  className="flex-1 min-h-[38px] sm:min-h-[42px] flex items-center justify-center gap-1.5 rounded-xl bg-yellow-50 text-yellow-800 border border-yellow-200 font-bold text-xs hover:bg-yellow-100 transition-colors"
                  title="Edit Course"
                >
                  <FaEdit /> Edit
                </button>

                <button
                  onClick={() => deleteCourse.mutate(course._id)}
                  disabled={deleteCourse.isPending && deleteCourse.variables === course._id}
                  className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors disabled:opacity-50 shrink-0"
                  title="Delete Course"
                >
                  {deleteCourse.isPending && deleteCourse.variables === course._id ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    <FaTrash />
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <PortalEmptyState
          icon={FaBookOpen}
          title="No Courses Created Yet"
          description="Build your first curriculum module and publish courses to start accepting students."
          actionText="Add New Course"
          onAction={() => router.push("/admin-panel/add-course")}
        />
      )}
    </div>
  );
}