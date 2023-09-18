import { useMutation, useQueryClient } from "react-query";
import Astronaut from "../../types/Astronaut";
import deleteAstronautService from "../../useCases/astronaut/deleteAstronautService";

const useDeleteAstronaut = (astronaut: Astronaut) => {
  const queryClient = useQueryClient();
  const deleteAstronautMutation = useMutation(
    () => {
      return deleteAstronautService(astronaut._id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("astronauts");
      },
    },
  );
  return { deleteAstronautMutation };
};
export default useDeleteAstronaut;
