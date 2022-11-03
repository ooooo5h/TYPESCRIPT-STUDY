import http, { Server, IncomingMessage, ServerResponse } from "http"; // 내부로 설치된 모듈이다. core module
import os from "os";   // os모듈 : OS의 정보를 가져올 수 있는 모듈. 

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    // OS Module
    let osData = {
      totalMemory: os.totalmem(),   // 시스템 총 메모리
      freeMemory: os.freemem(),     // 시스템 가용 메모리
      homedir: os.homedir(),    
      computerName: os.hostname(),  // 호스트이름
    };

    res.end(`${JSON.stringify(osData)}`);   // JSON.stringfy() : 자바스크립트 객체를 JSON 문자열로 변환
  }
);

server.listen(port, hostname, () => {
  console.log(`node js server is started at http://${hostname}:${port}`);
});
