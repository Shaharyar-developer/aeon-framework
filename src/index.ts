import { gui } from "@/server/index";
import { cli } from "@/cli/index";

async function Main() {
  cli({});
  gui({});
}
Main();
