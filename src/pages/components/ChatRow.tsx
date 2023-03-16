import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { api } from "~/utils/api";

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const pathname = usePathname();
  // const conversationId = pathname;
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);
  const userId = session?.user.id as string;
  const conversationId = id;
  const deleteConversation = api.conversation.deleteConversation.useMutation();
  const conversations = api.conversation.getConversationById.useQuery({
    conversationId,
  });
  const getQuestionText = conversations.data?.id;
  const removeChat = () => {
    deleteConversation.mutateAsync({
      conversationId: conversationId,
    });
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
