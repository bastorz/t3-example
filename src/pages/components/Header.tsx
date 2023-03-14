import React from "react";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <div className="sticky top-0 flex justify-between bg-[#be83da] px-20 py-4">
      <Link href="/">
        <div className="flex space-x-2">
          <ChatBubbleLeftEllipsisIcon className="h-8 w-8" />
          <p className="pt-[1px] font-semibold">ChatBot Test</p>
        </div>
      </Link>
      <p className="text-white">Sign In</p>
    </div>
  );
}

export default Header;
