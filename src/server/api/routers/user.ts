import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  getUser: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique({
        where: {
          id: input.userId,
        },
        include: {
          conversations: true,
        },
      });
    }),
  createUser: publicProcedure.mutation(({ ctx }) => {
    return ctx.prisma.user.create({
      data: {},
    });
  }),
});
