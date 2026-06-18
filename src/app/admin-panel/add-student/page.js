"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaSave,
  FaUpload,
  FaUserGraduate,
} from "react-icons/fa";

export default function AddStudent() {
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
    <div className="space-y-8 max-w-7xl mx-auto py-20">

      {/* Hero */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-[32px] bg-gradient-to-r from-[#D6451B] to-orange-500 p-8 text-white shadow-xl"
      >
        <div className="flex flex-wrap items-center justify-between gap-6">

          <div>

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              Student Admission
            </span>

            <h1 className="mt-5 text-4xl font-bold">
              Add New Student
            </h1>

            <p className="mt-3 max-w-2xl text-orange-100">
              Fill in the admission details to create a new student
              profile.
            </p>

          </div>

          <button className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-[#D6451B]">
            <FaArrowLeft />
            Back
          </button>

        </div>

      </motion.div>

      {/* Student Photo */}

      <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg">

        <h2 className="text-2xl font-bold">
          Student Photo
        </h2>

        <div className="mt-8 flex flex-col items-center gap-6 md:flex-row">

          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-orange-50 text-5xl text-[#D6451B]">

            <FaUserGraduate />

          </div>

          <label className="cursor-pointer rounded-2xl border border-dashed border-[#D6451B] px-8 py-5 text-center">

            <FaUpload className="mx-auto text-2xl text-[#D6451B]" />

            <p className="mt-3 font-medium">
              Upload Student Photo
            </p>

            <input
              type="file"
              className="hidden"
            />

          </label>

        </div>

      </div>

      {/* Personal Information */}

      <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg">

        <h2 className="text-2xl font-bold">
          Personal Information
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          <Input
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />

          <Input
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />

          <div>

            <label className="mb-2 block font-medium">
              Gender
            </label>

            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 p-3 outline-none focus:border-[#D6451B]"
            >
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

          </div>

          <Input
            label="Date of Birth"
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
          />

          <Input
            label="Blood Group"
            name="bloodGroup"
            value={form.bloodGroup}
            onChange={handleChange}
          />

        </div>

      </div>

      {/* Contact */}

      <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg">

        <h2 className="text-2xl font-bold">
          Contact Information
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          <Input
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />

          <Input
            label="Alternate Phone"
            name="alternatePhone"
            value={form.alternatePhone}
            onChange={handleChange}
          />

        </div>

      </div>
            {/* Guardian Details */}

      <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg">

        <h2 className="text-2xl font-bold">
          Guardian Details
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          <Input label="Father Name" />

          <Input label="Mother Name" />

          <Input label="Guardian Phone" />

          <Input label="Occupation" />

        </div>

      </div>

      {/* Course Information */}

      <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg">

        <h2 className="text-2xl font-bold">
          Course Information
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          <Select
            label="Course"
            options={[
              "General English",
              "Spoken English",
              "IELTS",
              "Business English",
            ]}
          />

          <Select
            label="Batch"
            options={[
              "Morning",
              "Evening",
              "Weekend",
            ]}
          />

          <Select
            label="Trainer"
            options={[
              "John Smith",
              "Emma Johnson",
              "David Wilson",
            ]}
          />

          <Input
            label="Joining Date"
            type="date"
          />

          <Input
            label="Course Duration"
            placeholder="6 Months"
          />

          <Input
            label="Student ID"
            placeholder="Auto Generated"
          />

        </div>

      </div>

      {/* Address */}

      <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg">

        <h2 className="text-2xl font-bold">
          Address Information
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          <Input label="Country" />

          <Input label="State" />

          <Input label="City" />

          <Input label="Pincode" />

        </div>

        <div className="mt-5">

          <label className="mb-2 block font-medium">
            Address
          </label>

          <textarea
            rows={4}
            className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-[#D6451B]"
            placeholder="Complete Address"
          />

        </div>

      </div>

      {/* Login Credentials */}

      <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg">

        <h2 className="text-2xl font-bold">
          Student Login
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <Input
            label="Username"
            placeholder="username"
          />

          <Input
            type="password"
            label="Password"
          />

          <Input
            type="password"
            label="Confirm Password"
          />

        </div>

      </div>

      {/* Fees */}

      <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg">

        <h2 className="text-2xl font-bold">
          Fees Details
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">

          <Input
            label="Admission Fee"
            placeholder="1000"
          />

          <Input
            label="Course Fee"
            placeholder="15000"
          />

          <Input
            label="Discount"
            placeholder="1000"
          />

          <Input
            label="Total"
            placeholder="15000"
          />

          <Select
            label="Payment Status"
            options={[
              "Paid",
              "Pending",
              "Partial",
            ]}
          />

        </div>

      </div>

      {/* Documents */}

      <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg">

        <h2 className="text-2xl font-bold">
          Upload Documents
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {[
            "Student Photo",
            "Aadhar Card",
            "Previous Certificate",
            "Signature",
          ].map((doc) => (

            <label
              key={doc}
              className="cursor-pointer rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center transition hover:border-[#D6451B]"
            >

              <FaUpload className="mx-auto text-3xl text-[#D6451B]" />

              <p className="mt-4 font-medium">
                {doc}
              </p>

              <input
                type="file"
                className="hidden"
              />

            </label>

          ))}

        </div>

      </div>

      {/* Buttons */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-50">

          Cancel

        </button>

        <button className="flex items-center gap-3 rounded-2xl bg-[#D6451B] px-8 py-4 font-semibold text-white hover:opacity-90">

          <FaSave />

          Save Student

        </button>

      </div>

    </div>

  );
}
function Input({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-slate-200 p-3.5 outline-none transition focus:border-[#D6451B]"
      />
    </div>
  );
}

function Select({ label, options = [] }) {
  return (
    <div>
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <select className="w-full rounded-2xl border border-slate-200 p-3.5 outline-none focus:border-[#D6451B]">
        <option>Select {label}</option>

        {options.map((option) => (
          <option key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}