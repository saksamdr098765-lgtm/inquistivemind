import { z } from "zod";

export const createNoteSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),

  description: z
    .string()
    .max(1000, "Description cannot exceed 1000 characters")
    .optional()
    .or(z.literal("")),

  type: z.enum(
    [
      "pdf",
      "ppt",
      "doc",
      "image",
      "video",
      "other",
    ],
    {
      message: "Please select a valid note type",
    }
  ),

  visibility: z.enum(
    ["public", "private"],
    {
      message: "Please select visibility",
    }
  ),

  file: z
    .any()
    .refine(
      (files) => files?.length > 0,
      "File is required"
    ),
});