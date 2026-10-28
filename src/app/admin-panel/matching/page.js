"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaHandshake,
  FaSearch,
  FaCheckCircle,
  FaStar,
  FaClock,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaUserGraduate,
  FaTimes,
  FaExchangeAlt,
  FaArrowLeft,
  FaSpinner,
  FaEnvelope,
  FaPhoneAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { toast } from "sonner";
import { useAdminStudentRequirements } from "@/Hooks/useAdminStudentRequirements";
import { useAdminMatchingCandidates } from "@/Hooks/useAdminMatching";
import {
  useAdminShortlistCandidateMutation,
  useAdminRecommendCandidateMutation,
  useAdminUpdateMatchStatusMutation,
} from "@/app/mutations/AdminMutations";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import PortalSelect from "@/app/Components/portal-ui/PortalSelect";

function MatchingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryReqId = searchParams.get("reqId") || "";

  const [selectedReqId, setSelectedReqId] = useState(queryReqId);

  // Requirements list to populate selector
  const { data: reqData, isLoading: reqLoading } = useAdminStudentRequirements(
    1,
    "",
    "",
    "",
    ""
  );

  const requirements = reqData?.requirements || [];

  // Sync state if query param changes
  useEffect(() => {
    if (queryReqId && queryReqId !== selectedReqId) {
      setSelectedReqId(queryReqId);
    } else if (!selectedReqId && requirements.length > 0) {
      setSelectedReqId(requirements[0]._id);
    }
  }, [queryReqId, requirements, selectedReqId]);

  // Load candidates for selected requirement
  const { data: matchData, isLoading: matchLoading, refetch } =
    useAdminMatchingCandidates(selectedReqId);

  const requirement = matchData?.requirement;
  const candidates = matchData?.candidates || [];

  // Match action mutations
  const shortlistMutation = useAdminShortlistCandidateMutation(() => refetch());
  const recommendMutation = useAdminRecommendCandidateMutation(() => refetch());
  const updateMatchMutation = useAdminUpdateMatchStatusMutation(() => refetch());

  const handleShortlist = (candidate) => {
    shortlistMutation.mutate({
      requirementId: selectedReqId,
      teacherId: candidate.teacherId,
      score: candidate.score,
      reasons: candidate.reasons,
    });
  };

  const handleRecommend = (candidate) => {
    recommendMutation.mutate({
      requirementId: selectedReqId,
      teacherId: candidate.teacherId,
      score: candidate.score,
      reasons: candidate.reasons,
    });
  };

  const handleUpdateStatus = (matchId, newStatus) => {
    updateMatchMutation.mutate({
      matchId,
      data: { status: newStatus },
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 border border-amber-200 text-lg">
              <FaHandshake />
            </span>
            Tutor–Student Matching Console
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Deterministic, explainable candidate scoring based on subject, mode, availability, and level.
          </p>
        </div>

        {/* Requirement Selector */}
        <div className="w-full sm:w-84">
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Active Student Requirement
          </label>
          <PortalSelect
            value={selectedReqId}
            onChange={(e) => {
              setSelectedReqId(e.target.value);
              router.push(`/admin-panel/matching?reqId=${e.target.value}`);
            }}
          >
            {requirements.map((r) => (
              <option key={r._id} value={r._id}>
                {r.referenceCode} — {r.name} ({r.subject})
              </option>
            ))}
          </PortalSelect>
        </div>
      </div>

      {/* ⭐ PROMINENTLY HIGHLIGHTED STUDENT USER CARD */}
      {requirement && (
        <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-100/90 via-amber-50 to-yellow-100/60 border-2 border-amber-400 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 font-black text-2xl shadow-sm border border-amber-300">
                {requirement.name?.charAt(0)?.toUpperCase() || "S"}
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="font-mono text-xs font-black px-2.5 py-0.5 rounded-lg bg-amber-200/90 text-amber-950 border border-amber-300">
                    {requirement.referenceCode}
                  </span>
                  <h3 className="text-xl font-black text-slate-900">
                    {requirement.name}
                  </h3>
                  <PortalBadge variant={requirement.status}>{requirement.status}</PortalBadge>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-700 flex-wrap">
                  {requirement.email && (
                    <a
                      href={`mailto:${requirement.email}`}
                      className="flex items-center gap-1 font-bold text-slate-800 hover:text-amber-700"
                    >
                      <FaEnvelope className="text-amber-700 text-xs" />
                      {requirement.email}
                    </a>
                  )}
                  {requirement.phone && (
                    <a
                      href={`tel:${requirement.phone}`}
                      className="flex items-center gap-1 font-bold text-slate-800 hover:text-amber-700"
                    >
                      <FaPhoneAlt className="text-amber-700 text-xs" />
                      {requirement.phone}
                    </a>
                  )}
                  {requirement.city && (
                    <span className="flex items-center gap-1 font-semibold text-slate-600">
                      <FaMapMarkerAlt className="text-amber-700 text-xs" />
                      {requirement.city}
                    </span>
                  )}
                </div>

                {/* Requirement criteria specs */}
                <div className="flex items-center gap-2 flex-wrap pt-1 text-xs text-slate-700">
                  <span className="px-2 py-0.5 rounded-md bg-white border border-amber-200 font-bold text-amber-900">
                    Subject: {requirement.subject}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white border border-amber-200 font-semibold text-slate-700">
                    Mode: {requirement.mode || "Online"}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white border border-amber-200 font-semibold text-slate-700">
                    Level: {requirement.level || "Any"}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white border border-amber-200 font-semibold text-slate-700">
                    Days: {requirement.availability?.join(", ") || "Flexible"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => router.push("/admin-panel/student-requirements")}
                className="text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 transition shadow-2xs cursor-pointer"
              >
                <FaArrowLeft className="text-xs" /> All Requirements
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Candidates List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 text-xs font-bold">
              <FaStar />
            </span>
            Eligible Tutor Candidates ({candidates.length})
          </h2>
          <span className="text-xs text-slate-400">
            Ranked deterministically by compatibility score
          </span>
        </div>

        {matchLoading ? (
          <div className="p-12 text-center rounded-3xl bg-white border border-slate-200">
            <FaSpinner className="animate-spin text-3xl text-amber-500 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-500">
              Calculating compatibility scores and schedules...
            </p>
          </div>
        ) : candidates.length === 0 ? (
          <PortalCard className="text-center py-12">
            <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-slate-100 text-slate-400 text-2xl mb-3">
              <FaExchangeAlt />
            </div>
            <h3 className="text-base font-bold text-slate-800">
              No Eligible Tutors Found
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
              No approved, active tutors currently match the required subject ({requirement?.subject})
              or schedule. Review pending applications or adjust requirement criteria.
            </p>
          </PortalCard>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {candidates.map((cand) => {
              const score = cand.score;
              const isMatch = cand.existingMatch;
              const matchStatus = cand.currentStatus;

              return (
                <div
                  key={cand.teacherId}
                  className={`p-5 rounded-3xl border-2 transition-all ${
                    score >= 80
                      ? "bg-gradient-to-r from-emerald-50/40 via-white to-emerald-50/20 border-emerald-300 shadow-xs hover:border-emerald-400"
                      : score >= 60
                      ? "bg-white border-amber-300 hover:border-amber-400 shadow-2xs"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Tutor Info */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-900 font-extrabold text-lg border border-amber-300 shadow-2xs">
                        {cand.fullName?.charAt(0)?.toUpperCase() || "T"}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-extrabold text-slate-900 text-base">
                            {cand.fullName}
                          </h4>
                          {cand.isPublished && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                              Published Profile
                            </span>
                          )}
                          <PortalBadge variant={matchStatus}>{matchStatus}</PortalBadge>
                        </div>

                        <p className="text-xs text-slate-600">
                          <strong>Subject:</strong> {cand.subject} •{" "}
                          <strong>Experience:</strong> {cand.experience || "N/A"} •{" "}
                          <strong>Mode:</strong> {cand.mode || "Online"}
                          {cand.city ? ` • ${cand.city}` : ""}
                        </p>

                        {/* Explainable match reason tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {cand.reasons.map((reason, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white text-slate-800 border border-slate-200 shadow-2xs"
                            >
                              <FaCheckCircle className="text-emerald-500 text-[10px]" />
                              {reason}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Score & Actions */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:border-l lg:border-slate-100 lg:pl-6 shrink-0">
                      {/* Score Badge */}
                      <div className="text-center sm:text-right">
                        <div
                          className={`text-2xl font-black ${
                            score >= 80
                              ? "text-emerald-600"
                              : score >= 60
                              ? "text-amber-600"
                              : "text-slate-600"
                          }`}
                        >
                          {score}%
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Compatibility
                        </span>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-wrap sm:flex-col gap-2 w-full sm:w-auto">
                        <div className="flex gap-2">
                          <button
                            type="button"
                            disabled={
                              shortlistMutation.isPending || matchStatus === "shortlisted"
                            }
                            onClick={() => handleShortlist(cand)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 shadow-2xs ${
                              matchStatus === "shortlisted"
                                ? "bg-indigo-100 text-indigo-700 border border-indigo-200 cursor-default"
                                : "bg-indigo-50 text-indigo-700 border border-indigo-300 hover:bg-indigo-100 cursor-pointer"
                            }`}
                          >
                            Shortlist
                          </button>

                          <button
                            type="button"
                            disabled={
                              recommendMutation.isPending || matchStatus === "recommended"
                            }
                            onClick={() => handleRecommend(cand)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 shadow-2xs ${
                              matchStatus === "recommended"
                                ? "bg-amber-400 text-slate-950 border border-amber-400 cursor-default"
                                : "bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-slate-950 cursor-pointer"
                            }`}
                          >
                            Recommend
                          </button>
                        </div>

                        {/* Status update if matched */}
                        {isMatch && (
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-bold text-slate-400">
                              Outcome:
                            </span>
                            <select
                              value={matchStatus}
                              onChange={(e) =>
                                handleUpdateStatus(isMatch._id, e.target.value)
                              }
                              className="text-xs p-1 rounded-lg border border-slate-200 bg-white text-slate-700 font-semibold focus:outline-amber-500"
                            >
                              <option value="shortlisted">Shortlisted</option>
                              <option value="recommended">Recommended</option>
                              <option value="contacted">Contacted</option>
                              <option value="accepted">Accepted / Joined</option>
                              <option value="rejected">Declined</option>
                            </select>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default function MatchingPage() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center text-slate-500 font-semibold">
          Loading matching console...
        </div>
      }
    >
      <MatchingContent />
    </Suspense>
  );
}
