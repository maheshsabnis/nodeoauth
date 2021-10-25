import express from "express";
import { json } from "body-parser";
import passport from "passport";

// import { connect } from "./utils/db";
import userRouter from "./user/user.routes";

const app = express();
const port = 5003;
// COnfiguring the PAssport Middleware in Express
// The Express will always use the PAssort Strategy 
// (In Oure Case Facebook) to prvode an authentication 
// to the application

app.use(passport.initialize());

app.use(json());
app.use("/", userRouter);

app.listen(port, async () => {
 // await connect();
  console.log(`Server listening on ${port}`);
});
