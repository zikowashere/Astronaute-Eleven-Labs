import IAstronaut from "../ports/IAstronaut";

export default class DeleteAstronaut {
  astronauteRepository: IAstronaut;

  constructor(astronauteRepository: IAstronaut) {
    this.astronauteRepository = astronauteRepository;
  }

  async deleteAstronaute(id: unknown) {
    return await this.astronauteRepository.deleteAstronaut(id);
  }
}
