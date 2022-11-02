import http, { Server, IncomingMessage, ServerResponse } from "http";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end('안녕하세요!');
  }
);

server.listen(port, hostname, () => {
    console.log(`node js server is started at http://${hostname}:${port}`)
})