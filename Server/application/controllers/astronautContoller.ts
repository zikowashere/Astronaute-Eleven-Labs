import AddAstronaut from "../../domain/useCases/AddAstronaut";
import { AstronautDataSource } from "../ports/AstronautDataSource";
import { Astronaut } from "../../domain/entities/Astronaut";
import AstronautImpl from "../adapters/AstronautImpl";
import GetAstronauts from "../../domain/useCases/GetAstronauts";
import UpdateAstronaut from "../../domain/useCases/UpdateAstronaut";
import DeleteAstronaut from "../../domain/useCases/DeleteAstronaut";

export default function astronautController(
  astronautDataSource: AstronautDataSource,
) {
  const AstronautRepo = new AstronautImpl(astronautDataSource);

  const addAstronaut = async (astronaut: Astronaut) => {
    const Astronaut = new AddAstronaut(AstronautRepo);
    return await Astronaut.addAstronaute(astronaut);
  };

  const getAstronauts = async () => {
    const Astronaut = new GetAstronauts(AstronautRepo);
    return await Astronaut.getAstronauts();
  };
  const updateAstronaut = async (id: unknown) => {
    const Astronaut = new UpdateAstronaut(AstronautRepo);
    return await Astronaut.updateAstronaut(id);
  };
  const deleteAstronaut = async (id: unknown) => {
    {
      const Astronaut = new DeleteAstronaut(AstronautRepo);
      return await Astronaut.deleteAstronaute(id);
    }
  };
  return { addAstronaut, getAstronauts, updateAstronaut, deleteAstronaut };
}
