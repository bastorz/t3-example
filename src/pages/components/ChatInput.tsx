import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { FormEvent, useState } from "react";
import { api } from "~/utils/api";

export const ChatInput = () => {
  const [prompt, setPrompt] = useState("");
  const submitQuestion = api.question.submitQuestion.useMutation();
  const submitAnswer = api.answer.submitAnswer.useMutation();

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
      conversationId: "clfa6r5pv007aunu4l94lgbfb",
      questionText: prompt,
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

    submitAnswer.mutateAsync({
      conversationId: "clfa6r5pv007aunu4l94lgbfb",
      answerText: answer,
    });
  };

  return (
    <div className="text-md flex rounded-lg bg-gray-100">
      <form onSubmit={sendMessage} action="" className="flex-1 space-x-5 p-5">
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
