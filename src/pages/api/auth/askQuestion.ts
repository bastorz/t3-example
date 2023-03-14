import query from "lib/queryApi";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  answer: string | any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { model, messages } = req.body;
  console.log(model, messages, "model, messages");
  if (!messages) {
    res.status(400).json({ answer: "Please provide a prompt!" });
    return;
  }

  // ChatGPT Query

  const response = await query(model, messages);

  const resMessage: NewMessage = {
    messages: {
      role: "assistant",
      content: response || "ChatGPT was unable to find an answer for that!",
    },
  };

  // Post message to database ?

  res.status(200).json({ answer: resMessage.messages.content });
  console.log(resMessage.messages.content, "response");
}
