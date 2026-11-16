import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { greet } from "./greeting.js";

/** Escapa texto para incrustarlo en HTML sin riesgo de inyección. */
function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderPage(greeting: string): string {
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Hola, mundo</title>
    <style>
      body {
        font-family: system-ui, sans-serif;
        max-width: 32rem;
        margin: 4rem auto;
        padding: 0 1rem;
      }
    </style>
  </head>
  <body>
    <h1>${escapeHtml(greeting)}</h1>
    <form method="get" action="/">
      <label>
        Tu nombre:
        <input type="text" name="nombre" autocomplete="off" />
      </label>
      <button type="submit">Saludar</button>
    </form>
  </body>
</html>
`;
}

function handleRequest(request: IncomingMessage, response: ServerResponse): void {
  const url = new URL(request.url ?? "/", "http://localhost");
  const nombre = url.searchParams.get("nombre") ?? undefined;
  const greeting = greet(nombre);
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  response.end(renderPage(greeting));
}

export function createAppServer() {
  return createServer(handleRequest);
}
