"use client";

import { useUpdateBatchMutation } from "@/app/mutations/BatchMutation";
import Input from "@/app/student-profile/components/profile/Input";
import Select from "@/app/student-profile/components/profile/Select";
import TextArea from "@/app/student-profile/components/profile/TextArea";
import { useAdminStudent } from "@/Hooks/useAdminStudents";
import { useGetBatchById } from "@/Hooks/useGetBatchById";
import { editBatchSchema } from "@/schemas/EditBatchSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaUsers, FaChalkboardTeacher, FaSave, FaTrash, FaCalendarAlt, FaBookOpen, FaLayerGroup } from "react-icons/fa";
import { toast } from "sonner";

export default function EditBatchPage({batchId}) {
const {data:batch}=useGetBatchById(batchId)
const [trainers,seTtrainers]=useState([])
const [students,setStudents]=useState([])

  const { register, handleSubmit, watch,reset, setValue,formState:{isSubmitting,errors,isDirty} } = useForm({
    resolver:zodResolver(editBatchSchema),
    mode:"onBlur",
  defaultValues: {
  startDate: "",
  endDate: "",
  status: "upcoming",
  maxStudents: 50,
  description: "",
  meetingPlatform: "zoom",
  enrollmentOpen: true,
  "schedule.days": [],
  "schedule.startTime": "",
  "schedule.endTime": "",
  students: [],
  trainers: [],
},
  });
  const batchMutation=useUpdateBatchMutation(reset)
const {data:studentsData,isLoading}=useAdminStudent(1,"" ,"" ,"" ,"student")
const {data:trainersData}=useAdminStudent(1,"" ,"" ,"" ,"teacher")
useEffect(()=>{
if(!batch) return
reset({
  startDate: batch?.startDate?.split("T")[0] || "",
  endDate: batch?.endDate?.split("T")[0] || "",
  status: batch?.status || "upcoming",
  maxStudents: batch?.maxStudents || 50,
  description: batch?.description || "",
  meetingPlatform: batch?.meetingPlatform || "zoom",
  enrollmentOpen: batch?.enrollmentOpen ?? true,

  "schedule.days": batch?.schedule?.days || [],
  "schedule.startTime":
    batch?.schedule?.startTime || "",
  "schedule.endTime":
    batch?.schedule?.endTime || "",

  students:
    batch?.students?.map((s) => s._id) || [],
  trainers:
    batch?.trainers?.map((t) => t._id) || [],
});
},[batch,reset])
useEffect(()=>{
  if(!studentsData || !trainersData) return 
  
   seTtrainers(trainersData?.users)
   setStudents(studentsData?.users)
  
},[trainersData,studentsData])


const selectedStudentIds = watch("students") || [];
const selectedTrainerIds = watch("trainers") || [];

const addStudent = (student) => {
  if (selectedStudentIds.includes(student._id)) return;

  setValue("students", [
    ...selectedStudentIds,
    student._id,
  ]);
};

const removeStudent = (studentId) => {
  setValue(
    "students",
    selectedStudentIds.filter(
      (id) => id !== studentId
    )
  );
};


const addTrainer = (trainer) => {

  if (selectedTrainerIds.includes(trainer._id)) return;

  setValue("trainers", [
    ...selectedTrainerIds,
    trainer._id,
  ]);
};

const removeTrainer = (trainerId) => {
  setValue(
    "trainers",
    selectedTrainerIds.filter(
      (id) => id !== trainerId
    )
  );
};
const onSubmit = async (data) => {
console.log(data)
  await batchMutation.mutateAsync({id:batch._id,data});
};
if(isLoading) return
  return (
    <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
      {/* Executive Mobile-Friendly Hero Banner */}
      <div className="relative overflow-hidden rounded-[32px] bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl">
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xl sm:text-2xl shrink-0">
            <FaLayerGroup />
          </div>

          <div>
            <span className="inline-flex rounded-full bg-yellow-400/15 border border-yellow-400/30 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-yellow-300 backdrop-blur-md">
              Batch Management
            </span>
            <h1 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Edit{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Batch
              </span>
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 font-medium">
              Update batch details, assigned students, and trainers.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit,(error)=>console.log(error))} className="space-y-8">
        <div className="grid gap-8 ">
          <div className="rounded-[32px] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Batch Information</h2>

            <div className="space-y-5">
           <div>
              
           
             
             </div>
             <TextArea
  label="Description"
  rows={4}
  placeholder="Batch description"
  {...register("description")}
  error={errors?.description}
/>
           
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
                   error={errors?.startDate}
                 />
           
                 <Input
                   type="date"
                   label="End Date"
                   icon={<FaCalendarAlt />}
                   {...register("endDate")}
                   error={errors?.endDate}
                 />
               </div>
               <div className="grid gap-6 md:grid-cols-2">
  <Input
    label="Start Time"
    type="time"
    {...register("schedule.startTime")}
    error={errors?.schedule?.startTime}
  />

  <Input
    label="End Time"
    type="time"
    {...register("schedule.endTime")}
    error={errors?.schedule?.endTime}
  />
</div>
             </div>
           
             {/* Settings */}
           
             <div>
               <h2 className="mb-4 text-xl font-bold text-slate-800">
                 Batch Settings
               </h2>
           
               <div className="grid gap-6 md:grid-cols-2">
                 <Input
                   type="number"
                   label="Maximum Students"
                   placeholder="50"
                   icon={<FaUsers />}
                   {...register("maxStudents")}
                   error={errors?.maxStudents}
                 />
                 <Select
  label="Meeting Platform"
  icon={<FaBookOpen />}

  {...register("meetingPlatform")}
  error={errors?.meetingPlatform}
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
           
                 <Select
                   label="Status"
                   icon={<FaLayerGroup />}
                   {...register("status")}
                   error={errors?.status}
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
               </div>
               <div className="mt-6">
   <label className="mb-4 text-xl font-bold text-slate-800">
    Class Days
  </label>

  <div className="grid grid-cols-2 gap-3 md:grid-cols-4 items-center space-y-6">
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
        className="flex items-center gap-2"
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

             </div>
            </div>
          </div>

    <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg">
  <div className="flex items-center justify-between">
    <div>
      <h2 className="text-2xl font-bold text-slate-900">
        Assigned Trainers
      </h2>
      <p className="mt-1 text-slate-500">
        Manage trainers assigned to this batch
      </p>
    </div>

    <div className="rounded-2xl bg-orange-50 px-4 py-2 font-semibold text-[#D6451B]">
      {selectedTrainerIds.length} Trainers
    </div>
  </div>

  {/* Selected Trainers */}

  <div className="mt-8 space-y-4">
    {trainers
      .filter((trainer) =>
        selectedTrainerIds.includes(trainer._id)
      )
      .map((trainer) => (
        <div
          key={trainer._id}
          className="
            flex items-center justify-between
            rounded-3xl border border-slate-200
            p-5 transition
            hover:border-[#D6451B]
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl bg-orange-50
                font-bold text-[#D6451B]
              "
            >
              {trainer.fullName?.charAt(0)}
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                {trainer.fullName}
              </h3>

              <p className="text-sm text-slate-500">
                Trainer
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => removeTrainer(trainer._id)}
            className="
              rounded-xl bg-red-50
              px-4 py-2
              text-red-600
              transition
              hover:bg-red-100
            "
          >
            Remove
          </button>
        </div>
      ))}
  </div>

  {/* Available Trainers */}

  <div className="mt-10 border-t border-slate-200 pt-8">
    <h3 className="mb-5 text-lg font-semibold">
      Available Trainers
    </h3>

    <div className="grid gap-4 md:grid-cols-2">
      {trainers
        .filter(
          (trainer) =>
            !selectedTrainerIds.includes(
              trainer._id
            )
        )
        .map((trainer) => (
          <button
            key={trainer._id}
            type="button"
            onClick={() => addTrainer(trainer)}
            className="
              flex items-center justify-between
              rounded-2xl border border-slate-200
              p-4 text-left
              transition
              hover:border-[#D6451B]
              hover:bg-orange-50
            "
          >
            <div>
              <p className="font-medium">
                {trainer.fullName}
              </p>

              <p className="text-sm text-slate-500">
                Add to batch
              </p>
            </div>

            <span
              className="
                rounded-xl bg-[#D6451B]
                px-3 py-2
                text-sm text-white
              "
            >
              Add
            </span>
          </button>
        ))}
    </div>
  </div>
</div>
        </div>

 <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg">
  <div className="flex items-center justify-between">
    <div>
      <h2 className="text-2xl font-bold text-slate-900">
        Students
      </h2>

      <p className="mt-1 text-slate-500">
        Manage students assigned to this batch
      </p>
    </div>

    <div className="rounded-2xl bg-orange-50 px-4 py-2 font-semibold text-[#D6451B]">
      {selectedStudentIds.length} / {batch?.maxStudents}
    </div>
  </div>

  {/* Assigned Students */}

  <div className="mt-8 grid gap-4 md:grid-cols-2">
    {students
      .filter((student) =>
        selectedStudentIds.includes(student._id)
      )
      .map((student) => (
        <div
          key={student._id}
          className="
            flex items-center justify-between
            rounded-3xl border border-slate-200
            p-5 transition
            hover:border-[#D6451B]
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl bg-orange-50
                font-bold text-[#D6451B]
              "
            >
              {student.fullName?.charAt(0)}
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                {student.fullName}
              </h3>

              <p className="text-sm text-slate-500">
                Student
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => removeStudent(student._id)}
            className="
              rounded-xl bg-red-50
              px-4 py-2
              text-red-600
              transition
              hover:bg-red-100
            "
          >
            <FaTrash />
          </button>
        </div>
      ))}
  </div>

  {/* Available Students */}

  <div className="mt-10 border-t border-slate-200 pt-8">
    <h3 className="mb-5 text-lg font-semibold">
      Available Students
    </h3>

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {students
        .filter(
          (student) =>
            !selectedStudentIds.includes(
              student._id
            )
        )
        .map((student) => (
          <button
            key={student._id}
            type="button"
            onClick={() => addStudent(student)}
            className="
              flex items-center justify-between
              rounded-2xl border border-slate-200
              p-4 text-left
              transition
              hover:border-[#D6451B]
              hover:bg-orange-50
            "
          >
            <div>
              <p className="font-medium">
                {student.fullName}
              </p>

              <p className="text-sm text-slate-500">
                Add to batch
              </p>
            </div>

            <span
              className="
                rounded-xl bg-[#D6451B]
                px-3 py-2
                text-sm text-white
              "
            >
              Add
            </span>
          </button>
        ))}
    </div>
  </div>
</div>

        <button
          type="submit"
          disabled={isSubmitting || batchMutation.isPending}
          className="flex items-center gap-2 rounded-2xl bg-yellow-500 px-6 py-3 text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          <FaSave />
          {isSubmitting
            ? "Saving..."
            : "Save Batch"}
        </button>
      </form>
    </div>
  );
}
