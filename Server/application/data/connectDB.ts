import mongoose from "mongoose";
import config from "config";

export default function connectDB() {
  try {
    const configDB: string = config.get("connectionDB");
    mongoose.connect(configDB);
    console.log(`connected successfully to database ${configDB}...`);
  } catch (error) {
    console.log("connexion failed to database...", error);
  }
}
