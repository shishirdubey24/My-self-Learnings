import express from "express";
import {
  loginValidation,
  signupValidation,
} from "../Middlewares/AuthValidation.js";
import { Login, signup } from "../Controllers/Auth.js";
import { verifyToken } from "../Middlewares/JwtValidation.js";
const router = express.Router();

router.post("/signup", signupValidation, signup);
router.post("/login", loginValidation, Login);
router.get("/user", verifyToken, (req, res) => {
  res.json({
    success: true,
    user: { id: req.user.id, email: req.user.email, name: req.user.name },
  });
});
export default router;
