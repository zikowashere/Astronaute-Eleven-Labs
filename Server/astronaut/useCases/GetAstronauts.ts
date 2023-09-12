import { AstronauteRepository } from "../ports/AstronauteRepository";

export default class GetAstronauts {
  AstronauteRepository: AstronauteRepository;

  constructor(astronauteRepository: AstronauteRepository) {
    this.AstronauteRepository = astronauteRepository;
  }

  async getAstronauts() {
    return await this.AstronauteRepository.getAstronauts();
  }
}
