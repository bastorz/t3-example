import React from "react";
import Chat from "~/pages/components/Chat";
import { ChatInput } from "~/pages/components/ChatInput";

function ChatPage() {
  return (
    <div className="flex h-screen w-screen flex-col bg-[#343541]">
      <Chat />
      <ChatInput />
    </div>
  );
}

export default ChatPage;
