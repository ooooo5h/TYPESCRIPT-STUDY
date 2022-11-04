import http, { Server, IncomingMessage, ServerResponse } from "http";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    // URL & POST
    if (req.url === "/login" && req.method === "POST") {
      try {
        let body: any = "";
        req
          .on("data", (chunk) => {
            body += chunk;
          })
          .on("end", () => {
            let formData = JSON.parse(body);
            if (formData.name === 'ooooo5h' && formData.password === 'abcd1234') {
              res.end(`login success`);
            } else {
              res.end(`who are you`);
            }
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
