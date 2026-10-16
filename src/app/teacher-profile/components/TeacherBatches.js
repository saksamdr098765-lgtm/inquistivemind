"use client";

import { motion } from "framer-motion";
import { FaUsers, FaCalendarAlt, FaClock, FaChalkboardTeacher } from "react-icons/fa";
import CommingSoon from "@/app/Components/ui/CommingSoon";
import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";

export default function TeacherBatches() {
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
            Assigned Batches
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            View assigned classrooms, take student attendance, and monitor batch schedules.
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

      {/* Main Batches Card with Coming Soon */}
      <PortalCard header="Batch Classroom Management" className="relative min-h-[460px]" padding="p-4 sm:p-6">
        <CommingSoon
          title="Teacher Batch Management Coming Soon"
          message="We are currently building instructor batch controls including real-time attendance tracking, student notes sharing, and batch communication tools."
          icon={FaUsers}
        />

        {/* Teaser Preview Cards under the blur overlay */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 opacity-25 select-none pointer-events-none">
          {[
            {
              name: "DELF B1 French Masterclass",
              course: "Intermediate French (DELF B1)",
              students: "22 Students",
              schedule: "Mon, Wed, Fri • 5:00 PM",
            },
            {
              name: "French Beginners Intensive",
              course: "Spoken French Level A1",
              students: "18 Students",
              schedule: "Tue, Thu, Sat • 11:00 AM",
            },
            {
              name: "TEF Canada Fast-Track",
              course: "TEF / TCF Canada Coaching",
              students: "15 Students",
              schedule: "Daily • 7:00 PM",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl sm:rounded-[28px] border border-slate-200/90 bg-white p-4 sm:p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900">{item.name}</h3>
                  <PortalBadge variant="active">Active</PortalBadge>
                </div>
                <p className="text-xs text-slate-400 mt-1">{item.course}</p>

                <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs">
                  <div className="rounded-xl bg-yellow-50/60 p-2.5 border border-yellow-200/60">
                    <span className="text-[10px] uppercase font-bold text-yellow-800">Class Size</span>
                    <p className="font-extrabold text-slate-900 mt-0.5">{item.students}</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                    <span className="text-[10px] uppercase font-semibold text-slate-400">Schedule</span>
                    <p className="font-bold text-slate-800 mt-0.5">{item.schedule}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                <span className="font-bold text-yellow-600">Take Attendance</span>
                <span className="text-slate-400">View Roster →</span>
              </div>
            </div>
          ))}
        </div>
      </PortalCard>
    </div>
  );
}
