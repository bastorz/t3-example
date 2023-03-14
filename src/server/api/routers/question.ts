import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const questionRouter = createTRPCRouter({
  submitQuestion: publicProcedure
    .input(
      z.object({
        conversationId: z.string(),
        questionText: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.question.create({
        data: {
          conversationId: input.conversationId,
          text: input.questionText,
        },
      });
    }),
  getQuestion: publicProcedure
    .input(
      z.object({
        questionId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.question.findUnique({
        where: {
          id: input.questionId,
        },
      });
    }),
});
