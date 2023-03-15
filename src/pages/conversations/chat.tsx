import { type NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { api } from "~/utils/api";
import ChatPage from "../components/ChatPage";

const Home: NextPage = () => {
  // const createConversation = api.conversation.createConversation.useMutation();

  // const startConversation = () => {
  //   createConversation.mutateAsync();
  // };

  // useEffect(() => {
  //   startConversation();
  // }, []);

  // const conversationId = createConversation.data?.id as string;

  // console.log(conversationId, "esta es la ID");

  return (
    <>
      <main className="bg-gray-700">
        <ChatPage />
      </main>
    </>
  );
};

export default Home;
