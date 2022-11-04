import http, { Server, IncomingMessage, ServerResponse } from "http";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    // node js routing
    let url: string | undefined = req.url;
    let method: string | undefined = req.method;
    let result: string = "";

    if (url === "/" && method === "GET") {
      result = "welcome! to get page";
    } else if (url === "/about" && method === "GET") {
      result = "welcome! it's about page";
    } else if (url === "/services" && method === "GET") {
      result = "welcome! it's services page";
    } else if (url === "/contact" && method === "GET") {
      result = "welcome! it's contact page";
    } else {
      result = "wrong page request received";
    }
    res.end(`result : ${result}`);
  }
);

server.listen(port, hostname, () => {
  console.log(`node js server is started at http://${hostname}:${port}`);
});
