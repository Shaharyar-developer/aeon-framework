// import type OpenAI from "openai";
import { z } from "zod";
declare global {
  // add global variable types here here
}

export const gui = z.object({});

export const cli = z.object({});

export const aiProps = z.object({
  prompt: z.string(),
  instructions: z.string().optional(),
});
export type aiResponse = string;
export type guiType = z.infer<typeof gui>;
export type cliType = z.infer<typeof cli>;
export type aiPropsType = z.infer<typeof aiProps>;
