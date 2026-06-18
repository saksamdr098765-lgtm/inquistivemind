"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaSearch,
  FaPlus,
  FaUsers,
  FaClock,
  FaEdit,
  FaTrash,
  FaEye,
  FaGraduationCap,
} from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "General English",
    category: "English",
    trainer: "John Smith",
    duration: "6 Months",
    students: 120,
    price: "₹15,000",
    progress: 82,
    image: "/course1.jpg",
  },
  {
    id: 2,
    title: "IELTS Preparation",
    category: "IELTS",
    trainer: "Emma Johnson",
    duration: "3 Months",
    students: 68,
    price: "₹18,000",
    progress: 65,
    image: "/course2.jpg",
  },
  {
    id: 3,
    title: "Business English",
    category: "Professional",
    trainer: "David Wilson",
    duration: "4 Months",
    students: 44,
    price: "₹20,000",
    progress: 90,
    image: "/course3.jpg",
  },
];

export default function Courses() {
  const [search, setSearch] = useState("");

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
              Course Management
            </span>

            <h1 className="mt-5 text-4xl font-bold">
              Manage Courses
            </h1>

            <p className="mt-3 max-w-2xl text-orange-100">
              Create, edit and organize all academy courses, assign trainers,
              manage pricing and monitor enrollments.
            </p>

          </div>

          <button className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-[#D6451B]">

            <FaPlus />

            Add Course

          </button>

        </div>

      </motion.div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <Stat
          title="Courses"
          value="18"
          icon={<FaBookOpen />}
          color="bg-blue-50 text-blue-600"
        />

        <Stat
          title="Students"
          value="1264"
          icon={<FaUsers />}
          color="bg-green-50 text-green-600"
        />

        <Stat
          title="Trainers"
          value="12"
          icon={<FaGraduationCap />}
          color="bg-orange-50 text-[#D6451B]"
        />

        <Stat
          title="Avg Duration"
          value="5 Months"
          icon={<FaClock />}
          color="bg-purple-50 text-purple-600"
        />

      </div>

      {/* Filters */}

      <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-lg">

        <div className="grid gap-4 lg:grid-cols-4">

          <div className="relative">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>

            <input
              placeholder="Search courses..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 py-3 pl-12 pr-4 outline-none focus:border-[#D6451B]"
            />

          </div>

          <select className="rounded-2xl border border-slate-200 p-3">

            <option>All Categories</option>

            <option>English</option>

            <option>IELTS</option>

            <option>Professional</option>

          </select>

          <select className="rounded-2xl border border-slate-200 p-3">

            <option>All Trainers</option>

            <option>John Smith</option>

            <option>Emma Johnson</option>

          </select>

          <button className="rounded-2xl bg-[#D6451B] text-white">
            Apply Filters
          </button>

        </div>

      </div>
            {/* Courses Grid */}

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

        {courses
          .filter((course) =>
            course.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((course) => (

            <motion.div
              key={course.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg"
            >

              {/* Image */}

              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#D6451B] to-orange-400">

                {course.image ? (

                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />

                ) : (

                  <div className="flex h-full items-center justify-center">

                    <FaBookOpen className="text-7xl text-white/70" />

                  </div>

                )}

                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#D6451B] shadow">

                  {course.category}

                </span>

              </div>

              {/* Body */}

              <div className="p-6">

                <div className="flex items-start justify-between">

                  <div>

                    <h2 className="text-2xl font-bold text-slate-900">

                      {course.title}

                    </h2>

                    <p className="mt-2 text-slate-500">

                      Instructor • {course.trainer}

                    </p>

                  </div>

                  <span className="rounded-xl bg-orange-50 px-4 py-2 font-bold text-[#D6451B]">

                    {course.price}

                  </span>

                </div>

                {/* Details */}

                <div className="mt-8 grid grid-cols-2 gap-5">

                  <div className="rounded-2xl bg-slate-50 p-4">

                    <p className="text-sm text-slate-500">

                      Students

                    </p>

                    <h3 className="mt-2 text-xl font-bold">

                      {course.students}

                    </h3>

                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">

                    <p className="text-sm text-slate-500">

                      Duration

                    </p>

                    <h3 className="mt-2 text-xl font-bold">

                      {course.duration}

                    </h3>

                  </div>

                </div>

                {/* Progress */}

                <div className="mt-8">

                  <div className="mb-3 flex items-center justify-between">

                    <span className="font-medium">

                      Completion

                    </span>

                    <span className="font-bold text-[#D6451B]">

                      {course.progress}%

                    </span>

                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-orange-100">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${course.progress}%`,
                      }}
                      transition={{ duration: 1 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#D6451B] to-orange-400"
                    />

                  </div>

                </div>

                {/* Footer */}

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">

                  <button className="flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 font-medium text-blue-600 transition hover:scale-105">

                    <FaEye />

                    View

                  </button>

                  <button className="flex items-center gap-2 rounded-xl bg-orange-50 px-4 py-3 font-medium text-[#D6451B] transition hover:scale-105">

                    <FaEdit />

                    Edit

                  </button>

                  <button className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 font-medium text-red-600 transition hover:scale-105">

                    <FaTrash />

                    Delete

                  </button>

                </div>

              </div>

            </motion.div>

          ))}

      </div>
            {/* Bottom Section */}

      <div className="grid gap-8 xl:grid-cols-[2fr_1fr]">

        {/* Course Performance */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg"
        >

          <div className="border-b border-slate-200 p-6">

            <h2 className="text-2xl font-bold">
              Course Performance
            </h2>

            <p className="mt-2 text-slate-500">
              Enrollment and completion overview
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-50">

                <tr>

                  <th className="px-6 py-4 text-left">
                    Course
                  </th>

                  <th className="px-6 py-4 text-left">
                    Students
                  </th>

                  <th className="px-6 py-4 text-left">
                    Revenue
                  </th>

                  <th className="px-6 py-4 text-left">
                    Completion
                  </th>

                </tr>

              </thead>

              <tbody>

                {courses.map((course) => (

                  <tr
                    key={course.id}
                    className="border-b last:border-none"
                  >

                    <td className="px-6 py-5 font-semibold">
                      {course.title}
                    </td>

                    <td className="px-6 py-5">
                      {course.students}
                    </td>

                    <td className="px-6 py-5">
                      ₹
                      {(
                        parseInt(
                          course.price.replace(/[₹,]/g, "")
                        ) * course.students
                      ).toLocaleString()}
                    </td>

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="h-2 w-32 overflow-hidden rounded-full bg-orange-100">

                          <div
                            style={{
                              width: `${course.progress}%`,
                            }}
                            className="h-full rounded-full bg-[#D6451B]"
                          />

                        </div>

                        <span className="font-medium">

                          {course.progress}%

                        </span>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </motion.div>

        {/* Top Courses */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg"
        >

          <h2 className="text-2xl font-bold">
            Top Courses
          </h2>

          <div className="mt-8 space-y-6">

            {courses
              .sort((a, b) => b.students - a.students)
              .map((course) => (

                <div
                  key={course.id}
                  className="rounded-2xl bg-slate-50 p-5"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h3 className="font-semibold">
                        {course.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {course.students} Students
                      </p>

                    </div>

                    <span className="font-bold text-[#D6451B]">

                      #{course.id}

                    </span>

                  </div>

                </div>

              ))}

          </div>

        </motion.div>

      </div>

      {/* Pagination */}

      <div className="flex flex-col items-center justify-between gap-5 rounded-[30px] border border-slate-200 bg-white p-6 shadow-lg md:flex-row">

        <p className="text-sm text-slate-500">
          Showing 1 - {courses.length} of {courses.length} Courses
        </p>

        <div className="flex gap-2">

          <button className="rounded-xl border border-slate-200 px-4 py-2 hover:bg-slate-50">

            Previous

          </button>

          <button className="h-10 w-10 rounded-xl bg-[#D6451B] text-white">

            1

          </button>

          <button className="rounded-xl border border-slate-200 px-4 py-2 hover:bg-slate-50">

            Next

          </button>

        </div>

      </div>

      {/* Empty State */}

      {courses.length === 0 && (

        <div className="rounded-[32px] border border-dashed border-slate-300 bg-white py-20 text-center shadow-lg">

          <FaBookOpen className="mx-auto text-6xl text-[#D6451B]" />

          <h2 className="mt-6 text-3xl font-bold">

            No Courses Found

          </h2>

          <p className="mx-auto mt-3 max-w-md text-slate-500">

            There are currently no courses available.
            Click below to create your first course.

          </p>

          <button className="mt-8 rounded-2xl bg-[#D6451B] px-8 py-4 text-white">

            Add Course

          </button>

        </div>

      )}

    </div>

  );

}

/* ---------- Reusable Stat Card ---------- */

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