import express, { Request, Response } from "express";
import astronautController from "../../application/controllers/astronautContoller";
import { Astronaut } from "../../domain/entities/Astronaut";
import { AstronautRepo } from "../repository/AstronautRepo";

const routerAstronaut = express.Router();
const astronautDS = new AstronautRepo();
const astronautsController = astronautController(astronautDS);

routerAstronaut.post("/", async (req: Request, res: Response) => {
  const astronaut: Astronaut = req.body;
  try {
    const result = await astronautsController.addAstronaut(astronaut);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: "astronaut has not been added" });
  }
});

export default routerAstronaut;
