import express from "express";
import ConnectDb from "../Models/Db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import AuthRouter from "../Routes/AuthRouter.js";
const app = express();
ConnectDb();
app.get("/", (req, res) => {
  res.send("Hellow World!!");
});
const corsOption = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:8080",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5173",
  ],
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", AuthRouter);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
