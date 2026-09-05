"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  FaFileAlt,
  FaSave,
  FaEye,
  FaLock,
  FaTag,
} from "react-icons/fa";
import Input from "@/app/student-profile/components/profile/Input";
import TextArea from "@/app/student-profile/components/profile/TextArea";
import { useCreateNotesMutation } from "@/app/mutations/notesMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createNoteSchema } from "@/schemas/createNoteSchema";
import { useSearchParams } from "next/navigation";
import Select from "@/app/student-profile/components/profile/Select";

export default function AddNoteForm() {
  const searchParams=useSearchParams()
  const batchId=searchParams.get("batchId") 
  if(!batchId) return 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver:zodResolver(createNoteSchema),
    mode:"onBlur",
    defaultValues: {
  title: "",
  description: "",
  type: "pdf",
  visibility: "public",
},
  });
const createNoteMutation=useCreateNotesMutation(reset)
const onSubmit = async (data) => {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append(
    "description",
    data.description || ""
  );

  formData.append("type", data.type);
  formData.append(
    "visibility",
    data.visibility
  );

  if (data.file?.[0]) {
    formData.append("file", data.file[0]);
  }

  await createNoteMutation.mutateAsync({
    id: batchId,
    data: formData,
  });
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 sm:space-y-6 max-w-7xl mx-auto"
    >
      {/* Hero Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-amber-500 to-yellow-500 p-5 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6"
      >
        <div className="absolute -right-10 -top-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />

        <div className="relative">
          <span className="inline-flex rounded-full bg-white/20 border border-white/30 px-3 py-0.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
            Learning Resources
          </span>
          <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Upload Class Notes & Materials
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-xs sm:text-sm max-w-xl">
            Attach PDF files, lesson notes, or study materials to this batch.
          </p>
        </div>
      </motion.div>
      <Input
        label="Note Title"
        placeholder="Chapter 1 Notes"
        icon={<FaFileAlt />}
        {...register("title", {
          required: "Title is required",
        })}
        error={errors.title}
      />
<div className="grid gap-6 md:grid-cols-2">

  <Select
    label="Note Type"
    icon={<FaTag />}
    {...register("type")}
    error={errors.type}
    options={[
      { label: "PDF", value: "pdf" },
      // { label: "PPT", value: "ppt" },
      // { label: "DOC", value: "doc" },
      // { label: "Image", value: "image" },
      // { label: "Video", value: "video" },
      // { label: "Other", value: "other" },
    ]}
  />

  <Select
    label="Visibility"
    icon={<FaEye />}
    {...register("visibility")}
    error={errors.visibility}
    options={[
      {
        label: "Public",
        value: "public",
      },
      {
        label: "Private",
        value: "private",
      },
    ]}
  />

</div>
      <TextArea
        label="Description"
        placeholder="Optional description..."
        rows={4}
        {...register("description")}
        error={errors.description}
      />

   <div className="rounded-2xl border border-dashed border-slate-300 p-5">

  <Input
    type="file"
    label="Upload Note File"
    {...register("file")}
    error={errors.file}
  />

  <p className="mt-2 text-sm text-slate-500">
    Supported: PDF,
     {/* PPT, DOC, Images, Videos */}
  </p>

</div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={
            isSubmitting ||
            createNoteMutation.isPending
          }
          className="
            flex items-center gap-2
            rounded-2xl
            bg-amber-500
            px-6 py-3
            text-white
            font-semibold
            hover:bg-yellow-500
          "
        >
          <FaSave />

          {createNoteMutation.isPending
            ? "Uploading..."
            : "Add Note"}
        </button>
      </div>
    </form>
  );
}