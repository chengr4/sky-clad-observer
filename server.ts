import { Application, Router } from "https://deno.land/x/oak/mod.ts";

async function startServer() {
  


const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });

}

