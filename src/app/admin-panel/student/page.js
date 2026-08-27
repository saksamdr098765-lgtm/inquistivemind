"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import { useAdminStudent } from "@/Hooks/useAdminStudents";
import useDebounce from "@/Hooks/useDebounce";
import capitalizeFirstLetter from "@/Utils/captilizeFirstLetter";
import { useAdminDeleteUser } from "@/app/mutations/AdminMutations";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalTable from "@/app/Components/portal-ui/PortalTable";
import PortalInput from "@/app/Components/portal-ui/PortalInput";
import PortalSelect from "@/app/Components/portal-ui/PortalSelect";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";

export default function Students() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    approvalStatus: "",
    role: "",
  });

  const debouncedSearch = useDebounce(search, 500);
  const deleteUserMutation = useAdminDeleteUser();
  const { data, isLoading } = useAdminStudent(
    page,
    filters.search,
    filters.status,
    filters.approvalStatus,
    filters.role
  );

  const users = data?.users || [];
  const pagination = data?.pagination || {};

  useEffect(() => {
    setFilters((prev) => ({ ...prev, search: debouncedSearch }));
  }, [debouncedSearch]);

  const handleDelete = (userId, name) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      deleteUserMutation.mutate(userId);
    }
  };

  const columns = [
    {
      header: "Student Name",
      key: "fullName",
      render: (student) => (
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-800 border border-yellow-300 text-lg">
            {student.fullName?.charAt(0) || "U"}
          </div>
          <div>
            <h4 className="font-bold text-slate-900 leading-snug">
              {student.fullName}
              <span className="ml-2 text-xs font-semibold text-slate-400">
                ({capitalizeFirstLetter(student.role)})
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              ID #{student._id?.toString().slice(-6).toUpperCase()}
            </p>
          </div>
        </div>
      ),
    },
    {
      header: "Contact Info",
      key: "email",
      render: (student) => (
        <div>
          <p className="font-semibold text-slate-800 text-sm">{student.email}</p>
          <p className="text-xs text-slate-400 mt-0.5">{student.phone || "No phone"}</p>
        </div>
      ),
    },
    {
      header: "Approval",
      key: "approvalStatus",
      render: (student) => <PortalBadge variant={student.approvalStatus}>{student.approvalStatus}</PortalBadge>,
    },
    {
      header: "Account Status",
      key: "status",
      render: (student) => <PortalBadge variant={student.status}>{student.status}</PortalBadge>,
    },
    {
      header: "Actions",
      key: "actions",
      align: "right",
      render: (student) => (
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => router.push(`/admin-panel/user/${student._id}`)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50 text-yellow-800 border border-yellow-200 hover:bg-yellow-100 transition-colors"
            title="Edit User"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete(student._id, student.fullName)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
            title="Delete User"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Executive Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[32px] bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
      >
        <div>
          <span className="inline-flex rounded-full bg-yellow-400/15 border border-yellow-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300 backdrop-blur-md">
            Administration
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Student{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Management
            </span>
          </h1>
          <p className="mt-1 text-slate-300 font-medium text-sm max-w-xl">
            Monitor, approve, update, and manage student accounts across all courses.
          </p>
        </div>

        <PortalButton
          variant="primary"
          icon={FaPlus}
          onClick={() => router.push("/admin-panel/add-student")}
        >
          Add New Student
        </PortalButton>
      </motion.div>

      {/* Filter and Search Bar */}
      <PortalCard padding="p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <PortalInput
            icon={FaSearch}
            placeholder="Search by name, email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <PortalSelect
            value={filters.status}
            onChange={(e) => setFilters((prev) => ({ ...prev, status: e.target.value }))}
          >
            <option value="">All Statuses</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="blocked">Blocked</option>
          </PortalSelect>

          <PortalSelect
            value={filters.approvalStatus}
            onChange={(e) => setFilters((prev) => ({ ...prev, approvalStatus: e.target.value }))}
          >
            <option value="">All Approvals</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending Approval</option>
            <option value="rejected">Rejected</option>
          </PortalSelect>

          <PortalSelect
            value={filters.role}
            onChange={(e) => setFilters((prev) => ({ ...prev, role: e.target.value }))}
          >
            <option value="">All Roles</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </PortalSelect>
        </div>
      </PortalCard>

      {/* Main Student Data Table */}
      <div className="space-y-4">
        <PortalTable
          columns={columns}
          data={users}
          isLoading={isLoading}
          emptyTitle="No students found"
          emptyDescription="No student records matched your search parameters."
          renderMobileCard={(student) => (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-800 border border-yellow-300">
                    {student.fullName?.charAt(0) || "U"}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{student.fullName}</h4>
                    <p className="text-xs text-slate-400">{student.email}</p>
                  </div>
                </div>
                <PortalBadge variant={student.status}>{student.status}</PortalBadge>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
                <span>Approval: <strong className="capitalize text-slate-700">{student.approvalStatus}</strong></span>
                <span>Phone: <strong className="text-slate-700">{student.phone || "N/A"}</strong></span>
              </div>

              <div className="flex gap-2 pt-2">
                <PortalButton
                  variant="yellowOutline"
                  size="sm"
                  className="flex-1"
                  onClick={() => router.push(`/admin-panel/user/${student._id}`)}
                >
                  Edit Details
                </PortalButton>
                <button
                  onClick={() => handleDelete(student._id, student.fullName)}
                  className="px-3.5 py-2 rounded-xl bg-rose-50 text-rose-600 font-bold text-xs hover:bg-rose-100 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        />

        {/* Pagination Footer */}
        {users.length > 0 && pagination.totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500">
              Showing Page <span className="text-slate-900">{pagination.page}</span> of{" "}
              <span className="text-slate-900">{pagination.totalPages}</span> ({pagination.total} total students)
            </p>

            <div className="flex items-center gap-2">
              <PortalButton
                variant="outline"
                size="sm"
                disabled={!pagination.hasPreviousPage}
                onClick={() => setPage((prev) => prev - 1)}
              >
                Previous
              </PortalButton>

              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`h-9 w-9 rounded-xl text-xs font-bold transition-all ${
                    page === pageNum
                      ? "bg-yellow-400 text-slate-950 font-extrabold shadow-xs"
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
      </div>
    </div>
  );
}