import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import ChatPage from "./components/ChatPage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ChatBot GPT</title>
        <meta name="description" content="ChatBot GPT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-700">
        <ChatPage
          params={{
            id: "2:08",
          }}
        />
      </main>
    </>
  );
};

export default Home;
