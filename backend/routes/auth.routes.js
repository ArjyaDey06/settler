import express from "express";
import verifyFirebaseToken from "../middleware/verifyFirebaseToken.js";
import { loginUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", verifyFirebaseToken, loginUser);

export default router;
