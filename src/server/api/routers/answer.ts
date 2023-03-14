import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const answerRouter = createTRPCRouter({
  submitAnswer: publicProcedure
    .input(
      z.object({
        answerText: z.string(),
        conversationId: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      ctx.prisma.answer.create({
        data: {
          conversationId: input.conversationId,
          text: input.answerText,
        },
      });
    }),
});
