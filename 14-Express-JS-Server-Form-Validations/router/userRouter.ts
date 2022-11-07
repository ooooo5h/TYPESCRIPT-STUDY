import express from "express";
import { body, validationResult } from "express-validator";

const userRouter: express.Router = express.Router();

// logic
userRouter.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({ msg: "welcome to user router" });
});

/*
  fields : name, email, password
*/
userRouter.post(
  "/register",
  [
    body("name").not().isEmpty().withMessage("Name is Required"),
    body("email").isEmail().withMessage("Proper Email is Required"),
    body("password").isLength({ min: 5 }).withMessage("Min 5 Char Required"),
  ],
  async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { name, email, password } = req.body;

    try {
      res.status(200).json({
        user: { name, email, password },
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export default userRouter;
