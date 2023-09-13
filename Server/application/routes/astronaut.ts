import express, { Request, Response } from "express";
import astronautController from "../../astronaut/controllers/astronautContoller";
import { Astronaut } from "../../astronaut/entities/Astronaut";
import { AstronautMongodbRepo } from "../repository/AstronautMongodbRepo";

const routerAstronaut = express.Router();
const astronautMongodbRepo = new AstronautMongodbRepo();
const astronautsController = astronautController(astronautMongodbRepo);

routerAstronaut.get("/", async (req: Request, res: Response) => {
  try {
    const result = await astronautsController.getAstronauts();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
});

routerAstronaut.post("/", async (req: Request, res: Response) => {
  const astronaut: Astronaut = req.body;
  try {
    const result = await astronautsController.addAstronaut(astronaut);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

routerAstronaut.put("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const astronautUpdated = req.body;
  try {
    const astronautToUpdated = await astronautsController.updateAstronaut(
      id,
      astronautUpdated,
    );
    return res.status(200).json(astronautToUpdated);
  } catch (error) {
    return res.status(500).json(error);
  }
});

routerAstronaut.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await astronautsController.deleteAstronaut(id);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json(error);
  }
});

export default routerAstronaut;
