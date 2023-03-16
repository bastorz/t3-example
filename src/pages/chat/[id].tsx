import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import ChatPage from "./page";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>ChatBot GPT</title>
        <meta name="description" content="ChatBot GPT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!session ? (
        <div>
          <Login />
        </div>
      ) : (
        <div className="flex">
          <div className="h-screen max-w-xs overflow-hidden bg-[#202123] pr-1 md:min-w-[20rem]">
            <Sidebar />
          </div>
          <ChatPage />
        </div>
      )}
    </>
  );
};

export default Home;
