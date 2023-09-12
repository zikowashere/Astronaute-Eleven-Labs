import AddAstronaut from "../useCases/AddAstronaut";
import { AstronauteRepository } from "../ports/AstronauteRepository";
import { Astronaut } from "../entities/Astronaut";
import GetAstronauts from "../useCases/GetAstronauts";
import UpdateAstronaut from "../useCases/UpdateAstronaut";
import DeleteAstronaut from "../useCases/DeleteAstronaut";

export default function astronautController(
  astronautRepo: AstronauteRepository,
) {
  const addAstronaut = async (astronaut: Astronaut) => {
    const Astronaut = new AddAstronaut(astronautRepo);
    return await Astronaut.addAstronaute(astronaut);
  };

  const getAstronauts = async () => {
    const Astronaut = new GetAstronauts(astronautRepo);
    return await Astronaut.getAstronauts();
  };
  const updateAstronaut = async (id: unknown) => {
    const Astronaut = new UpdateAstronaut(astronautRepo);
    return await Astronaut.updateAstronaut(id);
  };
  const deleteAstronaut = async (id: unknown) => {
    {
      const Astronaut = new DeleteAstronaut(astronautRepo);
      return await Astronaut.deleteAstronaute(id);
    }
  };
  return { addAstronaut, getAstronauts, updateAstronaut, deleteAstronaut };
}
