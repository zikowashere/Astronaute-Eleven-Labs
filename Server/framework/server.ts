import express from "express";
import connectDB from "./data/connectDB";

connectDB();
const server = express();

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server connecting to ${PORT} ...`);
});
