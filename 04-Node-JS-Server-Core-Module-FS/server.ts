import http, { Server, IncomingMessage, ServerResponse } from "http"; // 내부로 설치된 모듈이다. core module
import fs from "fs";
import path, { dirname } from "path";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    // fs module
    fs.readFile(
      path.join(__dirname, "data", "notes.txt"), // 현재 경로 기준으로 불러올 파일의 경로 기재
      "utf-8", // 인코딩 방식
      (error, result) => {
        // 콜백 => 파라미터 2개
        if (error) {
          console.log(error);
        }

        fs.writeFile(
          path.join(__dirname, "data", "data.txt"), // 현재 경로 기준으로 저장할 파일의 경로 기재
          "ok lets go", // 입력할 내용
          "utf-8", // 인코딩 방식
          (error) => {
            // 콜백 => 파라미터 1개
            if (error) {
              console.log(error);
            }
            res.end("data is written to a file");
          }
        );
      }
    );
  }
);

server.listen(port, hostname, () => {
  console.log(`node js server is started at http://${hostname}:${port}`);
});
