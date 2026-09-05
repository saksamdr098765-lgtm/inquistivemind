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
import PortalCard from "@/app/Components/portal-ui/PortalCard";
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
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Executive Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[32px] bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div>
          <span className="inline-flex rounded-full bg-yellow-400/15 border border-yellow-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300 backdrop-blur-md">
            Catalog Management
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Manage Academy{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Courses
            </span>
          </h1>
          <p className="mt-1 text-slate-300 font-medium text-sm max-w-xl">
            Organize modules, pricing, enrollment status, and course materials.
          </p>
        </div>

        <PortalButton
          variant="primary"
          icon={FaPlus}
          onClick={() => router.push("/admin-panel/add-course")}
        >
          Add New Course
        </PortalButton>
      </motion.div>

      {/* Course Stats Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <motion.div
              key={course._id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-yellow-400 to-amber-500">
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

                  <div className="absolute right-4 top-4">
                    <PortalBadge variant={course?.enrollmentOpen ? "active" : "blocked"}>
                      {course?.enrollmentOpen ? "Enrollment Open" : "Closed"}
                    </PortalBadge>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-5 space-y-4">
                  <h3 className="line-clamp-2 text-lg font-extrabold text-slate-900 leading-snug">
                    {capitalizeFirstLetter(course?.title)}
                  </h3>

                  <p className="line-clamp-2 text-xs text-slate-500 min-h-[32px]">
                    {course?.shortDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-2xl bg-yellow-50/60 p-3 border border-yellow-200/60">
                      <p className="text-[11px] font-bold uppercase text-yellow-800">Price</p>
                      <p className="mt-0.5 font-extrabold text-slate-900 text-base">₹{course?.price}</p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-3 border border-slate-100">
                      <p className="text-[11px] font-semibold uppercase text-slate-400">Duration</p>
                      <p className="mt-0.5 font-bold text-slate-800 text-base">
                        {course?.durationInMonths} Months
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
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
              <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex gap-2">
                <button
                  onClick={() => router.push(`/admin-panel/batches/${course?.slug}`)}
                  className="flex-1 min-h-[42px] flex items-center justify-center gap-1.5 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs hover:bg-blue-100 transition-colors"
                  title="View Batches"
                >
                  <FaEye /> View Batches
                </button>

                <button
                  onClick={() =>
                    router.push(`/admin-panel/courses/edit-course?courseId=${course?._id}`)
                  }
                  className="flex-1 min-h-[42px] flex items-center justify-center gap-1.5 rounded-xl bg-yellow-50 text-yellow-800 border border-yellow-200 font-bold text-xs hover:bg-yellow-100 transition-colors"
                  title="Edit Course"
                >
                  <FaEdit /> Edit
                </button>

                <button
                  onClick={() => deleteCourse.mutate(course._id)}
                  disabled={deleteCourse.isPending && deleteCourse.variables === course._id}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors disabled:opacity-50"
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