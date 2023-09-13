import { Astronaut } from "../entities/Astronaut";
import { AstronauteRepository } from "../ports/AstronauteRepository";

export default class UpdateAstronaut {
  AstronauteRepository: AstronauteRepository;

  constructor(astronauteRepository: AstronauteRepository) {
    this.AstronauteRepository = astronauteRepository;
  }

  async updateAstronaut(id: unknown, astronaut: Astronaut) {
    return await this.AstronauteRepository.updateAstronaut(id, astronaut);
  }
}
