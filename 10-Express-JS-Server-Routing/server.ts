import express, { response } from "express";
import apiRouter from "./router/apiRouter";
import userRouter from "./router/userRouter";

const app: express.Application = express();

const hostname: string = "127.0.0.1";
const port: number = 5000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: "welcome express" });
});

// router configuration
app.use("/api", apiRouter);
app.use("/users", userRouter);

app.listen(port, hostname, () => {
  console.log("express server is started!!!");
});
