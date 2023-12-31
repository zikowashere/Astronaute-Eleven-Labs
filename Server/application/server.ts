import express from "express";
import connectDB from "./data/connectDB";
import routerAstronaut from "./routes/astronaut";
import cors from "cors";

connectDB();
const server = express();
server.use(cors());
server.use(express.json());
server.use("/api/astronaut", routerAstronaut);
const PORT = 3000;

const app = server.listen(PORT, () => {
  console.log(`server running in ${PORT} ports`);
});

export default app;
