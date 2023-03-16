import { signOut } from "next-auth/react";
import React from "react";

type Props = {};

function Logout({}: Props) {
  return (
    <>
      <button
        onClick={() => signOut()}
        className="h-[100px] bg-black text-xl text-white"
      >
        Log Out
      </button>
    </>
  );
}

export default Logout;
