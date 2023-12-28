import { cli } from "@/libs/types";
import { aiProps, aiResponse } from "@/libs/types";
const cli = async ({}: cli) => {
  try {
    const data = prompt("Enter a prompt for aeon: ")!;
    const res = await fetch("http://localhost:3000/api/ai", {
      method: "POST",
      body: JSON.stringify({ prompt: data } as aiProps),
      headers: { "Content-Type": "application/json" },
    });
    const ai = (await res.json()) as aiResponse;
    console.log(ai[0]?.text.value);
  } catch (e) {
    console.error(e);
  }
};
export { cli };
