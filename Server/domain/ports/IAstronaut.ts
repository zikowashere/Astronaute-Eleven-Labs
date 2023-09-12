import { Astronaut } from "../entities/Astronaut";

export default interface IAstronaut {
  addAstronaut(Astronaute: Astronaut): Promise<Astronaut>;
  getAstronauts(): Promise<Astronaut[]>;
  deleteAstronaut(id: unknown): void;
  updateAstronaute(id: unknown): Promise<Astronaut>;
}
