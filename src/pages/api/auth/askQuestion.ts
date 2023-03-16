import query from "lib/queryApi";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { model, messages } = req.body;
  if (!messages) {
    res.status(400).json({ answer: "Please provide a prompt!" });
    return;
  }

  // ChatGPT Query

  const response = await query(model, messages).then();

  const resMessage: NewMessage = {
    messages: {
      role: "assistant",
      content: response || "ChatGPT was unable to find an answer for that!",
    },
  };

  res.status(200).json({ answer: resMessage.messages.content });
}
