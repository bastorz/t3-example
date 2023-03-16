import type { ChatCompletionRequestMessage } from "openai";
import openai from "./chatgpt";

const query = async (
  model: string,
  messages: ChatCompletionRequestMessage[]
) => {
  const res = await openai
    .createChatCompletion({
      model,
      messages,
      temperature: 1,
    })
    .then((res) => res.data.choices[0]?.message)
    .catch(
      (err) =>
        `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
    );

  return res;
};

export default query;
