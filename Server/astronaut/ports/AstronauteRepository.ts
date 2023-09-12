import { Astronaut } from "../entities/Astronaut";

export interface AstronauteRepository {
  addAstronaut(Astronaute: Astronaut): Promise<Astronaut>;
  getAstronauts(): Promise<Astronaut[]>;
  deleteAstronaut(id: unknown): void;
  updateAstronaute(id: unknown): Promise<Astronaut>;
}
