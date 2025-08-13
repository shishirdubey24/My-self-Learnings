import express from "express";
import { signupValidation } from "../Middlewares/AuthValidation.js";
import { signup } from "../Controllers/Auth.js";
const router = express.Router();

router.post("/login", (req, res) => {
  res.send("Login SUcess");
});

router.post("/Signup", signupValidation, signup);

export default router;
