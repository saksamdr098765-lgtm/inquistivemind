"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaClock,
  FaGlobe,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBriefcase,
  FaExternalLinkAlt,
  FaFileAlt,
  FaShieldAlt,
  FaTrash,
} from "react-icons/fa";
import { toast } from "sonner";
import {
  useAdminReviewTutorApplicationMutation,
  useAdminPublishTeacherMutation,
  useAdminUnpublishTeacherMutation,
  useAdminUpdateTeacherPublicSettingsMutation,
  useAdminDeleteTutorApplicationMutation,
} from "@/app/mutations/AdminMutations";

import PortalInput from "@/app/Components/portal-ui/PortalInput";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import DeleteConfirmModal from "@/app/Components/portal-ui/DeleteConfirmModal";

const readableFieldLabels = {
  fullName: "Full Name",
  city: "City & Service Area",
  subject: "Subject Specialization",
  experience: "Teaching Experience",
  qualification: "Academic Qualifications",
  studentLevel: "Target Student Levels",
  mode: "Teaching Modes",
  bio: "Teacher Bio / Intro",
  availability: "Available Days",
  timeSlot: "Preferred Time Slots",
  profileImage: "Profile Photo",
  headline: "Tagline / Headline",
  hourlyRate: "Hourly Rates",
  rating: "Student Rating & Reviews",
};

