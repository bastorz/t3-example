import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

type Props = {};

function WelcomePage({}: Props) {
  const router = useRouter();

  const startConversation = () => {
    router.push("/conversations/chat");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-20 bg-gray-700">
      <div className="text-7xl font-bold text-white">
        Welcome to the ChatBot Test
      </div>
      <button
        onClick={startConversation}
        className="flex gap-x-4 rounded-xl bg-black py-2 pl-6 pr-3 text-4xl font-bold text-white opacity-70 duration-500 hover:opacity-100"
      >
        Start a Conversation
        <ChevronDoubleRightIcon className="h-12 w-12" />
      </button>
    </div>
  );
}

export default WelcomePage;
