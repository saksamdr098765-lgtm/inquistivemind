"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaLock, FaSave, FaSignOutAlt } from "react-icons/fa";

import { useLogoutMutation, useUpdatePasswordMutation } from "@/app/mutations/AuthenticationMutations";
import { updatePasswordSchema } from "@/schemas/updatePasswordSchema";
import CommingSoon from "@/app/Components/ui/CommingSoon";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalInput from "@/app/Components/portal-ui/PortalInput";
import PortalButton from "@/app/Components/portal-ui/PortalButton";

export default function Settings() {
  const logoutMutation = useLogoutMutation();
  const updatePasswordMutation = useUpdatePasswordMutation();

  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    language: "English",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(updatePasswordSchema),
    mode: "onBlur",
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onPasswordSubmit = async (data) => {
    await updatePasswordMutation.mutateAsync({
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    });
    reset();
  };

  const handleToggle = (field) => {
    setSettings((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Hero Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-500 to-yellow-500 p-5 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6"
      >
        <div className="absolute -right-10 -top-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />

        <div className="relative">
          <span className="inline-flex rounded-full bg-white/20 border border-white/30 px-3 py-0.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
            Preferences & Security
          </span>
          <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Account Settings
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Manage your password, notification preferences, and account controls.
          </p>
        </div>
      </motion.div>

      {/* Change Password Card */}
      <PortalCard header="Security & Password Change" padding="p-4 sm:p-6">
        <form onSubmit={handleSubmit(onPasswordSubmit)} className="space-y-4 sm:space-y-5">
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
            <PortalInput
              label="Current Password"
              type="password"
              icon={FaLock}
              placeholder="Enter current password"
              error={errors.currentPassword?.message}
              {...register("currentPassword")}
            />
            <div className="hidden sm:block" />

            <PortalInput
              label="New Password"
              type="password"
              icon={FaLock}
              placeholder="Enter new password"
              error={errors.newPassword?.message}
              {...register("newPassword")}
            />

            <PortalInput
              label="Confirm New Password"
              type="password"
              icon={FaLock}
              placeholder="Confirm new password"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />
          </div>

          <div className="pt-2">
            <PortalButton
              type="submit"
              size="sm"
              icon={FaSave}
              isLoading={isSubmitting || updatePasswordMutation.isPending}
              disabled={isSubmitting || updatePasswordMutation.isPending}
              className="w-full sm:w-auto"
            >
              Update Security Password
            </PortalButton>
          </div>
        </form>
      </PortalCard>

      {/* Notification Preferences */}
      <PortalCard header="Notification Settings" className="relative" padding="p-4 sm:p-6">
        <CommingSoon />
        <div className="space-y-2.5 sm:space-y-3">
          <Switch
            title="Email Notifications & Lesson Reminders"
            value={settings.emailNotifications}
            onClick={() => handleToggle("emailNotifications")}
          />
          <Switch
            title="SMS & WhatsApp Class Alerts"
            value={settings.smsNotifications}
            onClick={() => handleToggle("smsNotifications")}
          />
        </div>
      </PortalCard>

      {/* Account Session & Sign Out */}
      <PortalCard header="Account Management" padding="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <PortalButton
            variant="danger"
            size="sm"
            icon={FaSignOutAlt}
            onClick={handleLogout}
            className="w-full sm:w-auto"
          >
            Sign Out of Account
          </PortalButton>
        </div>
      </PortalCard>
    </div>
  );
}

function Switch({ title, value, onClick }) {
  return (
    <div className="flex items-center justify-between rounded-xl sm:rounded-2xl border border-slate-200/80 bg-slate-50/60 p-3 sm:p-4">
      <span className="text-xs sm:text-sm font-semibold text-slate-800">{title}</span>
      <button
        type="button"
        onClick={onClick}
        className={`relative h-6 sm:h-7 w-11 sm:w-13 shrink-0 rounded-full transition-all duration-200 focus:outline-none ${
          value ? "bg-yellow-400" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-0.5 sm:top-1 h-5 w-5 rounded-full bg-white shadow-xs transition-all duration-200 ${
            value ? "left-5 sm:left-7" : "left-0.5 sm:left-1"
          }`}
        />
      </button>
    </div>
  );
}