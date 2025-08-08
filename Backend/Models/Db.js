// Db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log("MONGO_URI from env:", process.env.MONGO_URL);

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default ConnectDb;
