"use client";

import { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaSpinner, FaUserGraduate } from "react-icons/fa";
import { useAdminStudentRequirementById } from "@/Hooks/useAdminStudentRequirements";
import StudentRequirementDetailView from "../components/StudentRequirementDetailView";

export default function StudentRequirementDetailPage({ params }) {
  const router = useRouter();
  const unwrappedParams = use(params);
  const requirementId = unwrappedParams.id;

  const { data, isLoading, refetch } =
    useAdminStudentRequirementById(requirementId);

  const requirement = data?.requirement;

  return (
    <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto pb-12">
      {/* Top Breadcrumb Navigation */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/admin-panel/student-requirements"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 px-3.5 py-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs transition"
        >
          <FaArrowLeft className="text-xs" /> Back to Student Requirements
        </Link>
      </div>

      {isLoading ? (
        <div className="text-center py-16 rounded-2xl bg-white border border-slate-200">
          <FaSpinner className="animate-spin text-3xl text-amber-500 mx-auto mb-3" />
          <p className="text-sm font-semibold text-slate-600">
            Loading student requirement details...
          </p>
        </div>
      ) : !requirement ? (
        <div className="text-center py-16 rounded-2xl bg-white border border-slate-200 space-y-3">
          <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-amber-100 text-amber-800 text-xl font-bold">
            <FaUserGraduate />
          </div>
          <h2 className="text-lg font-bold text-slate-800">Requirement Not Found</h2>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            The requested student requirement does not exist or has been removed.
          </p>
          <Link
            href="/admin-panel/student-requirements"
            className="inline-block px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs"
          >
            Return to Requirements List
          </Link>
        </div>
      ) : (
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-4 sm:p-7 shadow-xs">
          <StudentRequirementDetailView
            requirement={requirement}
            onRequirementUpdated={() => refetch()}
            onRequirementDeleted={() => router.push("/admin-panel/student-requirements")}
            isModal={false}
          />
        </div>
      )}
    </div>
  );
}
