import mongoose from "mongoose";
import config from "config";

export default function connectDB() {
  try {
    mongoose.connect(config.get("connectionDB"));
    console.log("connected successfully to database...");
  } catch (error) {
    console.log("connexion failed to database...", error);
  }
}
