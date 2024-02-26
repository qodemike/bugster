import { z } from 'zod';

export const validateIssueSchema = z.object({
    title: z.string().min(2, 'Title is too short').max(255),
    description: z.string().min(2)
});
