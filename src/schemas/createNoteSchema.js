import { z } from "zod";

export const createNoteSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),

  description: z
    .string()
    .trim()
    .max(1000, "Description cannot exceed 1000 characters")
    .optional(),

  file: z
    .any()
    .refine(
      (file) => file?.length > 0,
      "File is required"
    )
    .refine(
      (file) =>
        !file?.[0] ||
        file[0].size <= 10 * 1024 * 1024,
      "File size must be less than 10MB"
    )
    .refine(
      (file) =>
        !file?.[0] ||
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/vnd.ms-powerpoint",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          "application/zip",
          "image/jpeg",
          "image/png",
          "image/webp",
        ].includes(file[0].type),
      "Unsupported file type"
    ),
});