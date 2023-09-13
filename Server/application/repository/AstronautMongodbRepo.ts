import { AstronauteRepository } from "../../astronaut/ports/AstronauteRepository";
import { Astronaut } from "../../astronaut/entities/Astronaut";
import astronaut from "../schema/astronautSchema";

export class AstronautMongodbRepo implements AstronauteRepository {
  async getAstronauts() {
    try {
      const astronauts = await astronaut.find();
      return astronauts;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async addAstronaut(astronautToAdd: Astronaut) {
    try {
      const result = await astronaut.create(astronautToAdd);
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async updateAstronaut(id: unknown, astronautUpdated: Astronaut) {
    const astronautToUpdated = await astronaut.findByIdAndUpdate(
      id,
      astronautUpdated,
      { new: true },
    );
    if (astronautToUpdated) return astronautToUpdated;
    else return Promise.reject(new Error("astronaut not found"));
  }

  async deleteAstronaut(id: unknown) {
    try {
      const astronautToDelete = await astronaut.findById(id);
      if (astronautToDelete) await astronaut.deleteOne({ _id: id });
    } catch (error) {
      return;
    }
  }
}
