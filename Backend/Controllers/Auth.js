import bcrypt from "bcrypt";
import UserModel from "../Models/User.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "User is SignedIn", success: false });
    }
    const userModel = new UserModel({ name, email, password });
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    res.status(201).json({ message: "Done", success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal Error", success: false });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(403).json({
        message: "Auth Faield email or password is wrong",
        success: false,
      });
    }
    const isPasswordEql = await bcrypt.compare(password, user.password);
    if (!isPasswordEql) {
      return res.status(403).json({
        message: "Auth Faield email or password is wrong",
        success: false,
      });
    }

    const jwToken = jwt.sign(
      { email: user.email, id: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "24hr" },
    );

    res
      .cookie("token", jwToken, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "LoggedIn",
        success: true,
        email,
        name: user.name,
      });
  } catch (error) {
    res.status(500).json({
      message: "Internal Error",
      success: false,
    });
  }
};
