"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";
import { api } from "~/utils/api";

export const ChatInput = () => {
  const [prompt, setPrompt] = useState("");
  const submitQuestion = api.message.submitQuestion.useMutation();
  const submitResponse = api.message.submitResponse.useMutation();
  const conversationIdFromPathname = usePathname();
  const conversationId = conversationIdFromPathname.substring(
    conversationIdFromPathname.lastIndexOf("/") + 1
  );

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const newMessages = [
      {
        role: "user",
        content: prompt,
      },
    ];

    submitQuestion.mutateAsync({
      conversationId: conversationId,
      questionText: prompt,
      role: "user",
    });

    const response = await fetch("/api/auth/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: newMessages,
      }),
    }).then((response) => response.json());

    const answer = response.answer.content.toString();

    submitResponse.mutateAsync({
      conversationId: conversationId,
      responseText: answer,
      role: "assistant",
    });
  };

  return (
    <div className="text-md flexrounded-md bg-gray-700/50 text-gray-400">
      <form onSubmit={sendMessage} action="" className="flex space-x-5 p-5">
        <input
          className="flex-1 bg-transparent focus:outline-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message here..."
        />
        <button
          type="submit"
          disabled={!prompt}
          className="rounded bg-[#11A37F] px-4 py-2 font-bold text-white duration-200 hover:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
    </div>
  );
};
