import express from "express";
import { approveBy, login, register, Upload } from "../controller/AuthController.js";
import { roleMiddleware } from "../middleware/RoleMiddleware.js";

const router=express.Router();


router.route("/register").post( register);
router.route("/login").post(login);
router.route("/upload").post(roleMiddleware(['RoleA']), Upload);
router.route("/upload").post(roleMiddleware(['RoleA']), Upload);
router.route("/approve/:id").post(roleMiddleware(['RoleB']), approveBy);




export default router;