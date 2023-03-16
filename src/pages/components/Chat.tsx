"use client";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";
import { api } from "~/utils/api";
import Conversation from "./Conversation";

function Chat() {
  const conversationIdFromPathname = usePathname();
  const conversationId = conversationIdFromPathname.substring(
    conversationIdFromPathname.lastIndexOf("/") + 1
  );

  const conversations = api.conversation.getConversationById.useQuery({
    conversationId,
  });

  return (
    <div className="flex-1">
      {conversations?.data?.message.map((conversation) => (
        <Conversation
          key={conversation.id}
          conversation={conversation}
          conversationId={conversationId}
        />
      ))}
    </div>
  );
}

export default Chat;