export default function TutorApplicationDetailView({
  application,
  onApplicationUpdated,
  onApplicationDeleted,
  isModal = false,
}) {
  const router = useRouter();
  const [app, setApp] = useState(application);
  const [activeTab, setActiveTab] = useState("review"); // 'review' | 'publish'

  // Delete modal state
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const deleteMutation = useAdminDeleteTutorApplicationMutation(() => {
    setIsDeleteOpen(false);
    if (onApplicationDeleted) {
      onApplicationDeleted();
    } else {
      router.push("/admin-panel/tutor-applications");
    }
  });

  // Review decision states
  const [reviewNote, setReviewNote] = useState("");
  const [actionType, setActionType] = useState(null); // 'info_requested' | 'rejected' | null
  const [actionMessage, setActionMessage] = useState("");

  // Publication state
  const [headline, setHeadline] = useState("");
  const [rateMin, setRateMin] = useState(500);
  const [rateMax, setRateMax] = useState(1500);
  const [allowedFields, setAllowedFields] = useState([
    "fullName",
    "city",
    "subject",
    "experience",
    "qualification",
    "studentLevel",
    "mode",
    "bio",
    "availability",
    "timeSlot",
    "profileImage",
    "headline",
    "hourlyRate",
    "rating",
  ]);

  useEffect(() => {
    if (application) {
      setApp(application);
      if (application.teacher) {
        setHeadline(application.teacher.headline || "");
        setRateMin(application.teacher.hourlyRate?.min || 500);
        setRateMax(application.teacher.hourlyRate?.max || 1500);
        if (application.teacher.allowedPublicFields?.length) {
          setAllowedFields(application.teacher.allowedPublicFields);
        }
      } else {
        setHeadline(`${application.subject} Instructor`);
        setRateMin(500);
        setRateMax(1500);
      }
    }
  }, [application]);

  const reviewMutation = useAdminReviewTutorApplicationMutation(app?._id, (res) => {
    if (res?.application) {
      const updated = {
        ...app,
        status: res.application.status,
        teacher: res.teacher || app.teacher,
        reviewNotes: res.application.reviewNotes || app.reviewNotes,
      };
      setApp(updated);
      if (onApplicationUpdated) onApplicationUpdated(updated);
    }
    setReviewNote("");
    setActionType(null);
    setActionMessage("");
  });

  const publishMutation = useAdminPublishTeacherMutation(app?.teacher?._id, (res) => {
    const updated = {
      ...app,
      teacher: { ...app.teacher, isPublished: true },
    };
    setApp(updated);
    if (onApplicationUpdated) onApplicationUpdated(updated);
  });

  const unpublishMutation = useAdminUnpublishTeacherMutation(app?.teacher?._id, (res) => {
    const updated = {
      ...app,
      teacher: { ...app.teacher, isPublished: false },
    };
    setApp(updated);
    if (onApplicationUpdated) onApplicationUpdated(updated);
  });

  const publicSettingsMutation = useAdminUpdateTeacherPublicSettingsMutation(
    app?.teacher?._id,
    (res) => {
      if (onApplicationUpdated) onApplicationUpdated(app);
    }
  );

  const handleReviewAction = (newStatus) => {
    if (newStatus === "rejected" && !actionMessage.trim()) {
      toast.error("Please provide a rejection reason for the applicant.");
      return;
    }
    if (newStatus === "info_requested" && !actionMessage.trim()) {
      toast.error("Please specify what additional information or documents are required.");
      return;
    }

    reviewMutation.mutate({
      status: newStatus,
      note: reviewNote,
      infoMessage: newStatus === "info_requested" ? actionMessage : "",
      rejectionReason: newStatus === "rejected" ? actionMessage : "",
    });
  };

  const handleTogglePublish = () => {
    if (!app?.teacher?._id) {
      toast.error("Tutor application must be approved before publishing to public directory.");
      return;
    }

    if (app.teacher.isPublished) {
      unpublishMutation.mutate();
    } else {
      publishMutation.mutate({
        headline,
        hourlyRate: { min: rateMin, max: rateMax, currency: "INR" },
        allowedPublicFields: allowedFields,
      });
    }
  };

  const handleSavePublicSettings = (e) => {
    e.preventDefault();
    if (!app?.teacher?._id) return;
    publicSettingsMutation.mutate({
      headline,
      hourlyRate: { min: rateMin, max: rateMax, currency: "INR" },
      allowedPublicFields: allowedFields,
    });
  };

  const toggleFieldPermission = (field) => {
    setAllowedFields((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]
    );
  };

  if (!app) return null;

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Top Applicant Banner Card - Mobile First */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-amber-50/50 border border-amber-200/90 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 font-black text-lg sm:text-xl shadow-xs">
              {app.fullName?.charAt(0)?.toUpperCase() || "T"}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                  {app.fullName}
                </h3>
                <PortalBadge variant={app.status}>{app.status}</PortalBadge>
                {app.teacher?.isPublished && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Live on Directory
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-600 mt-1 flex-wrap">
                <a
                  href={`mailto:${app.email}`}
                  className="flex items-center gap-1 font-semibold text-slate-700 hover:text-amber-600 truncate max-w-[200px]"
                >
                  <FaEnvelope className="text-slate-400 text-[11px]" />
                  {app.email}
                </a>
                {app.phone && (
                  <a
                    href={`tel:${app.phone}`}
                    className="flex items-center gap-1 font-semibold text-slate-700 hover:text-amber-600"
                  >
                    <FaPhoneAlt className="text-slate-400 text-[11px]" />
                    {app.phone}
                  </a>
                )}
                {app.city && (
                  <span className="flex items-center gap-1 text-slate-500">
                    <FaMapMarkerAlt className="text-slate-400 text-[11px]" />
                    {app.city}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Header Action Tools */}
          <div className="flex items-center gap-2 justify-between sm:justify-end text-xs">
            {isModal && (
              <Link
                href={`/admin-panel/tutor-applications/${app._id}`}
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold transition"
              >
                Full Page <FaExternalLinkAlt className="text-[9px]" />
              </Link>
            )}
            <button
              type="button"
              onClick={() => setIsDeleteOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 font-bold transition cursor-pointer"
              title="Delete Application"
            >
              <FaTrash className="text-[10px]" /> Delete
            </button>
          </div>
        </div>
      </div>

      {/* Mobile-Friendly Tab Switcher */}
      <div className="flex border-b border-slate-200 gap-4 sm:gap-6 overflow-x-auto no-scrollbar">
        <button
          type="button"
          onClick={() => setActiveTab("review")}
          className={`pb-3 font-bold text-xs sm:text-sm transition border-b-2 flex items-center gap-2 shrink-0 cursor-pointer ${
            activeTab === "review"
              ? "border-amber-500 text-amber-700"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <FaFileAlt className="text-xs" /> Application &amp; Review
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("publish")}
          className={`pb-3 font-bold text-xs sm:text-sm transition border-b-2 flex items-center gap-2 shrink-0 cursor-pointer ${
            activeTab === "publish"
              ? "border-amber-500 text-amber-700"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <FaGlobe className="text-xs" /> Public Directory Profile
          {app.teacher?.isPublished ? (
            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800">
              Live
            </span>
          ) : (
            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-600">
              Private
            </span>
          )}
        </button>
      </div>

      {/* TAB 1: APPLICATION & REVIEW */}
      {activeTab === "review" && (
        <div className="space-y-5">
          {/* Specifications Grid - Unified, clean modern panel */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider block">
                Teaching Subject
              </span>
              <span className="font-extrabold text-amber-800 text-sm sm:text-base mt-0.5 block truncate">
                {app.subject}
              </span>
            </div>

            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider block">
                Teaching Mode
              </span>
              <span className="font-extrabold text-slate-900 text-sm sm:text-base mt-0.5 block truncate">
                {app.mode || "Online Classes"}
              </span>
            </div>

            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider block">
                Experience
              </span>
              <span className="font-extrabold text-slate-900 text-sm sm:text-base mt-0.5 block truncate">
                {app.experience || "Not specified"}
              </span>
            </div>

            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider block">
                Target Student Level
              </span>
              <span className="font-bold text-slate-800 text-xs sm:text-sm mt-0.5 block truncate">
                {app.studentLevel || "All levels"}
              </span>
            </div>

            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider block">
                Qualification
              </span>
              <span className="font-bold text-slate-800 text-xs sm:text-sm mt-0.5 block truncate">
                {app.qualification || "Not specified"}
              </span>
            </div>

            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider block">
                Application Source
              </span>
              <span className="font-bold text-slate-800 text-xs sm:text-sm mt-0.5 block capitalize truncate">
                {app.source || "Website Form"}
              </span>
            </div>
          </div>

          {/* Availability & Preferred Slots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <FaCalendarAlt className="text-amber-500" /> Available Days
              </span>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {app.availability && app.availability.length > 0 ? (
                  app.availability.map((day) => (
                    <span
                      key={day}
                      className="px-2.5 py-1 rounded-xl bg-white text-slate-800 font-bold text-xs border border-slate-200 shadow-2xs"
                    >
                      {day}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-slate-500 italic">Flexible schedule</span>
                )}
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <FaClock className="text-amber-500" /> Preferred Time Slots
              </span>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {app.timeSlot && app.timeSlot.length > 0 ? (
                  app.timeSlot.map((slot) => (
                    <span
                      key={slot}
                      className="px-2.5 py-1 rounded-xl bg-white text-slate-800 font-bold text-xs border border-slate-200 shadow-2xs"
                    >
                      {slot}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-slate-500 italic">Flexible timing</span>
                )}
              </div>
            </div>
          </div>

          {/* Cover Note / Bio */}
          {app.bio && (
            <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-1">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                Applicant Bio &amp; Motivation
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                "{app.bio}"
              </p>
            </div>
          )}

          {/* Review Decision Console Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-white flex items-center gap-2">
                  <FaShieldAlt className="text-amber-400" /> Review &amp; Decision Console
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Current Status: <strong className="text-amber-300 capitalize">{app.status}</strong>
                </p>
              </div>

              {app.status === "approved" && (
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 flex items-center gap-1.5 self-start sm:self-auto">
                  <FaCheckCircle /> Approved Teacher
                </span>
              )}
            </div>

            {/* Mobile-First Primary Decision Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                disabled={reviewMutation.isPending || app.status === "approved"}
                onClick={() => handleReviewAction("approved")}
                className={`flex flex-col items-center justify-center p-3 rounded-xl font-bold text-xs transition gap-1.5 border ${
                  app.status === "approved"
                    ? "bg-emerald-800/40 text-emerald-300 border-emerald-700/50 cursor-default opacity-80"
                    : "bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-500 shadow-md cursor-pointer"
                }`}
              >
                <FaCheckCircle className="text-base" />
                <span>Approve Tutor</span>
              </button>

              <button
                type="button"
                disabled={reviewMutation.isPending || app.status === "under_review"}
                onClick={() => handleReviewAction("under_review")}
                className={`flex flex-col items-center justify-center p-3 rounded-xl font-bold text-xs transition gap-1.5 border ${
                  app.status === "under_review"
                    ? "bg-sky-800/40 text-sky-300 border-sky-700/50 cursor-default opacity-80"
                    : "bg-sky-700 hover:bg-sky-600 text-white border-sky-600 shadow-md cursor-pointer"
                }`}
              >
                <FaClock className="text-base" />
                <span>Under Review</span>
              </button>

              <button
                type="button"
                disabled={reviewMutation.isPending}
                onClick={() => {
                  setActionType(actionType === "info_requested" ? null : "info_requested");
                  setActionMessage(app.infoRequestedMessage || "");
                }}
                className={`flex flex-col items-center justify-center p-3 rounded-xl font-bold text-xs transition gap-1.5 border cursor-pointer ${
                  actionType === "info_requested"
                    ? "bg-amber-400 text-slate-950 border-amber-300 ring-2 ring-amber-300"
                    : "bg-slate-800 hover:bg-slate-700 text-amber-400 border-slate-700"
                }`}
              >
                <FaInfoCircle className="text-base" />
                <span>Request Info</span>
              </button>

              <button
                type="button"
                disabled={reviewMutation.isPending}
                onClick={() => {
                  setActionType(actionType === "rejected" ? null : "rejected");
                  setActionMessage(app.rejectionReason || "");
                }}
                className={`flex flex-col items-center justify-center p-3 rounded-xl font-bold text-xs transition gap-1.5 border cursor-pointer ${
                  actionType === "rejected"
                    ? "bg-rose-500 text-white border-rose-400 ring-2 ring-rose-400"
                    : "bg-slate-800 hover:bg-slate-700 text-rose-400 border-slate-700"
                }`}
              >
                <FaTimesCircle className="text-base" />
                <span>Reject</span>
              </button>
            </div>

            {/* Contextual Action Input */}
            {actionType && (
              <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-amber-300">
                    {actionType === "info_requested"
                      ? "Specify Missing Documents or Information:"
                      : "State Reason for Application Rejection:"}
                  </label>
                  <button
                    type="button"
                    onClick={() => setActionType(null)}
                    className="text-slate-400 hover:text-white text-xs font-semibold"
                  >
                    Cancel
                  </button>
                </div>

                <input
                  type="text"
                  value={actionMessage}
                  onChange={(e) => setActionMessage(e.target.value)}
                  placeholder={
                    actionType === "info_requested"
                      ? "e.g. Please send degree certificate & government ID..."
                      : "e.g. Currently not accepting tutors for this subject..."
                  }
                  className="w-full text-xs p-2.5 rounded-lg bg-slate-900 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />

                <button
                  type="button"
                  disabled={reviewMutation.isPending || !actionMessage.trim()}
                  onClick={() => handleReviewAction(actionType)}
                  className={`w-full py-2 px-3 rounded-lg font-bold text-xs transition cursor-pointer ${
                    actionType === "info_requested"
                      ? "bg-amber-400 hover:bg-amber-300 text-slate-950"
                      : "bg-rose-600 hover:bg-rose-500 text-white"
                  }`}
                >
                  Confirm {actionType === "info_requested" ? "Information Request" : "Rejection"}
                </button>
              </div>
            )}

            {/* Internal Admin Note */}
            <div className="space-y-1.5 pt-1">
              <label className="text-xs font-bold text-slate-400 block">
                Internal Admin Note (Private team record)
              </label>
              <textarea
                value={reviewNote}
                onChange={(e) => setReviewNote(e.target.value)}
                placeholder="Add private review or interview notes for this tutor..."
                rows={2}
                className="w-full text-xs p-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* Internal Review History Timeline */}
          {app.reviewNotes && app.reviewNotes.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-500">
                Internal Review History ({app.reviewNotes.length})
              </h4>
              <div className="space-y-2">
                {app.reviewNotes.map((n, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1"
                  >
                    <p className="text-slate-800 font-medium">{n.note}</p>
                    <p className="text-[10px] text-slate-400">
                      Recorded on {new Date(n.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: PUBLIC PROFILE & PUBLICATION */}
      {activeTab === "publish" && (
        <div className="space-y-5 text-sm">
          {app.status !== "approved" ? (
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-center space-y-2">
              <FaInfoCircle className="text-2xl text-amber-600 mx-auto" />
              <h4 className="font-extrabold text-slate-900">
                Application Must Be Approved First
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Tutors must be verified and approved on Tab 1 before a public directory profile can
                be activated and configured.
              </p>
              <button
                type="button"
                onClick={() => setActiveTab("review")}
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition cursor-pointer"
              >
                Return to Application Review
              </button>
            </div>
          ) : (
            <>
              {/* Status Toggle Card */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  app.teacher?.isPublished
                    ? "bg-emerald-50/80 border-emerald-300"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          app.teacher?.isPublished
                            ? "bg-emerald-500 animate-pulse"
                            : "bg-slate-400"
                        }`}
                      />
                      <h4 className="font-extrabold text-slate-900 text-base">
                        Directory Visibility:{" "}
                        <span
                          className={
                            app.teacher?.isPublished ? "text-emerald-700" : "text-slate-600"
                          }
                        >
                          {app.teacher?.isPublished ? "Published (Live)" : "Private (Hidden)"}
                        </span>
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 max-w-lg">
                      {app.teacher?.isPublished
                        ? "This tutor is currently visible on the public /tutors directory and eligible for matching recommendations."
                        : "This tutor's public profile is private. Students cannot see them in directory searches until explicitly published."}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    {app.teacher?.isPublished && app.teacher?._id && (
                      <Link
                        href={`/tutors/${app.teacher._id}`}
                        target="_blank"
                        className="px-3.5 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-100 font-bold text-xs transition flex items-center gap-1.5"
                      >
                        <FaExternalLinkAlt className="text-[10px]" /> View Profile
                      </Link>
                    )}

                    <button
                      type="button"
                      onClick={handleTogglePublish}
                      disabled={publishMutation.isPending || unpublishMutation.isPending}
                      className={`px-4 py-2 rounded-xl font-bold text-xs transition flex items-center gap-1.5 shadow-xs cursor-pointer ${
                        app.teacher?.isPublished
                          ? "bg-rose-50 text-rose-700 border border-rose-300 hover:bg-rose-100"
                          : "bg-emerald-600 text-white hover:bg-emerald-700"
                      }`}
                    >
                      {app.teacher?.isPublished ? (
                        <>
                          <FaEyeSlash /> Unpublish / Make Private
                        </>
                      ) : (
                        <>
                          <FaGlobe /> Publish to Public Directory
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Directory Customization Form */}
              <form onSubmit={handleSavePublicSettings} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Public Headline / Tagline
                  </label>
                  <PortalInput
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    placeholder="e.g. Certified French Instructor | 5+ Years Experience"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Min Hourly Rate (₹)
                    </label>
                    <PortalInput
                      type="number"
                      value={rateMin}
                      onChange={(e) => setRateMin(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Max Hourly Rate (₹)
                    </label>
                    <PortalInput
                      type="number"
                      value={rateMax}
                      onChange={(e) => setRateMax(Number(e.target.value))}
                    />
                  </div>
                </div>

                {/* Privacy checkboxes */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold text-slate-700">
                      Allowed Public Profile Fields (Strict Allowlist Protection)
                    </label>
                    <span className="text-[11px] text-slate-400">
                      {allowedFields.length} fields permitted
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {Object.entries(readableFieldLabels).map(([fieldKey, label]) => {
                      const isChecked = allowedFields.includes(fieldKey);
                      return (
                        <label
                          key={fieldKey}
                          className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition ${
                            isChecked
                              ? "bg-amber-50/70 border-amber-300 text-amber-950 font-bold"
                              : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleFieldPermission(fieldKey)}
                            className="rounded text-amber-500 focus:ring-amber-400"
                          />
                          <span>{label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2">
                  <PortalButton
                    type="submit"
                    disabled={publicSettingsMutation.isPending}
                    className="w-full"
                  >
                    Save Public Profile Settings
                  </PortalButton>
                </div>
              </form>
            </>
          )}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={() => deleteMutation.mutate(app._id)}
        title="Delete Tutor Application"
        message={`Are you sure you want to delete the tutor application for "${app.fullName}"? This will archive the application from the active review list.`}
        confirmText="Delete Application"
        isDeleting={deleteMutation.isPending}
      />
    </div>
  );
}
