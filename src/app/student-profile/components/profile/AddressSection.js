"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import Input from "./Input";

export default function AddressSection({
  register,
  errors,
}) {
  return (
    <section className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Header */}
      <div className="mb-4 sm:mb-6 flex items-start gap-3 sm:gap-4">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-orange-100 text-base sm:text-lg text-[#D6451B]">
          <FaMapMarkerAlt />
        </div>

        <div>
          <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
            Address Details
          </h2>

          <p className="mt-0.5 text-xs sm:text-sm leading-relaxed text-slate-500">
            Keep your residential address updated for communication and records.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
        <Input
          icon={<FaMapMarkerAlt />}
          label="Street Address"
          placeholder="Enter your street address"
          error={errors.address?.street}
          {...register("address.street")}
          className="md:col-span-2"
        />

        <Input
          icon={<FaMapMarkerAlt />}
          label="City"
          placeholder="Enter city"
          error={errors.address?.city}
          {...register("address.city")}
        />

        <Input
          icon={<FaMapMarkerAlt />}
          label="State"
          placeholder="Enter state"
          error={errors.address?.state}
          {...register("address.state")}
        />

        <Input
          icon={<FaMapMarkerAlt />}
          label="Country"
          placeholder="Enter country"
          error={errors.address?.country}
          {...register("address.country")}
        />

        <Input
          icon={<FaMapMarkerAlt />}
          label="Postal Code"
          placeholder="Enter postal code"
          error={errors.address?.postalCode}
          {...register("address.postalCode")}
        />
      </div>
    </section>
  );
}