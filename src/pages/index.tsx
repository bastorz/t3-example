import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import ChatPage from "./components/ChatPage";
import WelcomePage from "./components/WelcomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ChatBot GPT</title>
        <meta name="description" content="ChatBot GPT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WelcomePage />
    </>
  );
};

export default Home;
