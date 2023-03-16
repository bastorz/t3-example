import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const messageRouter = createTRPCRouter({
  submitQuestion: publicProcedure
    .input(
      z.object({
        conversationId: z.string(),
        questionText: z.string(),
        role: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.message.create({
        data: {
          conversationId: input.conversationId,
          text: input.questionText,
          role: input.role,
        },
      });
    }),
  submitResponse: publicProcedure
    .input(
      z.object({
        conversationId: z.string(),
        responseText: z.string(),
        role: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.message.create({
        data: {
          conversationId: input.conversationId,
          text: input.responseText,
          role: input.role,
        },
      });
    }),
  getMessage: publicProcedure
    .input(
      z.object({
        questionId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.message.findUnique({
        where: {
          id: input.questionId,
        },
      });
    }),
  getMessageByConversationId: publicProcedure
    .input(
      z.object({
        conversationId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.message.findUnique({
        where: {
          id: input.conversationId,
        },
      });
    }),
});
