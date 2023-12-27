import { gui } from "@/libs/types";
import express from "express";
const gui = async ({}: gui) => {
  const app = express();
  const port = 3000;
  app.get("/", (req, res) => {
    res.render("Hello World!");
  });
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};
export { gui };
