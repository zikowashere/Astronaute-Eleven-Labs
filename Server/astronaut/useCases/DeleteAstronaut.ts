import { AstronauteRepository } from "../ports/AstronauteRepository";

export default class DeleteAstronaut {
  AstronauteRepository: AstronauteRepository;

  constructor(astronauteRepository: AstronauteRepository) {
    this.AstronauteRepository = astronauteRepository;
  }

  async deleteAstronaute(id: unknown) {
    return await this.AstronauteRepository.deleteAstronaut(id);
  }
}
