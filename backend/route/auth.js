import express from "express";
import { approveBy, login, register, Upload } from "../controller/AuthController.js";
import { roleMiddleware } from "../middleware/RoleMiddleware.js";
import { authenticate } from "../middleware/authenticate.js";

const router=express.Router();


router.route("/register").post( register);
router.route("/login").post(login);
router.route("/upload").post(authenticate, roleMiddleware(['RoleA']), Upload);
router.route("/approve/:id").post(authenticate,roleMiddleware(['RoleB']), approveBy);




export default router;