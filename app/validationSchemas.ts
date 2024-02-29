import { z } from "zod";

export const issueValidationSchema = z.object({
  title: z.string().min(2, "Title is required").max(255),
  description: z.string().min(2, "Description is required").max(65535),
});

export const patchIssueSchema = z.object({
  title: z.string().min(2, "Title is too short").max(255).optional(),
  description: z
    .string()
    .min(2, "Description is too short")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignedtoUserId is required")
    .max(255)
    .optional()
    .nullable(),
});
