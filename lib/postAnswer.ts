import { api } from "~/utils/api";
import openai from "./chatgpt";

const postAnswer = async (resMessage: any) => {
  const submitAnswer = api.answer.submitAnswer.useMutation();
  submitAnswer.mutateAsync({
    conversationId: "clfa3lbwz0008un00zothutrk",
    answerText: resMessage.messages.content.content,
  });
  console.log(resMessage.messages.content.content, "respuesta");
};

export default postAnswer;
