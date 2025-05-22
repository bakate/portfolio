import { z } from "zod";

// Reusable schema for name fields
const stringFieldSchema = (minLength = 2, maxLength = 50) =>
  z
    .string()
    .nonempty() // Handles 'required' aspect
    .min(minLength) // Min length
    .max(maxLength); // Max length

export const contactFormSchema = z.object({
  firstName: stringFieldSchema(),
  lastName: stringFieldSchema(),
  email: z.string().nonempty().email(), // Valid email format
  message: stringFieldSchema(10, 500),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
