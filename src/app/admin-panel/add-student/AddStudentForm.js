"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaSave, FaUpload, FaUserGraduate } from "react-icons/fa";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalInput from "@/app/Components/portal-ui/PortalInput";
import PortalSelect from "@/app/Components/portal-ui/PortalSelect";
import PortalTextArea from "@/app/Components/portal-ui/PortalTextArea";
import PortalButton from "@/app/Components/portal-ui/PortalButton";

export default function AddStudentForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    bloodGroup: "",
    email: "",
    phone: "",
    alternatePhone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 max-w-7xl mx-auto">
      {/* Top Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-500 to-yellow-500 p-5 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        <div className="absolute -right-10 -top-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />

        <div className="relative">
          <span className="inline-flex rounded-full bg-white/20 border border-white/30 px-3 py-0.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
            Student Admission
          </span>
          <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Add New Student Profile
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Register a new student account, assign batches, courses, and fee structures.
          </p>
        </div>

        <PortalButton
          variant="secondary"
          size="sm"
          icon={FaArrowLeft}
          onClick={() => router.push("/admin-panel/student")}
          className="w-full sm:w-auto"
        >
          Back to Students
        </PortalButton>
      </div>

      {/* Student Photo Section */}
      <PortalCard header="Student Avatar & Photo">
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-yellow-50 text-4xl text-yellow-700 border border-yellow-200 shadow-xs">
            <FaUserGraduate />
          </div>

          <label className="cursor-pointer flex-1 w-full rounded-2xl border-2 border-dashed border-slate-300 p-6 text-center hover:border-yellow-500 hover:bg-yellow-50/50 transition-all">
            <FaUpload className="mx-auto text-2xl text-yellow-600" />
            <p className="mt-2 font-bold text-slate-800 text-sm">Upload High-Res Profile Photo</p>
            <p className="text-xs text-slate-400 mt-1">PNG, JPG or WEBP up to 5MB</p>
            <input type="file" className="hidden" />
          </label>
        </div>
      </PortalCard>

      {/* Personal Details */}
      <PortalCard header="Personal Information">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PortalInput
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="John"
          />
          <PortalInput
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Doe"
          />
          <PortalSelect
            label="Gender"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            options={["Select Gender", "Male", "Female", "Other"]}
          />
          <PortalInput
            label="Date of Birth"
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
          />
          <PortalInput
            label="Blood Group"
            name="bloodGroup"
            value={form.bloodGroup}
            onChange={handleChange}
            placeholder="O+"
          />
        </div>
      </PortalCard>

      {/* Contact Details */}
      <PortalCard header="Contact Details">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PortalInput
            label="Email Address"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
          />
          <PortalInput
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
          />
          <PortalInput
            label="Alternate Phone"
            name="alternatePhone"
            value={form.alternatePhone}
            onChange={handleChange}
            placeholder="+91 98765 43211"
          />
        </div>
      </PortalCard>

      {/* Guardian Details */}
      <PortalCard header="Guardian Information">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <PortalInput label="Father Name" placeholder="Father's full name" />
          <PortalInput label="Mother Name" placeholder="Mother's full name" />
          <PortalInput label="Guardian Phone" placeholder="Contact number" />
          <PortalInput label="Occupation" placeholder="Business / Profession" />
        </div>
      </PortalCard>

      {/* Course Enrollment */}
      <PortalCard header="Course & Batch Assignment">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PortalSelect
            label="Select Course"
            options={[
              "Select Course",
              "French Language Program",
              "Spoken French Online",
              "TEF Canada Prep",
              "DELF B2 Masterclass",
            ]}
          />
          <PortalSelect
            label="Select Batch"
            options={["Select Batch", "Morning Batch A", "Evening Batch B", "Weekend Special"]}
          />
          <PortalSelect
            label="Assigned Trainer"
            options={["Select Trainer", "Sakshi Goel", "John Smith", "Emma Johnson"]}
          />
          <PortalInput label="Joining Date" type="date" />
          <PortalInput label="Course Duration" placeholder="e.g. 6 Months" />
          <PortalInput label="Student ID" placeholder="Auto Generated" readOnly />
        </div>
      </PortalCard>

      {/* Address Details */}
      <PortalCard header="Residential Address">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-5">
          <PortalInput label="Country" placeholder="India" />
          <PortalInput label="State" placeholder="Punjab" />
          <PortalInput label="City" placeholder="Chandigarh" />
          <PortalInput label="Pincode" placeholder="160017" />
        </div>
        <PortalTextArea label="Complete Street Address" placeholder="House number, street, area details..." rows={3} />
      </PortalCard>

      {/* Form Submission Controls */}
      <div className="flex items-center justify-end gap-4 pt-4">
        <PortalButton variant="outline" onClick={() => router.push("/admin-panel/student")}>
          Cancel
        </PortalButton>
        <PortalButton icon={FaSave} type="submit">
          Save Student Profile
        </PortalButton>
      </div>
    </div>
  );
}
