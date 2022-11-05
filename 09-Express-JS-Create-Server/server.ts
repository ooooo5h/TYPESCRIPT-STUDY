import express, { response } from "express";

const app: express.Application = express();

const hostname: string = "127.0.0.1";
const port: number = 5000;

app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).json({message: 'welcome express'})
});

app.listen(port, hostname, () => {
    console.log('express server is started!!!')
})


// response.send() -> for html tag response
// response.sendFile() -> for html page response
// response.json() -> for json response
// response.download() -> for downloadable response