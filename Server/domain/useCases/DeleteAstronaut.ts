import IAstronaut from "../ports/IAstronaut";

export default class DeleteAstronaut {
  AstronauteRepository: IAstronaut;

  constructor(astronauteRepository: IAstronaut) {
    this.AstronauteRepository = astronauteRepository;
  }

  async deleteAstronaute(id: unknown) {
    return await this.AstronauteRepository.deleteAstronaut(id);
  }
}
