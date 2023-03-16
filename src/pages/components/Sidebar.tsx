import { useSession } from "next-auth/react";
import React from "react";
import { api } from "~/utils/api";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat";

type Props = {};

function Sidebar({}: Props) {
  const { data: session } = useSession();
  const userId = session?.user.id as string;

  const conversations = api.user.getUser.useQuery({
    userId,
  });

  return (
    <div className="flex h-screen flex-col p-2">
      <div className="flex-1">
        <NewChat />
        {conversations.data?.conversations.map((conversation) => (
          <ChatRow key={conversation.id} id={conversation.id} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
