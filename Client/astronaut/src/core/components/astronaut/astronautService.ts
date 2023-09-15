import deleteAstronautService from "../../useCases/astronaut/deleteAstronautService";
import updateAstronautService from "../../useCases/astronaut/updateAstronautService";
import Astronaut from "../../types/Astronaut";

export default function astronautService(astronaut: Astronaut) {
  const deleteAstronaut = async () => {
    await deleteAstronautService(astronaut._id);
  };
  const updateAstronaut = async (
    firstName: string,
    lastName: string,
    email: string,
  ) => {
    const AstronautToUpdate = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    await updateAstronautService(astronaut._id, AstronautToUpdate);
  };
  return { deleteAstronaut, updateAstronaut };
}
