import { Astronaut } from "../entities/Astronaut";
import IAstronaut from "../ports/IAstronaut";

export default class AddAstronaut {
  AstronauteRepository: IAstronaut;

  constructor(astronauteRepository: IAstronaut) {
    this.AstronauteRepository = astronauteRepository;
  }

  async addAstronaute(astronaut: Astronaut) {
    return await this.AstronauteRepository.addAstronaut(astronaut);
  }
}
