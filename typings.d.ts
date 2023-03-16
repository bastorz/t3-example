interface NewMessage {
  messages: {
    role: string;
    content: string | ChatCompletionResponseMessage | undefined;
  };
}
