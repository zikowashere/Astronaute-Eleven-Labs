import { AstronauteRepository } from "../ports/AstronauteRepository";

export default class UpdateAstronaut {
  AstronauteRepository: AstronauteRepository;

  constructor(astronauteRepository: AstronauteRepository) {
    this.AstronauteRepository = astronauteRepository;
  }

  async updateAstronaut(id: unknown) {
    return await this.AstronauteRepository.updateAstronaute(id);
  }
}
