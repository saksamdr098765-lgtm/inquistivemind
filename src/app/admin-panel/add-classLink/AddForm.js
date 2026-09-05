"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/app/student-profile/components/profile/Input";
import Select from "@/app/student-profile/components/profile/Select";

import {
  FaUsers,
  FaVideo,
  FaCalendarAlt,
  FaSave,
  FaHeading,
} from "react-icons/fa";
import { createClassLinkSchema } from "@/schemas/classLinkSchema";
import { useAddClassLinkMutation } from "@/app/mutations/classLinkMutation";



export default function AddForm({ batchId }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(createClassLinkSchema),
    mode: "onBlur",
   defaultValues: {
  title: "",
  meetingLink: "",
  meetingDate: "",
  description: "",
  durationMinutes: 60,
  status: "scheduled",
  platform: "zoom",
  attendanceEnabled: "false",
  // recordingUrl: "",
  // classNumber: 1,
}
  });

  const createClassLinkMutation =
    useAddClassLinkMutation(reset);

  const onSubmit = async (data) => {
  
   const payload = {
  ...data,
  attendanceEnabled:
    data.attendanceEnabled === "true",
};

await createClassLinkMutation.mutateAsync({
  id: batchId,
  data: payload,
});

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit,
        (errors) => console.log(errors)
      )}
      className="space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-500 to-yellow-500 p-5 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8"
      >
        <div className="absolute -right-10 -top-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />
        <div className="relative">
          <span className="inline-flex rounded-full bg-white/20 border border-white/30 px-3 py-0.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
            Live Session
          </span>
          <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Schedule Live Class
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Add a new live class link and schedule details for your batch students.
          </p>
        </div>
      </motion.div>

      {/* Basic Information */}

   <div>
  <h2 className="mb-4 text-xl font-bold text-slate-800">
    Class Information
  </h2>

  <div className="grid gap-6 md:grid-cols-2">

    <Input
      label="Class Title"
      placeholder="IELTS Speaking Session"
      icon={<FaHeading />}
      {...register("title")}
      error={errors.title}
    />

    {/* <Input
      type="number"
      label="Class Number"
      placeholder="1"
      icon={<FaUsers />}
      {...register("classNumber", {
        valueAsNumber: true,
      })}
      error={errors.classNumber}
    /> */}

  </div>
</div>

      {/* Meeting Details */}

   <div>
  <h2 className="mb-4 text-xl font-bold text-slate-800">
    Meeting Details
  </h2>

  <div className="grid gap-6 md:grid-cols-2">

    <Input
      type="datetime-local"
      label="Meeting Date & Time"
      icon={<FaCalendarAlt />}
      {...register("meetingDate")}
      error={errors.meetingDate}
    />

    <Input
      label="Meeting Link"
      placeholder="https://zoom.us/j/123456"
      icon={<FaVideo />}
      {...register("meetingLink")}
      error={errors.meetingLink}
    />

    <Input
      type="number"
      label="Duration (Minutes)"
      placeholder="60"
      {...register("durationMinutes", {
        valueAsNumber: true,
      })}
      error={errors.durationMinutes}
    />

    <Select
      label="Platform"
      {...register("platform")}
      error={errors.platform}
      options={[
        {
          label: "Zoom",
          value: "zoom",
        },
        {
          label: "Google Meet",
          value: "google-meet",
        },
        {
          label: "Microsoft Teams",
          value: "teams",
        },
        {
          label: "Custom",
          value: "custom",
        },
      ]}
    />

  </div>
</div>
<div>
  <h2 className="mb-4 text-xl font-bold text-slate-800">
    Class Settings
  </h2>

  <div className="grid gap-6 md:grid-cols-2">

    <Select
      label="Status"
      {...register("status")}
      error={errors.status}
      options={[
        {
          label: "Scheduled",
          value: "scheduled",
        },
        {
          label: "Live",
          value: "live",
        },
        {
          label: "Completed",
          value: "completed",
        },
        {
          label: "Cancelled",
          value: "cancelled",
        },
      ]}
    />

    <Select
      label="Attendance Tracking"
      {...register("attendanceEnabled")}
      error={errors.attendanceEnabled}
      options={[
        {
          label: "Enabled",
          value: "true",
        },
        {
          label: "Disabled",
          value: "false",
        },
      ]}
    />

  </div>
</div>
{/* <div>
  <h2 className="mb-4 text-xl font-bold text-slate-800">
    Recording (Optional)
  </h2>

  <Input
    label="Recording URL"
    placeholder="https://bunny.net/video/..."
    icon={<FaVideo />}
    {...register("recordingUrl")}
    error={errors.recordingUrl}
  />
</div> */}
      {/* Description */}

    <div>
  <h2 className="mb-4 text-xl font-bold text-slate-800">
    Additional Information
  </h2>

  <textarea
    {...register("description")}
    placeholder="Class agenda, notes, instructions..."
    className="
      min-h-[120px]
      w-full
      rounded-2xl
      border
      border-slate-300
      p-4
      outline-none
      focus:border-[#D6451B]
    "
  />

  {errors.description && (
    <p className="mt-1 text-sm text-red-500">
      {errors.description.message}
    </p>
  )}
</div>

      {/* Submit */}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={
            isSubmitting ||
            createClassLinkMutation.isPending
          }
          className="
            flex items-center gap-2
            rounded-2xl
            bg-amber-500
            px-6 py-3
            font-semibold
            text-white
            transition
            hover:bg-yellow-500
            disabled:opacity-50
          "
        >
          <FaSave />

          {isSubmitting ||
          createClassLinkMutation.isPending
            ? "Creating..."
            : "Create Class Link"}
        </button>
      </div>
    </form>
  );
}