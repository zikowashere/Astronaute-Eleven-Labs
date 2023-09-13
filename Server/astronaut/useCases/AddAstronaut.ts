import { Astronaut } from "../entities/Astronaut";
import { AstronauteRepository } from "../ports/AstronauteRepository";

export default class AddAstronaut {
  AstronauteRepository: AstronauteRepository;

  constructor(astronauteRepository: AstronauteRepository) {
    this.AstronauteRepository = astronauteRepository;
  }

  async addAstronaute(astronaut: Astronaut) {
    return await this.AstronauteRepository.addAstronaut(astronaut);
  }
}
