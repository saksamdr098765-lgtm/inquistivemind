"use client";

import {
  FaUser,
  FaPhoneAlt,
  FaUserShield,
} from "react-icons/fa";

import Input from "./Input";
import Select from "./Select";

export default function EmergencySection({
  errors,
  register,
  profileUpdateMutation,
  handleCancel,
  isSubmitting = false,
}) {
  return (
    <section className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Header */}
      <div className="mb-4 sm:mb-6 flex items-start gap-3 sm:gap-4">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-red-100 text-base sm:text-lg text-red-600">
          <FaUserShield />
        </div>

        <div>
          <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
            Emergency Contact
          </h2>

          <p className="mt-0.5 text-xs sm:text-sm leading-relaxed text-slate-500">
            This person will be contacted if there's an emergency involving you.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
        <Input
          icon={<FaUser />}
          label="Contact Name"
          placeholder="Enter full name"
          error={errors.emergencyContact?.name}
          {...register("emergencyContact.name")}
        />

        <Input
          icon={<FaPhoneAlt />}
          label="Phone Number"
          placeholder="Enter phone number"
          error={errors.emergencyContact?.phone}
          {...register("emergencyContact.phone")}
        />

        <Select
          label="Relationship"
          error={errors.emergencyContact?.relation}
          {...register("emergencyContact.relation")}
          options={[
            { value: "Father", label: "Father" },
            { value: "Mother", label: "Mother" },
            { value: "Spouse", label: "Spouse" },
            { value: "Guardian", label: "Guardian" },
            { value: "Sibling", label: "Sibling" },
            { value: "Friend", label: "Friend" },
            { value: "Relative", label: "Relative" },
            { value: "Other", label: "Other" },
          ]}
        />
      </div>
    </section>
  );
}