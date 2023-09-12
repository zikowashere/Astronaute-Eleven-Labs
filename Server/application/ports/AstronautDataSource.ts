export interface AstronautDataSource {
  addAstronaut(Astronaute: Astronaut): Promise<Astronaut>;
  getAstronauts(): Promise<Astronaut[]>;
  deleteAstronaut(id: unknown): void;
  updateAstronaute(id: unknown): Promise<Astronaut>;
}
