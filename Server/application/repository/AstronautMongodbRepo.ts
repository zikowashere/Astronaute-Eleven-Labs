import { AstronauteRepository } from "../../astronaut/ports/AstronauteRepository";
import { Astronaut } from "../../astronaut/entities/Astronaut";
import astronaut from "../schema/astronautSchema";
import validation from "../utils/validation";
import mongoose from "mongoose";

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
    const validationAstronaut = validation(astronautUpdated);

    if (validationAstronaut.success) {
      const astronautToUpdated = await astronaut.findByIdAndUpdate(
        id,
        astronautUpdated,
        { new: true },
      );

      if (astronautToUpdated) {
        return astronautToUpdated;
      } else {
        return new Error("astronaut not found");
      }
    } else {
      return new Error("update object of astronaut is not valid");
    }
  }

  async deleteAstronaut(id: string) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return Promise.reject({ status: 500, message: "ID invalide." });
      }
      const astronautToDelete = await astronaut.findById(id);
      if (astronautToDelete) {
        await astronaut.deleteOne({ _id: id });
      } else {
        return Promise.reject({
          status: 404,
          message: "L'astronaute n'existe pas.",
        });
      }
    } catch (error) {
      return Promise.reject({
        status: 500,
        message: "Erreur interne du serveur.",
      });
    }
  }
}
