"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaVideo,
  FaCalendarAlt,
  FaClock,
  FaPlus,
  FaExternalLinkAlt,
  FaFilter,
  FaUsers,
  FaTimes,
  FaSave,
} from "react-icons/fa";
import { toast } from "sonner";

import { useTeacherClasses } from "@/Hooks/useTeacherClasses";
import { useTeacherBatches } from "@/Hooks/useTeacherBatches";
import { useTeacherCreateClassLinkMutation } from "@/app/mutations/teacherMutations";
import { formatISTDateTime } from "@/Utils/formatDate";
import capitalizeFirstLetter from "@/Utils/captilizeFirstLetter";
import Loading from "@/app/Components/ui/Loading";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import PortalEmptyState from "@/app/Components/portal-ui/PortalEmptyState";
import PortalInput from "@/app/Components/portal-ui/PortalInput";
import PortalSelect from "@/app/Components/portal-ui/PortalSelect";
import PortalTextArea from "@/app/Components/portal-ui/PortalTextArea";

export default function TeacherLiveClasses() {
  const searchParams = useSearchParams();
  const initialBatchId = searchParams.get("batchId") || "all";

  const [selectedBatch, setSelectedBatch] = useState(initialBatchId);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);

  const { data: classes, isLoading: classesLoading } = useTeacherClasses();
  const { data: batches, isLoading: batchesLoading } = useTeacherBatches();

  // Form state for scheduling a new class
  const [form, setForm] = useState({
    batchId: "",
    title: "",
    meetingLink: "",
    meetingDate: "",
    durationMinutes: 60,
    description: "",
    platform: "zoom",
  });

  const createClassMutation = useTeacherCreateClassLinkMutation(() => {
    setScheduleModalOpen(false);
    setForm({
      batchId: "",
      title: "",
      meetingLink: "",
      meetingDate: "",
      durationMinutes: 60,
      description: "",
      platform: "zoom",
    });
  });

  if (classesLoading || batchesLoading) return <Loading />;

  const filteredClasses = (classes || []).filter((cls) => {
    if (selectedBatch === "all") return true;
    const bId = cls.batch?._id || cls.batch;
    return bId?.toString() === selectedBatch;
  });

  const handleScheduleSubmit = async (e) => {
    e.preventDefault();
    if (!form.batchId) {
      toast.error("Please select a batch.");
      return;
    }
    if (!form.title.trim()) {
      toast.error("Please enter a class title.");
      return;
    }
    if (!form.meetingLink.trim()) {
      toast.error("Please enter the meeting link.");
      return;
    }
    if (!form.meetingDate) {
      toast.error("Please select a scheduled date and time.");
      return;
    }

    await createClassMutation.mutateAsync({
      batchId: form.batchId,
      data: {
        title: form.title.trim(),
        meetingLink: form.meetingLink.trim(),
        meetingDate: form.meetingDate,
        durationMinutes: Number(form.durationMinutes) || 60,
        description: form.description.trim(),
        platform: form.platform,
      },
    });
  };

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
            Live Classes Timetable
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Host live online sessions, manage class links, and view your upcoming teaching schedule.
          </p>
        </div>

        <div className="relative flex gap-2.5 w-full sm:w-auto">
          {batches && batches.length > 0 && (
            <PortalButton
              variant="secondary"
              size="md"
              icon={FaPlus}
              onClick={() => {
                setForm((prev) => ({
                  ...prev,
                  batchId: selectedBatch !== "all" ? selectedBatch : batches[0]?._id || "",
                }));
                setScheduleModalOpen(true);
              }}
              className="w-full sm:w-auto"
            >
              Schedule Class
            </PortalButton>
          )}
        </div>
      </motion.div>

      {/* Filter Toolbar */}
      {batches && batches.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center gap-2">
            <FaFilter className="text-yellow-600 text-sm" />
            <span className="text-xs font-bold text-slate-700">Filter by Batch:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedBatch("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedBatch === "all"
                  ? "bg-yellow-500 text-slate-950 shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Batches ({classes?.length || 0})
            </button>
            {batches.map((b) => (
              <button
                key={b._id}
                onClick={() => setSelectedBatch(b._id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedBatch === b._id
                    ? "bg-yellow-500 text-slate-950 shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Live Classes List */}
      {!filteredClasses || filteredClasses.length === 0 ? (
        <PortalCard padding="p-8">
          <PortalEmptyState
            title="No Scheduled Classes Found"
            description={
              batches && batches.length > 0
                ? "No live classes have been scheduled for this batch yet. Click 'Schedule Class' above to create your first session link."
                : "You must be assigned to an active batch before you can schedule or view live classes."
            }
            icon={FaVideo}
          />
        </PortalCard>
      ) : (
        <div className="space-y-3.5">
          {filteredClasses.map((cls) => (
            <motion.div
              key={cls._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs hover:border-yellow-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-800 font-bold border border-yellow-200">
                  <FaVideo className="text-lg" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-extrabold text-slate-900">{cls.title}</h3>
                    {cls.classNumber && (
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-600">
                        Class #{cls.classNumber}
                      </span>
                    )}
                    <PortalBadge variant={cls.status === "live" ? "active" : "upcoming"}>
                      {cls.status || "Scheduled"}
                    </PortalBadge>
                  </div>

                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Batch: <span className="font-bold text-slate-800">{cls.batch?.name || "Assigned Batch"}</span>
                    {" • "}
                    <span className="capitalize">Platform: {cls.platform || cls.batch?.meetingPlatform || "Zoom"}</span>
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-2 font-medium">
                    <FaCalendarAlt className="text-yellow-600" />
                    <span>{formatISTDateTime(cls.meetingDate)}</span>
                    {cls.durationMinutes && (
                      <span className="text-slate-400">({cls.durationMinutes} mins)</span>
                    )}
                  </div>

                  {cls.description && (
                    <p className="text-xs text-slate-600 mt-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
                      {cls.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2.5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                <a
                  href={cls.meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-500 hover:bg-yellow-600 active:scale-95 text-slate-950 font-bold text-xs px-4 py-2.5 shadow-xs transition-all w-full md:w-auto"
                >
                  Launch Class <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Schedule Class Modal */}
      <AnimatePresence>
        {scheduleModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl border border-slate-200"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800">
                    <FaVideo className="text-base" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Schedule New Live Class</h3>
                    <p className="text-xs text-slate-500">Provide session meeting details for your batch</p>
                  </div>
                </div>
                <button
                  onClick={() => setScheduleModalOpen(false)}
                  className="h-8 w-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
                >
                  <FaTimes />
                </button>
              </div>

              <form onSubmit={handleScheduleSubmit} className="mt-4 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Select Batch</label>
                  <select
                    value={form.batchId}
                    onChange={(e) => setForm({ ...form, batchId: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:border-yellow-500 focus:outline-hidden"
                    required
                  >
                    <option value="">-- Choose Batch --</option>
                    {(batches || []).map((b) => (
                      <option key={b._id} value={b._id}>
                        {b.name} ({b.course?.title || "Course"})
                      </option>
                    ))}
                  </select>
                </div>

                <PortalInput
                  label="Session Title"
                  placeholder="e.g. French Grammar: Conjugation & Pronunciation"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                />

                <PortalInput
                  label="Meeting Link (Zoom / Google Meet)"
                  placeholder="https://zoom.us/j/... or https://meet.google.com/..."
                  value={form.meetingLink}
                  onChange={(e) => setForm({ ...form, meetingLink: e.target.value })}
                  required
                />

                <div className="grid grid-cols-2 gap-3">
                  <PortalInput
                    label="Date & Time (IST)"
                    type="datetime-local"
                    value={form.meetingDate}
                    onChange={(e) => setForm({ ...form, meetingDate: e.target.value })}
                    required
                  />
                  <PortalInput
                    label="Duration (Minutes)"
                    type="number"
                    min="15"
                    max="240"
                    value={form.durationMinutes}
                    onChange={(e) => setForm({ ...form, durationMinutes: e.target.value })}
                  />
                </div>

                <PortalTextArea
                  label="Session Description / Objectives (Optional)"
                  placeholder="Topics covered, prerequisite notes, or homework check..."
                  rows={2}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setScheduleModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all"
                  >
                    Cancel
                  </button>
                  <PortalButton
                    type="submit"
                    variant="primary"
                    size="sm"
                    icon={FaSave}
                    disabled={createClassMutation.isPending}
                  >
                    {createClassMutation.isPending ? "Scheduling..." : "Create Live Class"}
                  </PortalButton>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
