import { Astronaut } from "../entities/Astronaut";
import IAstronaut from "../ports/IAstronaut";

export default class AddAstronaut {
  astronauteRepository: IAstronaut;

  constructor(astronauteRepository: IAstronaut) {
    this.astronauteRepository = astronauteRepository;
  }

  async addAstronaute(astronaut: Astronaut) {
    return await this.astronauteRepository.addAstronaut(astronaut);
  }
}
