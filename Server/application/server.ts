import express from "express";
import connectDB from "./data/connectDB";
import routerAstronaut from "./routes/astronaut";

connectDB();
const server = express();
server.use(express.json());
server.use("/api/astronaut", routerAstronaut);
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server connecting to ${PORT} ...`);
});
