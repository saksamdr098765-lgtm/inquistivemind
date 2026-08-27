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
    <div className="space-y-8">
      {/* Executive Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[32px] bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl"
      >
        <span className="inline-flex rounded-full bg-yellow-400/15 border border-yellow-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300 backdrop-blur-md">
          Preferences & Security
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
          Account{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Settings
          </span>
        </h1>
        <p className="mt-1 text-slate-300 font-medium text-sm max-w-xl">
          Manage your password, notification preferences, and account controls.
        </p>
      </motion.div>

      {/* Change Password Card */}
      <PortalCard header="Security & Password Change">
        <form onSubmit={handleSubmit(onPasswordSubmit)} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
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
              icon={FaSave}
              isLoading={isSubmitting || updatePasswordMutation.isPending}
              disabled={isSubmitting || updatePasswordMutation.isPending}
            >
              Update Security Password
            </PortalButton>
          </div>
        </form>
      </PortalCard>

      {/* Notification Preferences */}
      <PortalCard header="Notification Settings" className="relative">
        <CommingSoon />
        <div className="space-y-3">
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
      <PortalCard header="Account Management">
        <div className="flex flex-col sm:flex-row gap-3">
          <PortalButton variant="danger" icon={FaSignOutAlt} onClick={handleLogout}>
            Sign Out of Account
          </PortalButton>
        </div>
      </PortalCard>
    </div>
  );
}

function Switch({ title, value, onClick }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4">
      <span className="text-sm font-semibold text-slate-800">{title}</span>
      <button
        type="button"
        onClick={onClick}
        className={`relative h-7 w-13 rounded-full transition-all duration-200 focus:outline-none ${
          value ? "bg-yellow-400" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-xs transition-all duration-200 ${
            value ? "left-7" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}