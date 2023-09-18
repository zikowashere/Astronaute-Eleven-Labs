import { useQuery } from "react-query";
import Astronaut from "../../types/Astronaut";
import getAstonautService from "../../useCases/astronaut/getAtronautService";

const useGetAstronaut = () =>
  useQuery<Astronaut[]>({
    queryKey: ["astronauts"],
    queryFn: getAstonautService,
  });

export default useGetAstronaut;
