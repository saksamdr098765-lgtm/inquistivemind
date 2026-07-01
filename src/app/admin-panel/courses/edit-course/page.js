"use client";

import { motion } from "framer-motion";

import { FaBookOpen } from "react-icons/fa";
import AddCourseForm from "../../add-course/AddCourses";
import { useSearchParams } from "next/navigation";
import { useGetCourseById } from "@/Hooks/useGetCourseById";
import Loading from "@/app/Components/ui/Loading";


export default function editCourse() {
    const searchParams=useSearchParams()
    const courseId=searchParams.get("courseId")
    const {data:course,isLoading}=useGetCourseById(courseId)
    if(isLoading) return <Loading></Loading>
  return (
    <div className="py-24 ">
      {/* Hero */}
<div className="mx-auto max-w-6xl space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          rounded-[30px]
          bg-gradient-to-r
          from-[#D6451B]
          to-orange-500
          p-8
          text-white
          shadow-xl
        "
      >
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-white/20 p-4">
            <FaBookOpen className="text-3xl" />
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              Edit Your Course
            </h1>

            <p className="mt-2 text-orange-100">
              Update the course of your academy.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Form */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="
          rounded-[30px]
          border
          border-slate-200
          bg-white
          p-8
          shadow-lg
        "
      >
        <AddCourseForm mode="edit" initialData={course} />
      </motion.div>
      </div>
    </div>
  );
}