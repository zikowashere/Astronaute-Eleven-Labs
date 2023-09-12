import { Astronaut } from "../../domain/entities/Astronaut";
import IAstronaut from "../../domain/ports/IAstronaut";
import { AstronautDataSource } from "../ports/AstronautDataSource";

export default class AstronautImpl implements IAstronaut {
  astronautDataSource: AstronautDataSource;

  constructor(astronautDataSource: AstronautDataSource) {
    this.astronautDataSource = astronautDataSource;
  }

  async addAstronaut(astronaute: Astronaut) {
    return this.astronautDataSource.addAstronaut(astronaute);
  }
  async getAstronauts() {
    return this.astronautDataSource.getAstronauts();
  }
  async deleteAstronaut(id: unknown) {
    return await this.astronautDataSource.deleteAstronaut(id);
  }
  async updateAstronaute(id: unknown) {
    return await this.astronautDataSource.updateAstronaute(id);
  }
}
