import { z } from "zod";
 const baseSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),

  shortDescription: z
    .string()
    .trim()
    .max(200, "Short description cannot exceed 200 characters")
    .optional()
    .or(z.literal("")),
 category: z
    .string()
    .min(2, "Category is required"),

  language: z
    .string()
    .min(2, "Language is required"),

  enrollmentOpen: z.union([
    z.boolean(),
    z.enum(["true", "false"]),
  ]),
  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters"),

  price:z.preprocess(
  (v) => (v === "" ? undefined : Number(v)),
  z.number().min(1, "Price is required")
).optional(),

durationInMonths: z.preprocess(
  (v) => (v === "" ? undefined : Number(v)),
  z.number().min(1, "Duration is required")
),

  level: z.enum([
    "beginner",
    "intermediate",
    "advanced",
  ]),

  status: z.enum([
    "draft",
    "published",
    "archived",
  ]),

});
const thumbnailSchema = z
  .any()
  .transform((files) => files?.[0])
  .refine((file) => file instanceof File, {
    message: "Thumbnail is required",
  })
  .refine(
    (file) =>
      ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(file.type),
    {
      message: "Only JPG, JPEG, PNG and WebP images are allowed",
    }
  )
  .refine(
    (file) => file.size <= 5 * 1024 * 1024,
    {
      message: "Thumbnail must be less than 5 MB",
    }
  );

export const createCourseSchema = baseSchema.extend({
  thumbnail: thumbnailSchema,
});

const optionalThumbnailSchema = z
  .any()
  .transform((files) => files?.[0])
  .refine(
    (file) =>
      !file ||
      ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(file.type),
    {
      message: "Only JPG, JPEG, PNG and WebP images are allowed",
    }
  )
  .refine(
    (file) => !file || file.size <= 5 * 1024 * 1024,
    {
      message: "Thumbnail must be less than 5 MB",
    }
  );

export const updateCourseSchema = baseSchema.extend({
  thumbnail: optionalThumbnailSchema,
});