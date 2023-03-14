import React from "react";
import { ChatInput } from "./ChatInput";

type Props = {};

function ChatBot({}: Props) {
  return (
    <div className="justify flex min-h-screen">
      <div className="w-1/5">Apartado izq</div>
      <div className="flex w-4/5 flex-col bg-slate-500 pt-6">
        <div className="flex h-20 text-center">
          <p className="my-6 w-2/6 items-center justify-center"></p>
          <p className="my-6 w-2/6 items-center justify-center">My messages</p>
        </div>
        <div className="flex h-20 text-center">
          <p className="my-6 w-2/6 items-center justify-center"></p>
          <p className="my-6 w-2/6 items-center justify-center">Response</p>
        </div>
        <ChatInput />
      </div>
    </div>
  );
}

export default ChatBot;
