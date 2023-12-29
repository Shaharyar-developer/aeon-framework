import { cliType } from "@/libs/types";
import { render } from "ink";
import { TextArea } from "@/interface";
import { trpc } from "@/client/trpc-client";
const client = async ({}: cliType) => {
  const data = prompt("Enter a prompt for aeon: ")!;
  const ai = await trpc.aiResponse.query({ prompt: data });
  render(
    <>
      <TextArea data={ai} />
    </>
  );
};
export { client };
