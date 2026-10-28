"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaStar,
  FaHandshake,
  FaExternalLinkAlt,
  FaSpinner,
  FaUserGraduate,
  FaTag,
  FaTrash,
} from "react-icons/fa";
import { toast } from "sonner";
import { useAdminMatchingCandidates } from "@/Hooks/useAdminMatching";
import {
  useAdminUpdateRequirementStatusMutation,
  useAdminAddRequirementNoteMutation,
  useAdminShortlistCandidateMutation,
  useAdminRecommendCandidateMutation,
  useAdminDeleteStudentRequirementMutation,
} from "@/app/mutations/AdminMutations";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import DeleteConfirmModal from "@/app/Components/portal-ui/DeleteConfirmModal";

export default function StudentRequirementDetailView({
  requirement,
  onRequirementUpdated,
  onRequirementDeleted,
  isModal = false,
}) {
  const router = useRouter();
  const [req, setReq] = useState(requirement);
  const [newNote, setNewNote] = useState("");

  // Delete modal state
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const deleteReqMutation = useAdminDeleteStudentRequirementMutation(() => {
    setIsDeleteOpen(false);
    if (onRequirementDeleted) {
      onRequirementDeleted();
    } else {
      router.push("/admin-panel/student-requirements");
    }
  });

  // Live Matching Candidates
  const {
    data: matchData,
    isLoading: matchLoading,
    refetch: refetchMatches,
  } = useAdminMatchingCandidates(req?._id);

  const matchedCandidates = matchData?.candidates || [];

  const updateStatusMutation = useAdminUpdateRequirementStatusMutation(
    req?._id,
    (res) => {
      const updated = {
        ...req,
        status: res.requirement.status,
        adminNotes: res.requirement.adminNotes,
      };
      setReq(updated);
      if (onRequirementUpdated) onRequirementUpdated(updated);
    }
  );

  const addNoteMutation = useAdminAddRequirementNoteMutation(req?._id, (res) => {
    const updated = {
      ...req,
      adminNotes: res.adminNotes,
    };
    setReq(updated);
    if (onRequirementUpdated) onRequirementUpdated(updated);
    setNewNote("");
  });

  const shortlistMutation = useAdminShortlistCandidateMutation(() => {
    refetchMatches();
  });

  const recommendMutation = useAdminRecommendCandidateMutation(() => {
    refetchMatches();
  });

  const handleStatusChange = (newStatus) => {
    updateStatusMutation.mutate({
      status: newStatus,
      note: `Status updated to ${newStatus}`,
    });
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    addNoteMutation.mutate({ note: newNote.trim() });
  };

  const handleShortlist = (cand) => {
    if (!req?._id) return;
    shortlistMutation.mutate({
      requirementId: req._id,
      teacherId: cand.teacherId,
      score: cand.score,
      reasons: cand.reasons,
    });
  };

  const handleRecommend = (cand) => {
    if (!req?._id) return;
    recommendMutation.mutate({
      requirementId: req._id,
      teacherId: cand.teacherId,
      score: cand.score,
      reasons: cand.reasons,
    });
  };

  if (!req) return null;

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* SECTION 1: Top Student Identity Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-yellow-50/40 border border-amber-200/90 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 font-black text-lg sm:text-xl shadow-xs">
              {req.name?.charAt(0)?.toUpperCase() || "S"}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                  {req.name}
                </h3>
                <span className="font-mono text-xs font-black px-2 py-0.5 rounded-md bg-amber-100 text-amber-950 border border-amber-200">
                  {req.referenceCode}
                </span>
                <PortalBadge variant={req.status}>{req.status}</PortalBadge>
              </div>

              {/* Contact Information */}
              <div className="flex items-center gap-3 text-xs text-slate-600 mt-1 flex-wrap">
                {req.email && (
                  <a
                    href={`mailto:${req.email}`}
                    className="flex items-center gap-1 font-semibold text-slate-700 hover:text-amber-600 truncate max-w-[200px]"
                  >
                    <FaEnvelope className="text-slate-400 text-[11px]" />
                    {req.email}
                  </a>
                )}
                {req.phone && (
                  <a
                    href={`tel:${req.phone}`}
                    className="flex items-center gap-1 font-semibold text-slate-700 hover:text-amber-600"
                  >
                    <FaPhoneAlt className="text-slate-400 text-[11px]" />
                    {req.phone}
                  </a>
                )}
                {req.city && (
                  <span className="flex items-center gap-1 text-slate-500">
                    <FaMapMarkerAlt className="text-slate-400 text-[11px]" />
                    {req.city}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 justify-between sm:justify-end text-xs">
            <button
              type="button"
              onClick={() => router.push(`/admin-panel/matching?reqId=${req._id}`)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-extrabold transition shadow-xs cursor-pointer"
            >
              <FaHandshake className="text-amber-400" /> Open Match Console ↗
            </button>
            {isModal && (
              <Link
                href={`/admin-panel/student-requirements/${req._id}`}
                className="hidden sm:inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold transition"
              >
                Full Page <FaExternalLinkAlt className="text-[9px]" />
              </Link>
            )}
            <button
              type="button"
              onClick={() => setIsDeleteOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 font-bold transition cursor-pointer"
              title="Delete Requirement"
            >
              <FaTrash className="text-[10px]" /> Delete
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 2: Clean Specifications Grid (Un-nested modern metrics) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
        <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
          <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider block">
            Subject
          </span>
          <span className="font-extrabold text-amber-800 text-sm sm:text-base mt-0.5 block truncate">
            {req.subject}
          </span>
        </div>

        <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
          <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider block">
            Target Level
          </span>
          <span className="font-extrabold text-slate-900 text-sm sm:text-base mt-0.5 block truncate">
            {req.level || "All stages"}
          </span>
        </div>

        <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
          <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider block">
            Teaching Mode
          </span>
          <span className="font-extrabold text-slate-900 text-sm sm:text-base mt-0.5 block truncate">
            {req.mode || "Online Classes"}
          </span>
        </div>

        <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
          <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider block">
            Budget
          </span>
          <span className="font-extrabold text-slate-900 text-sm sm:text-base mt-0.5 block truncate">
            {req.budget?.max ? `₹${req.budget.min || 0} - ₹${req.budget.max}` : "Flexible"}
          </span>
        </div>
      </div>

      {/* Schedule & Goal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
        {/* Availability */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <FaCalendarAlt className="text-amber-500" /> Preferred Days &amp; Timing
          </span>
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {req.availability && req.availability.length > 0 ? (
              req.availability.map((day) => (
                <span
                  key={day}
                  className="px-2.5 py-1 rounded-xl bg-white text-slate-800 font-bold text-xs border border-slate-200 shadow-2xs"
                >
                  {day}
                </span>
              ))
            ) : (
              <span className="text-xs text-slate-500 italic">Days: Flexible</span>
            )}
            {req.timeSlot && req.timeSlot.length > 0 && (
              req.timeSlot.map((slot) => (
                <span
                  key={slot}
                  className="px-2.5 py-1 rounded-xl bg-amber-50 text-amber-800 font-semibold text-xs border border-amber-200"
                >
                  🕒 {slot}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Learning Goal */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <FaTag className="text-amber-500" /> Learning Objective
          </span>
          <p className="text-xs sm:text-sm text-slate-700 font-medium italic pt-0.5 leading-relaxed">
            {req.goal ? `"${req.goal}"` : "General subject coaching and exam preparation."}
          </p>
        </div>
      </div>

      {/* SECTION 3: Live Matching Tutors */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 text-xs font-bold">
                <FaStar />
              </span>
              Matching Tutors for {req.name} ({matchedCandidates.length})
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Ranked by deterministic compatibility (Subject, Mode, Schedule, Level).
            </p>
          </div>

          <button
            type="button"
            onClick={() => router.push(`/admin-panel/matching?reqId=${req._id}`)}
            className="text-xs font-bold text-amber-700 hover:text-amber-800 underline"
          >
            Full Ranking Console ↗
          </button>
        </div>

        {matchLoading ? (
          <div className="p-6 text-center rounded-2xl bg-slate-50 border border-slate-200">
            <FaSpinner className="animate-spin text-xl text-amber-500 mx-auto mb-2" />
            <p className="text-xs font-bold text-slate-500">
              Running compatibility engine...
            </p>
          </div>
        ) : matchedCandidates.length === 0 ? (
          <div className="p-6 rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-center space-y-2">
            <p className="font-bold text-slate-800 text-sm">
              No approved tutors match "{req.subject}"
            </p>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Review pending Tutor Applications to approve new teachers, or adjust requirement mode.
            </p>
            <button
              type="button"
              onClick={() => router.push("/admin-panel/tutor-applications")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs transition"
            >
              View Tutor Applications
            </button>
          </div>
        ) : (
          <div className="space-y-2.5">
            {matchedCandidates.slice(0, 5).map((cand) => {
              const score = cand.score;
              const isShortlisted = cand.currentStatus === "shortlisted";
              const isRecommended = cand.currentStatus === "recommended";

              return (
                <div
                  key={cand.teacherId}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition ${
                    score >= 80
                      ? "bg-gradient-to-r from-emerald-50/40 via-white to-emerald-50/20 border-emerald-300 shadow-2xs"
                      : score >= 60
                      ? "bg-amber-50/30 border-amber-300"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    {/* Tutor Details */}
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-900 font-black text-sm border border-amber-300">
                        {cand.fullName?.charAt(0)?.toUpperCase() || "T"}
                      </div>

                      <div className="min-w-0 space-y-0.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-extrabold text-slate-900 text-sm">
                            {cand.fullName}
                          </h4>
                          {cand.currentStatus && (
                            <PortalBadge variant={cand.currentStatus}>
                              {cand.currentStatus}
                            </PortalBadge>
                          )}
                        </div>

                        <p className="text-xs text-slate-600 truncate">
                          <strong>{cand.subject}</strong> • {cand.mode || "Online"} • {cand.experience || "Fresh"}
                          {cand.city ? ` • ${cand.city}` : ""}
                        </p>

                        {/* Explainable Reasons */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {cand.reasons.slice(0, 3).map((r, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white text-slate-700 border border-slate-200"
                            >
                              <FaCheckCircle className="text-emerald-500 text-[9px]" />
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Score & Actions */}
                    <div className="flex items-center gap-3 sm:border-l sm:border-slate-200 sm:pl-3 shrink-0 justify-between sm:justify-end">
                      <div className="text-right">
                        <span
                          className={`text-lg sm:text-xl font-black block leading-none ${
                            score >= 80 ? "text-emerald-600" : score >= 60 ? "text-amber-600" : "text-slate-600"
                          }`}
                        >
                          {score}%
                        </span>
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
                          Score
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          disabled={shortlistMutation.isPending || isShortlisted}
                          onClick={() => handleShortlist(cand)}
                          className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                            isShortlisted
                              ? "bg-indigo-100 text-indigo-700 border border-indigo-200 cursor-default"
                              : "bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200"
                          }`}
                        >
                          Shortlist
                        </button>

                        <button
                          type="button"
                          disabled={recommendMutation.isPending || isRecommended}
                          onClick={() => handleRecommend(cand)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer shadow-2xs ${
                            isRecommended
                              ? "bg-amber-400 text-slate-950 border border-amber-400 cursor-default"
                              : "bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-slate-950"
                          }`}
                        >
                          Recommend
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* SECTION 4: Requirement Status Controls */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
        <label className="block text-xs font-bold text-slate-700">
          Update Requirement Status
        </label>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {["open", "matched", "contacted", "converted", "closed", "cancelled"].map((st) => (
            <button
              key={st}
              type="button"
              disabled={updateStatusMutation.isPending || req.status === st}
              onClick={() => handleStatusChange(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition border cursor-pointer ${
                req.status === st
                  ? "bg-amber-400 text-slate-950 border-amber-400 shadow-2xs font-extrabold"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 5: Internal Activity Notes */}
      <div className="space-y-3 pt-1 border-t border-slate-200">
        <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-500">
          Activity Notes &amp; Follow-ups ({req.adminNotes?.length || 0})
        </h4>

        {req.adminNotes && req.adminNotes.length > 0 ? (
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {req.adminNotes.map((n, i) => (
              <div key={i} className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-0.5">
                <p className="text-slate-800 font-medium">{n.note}</p>
                <p className="text-[10px] text-slate-400">
                  {n.admin?.fullName || "Admin"} • {new Date(n.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-400 italic">No activity notes recorded yet.</p>
        )}

        <form onSubmit={handleAddNote} className="flex gap-2">
          <input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Record call summary, student feedback, or notes..."
            className="flex-1 text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-amber-500"
          />
          <PortalButton
            type="submit"
            size="sm"
            disabled={addNoteMutation.isPending || !newNote.trim()}
          >
            Add Note
          </PortalButton>
        </form>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={() => deleteReqMutation.mutate(req._id)}
        title="Delete Student Requirement"
        message={`Are you sure you want to delete student requirement "${req.referenceCode}" (${req.name})? This will archive the requirement and remove it from active matching.`}
        confirmText="Delete Requirement"
        isDeleting={deleteReqMutation.isPending}
      />
    </div>
  );
}
