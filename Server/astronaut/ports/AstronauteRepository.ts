import { Astronaut } from "../entities/Astronaut";

export interface AstronauteRepository {
  addAstronaut(astronaute: Astronaut): Promise<Astronaut>;
  getAstronauts(): Promise<Astronaut[]>;
  deleteAstronaut(id: unknown): void;
  updateAstronaut(id: unknown, astronaut: Astronaut): Promise<Astronaut>;
}
