import express from "express";
import { ai } from "@/ai/index";
import { aiProps, aiResponse } from "@/libs/types";
const server = () => {
  const app = express();
  app.use(express.json());

  app.post("/api/ai", async (req, res) => {
    const data = req.body as aiProps;
    try {
      const response = (await ai(data)) as aiResponse;
      res.json(response);
    } catch (error) {
      res.status(500).send(error);
    }
    console.log(data);
  });

  app.listen(3000, () => {});
};
export { server };
