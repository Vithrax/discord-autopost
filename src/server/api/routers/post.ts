import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { PostCreateValidator } from "@/lib/validators/PostCreate";

export const postRouter = createTRPCRouter({
  create: protectedProcedure
    .input(PostCreateValidator)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          date: input.date,
          name: input.name,
          text: input.text,
          userId: ctx.session.user.id,
        },
      });
    }),
  getEvents: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.post.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
});
