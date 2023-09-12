import IAstronaut from "../ports/IAstronaut";

export default class GetAstronauts {
  astronauteRepository: IAstronaut;

  constructor(astronauteRepository: IAstronaut) {
    this.astronauteRepository = astronauteRepository;
  }

  async getAstronauts() {
    return await this.astronauteRepository.getAstronauts();
  }
}
