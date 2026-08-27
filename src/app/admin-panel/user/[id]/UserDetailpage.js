"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaUserShield,
  FaCheckCircle,
  FaBan,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { profileSchema } from "@/schemas/profileSchema";
import { useAdminUserById } from "@/Hooks/useUserByIdAdmin";
import capitalizeFirstLetter from "@/Utils/captilizeFirstLetter";
import {
  useAdminApproveUser,
  useAdminBlockUser,
  useAdminRejectUser,
  useAdminUnblockUser,
  useAdminUserUpdateMutation,
} from "@/app/mutations/AdminMutations";

import Modal from "@/app/Components/ui/Modals";
import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalInput from "@/app/Components/portal-ui/PortalInput";
import PortalSelect from "@/app/Components/portal-ui/PortalSelect";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import PortalSkeleton from "@/app/Components/portal-ui/PortalSkeleton";

export default function UserDetailsPage({ id }) {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const updateMutation = useAdminUserUpdateMutation(id);
  const approveUserMutation = useAdminApproveUser(id);
  const rejectUserMutation = useAdminRejectUser(id);
  const blockUserMutation = useAdminBlockUser(id, setOpen);
  const unblockUserMutation = useAdminUnblockUser(id);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty, dirtyFields },
  } = useForm({
    resolver: zodResolver(profileSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      profileImage: "",
      role: "",
    },
  });

  const { data, isLoading } = useAdminUserById(id);

  useEffect(() => {
    if (data) {
      reset({
        fullName: data.fullName || "",
        email: data.email || "",
        phone: data.phone || "",
        profileImage: data.profileImage || "",
        role: data.role || "",
      });
    }
  }, [data, reset]);

  const onSubmit = async (formData) => {
    if (!isDirty) {
      toast.error("Nothing changed");
      return;
    }
    const updatedData = getDirtyValues(dirtyFields, formData);
    await updateMutation.mutateAsync(updatedData);
  };

  const handleApproveUserClick = () => {
    if (!id) return;
    approveUserMutation.mutate();
  };

  const handleRejectUserClick = () => {
    if (!id) return;
    rejectUserMutation.mutate();
  };

  const handleBlockUserClick = () => {
    if (!id) return;
    blockUserMutation.mutate({ reason });
  };

  const handleUnblockUserClick = () => {
    if (!id) return;
    unblockUserMutation.mutate();
  };

  if (isLoading) return <PortalSkeleton type="profile" />;

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Executive Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[32px] bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div>
          <button
            onClick={() => router.push("/admin-panel/student")}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-yellow-400 hover:underline mb-2"
          >
            <FaArrowLeft />
            Back to Student Directory
          </button>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            User Profile{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Overview
            </span>
          </h1>
          <p className="mt-1 text-slate-300 font-medium text-sm">
            Inspect, approve, edit, or adjust permissions for this account.
          </p>
        </div>
      </motion.div>

      {/* User Header Card */}
      <PortalCard padding="p-6 sm:p-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-yellow-100 font-black text-yellow-800 text-3xl border border-yellow-300 shadow-xs">
              {data?.fullName?.charAt(0) || "U"}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {data?.fullName}{" "}
                <span className="text-sm font-normal text-slate-400">
                  ({capitalizeFirstLetter(data?.role)})
                </span>
              </h2>
              <p className="text-sm text-slate-500 mt-1">{data?.email}</p>

              <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
                <PortalBadge variant={data?.approvalStatus}>
                  {data?.approvalStatus}
                </PortalBadge>
                <PortalBadge variant={data?.status}>{data?.status}</PortalBadge>
              </div>
            </div>
          </div>
        </div>
      </PortalCard>

      {/* Editable Information Form */}
      <PortalCard header="Account Details & Editing">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <PortalInput
              label="Full Name"
              icon={FaUser}
              error={errors.fullName?.message}
              {...register("fullName")}
            />

            <PortalInput
              label="Email Address"
              icon={FaEnvelope}
              disabled
              helperText="Email address cannot be modified."
              error={errors.email?.message}
              {...register("email")}
            />

            <PortalInput
              label="Phone Number"
              icon={FaPhoneAlt}
              error={errors.phone?.message}
              {...register("phone")}
            />

            <PortalSelect
              label="System Role"
              icon={FaUserShield}
              error={errors.role?.message}
              {...register("role")}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </PortalSelect>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <PortalButton
              type="submit"
              icon={FaSave}
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              Save Profile Changes
            </PortalButton>
          </div>
        </form>
      </PortalCard>

      {/* Account Administrative Actions */}
      <PortalCard header="Administrative Status Actions">
        <div className="flex flex-wrap gap-3">
          {data?.approvalStatus === "pending" && (
            <>
              <PortalButton
                variant="primary"
                icon={FaCheckCircle}
                isLoading={approveUserMutation.isPending}
                onClick={handleApproveUserClick}
              >
                Approve Account
              </PortalButton>

              <PortalButton
                variant="danger"
                icon={FaTimes}
                isLoading={rejectUserMutation.isPending}
                onClick={handleRejectUserClick}
              >
                Reject Account
              </PortalButton>
            </>
          )}

          {data?.approvalStatus === "approved" && data?.status === "active" && (
            <PortalButton
              variant="danger"
              icon={FaBan}
              onClick={() => setOpen(true)}
            >
              Block User Account
            </PortalButton>
          )}

          {data?.approvalStatus === "approved" && data?.status === "blocked" && (
            <PortalButton
              variant="primary"
              icon={FaCheckCircle}
              isLoading={unblockUserMutation.isPending}
              onClick={handleUnblockUserClick}
            >
              Unblock Account
            </PortalButton>
          )}

          {data?.approvalStatus === "rejected" && (
            <PortalButton
              variant="primary"
              icon={FaCheckCircle}
              isLoading={approveUserMutation.isPending}
              onClick={handleApproveUserClick}
            >
              Approve Account
            </PortalButton>
          )}
        </div>
      </PortalCard>

      {/* Block Reason Modal */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Block User Account"
        actions={
          <div className="flex justify-end gap-3 pt-4">
            <PortalButton variant="outline" size="sm" onClick={() => setOpen(false)}>
              Cancel
            </PortalButton>
            <PortalButton
              variant="danger"
              size="sm"
              isLoading={blockUserMutation.isPending}
              onClick={handleBlockUserClick}
            >
              Confirm Block
            </PortalButton>
          </div>
        }
      >
        <p className="mb-3 text-sm text-slate-600">
          Please provide a reason for blocking this user account.
        </p>
        <textarea
          rows={4}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason for blocking..."
          className="w-full rounded-2xl border border-slate-200 p-3 text-sm outline-none focus:border-red-500"
        />
      </Modal>
    </div>
  );
}

function getDirtyValues(dirtyFields, allValues) {
  if (dirtyFields === true) {
    return allValues;
  }
  return Object.fromEntries(
    Object.keys(dirtyFields).map((key) => [
      key,
      getDirtyValues(dirtyFields[key], allValues[key]),
    ])
  );
}