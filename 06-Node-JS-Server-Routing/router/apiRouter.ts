import http, { IncomingMessage, ServerResponse } from "http";

export class ApiRouter {
  public static mapRoutes(request: IncomingMessage, response: ServerResponse) {
    let url: string | undefined = request.url;
    let method: string | undefined = request.method;
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
    response.end(`result : ${result}`);
  }
}
