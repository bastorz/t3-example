"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import React from "react";
import { api } from "~/utils/api";

function NewChat() {
  const { data: session } = useSession();
  const userId = session?.user.id as string;
  const createConversation = api.conversation.createConversation.useMutation();

  const createNewConversation = () => {
    createConversation
      .mutateAsync({
        userId,
      })
      .catch((err) => console.log(err, "error"));
  };

  return (
    <div
      onClick={() => createNewConversation()}
      className="chatRow border border-gray-700"
    >
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
