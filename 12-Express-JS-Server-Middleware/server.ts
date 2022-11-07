import express, { response } from "express";
import apiRouter from "./router/apiRouter";
import userRouter from "./router/userRouter";
import appLogger from "./middlewares/appLogger";

const app: express.Application = express();

const hostname: string = "127.0.0.1";
const port: number = 5000;

// configure middleware
app.use(appLogger);

// configure express to receive form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({ msg: "welcome express" });
});

// router configuration
app.use("/users", userRouter);
app.use("/api", apiRouter);

app.listen(port, hostname, () => {
  console.log("express server is started!!!");
});
