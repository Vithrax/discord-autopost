import z from "zod";

export const PostCreateValidator = z.object({
  text: z.string().min(10),
  name: z.string().min(5),
  date: z.date(),
});
