import type OpenAI from "openai";

declare global {
  // add global variable types here here
}

export type gui = {};
export type cli = {};
export type aiProps = {
  prompt: string;
  instructions?: string;
};
export type aiResponse = OpenAI.Beta.Threads.Messages.MessageContentText[];
