import { cli } from "@/cli/index";
import { server } from "@/server/index";
if (process.env.OPENAI_KEY === undefined) {
  console.error("OPENAI_KEY environment variable is not set.");
  console.error(
    "Rename the .env.example file to .env and add your OpenAI key which can be recieved from https://www.platform.openai.com."
  );
} else {
  async function Main() {
    server();
    cli({});
  }
  Main();
}
