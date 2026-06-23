import { z } from "zod";

export const editBatchSchema = z
  .object({
    startDate: z
      .string()
      .min(1, "Start date is required"),
description: z.string().optional(),

meetingPlatform: z.enum([
  "zoom",
  "google-meet",
  "offline",
  "other",
]),

enrollmentOpen: z.coerce.boolean(),

schedule: z.object({
  days: z.array(z.string()).optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
}),
    endDate: z
      .string()
      .min(1, "End date is required"),

    maxStudents: z.coerce
      .number()
      .min(1, "Maximum students must be at least 1")
      .max(1000, "Maximum students is too large"),

    status: z.enum([
      "upcoming",
      "active",
      "completed",
      "cancelled",
    ]),

    students: z
      .array(z.string())
      .default([]),

    trainers: z
      .array(z.string())
      .default([]),
  })
  .refine(
    (data) =>
      new Date(data.endDate) >
      new Date(data.startDate),
    {
      message:
        "End date must be after start date",
      path: ["endDate"],
    }
  )
  .refine(
    (data) =>
      data.students.length <=
      data.maxStudents,
    {
      message:
        "Selected students exceed maximum capacity",
      path: ["students"],
    }
  );