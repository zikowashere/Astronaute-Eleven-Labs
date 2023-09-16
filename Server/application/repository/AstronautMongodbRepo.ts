import { AstronauteRepository } from "../../astronaut/ports/AstronauteRepository";
import { Astronaut } from "../../astronaut/entities/Astronaut";
import astronaut from "../schema/astronautSchema";
import validation from "../utils/validation";

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
    const { email } = astronautToAdd;
    const validationAstronaut = validation(astronautToAdd);

    /** the body of query should respect the schema of astronaut object */
    if (validationAstronaut.success) {
      const astronautExist = await astronaut.findOne({ email });
      /** verification of the existance of the astronaut */
      if (!astronautExist) {
        return await astronaut.create(astronautToAdd);
      } else {
        /** the astronaut is already exist in database */
        return new Error("Astronaut already exist");
      }
    } else {
      return new Error(JSON.parse(validationAstronaut.error.message)[0]);
    }
  }

  async updateAstronaut(id: unknown, astronautUpdated: Astronaut) {
    const astronautToUpdated = await astronaut.findByIdAndUpdate(
      id,
      astronautUpdated,
      { new: true },
    );

    if (astronautToUpdated) {
      return astronautToUpdated;
    } else {
      return Promise.reject(new Error("astronaut not found"));
    }
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
