"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCamera, FaCheck, FaTimes, FaSpinner } from "react-icons/fa";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";

export default function ProfileSidebar({
  user,
  profile,
  onImageUpload,
  isUploading,
}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }
    const url = URL.createObjectURL(selectedFile);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [selectedFile]);

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB");
      return;
    }
    setSelectedFile(file);
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setPreview("");
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    onImageUpload(selectedFile, () => {
      setSelectedFile(null);
      setPreview("");
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
      className="overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-xs"
    >
      {/* Website Yellow Gradient Top Banner */}
      <div className="relative h-28 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.3),transparent_60%)]" />
      </div>

      {/* Avatar Container */}
      <div className="-mt-14 px-6">
        <div className="relative mx-auto w-fit">
          <img
            src={preview || user?.profileImage?.url || "/student.jpg"}
            alt={user?.fullName}
            className="h-32 w-32 shrink-0 rounded-full border-4 border-white object-cover object-top shadow-md"
          />

          {!selectedFile ? (
            <>
              <label
                htmlFor="profileImage"
                className="absolute bottom-1 right-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-yellow-400 text-slate-900 font-bold shadow-md shadow-yellow-200 transition-all hover:bg-yellow-500 hover:scale-110"
                title="Upload Profile Picture"
              >
                <FaCamera className="text-sm" />
              </label>

              <input
                id="profileImage"
                type="file"
                accept="image/*"
                hidden
                onChange={handleChange}
              />
            </>
          ) : (
            <div className="absolute bottom-1 right-1 flex gap-1.5">
              <button
                type="button"
                onClick={handleUpload}
                disabled={isUploading}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md transition-all hover:scale-105 disabled:opacity-50"
              >
                {isUploading ? <FaSpinner className="animate-spin text-xs" /> : <FaCheck className="text-xs" />}
              </button>

              <button
                type="button"
                onClick={handleCancel}
                disabled={isUploading}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white shadow-md transition-all hover:scale-105"
              >
                <FaTimes className="text-xs" />
              </button>
            </div>
          )}
        </div>

        {/* Name and Level */}
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold text-slate-900">{user?.fullName || "Student"}</h3>
          <p className="mt-0.5 text-xs text-slate-400 font-medium">{user?.email}</p>

          <div className="mt-3 inline-block">
            <PortalBadge variant="yellow">{profile?.languageLevel || "Beginner"}</PortalBadge>
          </div>
        </div>

        {/* Info Items List */}
        <div className="relative mt-6 space-y-2.5 pb-6">
          <Info title="Student ID" value={profile?.studentId || "Not Assigned"} />
          <Info title="Current Batch" value={profile?.batch?.name || "Not Assigned"} />
          <Info
            title="Primary Course"
            value={profile?.enrolledCourses?.[0]?.title || "No Active Course"}
          />
          <Info
            title="Assigned Trainer"
            value={profile?.batch?.teacher?.user?.fullName || "Not Assigned"}
          />
          <Info
            title="Admission Date"
            value={
              profile?.admissionDate
                ? new Date(profile.admissionDate).toLocaleDateString("en-IN")
                : "-"
            }
          />
        </div>
      </div>
    </motion.div>
  );
}

function Info({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3 flex justify-between items-center text-xs">
      <span className="text-slate-400 font-semibold uppercase">{title}</span>
      <span className="font-bold text-slate-800 truncate max-w-[150px]">{value}</span>
    </div>
  );
}