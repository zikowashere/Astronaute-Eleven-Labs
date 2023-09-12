import IAstronaut from "../ports/IAstronaut";

export default class UpdateAstronaut {
  AstronauteRepository: IAstronaut;

  constructor(astronauteRepository: IAstronaut) {
    this.AstronauteRepository = astronauteRepository;
  }

  async updateAstronaut(id: unknown) {
    return await this.AstronauteRepository.updateAstronaute(id);
  }
}
