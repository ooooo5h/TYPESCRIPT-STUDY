import express from "express";

const userRouter: express.Router = express.Router();

/*
    @usage : test url
    @url : http://127.0.0.1:5000/users/
    @method : get
    @fields : no-fields
    @access : PUBLIC
*/
userRouter.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({ msg: "welcome to user router" });
});

/*
    @usage : to check the form data
    @url : http://127.0.0.1:5000/users/login
    @method : post
    @fields : name, password
    @access : PUBLIC
*/
userRouter.post("/login", (req: express.Request, res: express.Response) => {
  let formData = req.body; // to receive form data from client
  res.status(200).json({ msg: "form data is received", formData: formData });
});

export default userRouter;
