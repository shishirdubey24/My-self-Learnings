import express from "express";
import ConnectDb from "../Models/Db.js";
import bodyParser from "body-parser";
import cors from "cors";
import AuthRouter from "../Routes/AuthRouter.js";
const app = express();

ConnectDb();
app.get("/", (req, res) => {
  res.send("Hellow World!!");
});

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", AuthRouter);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
