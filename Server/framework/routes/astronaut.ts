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

routerAstronaut.get("/", async (req: Request, res: Response) => {
  try {
    const result = await astronautsController.getAstronauts();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: "list of astronauts is empty " });
  }
});

routerAstronaut.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await astronautsController.deleteAstronaut(id);
    res.status(200).json({ message: `astronaut ${id} is deleted ` });
  } catch (error) {
    return res.status(400).json({ message: "astronaut wasn't deleted " });
  }
});

export default routerAstronaut;
