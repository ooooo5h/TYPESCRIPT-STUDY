import express from "express";

const userRouter: express.Router = express.Router();

// logic
userRouter.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: "welcome to user router" });
});

userRouter.get("/test", (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: "welcome to user test router" });
});

export default userRouter;
