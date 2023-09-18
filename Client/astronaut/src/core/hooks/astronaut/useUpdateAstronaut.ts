import { useMutation, useQueryClient } from "react-query";
import Astronaut from "../../types/Astronaut";
import updateAstronautService from "../../useCases/astronaut/updateAstronautService";

const useUpdateAstronaut = () => {
  const queryClient = useQueryClient();

  const updateAstronautMutation = useMutation(
    (param: { id: unknown; astronaut: Astronaut }) => {
      return updateAstronautService(param.id, param.astronaut);
    },
    {
      onSuccess() {
        queryClient.invalidateQueries("astronauts");
      },
    },
  );
  return { updateAstronautMutation };
};
export default useUpdateAstronaut;
