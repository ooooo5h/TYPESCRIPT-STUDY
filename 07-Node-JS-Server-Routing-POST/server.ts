import http, { Server, IncomingMessage, ServerResponse } from "http";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    // URL & POST
    if (req.url === "/user" && req.method === "POST") {
      try {
        let body: any = "";
        req
          .on("data", (chunk) => {
            body += chunk;
          })
          .on("end", () => {
            let formData = JSON.parse(body);
            res.end(`${JSON.stringify(formData)}`);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
);

server.listen(port, hostname, () => {
  console.log(`node js server is started at http://${hostname}:${port}`);
});
