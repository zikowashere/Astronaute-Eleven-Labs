import axios from "axios";
import Astronaut from "../../types/Astronaut";

export default async function updateAstronautService(
  id: unknown,
  astronaut: Astronaut,
) {
  try {
    return await axios.put(
      `http://localhost:3000/api/astronaut/${id}`,
      astronaut,
    );
  } catch (error) {
    return Promise.reject(error);
  }
}
