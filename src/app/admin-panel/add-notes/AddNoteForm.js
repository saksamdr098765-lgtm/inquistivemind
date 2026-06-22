"use client";

import { useForm } from "react-hook-form";
import { FaFileAlt, FaSave } from "react-icons/fa";
import Input from "@/app/student-profile/components/profile/Input";
import TextArea from "@/app/student-profile/components/profile/TextArea";
import { useCreateNotesMutation } from "@/app/mutations/notesMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createNoteSchema } from "@/schemas/createNoteSchema";

export default function AddNoteForm({
  batchId,
}) {
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

    if (data.file?.[0]) {
      formData.append("image", data.file[0]);
    }

    await createNoteMutation.mutateAsync({
      id:"6a380bd36d1cdf6a9da7ff8e",
      data:formData,
    });

  
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <Input
        label="Note Title"
        placeholder="Chapter 1 Notes"
        icon={<FaFileAlt />}
        {...register("title", {
          required: "Title is required",
        })}
        error={errors.title}
      />

      <TextArea
        label="Description"
        placeholder="Optional description..."
        rows={4}
        {...register("description")}
        error={errors.description}
      />

      <Input
        type="file"
        label="Upload File"
        {...register("file", {
          required: "File is required",
        })}
        error={errors.file}
      />

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
            bg-[#D6451B]
            px-6 py-3
            text-white
            font-semibold
            hover:bg-[#bf3b14]
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