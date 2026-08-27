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
import PortalCard from "@/app/Components/portal-ui/PortalCard";
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
    <div className="space-y-8">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 p-6 sm:p-8 text-slate-900 shadow-lg shadow-yellow-200/50"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-slate-900/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-900 backdrop-blur-md">
              Student Dashboard
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              My Profile & Information
            </h1>
            <p className="mt-1 text-slate-800 font-medium text-sm max-w-xl">
              Manage personal details, address, guardian contact info, and emergency references.
            </p>
          </div>

          <div className="flex gap-3">
            <div className="rounded-2xl border border-slate-900/10 bg-slate-900/5 p-3.5 backdrop-blur-md text-center min-w-[120px]">
              <p className="text-[10px] uppercase font-bold text-slate-800">Account Status</p>
              <p className="mt-1 text-base font-extrabold text-slate-900">Active</p>
            </div>
            <div className="rounded-2xl border border-slate-900/10 bg-slate-900/5 p-3.5 backdrop-blur-md text-center min-w-[120px]">
              <p className="text-[10px] uppercase font-bold text-slate-800">Profile Level</p>
              <p className="mt-1 text-base font-extrabold text-slate-900">{profile?.languageLevel || "Beginner"}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Grid Content */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]"
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
        <div className="space-y-6">
          <PortalCard header="Personal Information">
            <PersonalInformation register={register} errors={errors} />
          </PortalCard>

          <PortalCard header="Residential Address">
            <AddressSection register={register} errors={errors} />
          </PortalCard>

          <PortalCard header="Guardian Details">
            <GuardianSection register={register} errors={errors} />
          </PortalCard>

          <PortalCard header="Emergency Contact">
            <EmergencySection
              register={register}
              profileUpdateMutation={profileUpdateMutation}
              errors={errors}
              isSubmitting={isSubmitting}
              handleCancel={handleCancel}
            />
          </PortalCard>

          {/* Action Bar */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <PortalButton
              variant="outline"
              icon={FaUndo}
              type="button"
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              Reset Changes
            </PortalButton>

            <PortalButton
              type="submit"
              icon={FaSave}
              isLoading={isSubmitting}
              disabled={isSubmitting}
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