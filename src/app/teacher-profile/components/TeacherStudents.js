"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaUserCheck, FaSearch } from "react-icons/fa";
import CommingSoon from "@/app/Components/ui/CommingSoon";
import PortalCard from "@/app/Components/portal-ui/PortalCard";

export default function TeacherStudents() {
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
            Student Directory
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Monitor student attendance, quiz results, homework submissions, and engagement logs.
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

      {/* Main Student Directory Card with Coming Soon */}
      <PortalCard header="Enrolled Student Roster" className="relative min-h-[460px]" padding="p-4 sm:p-6">
        <CommingSoon
          title="Student Gradebook & Performance Coming Soon"
          message="Student progress analytics, homework evaluation, and attendance tracking will be available soon."
          icon={FaGraduationCap}
        />

        {/* Teaser Preview List under the blur overlay */}
        <div className="space-y-3 opacity-25 select-none pointer-events-none">
          {[
            { name: "Aarav Sharma", batch: "DELF B1 Masterclass", attendance: "92%", score: "A+" },
            { name: "Priya Patel", batch: "DELF B1 Masterclass", attendance: "88%", score: "A" },
            { name: "Rohan Verma", batch: "French Beginners A1", attendance: "95%", score: "A+" },
            { name: "Simran Kaur", batch: "TEF Canada Fast-Track", attendance: "85%", score: "B+" },
          ].map((student, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center font-bold text-yellow-800">
                  {student.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">{student.name}</h5>
                  <p className="text-xs text-slate-400">{student.batch}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold">
                <span className="text-slate-600">Attendance: {student.attendance}</span>
                <span className="text-emerald-600">Grade: {student.score}</span>
              </div>
            </div>
          ))}
        </div>
      </PortalCard>
    </div>
  );
}
