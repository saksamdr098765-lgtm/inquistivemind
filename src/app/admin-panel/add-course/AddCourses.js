"use client";

import { useCreateCourseMutation, useUpdateCourseMutation } from "@/app/mutations/coursesMutations";
import Input from "@/app/student-profile/components/profile/Input";
import Select from "@/app/student-profile/components/profile/Select";
import TextArea from "@/app/student-profile/components/profile/TextArea";
import { createCourseSchema, updateCourseSchema } from "@/schemas/createCourseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FaBookOpen,
  FaAlignLeft,
  FaMoneyBillWave,
  FaClock,
  FaLayerGroup,
  FaSave,
} from "react-icons/fa";
import { SlControlPause } from "react-icons/sl";




export default function AddCourseForm({mode,initialData}) {
    const isEdit=mode==="edit"
   const schema = isEdit
  ? updateCourseSchema
  : createCourseSchema;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver:zodResolver(schema),
    mode:"onBlur",
  defaultValues: {
  title: initialData?.title ?? "",
  shortDescription: initialData?.shortDescription ?? "",
  description: initialData?.description ?? "",
  price: initialData?.price ?? 0,
  durationInMonths: initialData?.durationInMonths ?? "",
  level: initialData?.level ?? "beginner",
  status: initialData?.status ?? "draft",
  category: initialData?.category ?? "",
  language: initialData?.language ?? "English",
  enrollmentOpen: initialData?.enrollmentOpen ?? true,
},
  });
  useEffect(() => {
  if (isEdit && initialData) {
    reset({
      title: initialData.title,
      shortDescription: initialData.shortDescription,
      description: initialData.description,
      price: initialData.price,
      durationInMonths: initialData.durationInMonths,
      level: initialData.level,
      status: initialData.status,
      category: initialData.category,
      language: initialData.language,
      enrollmentOpen: initialData.enrollmentOpen,
    });
  }
}, [initialData, isEdit, reset]);

  const updateCourseMutation=useUpdateCourseMutation()
 const createCourseMutation=useCreateCourseMutation(reset)
  const onSubmit = async (data) => {
 
 const formData = new FormData();

  formData.append("title", data.title);
  formData.append(
    "shortDescription",
    data.shortDescription
  );
  formData.append("description", data.description);
  formData.append("price", data.price);
  formData.append(
    "durationInMonths",
    data.durationInMonths
  );
  formData.append("level", data.level);
  formData.append("status", data.status);
  formData.append("category", data.category);
formData.append("language", data.language);

formData.append(
  "enrollmentOpen",
  data.enrollmentOpen
);



  if (data.thumbnail) {
    formData.append(
      "image",
      data.thumbnail
    );}
    // mutation here

     if (isEdit) {
    
    await updateCourseMutation.mutateAsync({
      id: initialData._id,
      data: formData,
    });
  } else {
    await createCourseMutation.mutateAsync(formData);
  }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit,(error)=>console.log(error))}
      className="space-y-8"
    >
      {/* Basic Information */}

      <div>
        <h2 className="mb-4 text-xl font-bold text-slate-800">
          Basic Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="Course Title"
            placeholder="Spoken English Mastery"
            icon={<FaBookOpen />}
            {...register("title")}
            error={errors.title}
          />

          
        </div>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
  <Input
    label="Category"
    placeholder="English Speaking"
    icon={<FaBookOpen />}
    {...register("category")}
    error={errors.category}
  />

  <Input
    label="Language"
    placeholder="English"
    icon={<FaBookOpen />}
    {...register("language")}
    error={errors.language}
  />
</div>
      </div>

      {/* Descriptions */}

      <div className="space-y-6">
        <TextArea
          label="Short Description"
          placeholder="Short course summary..."
          {...register("shortDescription")}
          error={errors.shortDescription}
        />

        <TextArea
          label="Description"
          placeholder="Detailed course description..."
          {...register("description")}
          rows={6}
          error={errors.description}
        />
      </div>

      {/* Pricing & Duration */}

      <div>
        <h2 className="mb-4 text-xl font-bold text-slate-800">
          Pricing & Duration
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Input
            type="number"
            label="Price (₹)"
            placeholder="5000"
            icon={<FaMoneyBillWave />}
            {...register("price")}
            error={errors.price}
          />

          <Input
            type="number"
            label="Duration (Months)"
            placeholder="3"
            icon={<FaClock />}
            {...register("durationInMonths")}
            error={errors.durationInMonths}
          />
        </div>
      </div>

      {/* Course Settings */}

      <div>
        <h2 className="mb-4 text-xl font-bold text-slate-800">
          Course Settings
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Select
            label="Level"
            error={errors.level}
            icon={<FaLayerGroup />}
            {...register("level")}
            options={[
              {
                label: "Beginner",
                value: "beginner",
              },
              {
                label: "Intermediate",
                value: "intermediate",
              },
              {
                label: "Advanced",
                value: "advanced",
              },
            ]}
          />
 <Select
  label="Enrollment Open"
  {...register("enrollmentOpen", {
    setValueAs: (value) => value === "true",
  })}
  options={[
    { label: "Yes", value: "true" },
    { label: "No", value: "false" },
  ]}
/>
          <Select
            label="Status"
            error={errors.status}
            {...register("status")}
            options={[
              {
                label: "Draft",
                value: "draft",
              },
              {
                label: "Published",
                value: "published",
              },
              {
                label: "Archived",
                value: "archived",
              },
            ]}
          />
        </div>
      </div>

      {/* Thumbnail */}

      <div>
        <h2 className="mb-4 text-xl font-bold text-slate-800">
          Thumbnail
        </h2>
{isEdit && initialData?.thumbnail?.url && (
  <div className="mb-4">
    <img
      src={initialData.thumbnail.url}
      alt={initialData.title}
      className="h-40 w-64 rounded-lg object-cover"
    />
  </div>
)}

        <Input
          type="file"
          label="Course Thumbnail"
          error={errors.thumbnail}
         {...register("thumbnail")}
        />
      </div>

      {/* Submit */}

      <div className="flex justify-end">
      <button
  type="submit"
  disabled={
    createCourseMutation.isPending ||
    updateCourseMutation.isPending
  }
 className="
  flex items-center gap-2
  rounded-2xl
  bg-yellow-500
  px-6 py-3
  font-semibold
  text-white
  shadow-lg shadow-yellow-500/20
  transition-all duration-300
  hover:bg-yellow-600
  hover:shadow-xl hover:shadow-yellow-500/30
  focus:outline-none
  focus:ring-4 focus:ring-yellow-300
  disabled:opacity-50
  disabled:cursor-not-allowed
"
>

<FaSave></FaSave>

  {createCourseMutation.isPending ||
  updateCourseMutation.isPending
    ? isEdit
      ? "Updating..."
      : "Creating..."
    : isEdit
      ? "Update Course"
      : "Create Course"}
</button>
      </div>
    </form>
  );
}