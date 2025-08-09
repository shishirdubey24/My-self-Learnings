import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  res.send("Login SUcess");
});

router.post("/Signup", (req, res) => {
  res.send("SignUp done!");
});
export default router;
