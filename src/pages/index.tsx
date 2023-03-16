import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import ChatPage from "./chat/page";
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
