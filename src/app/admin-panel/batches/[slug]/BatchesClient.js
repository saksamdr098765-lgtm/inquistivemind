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

          <button className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-[#D6451B]">

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
       {console.log(batches)}
        {batches
          ?.map((batch) => (

            <motion.div
              key={batch._id}
              whileHover={{ y: -6 }}
              className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-lg"
            >

              <div className="flex items-start justify-between">

                <div>

                  <h2 className="text-2xl font-bold">
                    {batch?.name}
                  </h2>

                  <p className="mt-2 text-slate-500">
                    {batch?.course?.title}
                  </p>

                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    batch?.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {batch?.status}
                </span>

              </div>

              <div className="mt-8 space-y-4">

                <Info
                  icon={<FaChalkboardTeacher />}
                  label="Trainer"
                  value={batch?.trainers?.length}
                />

                <Info
                  icon={<FaUsers />}
                  label="Students"
                  value={batch?.students?.length}
                />

                <Info
                  icon={<FaClock />}
                  label="Start Date"
                  value={new Date(batch?.startDate).toLocaleDateString("en-IN")}
                />
                <Info
                  icon={<FaClock />}
                  label="End Date"
                  value={new Date(batch?.endDate).toLocaleDateString("en-IN")}
                />

              </div>

            
                            {/* Schedule */}

              <div className="mt-8 rounded-2xl bg-slate-50 p-5">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-500">
                      Schedule
                    </p>

                    <h3 className="mt-1 font-semibold">
                      {batch?.schedule || "Mon-Fri"}
                    </h3>

                  </div>

                  <div className="text-right">

                    <p className="text-sm text-slate-500">
                      Mode
                    </p>

                    <h3 className="mt-1 font-semibold">
                      {batch?.room || "online"}
                    </h3>

                  </div>

                </div>

              </div>

              {/* Actions */}

              <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">

               <button onClick={()=>{router.push(`/admin-panel/batches/${slug}/batch?batchId=${batch._id}`)}}  className="flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 font-medium text-blue-600 transition hover:scale-105">

                    <FaEye />

                    View

                  </button>

                <button onClick={()=>{router.push(`/admin-panel/batches/${slug}/edit-batch?batchId=${batch._id}`)}} className="flex items-center gap-2 rounded-xl bg-orange-50 px-4 py-3 font-medium text-[#D6451B] transition hover:scale-105">

                  <FaEdit />

                  Edit

                </button>

                <button className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 font-medium text-red-600 transition hover:scale-105">

                  <FaTrash />

                  Delete

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
              .sort((a, b) => b.students - a.students)
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