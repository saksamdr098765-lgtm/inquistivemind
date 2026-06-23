"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLayerGroup,
  FaPlus,
  FaSearch,
  FaUsers,
  FaClock,
  FaBookOpen,
  FaChalkboardTeacher,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { useAdminGetAllBatches } from "@/Hooks/useAdminGetBatches";
import { useRouter } from "next/navigation";

// const batches = [
//   {
//     id: 1,
//     name: "Morning Batch A",
//     course: "General English",
//     trainer: "John Smith",
//     students: 28,
//     schedule: "Mon - Fri",
//     timing: "9:00 AM - 10:30 AM",
//     room: "Room 101",
//     progress: 72,
//     status: "Active",
//   },
//   {
//     id: 2,
//     name: "IELTS Evening",
//     course: "IELTS",
//     trainer: "Emma Johnson",
//     students: 18,
//     schedule: "Mon - Thu",
//     timing: "6:00 PM - 7:30 PM",
//     room: "Room 203",
//     progress: 45,
//     status: "Active",
//   },
//   {
//     id: 3,
//     name: "Weekend Speaking",
//     course: "Spoken English",
//     trainer: "David Wilson",
//     students: 35,
//     schedule: "Sat - Sun",
//     timing: "10:00 AM - 1:00 PM",
//     room: "Online",
//     progress: 91,
//     status: "Completed",
//   },
// ];

