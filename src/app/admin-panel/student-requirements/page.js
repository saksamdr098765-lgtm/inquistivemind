"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaSearch,
  FaFilter,
  FaHandshake,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaUserGraduate,
  FaChevronRight,
  FaExternalLinkAlt,
  FaTrash,
} from "react-icons/fa";
import { toast } from "sonner";
import useDebounce from "@/Hooks/useDebounce";
import { useAdminStudentRequirements } from "@/Hooks/useAdminStudentRequirements";
import { useAdminDeleteStudentRequirementMutation } from "@/app/mutations/AdminMutations";
import StudentRequirementDetailView from "./components/StudentRequirementDetailView";

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
  { label: "Open Enquiries", value: "open" },
  { label: "Matched", value: "matched" },
  { label: "Contacted", value: "contacted" },
  { label: "Converted / Enrolled", value: "converted" },
  { label: "Closed", value: "closed" },
  { label: "Cancelled", value: "cancelled" },
];

export default function StudentRequirementsPage() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [subject, setSubject] = useState("");
  const [mode, setMode] = useState("");

  const debouncedSearch = useDebounce(search, 400);

  const { data, isLoading, refetch } = useAdminStudentRequirements(
    page,
    debouncedSearch,
    status,
    subject,
    mode
  );

  const requirements = data?.requirements || [];
  const pagination = data?.pagination || {};

  // Selected requirement for desktop detail modal
  const [selectedReq, setSelectedReq] = useState(null);

  // Deletion modal state
  const [deletingReq, setDeletingReq] = useState(null);
  const deleteReqMutation = useAdminDeleteStudentRequirementMutation(() => {
    setDeletingReq(null);
    if (selectedReq?._id === deletingReq?._id) {
      setSelectedReq(null);
    }
    refetch();
  });

  const confirmDeleteReq = () => {
    if (deletingReq?._id) {
      deleteReqMutation.mutate(deletingReq._id);
    }
  };

  // Navigate to dedicated page on mobile (< 768px), or open modal on desktop
  const handleOpenDetail = (req) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      router.push(`/admin-panel/student-requirements/${req._id}`);
    } else {
      setSelectedReq(req);
    }
  };

  const columns = [
    {
      header: "Requirement ID",
      key: "referenceCode",
      render: (req) => (
        <div>
          <span className="font-mono text-xs font-black text-amber-900 bg-amber-100/90 px-2.5 py-1 rounded-lg border border-amber-300 shadow-2xs">
            {req.referenceCode}
          </span>
          <p className="text-[10px] text-slate-400 mt-1 font-semibold">
            {new Date(req.createdAt).toLocaleDateString()}
          </p>
        </div>
      ),
    },
    {
      header: "Student User",
      key: "name",
      render: (req) => (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-900 font-black border border-amber-300 text-sm shadow-2xs">
            {req.name?.charAt(0)?.toUpperCase() || "S"}
          </div>
          <div>
            <p className="font-bold text-slate-900 leading-snug">{req.name}</p>
            <p className="text-xs text-slate-400">
              {req.city ? `${req.city} • ` : ""}
              {req.user ? "Registered Account" : "Guest Lead"}
            </p>
          </div>
        </div>
      ),
    },
    {
      header: "Subject & Level",
      key: "subject",
      render: (req) => (
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
            {req.subject}
          </span>
          <p className="text-xs text-slate-500 mt-0.5">{req.level || "Any level"}</p>
        </div>
      ),
    },
    {
      header: "Teaching Mode",
      key: "mode",
      render: (req) => (
        <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
          {req.mode || "Flexible"}
        </span>
      ),
    },
    {
      header: "Status",
      key: "status",
      render: (req) => <PortalBadge variant={req.status}>{req.status}</PortalBadge>,
    },
    {
      header: "Actions",
      key: "actions",
      align: "right",
      render: (req) => (
        <div className="flex items-center justify-end gap-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleOpenDetail(req);
            }}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-xs transition cursor-pointer"
          >
            View Details
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/admin-panel/matching?reqId=${req._id}`);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-xs hover:bg-amber-500 transition shadow-2xs cursor-pointer"
          >
            <FaHandshake className="text-xs" /> Match Tutors
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setDeletingReq(req);
            }}
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 transition cursor-pointer"
            title="Delete Requirement"
          >
            <FaTrash className="text-xs" />
          </button>
        </div>
      ),
    },
  ];

  // Mobile First Custom Card Renderer (< 1024px)
  const renderMobileCard = (req) => (
    <div
      onClick={() => router.push(`/admin-panel/student-requirements/${req._id}`)}
      className="space-y-3 cursor-pointer"
    >
      {/* Header: Name, Ref Code, Date, Status */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 font-black text-base shadow-xs">
            {req.name?.charAt(0)?.toUpperCase() || "S"}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug truncate">
                {req.name}
              </h4>
              <span className="font-mono text-[10px] font-black px-2 py-0.5 rounded-md bg-amber-100 text-amber-950 border border-amber-200">
                {req.referenceCode}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5 truncate">
              {req.city ? `${req.city} • ` : ""}
              {new Date(req.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <PortalBadge variant={req.status}>{req.status}</PortalBadge>
      </div>

      {/* Metadata Chips */}
      <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200/80 text-xs font-bold">
          📚 {req.subject}
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
          🌐 {req.mode || "Online"}
        </span>
        {req.level && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">
            🎯 {req.level}
          </span>
        )}
      </div>

      {/* Contact Info & Verified tag */}
      <div className="text-xs text-slate-600 flex items-center justify-between gap-2 pt-1 border-t border-slate-100">
        <span className="text-slate-500 truncate max-w-[180px]">{req.email || req.phone}</span>
        {req.user ? (
          <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
            Registered Student
          </span>
        ) : (
          <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
            Guest Lead
          </span>
        )}
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-1 gap-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/admin-panel/matching?reqId=${req._id}`);
          }}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-extrabold text-xs shadow-xs"
        >
          <FaHandshake className="text-amber-400" /> Match Tutors
        </button>

        <span className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs shadow-2xs">
          View Details <FaChevronRight className="text-[9px]" />
        </span>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setDeletingReq(req);
          }}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 transition shrink-0"
          title="Delete Requirement"
        >
          <FaTrash className="text-xs" />
        </button>
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
              <FaUserGraduate />
            </span>
            Student Requirements
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Manage student learning enquiries, inspect student needs, and match candidate educators.
          </p>
        </div>
      </div>

      {/* Filters Card */}
      <PortalCard>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div className="relative sm:col-span-2">
            <PortalInput
              placeholder="Search by reference code, student name, email, subject..."
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
        data={requirements}
        loading={isLoading}
        onRowClick={handleOpenDetail}
        renderMobileCard={renderMobileCard}
        selectedRowId={selectedReq?._id}
        emptyMessage="No student requirements match your search."
      />

      {/* Pagination Footer */}
      {requirements.length > 0 && pagination.totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <p className="text-xs font-semibold text-slate-500 text-center sm:text-left">
            Showing Page <span className="text-slate-900 font-bold">{pagination.page}</span> of{" "}
            <span className="text-slate-900 font-bold">{pagination.totalPages}</span> ({pagination.total} total requirements)
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

      {/* Desktop Detail Modal */}
      {selectedReq && (
        <Modal
          isOpen={Boolean(selectedReq)}
          onClose={() => setSelectedReq(null)}
          size="xl"
          title={`Student Requirement: ${selectedReq.referenceCode}`}
          subtitle={`Submitted on ${new Date(selectedReq.createdAt).toLocaleDateString()} • Student Enquiry`}
        >
          <StudentRequirementDetailView
            requirement={selectedReq}
            onRequirementUpdated={(updated) => setSelectedReq(updated)}
            onRequirementDeleted={() => {
              setSelectedReq(null);
              refetch();
            }}
            isModal={true}
          />
        </Modal>
      )}

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={Boolean(deletingReq)}
        onClose={() => setDeletingReq(null)}
        onConfirm={confirmDeleteReq}
        title="Delete Student Requirement"
        message={`Are you sure you want to delete student requirement "${deletingReq?.referenceCode}" (${deletingReq?.name})? This will archive the requirement and remove it from active matching.`}
        confirmText="Delete Requirement"
        isDeleting={deleteReqMutation.isPending}
      />
    </div>
  );
}
