import { ComputerDesktopIcon, UserIcon } from "@heroicons/react/24/outline";
import type { Message } from "@prisma/client";
import React from "react";

type Props = {
  conversation: Message;
  conversationId: string;
};

function Conversation({ conversation }: Props) {
  const isUser = conversation.role === "user";

  return (
    <div className={`py-5 text-white ${isUser && "bg-[#434654]"}`}>
      <div className="mx-auto flex max-w-2xl space-x-5 px-10">
        {isUser ? (
          <UserIcon className="h-8 w-8 shrink-0" />
        ) : (
          <ComputerDesktopIcon className="h-8 w-8 shrink-0" />
        )}
        <p className="pt-1 text-sm">{conversation.text}</p>
      </div>
    </div>
  );
}

export default Conversation;
