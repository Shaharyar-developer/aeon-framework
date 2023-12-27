import OpenAI from "openai";
import type { aiProps } from "@/libs/types";
/**
 * AI function that interacts with the OpenAI API to generate responses based on user prompts.
 * @param props - The input properties for the AI function.
 * @param props.prompt - The user prompt for generating the response.
 * @param props.instructions - Optional instructions for the AI model.
 * @returns The generated response from the AI model.
 */

export const ai = async (props: aiProps) => {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

  const assistant = await openai.beta.assistants.create({
    name: "test",
    instructions: "You are a helpful assistant named aeon, made by Shaharyar",
    model: "gpt-3.5-turbo",
  });
  const thread = await openai.beta.threads.create();
  await openai.beta.threads.messages.create(thread.id, {
    content: props.prompt,
    role: "user",
  });

  const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: assistant.id,
    instructions: props.instructions,
    model: "gpt-3.5-turbo",
  });
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  let messages: OpenAI.Beta.Threads.Messages.ThreadMessagesPage =
    await openai.beta.threads.messages.list(thread.id);
  let status = await openai.beta.threads.runs.retrieve(thread.id, run.id);

  while (status.status !== "completed") {
    await delay(250);
    status = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    messages = await openai.beta.threads.messages.list(thread.id);
  }

  return messages.data[0]?.content;
};
