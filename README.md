# NodeJs-Passport-Authentication
A simple Node JS API for user authentication using Passport.

## Getting Started
1. Clone the repo:

       git clone https://github.com/Felistas/NodeJs-Passport-Authentication.git

2. Navigate to `NodeJs-Passport-Authentication` folder then run `npm install` to install the dependancies required to have the API up and running

3. Run `npm start` in order to run the API


# Using Passport for Authentication
-   passport.authenticate("facebook|github|twitter|linkedin", {
    successRedirect: "/", /*Success*/
    failureRedirect: "/fail" /*Fail*/
  })
       - Provide the Facebook AUthentication
       - If Successful go to the App else display fail page 

- dotenv Package
       - This will be used to ooad the Process ENviroment for the Current Node.js app in its current context
       - The Project MUST have '.env' file to store the ENvironment Variable
              - To Access the ENv. Variables use the following
                     - process.env.[ENVIRONMENT-VARIABLE-NAME]    
- concurrently
       - The Package that will be sued to run multiple '.js' files from the current Node.js app


         /*"start": " concurrently \"mongod \" \"nodemon --exec babel-node app/index.js\"" */                        


