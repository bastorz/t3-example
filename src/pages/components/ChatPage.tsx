import React from "react";
import Chat from "./Chat";
import { ChatInput } from "./ChatInput";

function ChatPage(props: any) {
  const conversationId = props.conversationId;

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div>
        <Chat />
      </div>
      <div className="flex h-full items-end justify-center pb-10">
        <ChatInput />
      </div>
    </div>
  );
}

export default ChatPage;
