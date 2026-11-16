import { createAppServer } from "./server.js";

const port = Number(process.env.PORT ?? 3000);
const server = createAppServer();

server.listen(port, () => {
  console.log(`Hola, mundo — http://localhost:${port}`);
});
