import AstronautImpl from "../../application/adapters/AstronautImpl";
import { AstronautDataSource } from "../../application/ports/AstronautDataSource";
import { Astronaut } from "../../domain/entities/Astronaut";
import astronaut from "../schema/astronautSchema";

export class AstronautRepo implements AstronautDataSource {
  async addAstronaut(astronautToAdd: Astronaut) {
    try {
      const result = await astronaut.create(astronautToAdd);
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getAstronauts() {
    try {
      const astronauts = await astronaut.find();
      return astronauts;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  deleteAstronaut(id: unknown): void {
    throw new Error("Method not implemented.");
  }

  updateAstronaute(id: unknown): Promise<Astronaut> {
    throw new Error("Method not implemented.");
  }
}
