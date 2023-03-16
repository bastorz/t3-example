import { PlusIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { api } from "~/utils/api";

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();
  const userId = session?.user.id as string;
  const createConversation = api.conversation.createConversation.useMutation();

  const createNewConversation = async () => {
    createConversation.mutateAsync({
      userId,
    });

    const conversationId = (await createConversation.data?.id) as string;
  };

  return (
    <div
      onClick={createNewConversation}
      className="chatRow border border-gray-700"
    >
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
