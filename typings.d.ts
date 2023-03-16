interface NewMessage {
  messages: {
    role: string;
    content: string | ChatCompletionResponseMessage | undefined;
  };
}

interface Conversation {
  id: String;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  userId: String;
  message: Message[];
}
