import http, { Server, IncomingMessage, ServerResponse } from "http"; // 내부로 설치된 모듈이다. core module
import { MathUtil } from "./util/MathUtil";
import { StringUtil } from "./util/StringUtil";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    // String Util
    let customerName: string = "jeon eun hyung";
    let length: number = StringUtil.printLength(customerName);

    let channelName: string = "Uribrains Technologies";
    let result: string = StringUtil.printTriangle(channelName);

    // Math Util
    let theNumber: number = 15;
    result = MathUtil.printMathTable(theNumber);

    console.log("length", length);
    console.log(result);
    res.end("length & result");
  }
);

server.listen(port, hostname, () => {
  console.log(`node js server is started at http://${hostname}:${port}`);
});
