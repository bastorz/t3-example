import { ComputerDesktopIcon, UserIcon } from "@heroicons/react/24/outline";
import type { Message } from "@prisma/client";
import React from "react";

type Props = {
  conversation: Message;
  conversationId: string;
};

// Preguntar a fofer cual seria el type para el array de Questions

function Conversation({ conversation }: Props) {
  const messageRole: string = conversation.role;
  const isBot: boolean = messageRole === "assistant";

  return (
    <div className={`py-5 text-white ${isBot && "bg-[#434654]"}`}>
      <div className="mx-auto flex max-w-2xl space-x-5 px-10">
        {!isBot ? (
          <UserIcon className="h-12 w-12 shrink-0" />
        ) : (
          <ComputerDesktopIcon className="h-12 w-12 shrink-0" />
        )}
        <p className="pt-1 text-sm">{conversation.text}</p>
      </div>
    </div>
  );
}

export default Conversation;
