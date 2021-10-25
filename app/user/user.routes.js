import express from "express";
import passport from "passport";
 import userController from "./user.controller";


const userRouter = express.Router();

// The URL for Application to access the Facebook LOgin
userRouter.get("/auth/facebook", passport.authenticate("facebook"));

// tyhe URL for Callback to after redirecting to the 
// Success or Fail
userRouter.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/fail"
  })
);

userRouter.get("/fail", (req, res) => {
  res.send("Failed attempt");
});

userRouter.get("/", (req, res) => {
  res.send("Success");
});
export default userRouter;
