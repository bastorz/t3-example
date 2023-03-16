"use client";

import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";
import Image from "next/image";

function WelcomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#181616] text-center">
      <Image src="/chat-logo.png" width={200} height={200} alt="chatbot logo" />
      <div className="flex space-x-2 pt-2">
        <button
          onClick={() => signIn()}
          className="animate-pulse text-3xl font-bold text-white"
        >
          Sign In to use ChatBot
        </button>
        <ChevronDoubleRightIcon className=" mt-[9px] h-6 w-6 animate-pulse cursor-pointer text-white" />
      </div>
    </div>
  );
}

export default WelcomePage;
