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
  FaSpinner,
  FaHandshake,
  FaGraduationCap,
  FaUserGraduate,
  FaLaptop,
  FaCalendarCheck,
  FaQuoteLeft,
  FaHistory,
  FaBookOpen,
  FaCheck,
  FaSlidersH,
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
  const [pendingAction, setPendingAction] = useState(null); // tracks 'approved' | 'under_review' | 'info_requested' | 'rejected'

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
        setHeadline(`${application.subject || "Academic"} Instructor`);
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

    setPendingAction(newStatus);
    reviewMutation.mutate(
      {
        status: newStatus,
        note: reviewNote,
        infoMessage: newStatus === "info_requested" ? actionMessage : "",
        rejectionReason: newStatus === "rejected" ? actionMessage : "",
      },
      {
        onSettled: () => setPendingAction(null),
      }
    );
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
    <div className="space-y-6">
      {/* ======================================================== */}
      {/* 1. TOP APPLICANT DOSSIER BANNER CARD                     */}
      {/* ======================================================== */}
      <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-50 via-white to-amber-50/60 border border-amber-200/90 shadow-2xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          {/* Avatar & Main Info */}
          <div className="flex items-start sm:items-center gap-4 min-w-0">
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 font-black text-xl sm:text-2xl shadow-xs border border-amber-300">
              {app.fullName?.charAt(0)?.toUpperCase() || "T"}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug break-words">
                  {app.fullName}
                </h3>
                <PortalBadge variant={app.status}>{app.status}</PortalBadge>
                {app.teacher?.isPublished ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <FaEye className="text-[10px]" /> Live on Directory
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    <FaEyeSlash className="text-[10px]" /> Private Profile
                  </span>
                )}
                <span className="text-[10px] font-mono text-slate-400 bg-white px-2 py-0.5 rounded-md border border-slate-200/80">
                  ID: #{app._id?.slice(-6)?.toUpperCase()}
                </span>
              </div>

              {/* Quick Contact & Location Chips */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 mt-2">
                <a
                  href={`mailto:${app.email}`}
                  className="flex items-center gap-1.5 font-semibold text-slate-700 hover:text-amber-600 transition break-all sm:break-normal"
                  title="Click to email tutor"
                >
                  <FaEnvelope className="text-amber-500 text-xs shrink-0" />
                  <span>{app.email}</span>
                </a>

                {app.phone && (
                  <a
                    href={`tel:${app.phone}`}
                    className="flex items-center gap-1.5 font-semibold font-mono text-slate-700 hover:text-amber-600 transition"
                    title="Click to call tutor"
                  >
                    <FaPhoneAlt className="text-amber-500 text-xs shrink-0" />
                    <span>{app.phone}</span>
                  </a>
                )}

                {app.city && (
                  <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                    <FaMapMarkerAlt className="text-amber-500 text-xs shrink-0" />
                    <span>{app.city}</span>
                  </span>
                )}

                <span className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <FaCalendarAlt className="text-slate-400 text-xs shrink-0" />
                  <span>Applied: {new Date(app.createdAt).toLocaleDateString()}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Quick Header Tools & Navigation */}
          <div className="flex items-center gap-2.5 justify-start lg:justify-end text-xs flex-wrap shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-amber-200/50">
            {app.status === "approved" && (
              <Link
                href="/admin-panel/matching"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black transition shadow-xs cursor-pointer"
                title="Match approved tutor with student requirements"
              >
                <FaHandshake className="text-sm" />
                <span>Match Students</span>
              </Link>
            )}

            {isModal && (
              <Link
                href={`/admin-panel/tutor-applications/${app._id}`}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold transition"
                title="Open in dedicated full page"
              >
                <span>Full Page View</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </Link>
            )}

            <button
              type="button"
              disabled={deleteMutation.isPending}
              onClick={() => setIsDeleteOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 font-bold transition cursor-pointer disabled:opacity-60"
              title="Delete Application"
            >
              {deleteMutation.isPending ? (
                <FaSpinner className="animate-spin text-xs" />
              ) : (
                <FaTrash className="text-xs" />
              )}
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. RESPONSIVE TAB SWITCHER                               */}
      {/* ======================================================== */}
      <div className="flex border-b border-slate-200 gap-4 sm:gap-8 overflow-x-auto no-scrollbar">
        <button
          type="button"
          onClick={() => setActiveTab("review")}
          className={`pb-3.5 font-black text-xs sm:text-sm transition-all border-b-2 flex items-center gap-2 shrink-0 cursor-pointer ${
            activeTab === "review"
              ? "border-amber-500 text-amber-700"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <FaFileAlt className="text-sm" />
          <span>Application &amp; Review Dossier</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("publish")}
          className={`pb-3.5 font-black text-xs sm:text-sm transition-all border-b-2 flex items-center gap-2 shrink-0 cursor-pointer ${
            activeTab === "publish"
              ? "border-amber-500 text-amber-700"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <FaGlobe className="text-sm" />
          <span>Public Directory Profile</span>
          {app.teacher?.isPublished ? (
            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              Live
            </span>
          ) : (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              Private
            </span>
          )}
        </button>
      </div>

      {/* ======================================================== */}
      {/* 3. TAB 1: APPLICATION & CREDENTIALS REVIEW               */}
      {/* ======================================================== */}
      {activeTab === "review" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          {/* ---------------------------------------------------- */}
          {/* LEFT COLUMN: Teacher Dossier (8 cols on desktop)    */}
          {/* ---------------------------------------------------- */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-5 sm:space-y-6 min-w-0">
            {/* Subject Specialization Highlight Card */}
            <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-amber-50/70 border border-amber-200/90 shadow-2xs space-y-2">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                <FaBookOpen className="text-amber-600 text-xs" />
                Teaching Subject Specialization
              </span>
              <div className="text-base sm:text-xl font-black text-amber-950 break-words leading-tight">
                {app.subject || "Not specified"}
              </div>
            </div>

            {/* Academic Credentials & Experience Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {/* Academic Qualification */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <FaGraduationCap className="text-amber-500 text-sm" />
                  Academic Qualification
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 break-words leading-relaxed">
                  {app.qualification || "Not specified"}
                </p>
              </div>

              {/* Teaching Experience */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <FaBriefcase className="text-amber-500 text-sm" />
                  Teaching Experience
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 break-words leading-relaxed">
                  {app.experience || "Not specified"}
                </p>
              </div>

              {/* Target Student Level */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <FaUserGraduate className="text-amber-500 text-sm" />
                  Target Student Level
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 break-words leading-relaxed">
                  {app.studentLevel || "All student levels"}
                </p>
              </div>

              {/* Teaching Mode */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <FaLaptop className="text-amber-500 text-sm" />
                  Teaching Mode
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 break-words leading-relaxed">
                  {app.mode || "Online Classes"}
                </p>
              </div>
            </div>

            {/* Schedule & Availability Section */}
            <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
              <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <FaCalendarCheck className="text-amber-500" />
                <span>Teaching Schedule &amp; Time Slots</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* Available Days */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                    <FaCalendarAlt className="text-amber-500 text-xs" /> Available Days
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {app.availability && app.availability.length > 0 ? (
                      app.availability.map((day) => (
                        <span
                          key={day}
                          className="px-2.5 py-1 rounded-xl bg-amber-50 text-amber-950 font-bold text-xs border border-amber-200/80 shadow-2xs"
                        >
                          {day}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-400 italic">Flexible schedule</span>
                    )}
                  </div>
                </div>

                {/* Preferred Time Slots */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                    <FaClock className="text-amber-500 text-xs" /> Preferred Time Slots
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {app.timeSlot && app.timeSlot.length > 0 ? (
                      app.timeSlot.map((slot) => (
                        <span
                          key={slot}
                          className="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200 shadow-2xs"
                        >
                          {slot}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-400 italic">Flexible timing</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Teacher Bio & Motivation */}
            {app.bio && (
              <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-amber-50/40 border border-amber-200/80 shadow-2xs space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <FaQuoteLeft className="text-amber-600 text-xs" />
                  Teacher Statement &amp; Introduction
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic break-words whitespace-pre-line pl-1">
                  "{app.bio}"
                </p>
              </div>
            )}

            {/* Internal Review History Timeline */}
            {app.reviewNotes && app.reviewNotes.length > 0 && (
              <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
                <h4 className="font-black text-slate-900 text-xs uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <FaHistory className="text-amber-500" />
                  <span>Internal Review History ({app.reviewNotes.length})</span>
                </h4>
                <div className="space-y-2 pt-1">
                  {app.reviewNotes.map((n, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1"
                    >
                      <p className="text-slate-800 font-semibold break-words">{n.note}</p>
                      <p className="text-[10px] text-slate-400 font-medium">
                        Recorded on {new Date(n.createdAt).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ---------------------------------------------------- */}
          {/* RIGHT COLUMN: Review Console & Actions (4-5 cols)   */}
          {/* ---------------------------------------------------- */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-5 lg:sticky lg:top-4 min-w-0">
            {/* Review Decision Console Card */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-5">
              {/* Console Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 gap-2">
                <div>
                  <h4 className="font-black text-sm sm:text-base text-white flex items-center gap-2">
                    <FaShieldAlt className="text-amber-400" /> Review Decision Console
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Current: <strong className="text-amber-300 capitalize">{app.status}</strong>
                  </p>
                </div>

                {app.status === "approved" && (
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30 flex items-center gap-1 shrink-0">
                    <FaCheckCircle className="text-xs" /> Approved
                  </span>
                )}
              </div>

              {/* 4 Decision Action Buttons in 2x2 Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {/* Approve Button */}
                <button
                  type="button"
                  disabled={reviewMutation.isPending || app.status === "approved"}
                  onClick={() => handleReviewAction("approved")}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl font-bold text-xs transition-all gap-1.5 border ${
                    app.status === "approved"
                      ? "bg-emerald-800/40 text-emerald-300 border-emerald-700/50 cursor-default opacity-80"
                      : "bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-500 shadow-md cursor-pointer disabled:opacity-75 active:scale-98"
                  }`}
                >
                  {reviewMutation.isPending && pendingAction === "approved" ? (
                    <FaSpinner className="animate-spin text-base text-white" />
                  ) : (
                    <FaCheckCircle className="text-base" />
                  )}
                  <span>
                    {reviewMutation.isPending && pendingAction === "approved"
                      ? "Approving..."
                      : "Approve Tutor"}
                  </span>
                </button>

                {/* Under Review Button */}
                <button
                  type="button"
                  disabled={reviewMutation.isPending || app.status === "under_review"}
                  onClick={() => handleReviewAction("under_review")}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl font-bold text-xs transition-all gap-1.5 border ${
                    app.status === "under_review"
                      ? "bg-sky-800/40 text-sky-300 border-sky-700/50 cursor-default opacity-80"
                      : "bg-sky-700 hover:bg-sky-600 text-white border-sky-600 shadow-md cursor-pointer disabled:opacity-75 active:scale-98"
                  }`}
                >
                  {reviewMutation.isPending && pendingAction === "under_review" ? (
                    <FaSpinner className="animate-spin text-base text-white" />
                  ) : (
                    <FaClock className="text-base" />
                  )}
                  <span>
                    {reviewMutation.isPending && pendingAction === "under_review"
                      ? "Updating..."
                      : "Under Review"}
                  </span>
                </button>

                {/* Request Info Button */}
                <button
                  type="button"
                  disabled={reviewMutation.isPending}
                  onClick={() => {
                    setActionType(actionType === "info_requested" ? null : "info_requested");
                    setActionMessage(app.infoRequestedMessage || "");
                  }}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl font-bold text-xs transition-all gap-1.5 border cursor-pointer active:scale-98 ${
                    actionType === "info_requested"
                      ? "bg-amber-400 text-slate-950 border-amber-300 ring-2 ring-amber-300 font-extrabold"
                      : "bg-slate-800 hover:bg-slate-700 text-amber-400 border-slate-700"
                  }`}
                >
                  <FaInfoCircle className="text-base" />
                  <span>Request Info</span>
                </button>

                {/* Reject Button */}
                <button
                  type="button"
                  disabled={reviewMutation.isPending}
                  onClick={() => {
                    setActionType(actionType === "rejected" ? null : "rejected");
                    setActionMessage(app.rejectionReason || "");
                  }}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl font-bold text-xs transition-all gap-1.5 border cursor-pointer active:scale-98 ${
                    actionType === "rejected"
                      ? "bg-rose-500 text-white border-rose-400 ring-2 ring-rose-400 font-extrabold"
                      : "bg-slate-800 hover:bg-slate-700 text-rose-400 border-slate-700"
                  }`}
                >
                  <FaTimesCircle className="text-base" />
                  <span>Reject</span>
                </button>
              </div>

              {/* Contextual Action Input (Missing info or rejection reason) */}
              {actionType && (
                <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-amber-300">
                      {actionType === "info_requested"
                        ? "Specify Missing Documents or Info:"
                        : "State Reason for Rejection:"}
                    </label>
                    <button
                      type="button"
                      onClick={() => setActionType(null)}
                      className="text-slate-400 hover:text-white text-xs font-semibold cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>

                  <textarea
                    rows={2}
                    value={actionMessage}
                    onChange={(e) => setActionMessage(e.target.value)}
                    placeholder={
                      actionType === "info_requested"
                        ? "e.g. Please send degree certificate & government ID..."
                        : "e.g. Currently not accepting tutors for this subject..."
                    }
                    className="w-full text-xs p-2.5 rounded-xl bg-slate-900 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />

                  <button
                    type="button"
                    disabled={reviewMutation.isPending || !actionMessage.trim()}
                    onClick={() => handleReviewAction(actionType)}
                    className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs transition cursor-pointer flex items-center justify-center gap-2 ${
                      actionType === "info_requested"
                        ? "bg-amber-400 hover:bg-amber-300 text-slate-950 font-black"
                        : "bg-rose-600 hover:bg-rose-500 text-white"
                    }`}
                  >
                    {reviewMutation.isPending && pendingAction === actionType ? (
                      <>
                        <FaSpinner className="animate-spin text-xs" />
                        <span>
                          {actionType === "info_requested"
                            ? "Sending Request..."
                            : "Rejecting Application..."}
                        </span>
                      </>
                    ) : (
                      <span>
                        Confirm {actionType === "info_requested" ? "Information Request" : "Rejection"}
                      </span>
                    )}
                  </button>
                </div>
              )}

              {/* Internal Admin Note */}
              <div className="space-y-1.5 pt-1">
                <label className="text-xs font-bold text-slate-400 block">
                  Internal Team Note (Private)
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

            {/* Approved Tutor Next Steps Card */}
            {app.status === "approved" && (
              <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-amber-50 border border-amber-300/80 shadow-2xs space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-400 text-slate-950 font-black text-sm">
                    <FaHandshake />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-sm text-slate-900 leading-tight">
                      Ready for Student Matching
                    </h5>
                    <p className="text-[11px] text-amber-800 font-medium">
                      Tutor is qualified and available.
                    </p>
                  </div>
                </div>

                <Link
                  href="/admin-panel/matching"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-black text-xs shadow-xs transition"
                >
                  <FaHandshake />
                  <span>Open Matching Console</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 4. TAB 2: PUBLIC DIRECTORY PROFILE                       */}
      {/* ======================================================== */}
      {activeTab === "publish" && (
        <div className="space-y-6">
          {app.status !== "approved" ? (
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-amber-50 border border-amber-200 text-center space-y-3">
              <FaInfoCircle className="text-3xl text-amber-600 mx-auto" />
              <h4 className="font-black text-slate-900 text-base sm:text-lg">
                Application Must Be Approved First
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Tutors must be verified and approved on Tab 1 before a public directory profile can
                be activated and configured.
              </p>
              <button
                type="button"
                onClick={() => setActiveTab("review")}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs transition cursor-pointer shadow-xs"
              >
                Return to Application Review
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Directory Visibility Toggle Banner */}
              <div
                className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border transition-all ${
                  app.teacher?.isPublished
                    ? "bg-emerald-50/80 border-emerald-300"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          app.teacher?.isPublished
                            ? "bg-emerald-500 animate-pulse"
                            : "bg-slate-400"
                        }`}
                      />
                      <h4 className="font-black text-slate-900 text-base">
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
                    <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
                      {app.teacher?.isPublished
                        ? "This tutor is currently visible on the public /tutors directory and eligible for matching recommendations."
                        : "This tutor's public profile is private. Students cannot see them in directory searches until explicitly published."}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap shrink-0">
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
                      className={`px-4 py-2.5 rounded-xl font-black text-xs transition flex items-center gap-1.5 shadow-xs cursor-pointer ${
                        app.teacher?.isPublished
                          ? "bg-rose-50 text-rose-700 border border-rose-300 hover:bg-rose-100"
                          : "bg-emerald-600 text-white hover:bg-emerald-700"
                      }`}
                    >
                      {publishMutation.isPending || unpublishMutation.isPending ? (
                        <>
                          <FaSpinner className="animate-spin text-xs" />
                          <span>
                            {app.teacher?.isPublished ? "Unpublishing..." : "Publishing..."}
                          </span>
                        </>
                      ) : app.teacher?.isPublished ? (
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

              {/* Directory Customization Form (Responsive 2-Column Grid) */}
              <form onSubmit={handleSavePublicSettings} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
                  {/* Left Column: Headline & Rates */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
                      <h5 className="font-black text-xs uppercase tracking-wider text-slate-700 flex items-center gap-2">
                        <FaSlidersH className="text-amber-500" />
                        <span>Public Directory Specs</span>
                      </h5>

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

                      <div className="grid grid-cols-2 gap-3 pt-1">
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
                    </div>
                  </div>

                  {/* Right Column: Allowlist Permissions */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                      <div className="flex items-center justify-between pb-1">
                        <h5 className="font-black text-xs uppercase tracking-wider text-slate-700">
                          Allowed Public Profile Fields
                        </h5>
                        <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                          {allowedFields.length} permitted
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-500 leading-normal">
                        Only checked fields will be visible to students on the public website. Unchecked fields remain strictly confidential to the admin team.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {Object.entries(readableFieldLabels).map(([fieldKey, label]) => {
                          const isChecked = allowedFields.includes(fieldKey);
                          return (
                            <label
                              key={fieldKey}
                              className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition select-none ${
                                isChecked
                                  ? "bg-amber-50/80 border-amber-300 text-amber-950 font-bold shadow-2xs"
                                  : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleFieldPermission(fieldKey)}
                                className="rounded text-amber-500 focus:ring-amber-400 h-3.5 w-3.5"
                              />
                              <span className="truncate">{label}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <PortalButton
                    type="submit"
                    disabled={publicSettingsMutation.isPending}
                    isLoading={publicSettingsMutation.isPending}
                    className="w-full"
                  >
                    Save Public Profile Settings
                  </PortalButton>
                </div>
              </form>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* 5. DELETE CONFIRMATION MODAL                             */}
      {/* ======================================================== */}
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
