"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSearch, FaUsers, FaCalendarAlt } from "react-icons/fa";

import { useTeacherStudents } from "@/Hooks/useTeacherStudents";
import { formatISTDateTime } from "@/Utils/formatDate";
import capitalizeFirstLetter from "@/Utils/captilizeFirstLetter";
import Loading from "@/app/Components/ui/Loading";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalEmptyState from "@/app/Components/portal-ui/PortalEmptyState";

export default function TeacherStudents() {
  const [search, setSearch] = useState("");
  const { data: students, isLoading } = useTeacherStudents();

  if (isLoading) return <Loading />;

  const filteredStudents = (students || []).filter((s) => {
    if (!search.trim()) return true;
    const term = search.toLowerCase();
    const nameMatch = (s.fullName || "").toLowerCase().includes(term);
    const batchMatch = (s.batches || []).some(
      (b) =>
        (b.name || "").toLowerCase().includes(term) ||
        (b.course || "").toLowerCase().includes(term)
    );
    return nameMatch || batchMatch;
  });

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
            Enrolled Students
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Roster of active students enrolled in your assigned batch classrooms.
          </p>
        </div>

        <div className="relative flex gap-3 w-full sm:w-auto">
          <div className="rounded-xl sm:rounded-2xl border border-white/30 bg-white/15 p-2.5 sm:p-3.5 backdrop-blur-md text-center min-w-[100px] w-full sm:w-auto">
            <p className="text-[10px] uppercase font-bold text-amber-100">Total</p>
            <p className="mt-0.5 text-base sm:text-xl font-extrabold text-white">
              {students?.length || 0}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Search Filter Bar */}
      {students && students.length > 0 && (
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search students by name, batch, or course..."
            className="w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 py-3 text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-yellow-500 focus:outline-hidden shadow-xs"
          />
        </div>
      )}

      {/* Main Student Directory List */}
      {!filteredStudents || filteredStudents.length === 0 ? (
        <PortalCard padding="p-8">
          <PortalEmptyState
            title="No Students Found"
            description={
              students && students.length > 0
                ? "No student matches your search query. Try searching with a different name or batch title."
                : "No students are currently enrolled in your assigned batches. Students will appear here once registered and assigned by administration."
            }
            icon={FaGraduationCap}
          />
        </PortalCard>
      ) : (
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.map((student) => {
            const initial = (student.fullName || "S").charAt(0).toUpperCase();

            return (
              <motion.div
                key={student._id || student.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs hover:border-yellow-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-yellow-100 font-extrabold text-yellow-800 text-base border border-yellow-200">
                      {initial}
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-extrabold text-slate-900 text-sm truncate">
                        {student.fullName || "Student"}
                      </h4>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {student.email || "Enrolled Scholar"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3.5 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Enrolled Batches
                    </span>
                    {(student.batches || []).map((b, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl bg-slate-50 p-2.5 border border-slate-100 text-xs"
                      >
                        <p className="font-bold text-slate-800 text-xs">{b.name}</p>
                        <p className="text-[11px] text-slate-500">{b.course}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Enrolled Student</span>
                  <PortalBadge variant="active">Active</PortalBadge>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
