import IAstronaut from "../ports/IAstronaut";

export default class GetAstronauts {
  AstronauteRepository: IAstronaut;

  constructor(astronauteRepository: IAstronaut) {
    this.AstronauteRepository = astronauteRepository;
  }

  async getAstronauts() {
    return await this.AstronauteRepository.getAstronauts();
  }
}
