import { cliType } from "@/libs/types";

import { trpc } from "@/client/trpc-client";
const client = async ({}: cliType) => {
  try {
    const data = prompt("Enter a prompt for aeon: ")!;
    const ai = await trpc.aiResponse.query({ prompt: data });
    console.log(ai[0]?.text.value);
  } catch (e) {
    console.error(e);
  }
};
export { client };
