import express from "express";

const apiRouter: express.Router = express.Router();

// logic
apiRouter.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: "welcome to api router" });
});

apiRouter.get("/test", (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: "welcome to api test router" });
});

export default apiRouter;
