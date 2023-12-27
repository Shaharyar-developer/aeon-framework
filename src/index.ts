import { cli } from "@/cli/index";
import { ai } from "@/ai/index";
const prompt = Bun.argv.slice(2).join(" ");
if (prompt !== "") {
  if (process.env.OPENAI_KEY === undefined) {
    console.error("OPENAI_KEY environment variable is not set.");
    console.error(
      "Rename the .env.example file to .env and add your OpenAI key which can be recieved from https://www.platform.openai.com."
    );
  } else {
    async function Main() {
      cli({});
      const data = await ai({ prompt });
      console.log(data);
    }
    Main();
  }
} else {
  console.log("Please enter a prompt.");
  console.log("Example: bun run dev 'Hello There'");
}
