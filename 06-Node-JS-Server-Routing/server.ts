import http, { Server, IncomingMessage, ServerResponse } from "http";
import { ApiRouter } from "./router/apiRouter";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    // node js router
    ApiRouter.mapRoutes(req, res);
  }
);

server.listen(port, hostname, () => {
  console.log(`node js server is started at http://${hostname}:${port}`);
});
