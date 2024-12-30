import express from "express";
import { approveBy, login, register, Upload } from "../controller/AuthController";
import { roleMiddleware } from "../middleware/RoleMiddleware";

const router=express.Router();


router.route("/register").post(roleMiddleware, register);
router.route("/login").post(roleMiddleware,login);
router.route("/upload").post(roleMiddleware(['RoleA']), Upload);
router.route("/upload").post(roleMiddleware(['RoleA']), Upload);
router.route("/approve/:id").post(roleMiddleware(['RoleB']), approveBy);




export default router;