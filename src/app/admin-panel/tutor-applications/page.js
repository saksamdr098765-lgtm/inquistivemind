"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaSearch,
  FaUserTie,
  FaEye,
  FaEyeSlash,
  FaChevronRight,
  FaExternalLinkAlt,
  FaTrash,
} from "react-icons/fa";
import useDebounce from "@/Hooks/useDebounce";
import { useAdminTutorApplications } from "@/Hooks/useAdminTutorApplications";
import { useAdminDeleteTutorApplicationMutation } from "@/app/mutations/AdminMutations";
import TutorApplicationDetailView from "./components/TutorApplicationDetailView";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalTable from "@/app/Components/portal-ui/PortalTable";
import PortalInput from "@/app/Components/portal-ui/PortalInput";
import PortalSelect from "@/app/Components/portal-ui/PortalSelect";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import DeleteConfirmModal from "@/app/Components/portal-ui/DeleteConfirmModal";
import Modal from "@/app/Components/ui/Modals";

const statusFilterOptions = [
  { label: "All Statuses", value: "" },
  { label: "Pending Review", value: "pending" },
  { label: "Under Review", value: "under_review" },
  { label: "Info Requested", value: "info_requested" },
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "rejected" },
];

export default function TutorApplicationsPage() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [subject, setSubject] = useState("");

  const debouncedSearch = useDebounce(search, 400);

  const { data, isLoading, refetch } = useAdminTutorApplications(
    page,
    debouncedSearch,
    status,
    subject
  );

  const applications = data?.applications || [];
  const pagination = data?.pagination || {};

  // Selected application for desktop review modal
  const [selectedApp, setSelectedApp] = useState(null);

  // Deletion modal state
  const [deletingApp, setDeletingApp] = useState(null);
  const deleteMutation = useAdminDeleteTutorApplicationMutation(() => {
    setDeletingApp(null);
    if (selectedApp?._id === deletingApp?._id) {
      setSelectedApp(null);
    }
    refetch();
  });

  const confirmDelete = () => {
    if (deletingApp?._id) {
      deleteMutation.mutate(deletingApp._id);
    }
  };

  // Navigate to dedicated page on mobile (< 768px), or open modal on desktop
  const handleOpenReview = (app) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      router.push(`/admin-panel/tutor-applications/${app._id}`);
    } else {
      setSelectedApp(app);
    }
  };

  const columns = [
    {
      header: "Applicant",
      key: "fullName",
      render: (app) => (
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 font-black text-amber-900 border border-amber-300 text-sm shadow-2xs">
            {app.fullName?.charAt(0)?.toUpperCase() || "T"}
          </div>
          <div>
            <p className="font-bold text-slate-900 leading-snug">{app.fullName}</p>
            <p className="text-xs text-slate-400 mt-0.5">
              {app.city ? `${app.city} • ` : ""}
              {new Date(app.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      ),
    },
    {
      header: "Contact",
      key: "contact",
      render: (app) => (
        <div className="text-xs space-y-0.5">
          <a
            href={`mailto:${app.email}`}
            onClick={(e) => e.stopPropagation()}
            className="font-semibold text-slate-700 hover:text-amber-600 block truncate max-w-[180px]"
          >
            {app.email}
          </a>
          <p className="text-slate-400">{app.phone || "No phone"}</p>
        </div>
      ),
    },
    {
      header: "Subject & Level",
      key: "subject",
      render: (app) => (
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
            {app.subject}
          </span>
          <p className="text-xs text-slate-500 mt-1">{app.studentLevel || "All levels"}</p>
        </div>
      ),
    },
    {
      header: "Mode & Experience",
      key: "mode",
      render: (app) => (
        <div className="text-xs">
          <p className="font-semibold text-slate-700">{app.mode || "Online"}</p>
          <p className="text-slate-400">{app.experience || "Not specified"}</p>
        </div>
      ),
    },
    {
      header: "Status",
      key: "status",
      render: (app) => <PortalBadge variant={app.status}>{app.status}</PortalBadge>,
    },
    {
      header: "Public Profile",
      key: "isPublished",
      render: (app) => {
        const isPub = app.teacher?.isPublished;
        return (
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
              isPub
                ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                : "bg-slate-100 text-slate-500 border-slate-200"
            }`}
          >
            {isPub ? <FaEye className="text-xs" /> : <FaEyeSlash className="text-xs" />}
            {isPub ? "Published" : "Private"}
          </span>
        );
      },
    },
    {
      header: "Actions",
      key: "actions",
      align: "right",
      render: (app) => (
        <div className="flex items-center justify-end gap-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleOpenReview(app);
            }}
            className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs transition shadow-2xs cursor-pointer"
          >
            Review &amp; Manage
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setDeletingApp(app);
            }}
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 transition cursor-pointer"
            title="Delete Application"
          >
            <FaTrash className="text-xs" />
          </button>
        </div>
      ),
    },
  ];

  // Mobile First Custom Card Renderer (< 1024px)
  const renderMobileCard = (app) => (
    <div
      onClick={() => router.push(`/admin-panel/tutor-applications/${app._id}`)}
      className="space-y-3 cursor-pointer"
    >
      {/* Header: Avatar, Name, Date, Status */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 font-black text-base shadow-xs">
            {app.fullName?.charAt(0)?.toUpperCase() || "T"}
          </div>
          <div className="min-w-0">
            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug truncate">
              {app.fullName}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5 truncate">
              {app.city ? `${app.city} • ` : ""}
              {new Date(app.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <PortalBadge variant={app.status}>{app.status}</PortalBadge>
      </div>

      {/* Metadata Chips */}
      <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200/80 text-xs font-bold">
          📚 {app.subject}
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
          🌐 {app.mode || "Online"}
        </span>
        {app.experience && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">
            💼 {app.experience}
          </span>
        )}
      </div>

      {/* Contact & Publication Info */}
      <div className="text-xs text-slate-600 space-y-1 pt-1 border-t border-slate-100">
        <div className="flex items-center justify-between gap-2">
          <span className="text-slate-500 truncate max-w-[200px]">{app.email}</span>
          {app.teacher?.isPublished ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              <FaEye className="text-[9px]" /> Live
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              <FaEyeSlash className="text-[9px]" /> Private
            </span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-1 gap-2">
        <span className="text-xs text-slate-400 truncate">{app.phone || "No phone"}</span>
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setDeletingApp(app);
            }}
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 transition"
            title="Delete Application"
          >
            <FaTrash className="text-xs" />
          </button>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs shadow-2xs">
            Review <FaChevronRight className="text-[9px]" />
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 border border-amber-200 text-lg">
              <FaUserTie />
            </span>
            Tutor Applications
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Review incoming teacher applications, approve verified educators, and manage public directory visibility.
          </p>
        </div>
      </div>

      {/* Filters Card */}
      <PortalCard>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="relative">
            <PortalInput
              placeholder="Search by name, email, subject, city..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="pl-9"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
          </div>

          <PortalSelect
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(1);
            }}
          >
            {statusFilterOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </PortalSelect>

          <PortalInput
            placeholder="Filter by subject (e.g. French, Math)..."
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              setPage(1);
            }}
          />
        </div>
      </PortalCard>

      {/* Main Table & Mobile Cards Container */}
      <PortalTable
        columns={columns}
        data={applications}
        loading={isLoading}
        onRowClick={handleOpenReview}
        renderMobileCard={renderMobileCard}
        selectedRowId={selectedApp?._id}
        emptyMessage="No tutor applications match your filters."
      />

      {/* Pagination Footer */}
      {applications.length > 0 && pagination.totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <p className="text-xs font-semibold text-slate-500 text-center sm:text-left">
            Showing Page <span className="text-slate-900 font-bold">{pagination.page}</span> of{" "}
            <span className="text-slate-900 font-bold">{pagination.totalPages}</span> ({pagination.total} total applications)
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-1.5 sm:gap-2">
            <PortalButton
              variant="outline"
              size="sm"
              disabled={!pagination.hasPreviousPage}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Previous
            </PortalButton>

            {Array.from({ length: Math.min(pagination.totalPages, 5) }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`h-8 w-8 sm:h-9 sm:w-9 rounded-xl text-xs font-bold transition-all ${
                  page === pageNum
                    ? "bg-amber-400 text-slate-950 font-extrabold shadow-xs"
                    : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {pageNum}
              </button>
            ))}

            <PortalButton
              variant="outline"
              size="sm"
              disabled={!pagination.hasNextPage}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </PortalButton>
          </div>
        </div>
      )}

      {/* Desktop Review & Publication Modal */}
      {selectedApp && (
        <Modal
          isOpen={Boolean(selectedApp)}
          onClose={() => setSelectedApp(null)}
          size="xl"
          title={`Tutor Application: ${selectedApp.fullName}`}
          subtitle={`Submitted on ${new Date(selectedApp.createdAt).toLocaleDateString()} • Ref: ${selectedApp._id.slice(-6).toUpperCase()}`}
        >
          <TutorApplicationDetailView
            application={selectedApp}
            onApplicationUpdated={(updated) => setSelectedApp(updated)}
            onApplicationDeleted={() => {
              setSelectedApp(null);
              refetch();
            }}
            isModal={true}
          />
        </Modal>
      )}

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={Boolean(deletingApp)}
        onClose={() => setDeletingApp(null)}
        onConfirm={confirmDelete}
        title="Delete Tutor Application"
        message={`Are you sure you want to delete the tutor application for "${deletingApp?.fullName}"? This will archive the application from the active review list.`}
        confirmText="Delete Application"
        isDeleting={deleteMutation.isPending}
      />
    </div>
  );
}
