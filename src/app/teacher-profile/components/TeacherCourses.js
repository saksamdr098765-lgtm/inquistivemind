"use client";

import { motion } from "framer-motion";
import { FaBookOpen, FaLayerGroup } from "react-icons/fa";
import CommingSoon from "@/app/Components/ui/CommingSoon";
import PortalCard from "@/app/Components/portal-ui/PortalCard";

export default function TeacherCourses() {
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
            Course Curriculum
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Access teaching syllabi, course modules, assignments, and lesson roadmaps.
          </p>
        </div>

        <div className="relative flex gap-3 w-full sm:w-auto">
          <div className="rounded-xl sm:rounded-2xl border border-white/30 bg-white/15 p-2.5 sm:p-3.5 backdrop-blur-md text-center min-w-[100px] w-full sm:w-auto">
            <p className="text-[10px] uppercase font-bold text-amber-100">Status</p>
            <p className="mt-0.5 text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
              In Development
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Course Curriculum Card with Coming Soon */}
      <PortalCard header="Teaching Syllabi & Curriculum" className="relative min-h-[460px]" padding="p-4 sm:p-6">
        <CommingSoon
          title="Curriculum Builder Coming Soon"
          message="Course syllabus editing, milestone tracking, and student assignment managers are currently being built for instructors."
          icon={FaBookOpen}
        />

        {/* Teaser Preview Cards under the blur overlay */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 opacity-25 select-none pointer-events-none">
          {[
            { title: "French A1: Beginner Foundations", modules: "10 Modules", lessons: "45 Lessons" },
            { title: "French A2: Elementary Fluency", modules: "12 Modules", lessons: "52 Lessons" },
            { title: "French B1: Intermediate Mastery", modules: "14 Modules", lessons: "60 Lessons" },
          ].map((course, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3"
            >
              <div className="h-28 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 font-bold text-lg">
                <FaBookOpen className="text-3xl" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-sm">{course.title}</h4>
              <div className="flex justify-between text-xs text-slate-500">
                <span>{course.modules}</span>
                <span>{course.lessons}</span>
              </div>
            </div>
          ))}
        </div>
      </PortalCard>
    </div>
  );
}
