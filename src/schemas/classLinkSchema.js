import { z } from "zod";

export const createClassLinkSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),

  meetingLink: z
    .string()
    .url("Please enter a valid meeting URL"),

  meetingDate: z
    .string()
    .min(1, "Meeting date is required"),

  description: z
    .string()
    .max(1000, "Description cannot exceed 1000 characters")
    .optional()
    .or(z.literal("")),

  durationMinutes: z
    .coerce
    .number()
    .min(1, "Duration must be at least 1 minute")
    .max(1440, "Duration cannot exceed 24 hours"),

  status: z.enum([
    "scheduled",
    "live",
    "completed",
    "cancelled",
  ]),

  platform: z.enum([
    "zoom",
    "google-meet",
    "teams",
    "custom",
  ]),

  attendanceEnabled: z
    .union([
      z.boolean(),
      z.enum(["true", "false"]),
    ])
    .optional(),

  // recordingUrl: z
  //   .string()
  //   .url("Please enter a valid recording URL")
  //   .optional()
  //   .or(z.literal("")),

});