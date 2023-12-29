import { aiPropsType } from "@/libs/types";
import { openai } from "./openai";
let ai: (props: aiPropsType) => Promise<string | void> = async () => {
  return;
};

if (process.env.MODE === "gpt") {
  ai = openai;
}
export { ai };
