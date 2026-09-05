"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { FaSave, FaUndo } from "react-icons/fa";

import { profileSchema } from "@/schemas/profileSchema";
import ProfileSidebar from "./profile/ProfileSidebar";
import PersonalInformation from "./profile/PersonalInformation";
import AddressSection from "./profile/AddressSection";
import GuardianSection from "./profile/GuardianSection";
import EmergencySection from "./profile/EmergencySection";

import { useProfileUpdateMutation } from "@/app/mutations/studentMutation";
import { useProfileImageMutation } from "@/app/mutations/userMutation";
import ProfileSkeleton from "@/app/Skeletons/ProfileSkeleton";
import PortalButton from "@/app/Components/portal-ui/PortalButton";

export default function Profile({ user, profile }) {
  const profileUpdateMutation = useProfileUpdateMutation();
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
      dateOfBirth: "",
      gender: "",
      languageLevel: "",
      address: {
        street: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
      },
      guardian: {
        fatherName: "",
        motherName: "",
        guardianName: "",
        relationship: "",
        phone: "",
        email: "",
      },
      emergencyContact: {
        name: "",
        phone: "",
        relation: "",
      },
    },
  });

  const { mutate: uploadImage, isPending: isUploading } = useProfileImageMutation();

  useEffect(() => {
    if (!user || !profile) return;

    reset({
      fullName: user.fullName || "",
      email: user.email || "",
      phone: user.phone || "",
      profileImage: user.profileImage || "",
      dateOfBirth: profile.dateOfBirth
        ? new Date(profile.dateOfBirth).toISOString().split("T")[0]
        : "",
      gender: profile.gender || "",
      languageLevel: profile.languageLevel || "Beginner",
      address: {
        street: profile.address?.street || "",
        city: profile.address?.city || "",
        state: profile.address?.state || "",
        country: profile.address?.country || "",
        postalCode: profile.address?.postalCode || "",
      },
      guardian: {
        fatherName: profile.guardian?.fatherName || "",
        motherName: profile.guardian?.motherName || "",
        guardianName: profile.guardian?.guardianName || "",
        relationship: profile.guardian?.relationship || "",
        phone: profile.guardian?.phone || "",
        email: profile.guardian?.email || "",
      },
      emergencyContact: {
        name: profile.emergencyContact?.name || "",
        phone: profile.emergencyContact?.phone || "",
        relation: profile.emergencyContact?.relation || "",
      },
    });
  }, [user, profile, reset]);

  const onSubmit = async (data) => {
    if (!isDirty) {
      toast.error("No changes were made to submit.");
      return;
    }
    const updatedData = getDirtyValues(dirtyFields, data);
    await profileUpdateMutation.mutateAsync(updatedData);
  };

  const handleCancel = () => {
    if (!user || !profile) return;
    reset({
      fullName: user.fullName || "",
      email: user.email || "",
      phone: user.phone || "",
      profileImage: user.profileImage || "",
      dateOfBirth: profile.dateOfBirth
        ? new Date(profile.dateOfBirth).toISOString().split("T")[0]
        : "",
      gender: profile.gender || "",
      languageLevel: profile.languageLevel || "Beginner",
      address: {
        street: profile.address?.street || "",
        city: profile.address?.city || "",
        state: profile.address?.state || "",
        country: profile.address?.country || "",
        postalCode: profile.address?.postalCode || "",
      },
      guardian: {
        fatherName: profile.guardian?.fatherName || "",
        motherName: profile.guardian?.motherName || "",
        guardianName: profile.guardian?.guardianName || "",
        relationship: profile.guardian?.relationship || "",
        phone: profile.guardian?.phone || "",
        email: profile.guardian?.email || "",
      },
      emergencyContact: {
        name: profile.emergencyContact?.name || "",
        phone: profile.emergencyContact?.phone || "",
        relation: profile.emergencyContact?.relation || "",
      },
    });
  };

  const handleImageUpload = (file, done) => {
    uploadImage(file, {
      onSuccess: () => {
        done();
      },
    });
  };

  if (!user || !profile) return <ProfileSkeleton />;

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-500 to-yellow-500 p-5 sm:p-8 text-white shadow-lg"
      >
        <div className="absolute -right-10 -top-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />

        <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-white/20 border border-white/30 px-3 py-0.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
              Student Dashboard
            </span>
            <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              My Profile & Information
            </h1>
            <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
              Manage personal details, address, guardian contact info, and emergency references.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full sm:w-auto">
            <div className="rounded-xl sm:rounded-2xl border border-white/30 bg-white/15 p-2.5 sm:p-3.5 backdrop-blur-md text-center text-white">
              <p className="text-[10px] uppercase font-bold text-orange-100">Status</p>
              <p className="mt-0.5 text-xs sm:text-base font-extrabold text-white">Active</p>
            </div>
            <div className="rounded-xl sm:rounded-2xl border border-white/30 bg-white/15 p-2.5 sm:p-3.5 backdrop-blur-md text-center text-white">
              <p className="text-[10px] uppercase font-bold text-orange-100">Level</p>
              <p className="mt-0.5 text-xs sm:text-base font-extrabold text-white">{profile?.languageLevel || "Beginner"}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Grid Content */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 sm:gap-6 lg:grid-cols-[300px_minmax(0,1fr)]"
      >
        {/* Sidebar */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <ProfileSidebar
            user={user}
            profile={profile}
            onImageUpload={handleImageUpload}
            isUploading={isUploading}
          />
        </div>

        {/* Form Sections */}
        <div className="space-y-4 sm:space-y-6">
          <PersonalInformation register={register} errors={errors} />
          <AddressSection register={register} errors={errors} />
          <GuardianSection register={register} errors={errors} />
          <EmergencySection
            register={register}
            profileUpdateMutation={profileUpdateMutation}
            errors={errors}
            isSubmitting={isSubmitting}
            handleCancel={handleCancel}
          />

          {/* Action Bar */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5 sm:gap-3 pt-2 sm:pt-4">
            <PortalButton
              variant="outline"
              icon={FaUndo}
              type="button"
              onClick={handleCancel}
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              Reset Changes
            </PortalButton>

            <PortalButton
              type="submit"
              icon={FaSave}
              isLoading={isSubmitting}
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              Save All Profile Details
            </PortalButton>
          </div>
        </div>
      </form>
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