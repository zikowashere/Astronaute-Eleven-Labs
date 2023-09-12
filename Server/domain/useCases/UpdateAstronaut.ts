import IAstronaut from "../ports/IAstronaut";

export default class updateAstronaut {
  astronauteRepository: IAstronaut;

  constructor(astronauteRepository: IAstronaut) {
    this.astronauteRepository = astronauteRepository;
  }

  async updateAstronaut(id: unknown) {
    return await this.astronauteRepository.updateAstronaute(id);
  }
}
