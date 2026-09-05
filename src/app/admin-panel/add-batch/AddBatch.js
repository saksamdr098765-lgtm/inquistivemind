"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/app/student-profile/components/profile/Input";
import Select from "@/app/student-profile/components/profile/Select";



import {
  FaBookOpen,
  FaUsers,
  FaCalendarAlt,
  FaLayerGroup,
  FaSave,
} from "react-icons/fa";
import { createBatchSchema } from "@/schemas/createBatchSchema";
import { useCreateBatchMutation } from "@/app/mutations/BatchMutation";
import { useAdminGetAllCourses } from "@/Hooks/useAdminGetCourses";
import TextArea from "@/app/student-profile/components/profile/TextArea";

export default function AddBatchForm({ courses = [] }) {
  const { data: fetchedCourses } = useAdminGetAllCourses();
  const availableCourses = courses?.length ? courses : fetchedCourses || [];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(createBatchSchema),
    mode: "onBlur",
   defaultValues: {
  course: "",
  name: "",
  description: "",
  startDate: "",
  endDate: "",
  maxStudents: 50,
  meetingPlatform: "zoom",
  enrollmentOpen: true,
  status: "upcoming",
  schedule: {
    days: [],
    startTime: "",
    endTime: "",
  },
},
  });

  const createBatchMutation=useCreateBatchMutation(reset)
  const onSubmit = async (data) => {
console.log(data)
    await createBatchMutation.mutateAsync({id:data.course,data});

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit,(error)=>console.log(error))}
      className="space-y-4 sm:space-y-6 max-w-7xl mx-auto"
    >
      {/* Hero Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-500 to-yellow-500 p-5 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6"
      >
        <div className="absolute -right-10 -top-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />

        <div className="relative">
          <span className="inline-flex rounded-full bg-white/20 border border-white/30 px-3 py-0.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
            Batch Management
          </span>
          <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Create Live Classroom Batch
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Assign courses, schedule days/times, maximum capacity, and meeting link parameters.
          </p>
        </div>
      </motion.div>
  {/* Basic Information */}

<div>
  <h2 className="mb-4 text-xl font-bold text-slate-800">
    Basic Information
  </h2>

  <div className="grid gap-6">
    <div className="grid gap-6 md:grid-cols-2">
      <Select
        label="Course"
        icon={<FaBookOpen />}
        {...register("course")}
        error={errors.course}
        options={courses.map((course) => ({
          label: course.title,
          value: course._id,
        }))}
      />

      <Input
        label="Batch Name"
        placeholder="Morning IELTS Batch"
        icon={<FaUsers />}
        {...register("name")}
        error={errors.name}
      />
    </div>

    <div>
       <TextArea
                label="Batch Description"
               placeholder="Enter batch description..."
              {...register("description")}
                error={errors.description}
                 rows={4}
              />
      
     
    </div>
  </div>
</div>

  {/* Schedule */}

  <div>
    <h2 className="mb-4 text-xl font-bold text-slate-800">
      Schedule
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      <Input
        type="date"
        label="Start Date"
        icon={<FaCalendarAlt />}
        {...register("startDate")}
        error={errors.startDate}
      />

      <Input
        type="date"
        label="End Date"
        icon={<FaCalendarAlt />}
        {...register("endDate")}
        error={errors.endDate}
      />
    </div>
  </div>
<div>
  <h2 className="mb-4 text-xl font-bold text-slate-800">
    Schedule
  </h2>

  <div className="space-y-6">
    
    <div>
      <label className="mb-3 block font-medium text-slate-700">
        Class Days
      </label>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day) => (
          <label
            key={day}
            className="flex items-center gap-2 rounded-xl border p-3"
          >
            <input
              type="checkbox"
              value={day}
              {...register("schedule.days")}
            />
            {day}
          </label>
        ))}
      </div>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      <Input
        type="time"
        label="Start Time"
        {...register("schedule.startTime")}
        error={errors.schedule?.startTime}
      />

      <Input
        type="time"
        label="End Time"
        {...register("schedule.endTime")}
        error={errors.schedule?.endTime}
      />
    </div>
  </div>
</div>
  {/* Settings */}

  <div>
    <h2 className="mb-4 text-xl font-bold text-slate-800">
      Batch Settings
    </h2>

   <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      <Input
        type="number"
        label="Maximum Students"
        placeholder="50"
        icon={<FaUsers />}
        {...register("maxStudents")}
        error={errors.maxStudents}
      />

      <Select
        label="Status"
        icon={<FaLayerGroup />}
        {...register("status")}
        error={errors.status}
        options={[
          {
            label: "Upcoming",
            value: "upcoming",
          },
          {
            label: "Active",
            value: "active",
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
  label="Meeting Platform"
  {...register("meetingPlatform")}
  error={errors.meetingPlatform}
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
      label: "Offline",
      value: "offline",
    },
    {
      label: "Other",
      value: "other",
    },
  ]}
/>

   <Select
  label="Enrollment Open"
  {...register("enrollmentOpen", {
    setValueAs: (value) => value === "true",
  })}
  options={[
    { label: "Yes", value: "true" },
    { label: "No", value: "false" },
  ]}
/>
</div>
    </div>


  {/* Submit */}

  <div className="flex justify-end">
    <button
      type="submit"
      disabled={isSubmitting}
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

      {isSubmitting
        ? "Creating..."
        : "Create Batch"}
    </button>
  </div>
</form>
  );
}