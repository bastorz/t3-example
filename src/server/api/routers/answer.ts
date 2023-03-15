import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const answerRouter = createTRPCRouter({
  submitAnswer: publicProcedure
    .input(
      z.object({
        conversationId: z.string(),
        answerText: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.answer.create({
        data: {
          conversationId: input.conversationId,
          text: input.answerText,
        },
      });
    }),
  getAnswer: publicProcedure
    .input(
      z.object({
        answerId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.answer.findUnique({
        where: {
          id: input.answerId,
        },
      });
    }),
});
