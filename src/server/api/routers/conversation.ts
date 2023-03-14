import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const conversationRouter = createTRPCRouter({
  getConversation: publicProcedure
    .input(
      z.object({
        conversationId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.conversation.findUnique({
        where: {
          id: input.conversationId,
        },
        include: {
          answers: true,
          questions: true,
        },
      });
    }),
});
