import React from "react";
import Chat from "~/components/Chat";
import { ChatInput } from "~/components/ChatInput";

function ChatPage() {
  return (
    <div className="flex h-screen w-screen flex-col bg-[#343541]">
      <Chat />
      <ChatInput />
    </div>
  );
}

export default ChatPage;
