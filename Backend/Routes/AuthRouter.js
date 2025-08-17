import express from "express";
import {
  loginValidation,
  signupValidation,
} from "../Middlewares/AuthValidation.js";
import { Login, signup } from "../Controllers/Auth.js";
const router = express.Router();

router.post("/Signup", signupValidation, signup);
router.post("/Login", loginValidation, Login);

export default router;
