"use client";

import { motion } from "framer-motion";
import { FaBookOpen, FaGraduationCap, FaClock, FaLayerGroup } from "react-icons/fa";

import { useTeacherCourses } from "@/Hooks/useTeacherCourses";
import CoursesSkeleton from "@/app/Skeletons/CourseSkeleton";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalEmptyState from "@/app/Components/portal-ui/PortalEmptyState";

export default function TeacherCourses() {
  const { data: courses, isLoading } = useTeacherCourses();

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
            Teacher Portal
          </span>
          <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Assigned Courses
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Curriculum syllabi and course frameworks assigned to your teaching faculty profile.
          </p>
        </div>

        <div className="relative flex gap-3 w-full sm:w-auto">
          <div className="rounded-xl sm:rounded-2xl border border-white/30 bg-white/15 p-2.5 sm:p-3.5 backdrop-blur-md text-center min-w-[100px] w-full sm:w-auto">
            <p className="text-[10px] uppercase font-bold text-amber-100">Courses</p>
            <p className="mt-0.5 text-base sm:text-xl font-extrabold text-white">
              {courses?.length || 0}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Courses Cards Grid */}
      {!courses || courses.length === 0 ? (
        <PortalCard padding="p-8">
          <PortalEmptyState
            title="No Courses Assigned Yet"
            description="You do not have any courses assigned to your instructor profile. Once an administrator assigns you to a curriculum or batch, it will appear here."
            icon={FaBookOpen}
          />
        </PortalCard>
      ) : (
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <motion.div
              key={course._id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl sm:rounded-[28px] border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-28 rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 font-bold shadow-inner">
                  <FaBookOpen className="text-3xl text-slate-900/80" />
                </div>

                <div className="mt-4 flex items-start justify-between gap-2">
                  <h3 className="font-extrabold text-slate-900 text-base leading-snug">
                    {course.title}
                  </h3>
                  {course.level && (
                    <PortalBadge variant="active">{course.level}</PortalBadge>
                  )}
                </div>

                {course.shortDescription && (
                  <p className="text-xs text-slate-500 font-medium mt-1.5 line-clamp-2">
                    {course.shortDescription}
                  </p>
                )}

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">Category</span>
                    <span className="font-bold text-slate-800 capitalize">
                      {course.category || "Language"}
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">Duration</span>
                    <span className="font-bold text-slate-800">
                      {course.duration || "Self-Paced"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500 flex items-center justify-between">
                <span>Inquisitive Curriculum</span>
                <span className="text-yellow-700 font-bold">Active</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
