import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const conversationRouter = createTRPCRouter({
  getConversationById: publicProcedure
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
          message: true,
        },
      });
    }),
  getConversationByUserId: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.conversation.findUnique({
        where: {
          id: input.userId,
        },
      });
    }),
  createConversation: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.conversation.create({
        data: { userId: input.userId },
      });
    }),
  deleteConversation: publicProcedure
    .input(
      z.object({
        conversationId: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.conversation.delete({
        where: {
          id: input.conversationId,
        },
      });
    }),
});
