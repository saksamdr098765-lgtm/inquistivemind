"use client";

import { motion } from "framer-motion";
import { FaVideo, FaLink, FaCalendarAlt, FaClock } from "react-icons/fa";
import CommingSoon from "@/app/Components/ui/CommingSoon";
import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";

export default function TeacherLiveClasses() {
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
            Live Teaching Classes
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Host live sessions, manage Google Meet / Zoom meeting links, and interact with students.
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

      {/* Main Live Classes Card with Coming Soon */}
      <PortalCard header="Instructor Live Classroom Console" className="relative min-h-[460px]" padding="p-4 sm:p-6">
        <CommingSoon
          title="Live Class Hosting Coming Soon"
          message="Live video session scheduling, automatic classroom link generation, and recording storage are currently under development."
          icon={FaVideo}
        />

        {/* Teaser Preview Rows under the blur overlay */}
        <div className="space-y-3 opacity-25 select-none pointer-events-none">
          {[
            {
              title: "Grammar Deep-Dive: Subjunctive Mood",
              batch: "DELF B1 French Masterclass",
              time: "Today • 05:00 PM IST",
              duration: "90 Mins",
            },
            {
              title: "Conversational French Fluency Practice",
              batch: "Spoken French Level A1",
              time: "Tomorrow • 11:00 AM IST",
              duration: "60 Mins",
            },
            {
              title: "TEF Listening Comprehension Practice Exam",
              batch: "TEF Canada Fast-Track",
              time: "Friday • 07:00 PM IST",
              duration: "75 Mins",
            },
          ].map((cls, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <PortalBadge variant="active" size="sm">Ready to Start</PortalBadge>
                <h4 className="font-extrabold text-slate-900 text-sm mt-1">{cls.title}</h4>
                <p className="text-xs text-yellow-700 font-semibold mt-0.5">{cls.batch}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{cls.time} ({cls.duration})</p>
              </div>

              <button className="rounded-xl bg-yellow-400 px-4 py-2 text-xs font-extrabold text-slate-900 shadow-xs flex items-center justify-center gap-1.5 shrink-0">
                <FaVideo />
                <span>Start Live Session</span>
              </button>
            </div>
          ))}
        </div>
      </PortalCard>
    </div>
  );
}