export default function BatchesClient({slug}) {
  const router=useRouter()
    const {data:batches,isLoading}=useAdminGetAllBatches(slug)
  const [search, setSearch] = useState("");
if(isLoading) return
  return (
    <div className="space-y-8 max-w-7xl mx-auto py-20">

      {/* Hero */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-[32px] bg-gradient-to-r from-[#D6451B] to-orange-500 p-8 text-white shadow-xl"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              Batch Management
            </span>

            <h1 className="mt-5 text-4xl font-bold">
              Manage Batches
            </h1>

            <p className="mt-3 max-w-2xl text-orange-100">
              Create and manage classroom & online batches, assign trainers,
              schedule timings and monitor student progress.
            </p>

          </div>

          <button onClick={()=>{router.push('/admin-panel/add-batch')}} className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-[#D6451B]">

            <FaPlus />

            Create Batch

          </button>

        </div>

      </motion.div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <Stat
          title="Total Batches"
          value={batches?.length}
          icon={<FaLayerGroup />}
          color="bg-orange-50 text-[#D6451B]"
        />

        <Stat
          title="Students"
          value={batches?.reduce((sum,batch)=> sum+batch?.students?.length,0) || 0}
          icon={<FaUsers />}
          color="bg-green-50 text-green-600"
        />


        <Stat
          title="Trainers"
            value={batches?.reduce((sum,batch)=> sum+batch?.trainers?.length,0) || 0}
          icon={<FaChalkboardTeacher />}
          color="bg-purple-50 text-purple-600"
        />

      </div>

      {/* Filters */}

      <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-lg">

        <div className="grid gap-4 lg:grid-cols-4">

          <div className="relative">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search batches..."
              className="w-full rounded-2xl border border-slate-200 py-3 pl-12 pr-4 outline-none focus:border-[#D6451B]"
            />

          </div>

          <select className="rounded-2xl border border-slate-200 p-3">

            <option>All Status</option>
            <option>Active</option>
            <option>Completed</option>

          </select>

          <select className="rounded-2xl border border-slate-200 p-3">

            <option>All Courses</option>
            <option>General English</option>
            <option>IELTS</option>
            <option>Spoken English</option>

          </select>

          <button className="rounded-2xl bg-[#D6451B] text-white">
            Apply Filters
          </button>

        </div>

      </div>

      {/* Batch Cards */}

      <div className="grid gap-7 lg:grid-cols-2 xl:grid-cols-3">
      
        {batches
          ?.map((batch) => (

          <motion.div
  key={batch._id}
  whileHover={{ y: -4 }}
  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-xl"
>
  {/* Header */}
  <div className="flex items-start justify-between gap-3">
    <div className="min-w-0 flex-1">
      <h2 className="truncate text-xl font-bold text-slate-900">
        {batch.name}
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        {batch.course?.title}
      </p>
    </div>

    <span
      className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
        batch.status === "active"
          ? "bg-green-100 text-green-700"
          : batch.status === "completed"
          ? "bg-blue-100 text-blue-700"
          : batch.status === "cancelled"
          ? "bg-red-100 text-red-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {batch.status}
    </span>
  </div>

  {/* Enrollment */}
  <div className="mt-3">
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        batch.enrollmentOpen
          ? "bg-blue-100 text-blue-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {batch.enrollmentOpen
        ? "Enrollment Open"
        : "Enrollment Closed"}
    </span>
  </div>

  {/* Description */}
  <p className="mt-4 line-clamp-2 text-sm text-slate-500">
    {batch.description ||
      "No description available"}
  </p>

  {/* Stats */}
  <div className="mt-5 grid grid-cols-2 gap-3">
    <div className="rounded-2xl bg-slate-50 p-3">
      <p className="text-xs text-slate-500">
        Students
      </p>

      <p className="mt-1 font-semibold text-slate-900">
        {batch.students?.length || 0}/
        {batch.maxStudents}
      </p>
    </div>

    <div className="rounded-2xl bg-slate-50 p-3">
      <p className="text-xs text-slate-500">
        Trainers
      </p>

      <p className="mt-1 font-semibold text-slate-900">
        {batch.trainers?.length || 0}
      </p>
    </div>
  </div>

  {/* Dates */}
  <div className="mt-4 flex justify-between rounded-2xl bg-slate-50 p-3">
    <div>
      <p className="text-xs text-slate-500">
        Start Date
      </p>

      <p className="mt-1 text-sm font-medium">
        {new Date(
          batch.startDate
        ).toLocaleDateString("en-IN")}
      </p>
    </div>

    <div className="text-right">
      <p className="text-xs text-slate-500">
        End Date
      </p>

      <p className="mt-1 text-sm font-medium">
        {new Date(
          batch.endDate
        ).toLocaleDateString("en-IN")}
      </p>
    </div>
  </div>

  {/* Schedule */}
  <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
    <p className="text-xs text-slate-500">
      Schedule
    </p>

    <p className="mt-1 font-medium text-slate-900">
      {batch?.schedule?.days?.length
        ? batch.schedule.days.join(", ")
        : "Schedule Not Set"}
    </p>

    <p className="mt-2 text-sm text-slate-500">
      {batch?.schedule?.startTime || "--"}
      {" - "}
      {batch?.schedule?.endTime || "--"}
    </p>

    <div className="mt-3 flex items-center justify-between">
      <span className="text-xs text-slate-500">
        Platform
      </span>

      <span className="rounded-lg bg-white px-2 py-1 text-sm font-medium capitalize">
        {batch.meetingPlatform}
      </span>
    </div>
  </div>

  {/* Actions */}
  <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
    <button
      onClick={() =>
        router.push(
          `/admin-panel/batches/${slug}/batch?batchId=${batch._id}`
        )
      }
      className="flex items-center justify-center gap-2 rounded-xl bg-blue-50 py-3 text-blue-600 transition hover:bg-blue-100"
    >
      <FaEye />
    </button>

    <button
      onClick={() =>
        router.push(
          `/admin-panel/batches/${slug}/edit-batch?batchId=${batch._id}`
        )
      }
      className="flex items-center justify-center gap-2 rounded-xl bg-orange-50 py-3 text-[#D6451B] transition hover:bg-orange-100"
    >
      <FaEdit />
    </button>

    <button
      className="flex items-center justify-center gap-2 rounded-xl bg-red-50 py-3 text-red-600 transition hover:bg-red-100"
    >
      <FaTrash />
    </button>
  </div>
</motion.div>

          ))}

      </div>

      {/* Bottom Section */}

      <div className="grid gap-8 xl:grid-cols-[2fr_1fr]">

        {/* Analytics */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg"
        >

          <div className="border-b border-slate-200 p-6">

            <h2 className="text-2xl font-bold">
              Batch Analytics
            </h2>

            <p className="mt-2 text-slate-500">
              Performance overview of all batches
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-50">

                <tr>

                  <th className="px-6 py-4 text-left">
                    Batch
                  </th>

                  <th className="px-6 py-4 text-left">
                    Trainer
                  </th>

                  <th className="px-6 py-4 text-left">
                    Students
                  </th>

                  <th className="px-6 py-4 text-left">
                    Progress
                  </th>

                </tr>

              </thead>

              <tbody>

                {batches.map((batch) => (

                  <tr
                    key={batch._id}
                    className="border-b last:border-none"
                  >

                    <td className="px-6 py-5 font-semibold">
                      {batch.name}
                    </td>

                    <td className="px-6 py-5">
                      {batch?.trainers?.length}
                    </td>

                    <td className="px-6 py-5">
                      {batch?.students?.length}
                    </td>

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="h-2 w-32 overflow-hidden rounded-full bg-orange-100">

                          <div
                            style={{
                              width: `${batch.progress}%`,
                            }}
                            className="h-full rounded-full bg-[#D6451B]"
                          />

                        </div>

                        <span className="font-semibold">
                          {batch.progress}%
                        </span>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </motion.div>

        {/* Top Batches */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg"
        >

          <h2 className="text-2xl font-bold">
            Top Batches
          </h2>

          <div className="mt-8 space-y-5">

            {batches
             .sort(
  (a, b) =>
    (b.students?.length || 0) -
    (a.students?.length || 0)
)
              .map((batch) => (

                <div
                  key={batch._id}
                  className="rounded-2xl bg-slate-50 p-5"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h3 className="font-semibold">
                        {batch?.name}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {batch?.students?.length + " Students"} 
                      </p>

                    </div>

                  

                  </div>

                </div>

              ))}

          </div>

        </motion.div>

      </div>
            {/* Pagination */}

      <div className="flex flex-col items-center justify-between gap-5 rounded-[30px] border border-slate-200 bg-white p-6 shadow-lg md:flex-row">

        <p className="text-sm text-slate-500">
          Showing 1 - {batches.length} of {batches.length} Batches
        </p>

        <div className="flex gap-2">

          <button className="rounded-xl border border-slate-200 px-4 py-2 transition hover:bg-slate-50">
            Previous
          </button>

          <button className="h-10 w-10 rounded-xl bg-[#D6451B] text-white">
            1
          </button>

          <button className="rounded-xl border border-slate-200 px-4 py-2 transition hover:bg-slate-50">
            Next
          </button>

        </div>

      </div>

      {/* Empty State */}

      {batches.length === 0 && (

        <div className="rounded-[32px] border border-dashed border-slate-300 bg-white py-20 text-center shadow-lg">

          <FaLayerGroup className="mx-auto text-6xl text-[#D6451B]" />

          <h2 className="mt-6 text-3xl font-bold">
            No Batches Found
          </h2>

          <p className="mx-auto mt-3 max-w-md text-slate-500">
            There are currently no batches available.
            Create your first batch to start assigning students.
          </p>

          <button className="mt-8 rounded-2xl bg-[#D6451B] px-8 py-4 text-white transition hover:opacity-90">
            Create Batch
          </button>

        </div>

      )}

    </div>

  );
}

/* ==========================================================
   Reusable Components
========================================================== */

function Stat({ title, value, icon, color }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-lg"
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${color}`}
      >
        {icon}
      </div>

      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        {value}
      </h2>

      <p className="mt-2 text-slate-500">
        {title}
      </p>
    </motion.div>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-lg text-[#D6451B]">
        {icon}
      </div>

      <div>

        <p className="text-sm text-slate-500">
          {label}
        </p>

        <h3 className="mt-1 font-semibold text-slate-900">
          {value}
        </h3>

      </div>

    </div>
  );
}