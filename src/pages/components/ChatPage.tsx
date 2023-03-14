import React from "react";
import Chat from "./Chat";
import { ChatInput } from "./ChatInput";

type Props = {
  params: {
    id: string;
  };
};

function ChatPage({ params: { id } }: Props) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div>
        {" "}
        <Chat />
      </div>
      <div className="flex h-full items-end justify-center pb-10">
        {" "}
        <ChatInput newMessages={[]} />
      </div>
    </div>
  );
}

export default ChatPage;
