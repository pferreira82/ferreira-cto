import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  email: z.string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters")
    .trim()
    .toLowerCase(),
  org: z.string()
    .max(100, "Company name must be less than 100 characters")
    .trim()
    .optional(),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters")
    .trim(),
  company: z.string().optional(), // Honeypot field
});

export type ContactInput = z.infer<typeof ContactSchema>;