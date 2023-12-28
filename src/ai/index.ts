import OpenAI from "openai";
import type { aiPropsType, aiResponse } from "@/libs/types";
/**
 * AI function that interacts with the OpenAI API to generate responses based on user prompts.
 * @param props - The input properties for the AI function.
 * @param props.prompt - The user prompt for generating the response.
 * @param props.instructions - Optional instructions for the AI model.
 * @returns The generated response from the AI model.
 */

export const ai = async (props: aiPropsType) => {
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
  await openai.beta.threads.runs.retrieve(thread.id, run.id);

  while (messages.data.length !== 2) {
    await delay(50);
    messages = await openai.beta.threads.messages.list(thread.id);
  }

  return messages.data[0]!.content as aiResponse;
};
