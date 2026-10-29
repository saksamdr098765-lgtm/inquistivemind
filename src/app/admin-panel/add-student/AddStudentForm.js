"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaSave, FaUpload, FaUserGraduate } from "react-icons/fa";
import { toast } from "sonner";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalInput from "@/app/Components/portal-ui/PortalInput";
import PortalSelect from "@/app/Components/portal-ui/PortalSelect";
import PortalTextArea from "@/app/Components/portal-ui/PortalTextArea";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import { useAdminCreateStudentMutation } from "@/app/mutations/AdminMutations";

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
    password: "",
  });

  const createStudentMutation = useAdminCreateStudentMutation(() => {
    router.push("/admin-panel/student");
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstName.trim()) {
      toast.error("Please enter the student's first name.");
      return;
    }
    if (!form.email.trim()) {
      toast.error("Please enter the student's email address.");
      return;
    }

    const payload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      gender: form.gender,
      dateOfBirth: form.dob || undefined,
      password: form.password || undefined,
    };

    await createStudentMutation.mutateAsync(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 max-w-7xl mx-auto">
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
            Register and immediately approve a new student account in the academy directory.
          </p>
        </div>

        <PortalButton
          type="button"
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
      <PortalCard header="Student Profile Badge">
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-yellow-50 text-4xl text-yellow-700 border border-yellow-200 shadow-xs">
            <FaUserGraduate />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm">Direct Student Registration</h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Creating a profile from here will automatically verify and approve the student account.
            </p>
          </div>
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
            placeholder="e.g. Aarav"
            required
          />
          <PortalInput
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="e.g. Sharma"
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
            label="Default Password (Optional)"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Default: Student@123"
          />
        </div>
      </PortalCard>

      {/* Contact Details */}
      <PortalCard header="Contact Details">
        <div className="grid gap-5 sm:grid-cols-2">
          <PortalInput
            label="Email Address"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="student@example.com"
            required
          />
          <PortalInput
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98552 93752"
          />
        </div>
      </PortalCard>

      {/* Form Submission Controls */}
      <div className="flex items-center justify-end gap-4 pt-4">
        <PortalButton
          type="button"
          variant="outline"
          onClick={() => router.push("/admin-panel/student")}
        >
          Cancel
        </PortalButton>
        <PortalButton
          icon={FaSave}
          type="submit"
          disabled={createStudentMutation.isPending}
        >
          {createStudentMutation.isPending ? "Saving..." : "Save Student Profile"}
        </PortalButton>
      </div>
    </form>
  );
}
