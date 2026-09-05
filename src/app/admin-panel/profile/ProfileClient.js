"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import ProfileSidebar from "@/app/student-profile/components/profile/ProfileSidebar";
import PersonalInformation from "@/app/student-profile/components/profile/PersonalInformation";
import { profileSchema } from "@/schemas/profileSchema";
import useAuthStore from "@/store/authStore";
import { useProfileImageMutation } from "@/app/mutations/userMutation";
import { useProfileUpdateMutation } from "@/app/mutations/studentMutation";
import { FaSave } from "react-icons/fa";
import PortalButton from "@/app/Components/portal-ui/PortalButton";

export default function ProfileClient() {
  const user = useAuthStore((state) => state.user);
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
    },
  });

  const { mutate: uploadImage, isPending: isUploading } = useProfileImageMutation();

  useEffect(() => {
    if (!user) return;

    reset({
      fullName: user.fullName || "",
      email: user.email || "",
      phone: user.phone || "",
    });
  }, [user, reset]);

  const onSubmit = async (data) => {
    if (!isDirty) {
      toast.error("Nothing changed");
      return;
    }
    const updatedData = getDirtyValues(dirtyFields, data);
    await profileUpdateMutation.mutateAsync(updatedData);
  };

  const handleImageUpload = (file, done) => {
    uploadImage(file, {
      onSuccess: () => {
        done();
      },
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 max-w-7xl mx-auto">
      {/* Executive Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-500 to-yellow-500 p-5 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6"
      >
        <div className="absolute -right-10 -top-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />

        <div className="relative">
          <span className="inline-flex rounded-full bg-white/20 border border-white/30 px-3 py-0.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
            Admin Profile
          </span>
          <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            My Profile
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Manage your personal information and account details.
          </p>
        </div>
      </motion.div>

      <form
        onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}
        className="grid gap-4 sm:gap-6 lg:grid-cols-[300px_1fr]"
      >
        {/* Sidebar */}
        <ProfileSidebar
          user={user}
          onImageUpload={handleImageUpload}
          isUploading={isUploading}
        />

        {/* Form */}
        <div className="space-y-4 sm:space-y-6">
          <PersonalInformation register={register} errors={errors} mode="user" />

          <div className="flex justify-end pt-2">
            <PortalButton
              type="submit"
              icon={FaSave}
              isLoading={isSubmitting}
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              Save Changes
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