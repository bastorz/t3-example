import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";
import Image from "next/image";

type Props = {};

function WelcomePage({}: Props) {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#0c3b30] text-center">
      <Image
        src="/chatbot-logo.png"
        width={300}
        height={300}
        alt="chatbot logo"
      />
      <div className="flex space-x-2 pt-10">
        <button
          onClick={() => signIn()}
          className="animate-pulse text-3xl font-bold text-white"
        >
          Sign In to use ChatBot
        </button>
        <ChevronDoubleRightIcon className=" mt-[9px] h-6 w-6 animate-pulse text-white" />
      </div>
    </div>
  );
}

export default WelcomePage;
