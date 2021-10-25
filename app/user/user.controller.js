import passport from "passport";
import dotenv from "dotenv";
import strategy from "passport-facebook";

import userModel from "../user/user.model";

// STrategy of Identyty Provider login
// 1. Redirect to Favebook Login Page
// 2. FOr the CUrrent User, the Facebook's settings will be used for Providing the Access
// e.g. the End-USer MUST complete the 2-Factor AUth for Gaining the Access of the Application

const FacebookStrategy = strategy.Strategy;
// REad .env file for All Environment Variables
dotenv.config();
// Take the Login User and serialize its info9
passport.serializeUser(function(user, done) {
  done(null, user);
});
// Get the User Object with Deserialization 
// like": EMail, Profile Name, etc
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
// The Papport Fabebook STrategy that wiull guide the 
// Node.js and Express that all routes will be monitored 
// using passport-facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      profileFields: ["email", "name"]
    },
    function(accessToken, refreshToken, profile, done) {
      const { email, first_name, last_name } = profile._json;
      const userData = {
        email,
        firstName: first_name,
        lastName: last_name
      };
    //  new userModel(userData).save();
      done(null, profile);
    }
  )
);