import express from "express";
const route = express.Router();
import userSignUp from "../controller/userSignUp.js";
//import createUser from "../controllers/create.user.js";
// import loginUser from "../controllers/login.user.js";
// import { authenticate } from "../validation/authenticator.js";

route.post("/signup", userSignUp);

// route.route("/login").post(loginUser);

// route.route("/createresume").post(authenticate, createResume);

export default route;
