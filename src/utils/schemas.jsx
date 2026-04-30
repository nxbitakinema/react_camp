import { z } from "zod";

export const campingSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  price: z.coerce.number(),
  description: z.string().min(10, "Description must be at least 10 characters"),
});