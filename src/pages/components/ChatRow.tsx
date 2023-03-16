"use client";

import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { api } from "~/utils/api";

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const conversationId = id;
  const deleteConversation = api.conversation.deleteConversation.useMutation();
  const conversations = api.conversation.getConversationById.useQuery({
    conversationId,
  });
  const getQuestionText = conversations.data?.id;
  const removeChat = () => {
    deleteConversation
      .mutateAsync({
        conversationId: conversationId,
      })
      .catch((err) => console.log(err.message, "delete conversation error"));
  };
  return (
    <Link href={`/chat/${conversationId}`} className={`chatRow justify-center`}>
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="hidden flex-1 truncate md:inline-flex">
        {getQuestionText || "New Chat"}
      </p>
      <TrashIcon
        onClick={removeChat}
        className="h-5 w-5 text-gray-700 hover:text-red-700"
      />
    </Link>
  );
}

export default ChatRow;
