import { z } from "zod";

export const conversationInput = z
  .string({
    required_error: "Describe your conversation",
  })
  .min(1)
  .max(1000);

export const todoInput = z
  .string({
    required_error: "Describe your conversation",
  })
  .min(1)
  .max(1000);
