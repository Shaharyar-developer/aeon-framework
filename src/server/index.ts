import { publicProcedure, router } from "@/server/trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

import { ai } from "@/ai/index";
import { aiResponse, aiProps } from "@/libs/types";

const appRouter = router({
  aiResponse: publicProcedure.input(aiProps).query(async (opts) => {
    const { input } = opts;

    const response = (await ai(input)) as aiResponse;
    return response;
  }),
});
const server = createHTTPServer({
  router: appRouter,
});
export type AppRouter = typeof appRouter;
export const Server = () => server.listen(3000);
