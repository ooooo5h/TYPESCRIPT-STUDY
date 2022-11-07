import express from "express";

const apiRouter: express.Router = express.Router();

apiRouter.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({ msg: "welcome to api router" });
});

apiRouter.get("/test", (req: express.Request, res: express.Response) => {
  res.status(200).json({ msg: "welcome to api test router" });
});

export default apiRouter;
