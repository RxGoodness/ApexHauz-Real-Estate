import express from "express";
import { asyncHandler, checkEmail } from "../middleware/handlers";
import authController from "../controller/authentication"
const router = express.Router();
router
  .route("/signup")
  .post(asyncHandler(checkEmail), asyncHandler(authController.signup));

router.route("/signin").post(asyncHandler(authController.signin));

router
  .route("/updatepassword")
  .post(asyncHandler(authController.updatePassword));

export default router;
