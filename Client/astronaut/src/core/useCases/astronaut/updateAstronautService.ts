import axios from "axios";
import Astronaut from "../../types/Astronaut";

export default async function updateAstronautService(
  id: unknown,
  astronaut: Astronaut,
) {
  try {
    const response = await axios.put<Astronaut>(
      `http://localhost:3000/api/astronaut/${id}`,
      astronaut,
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
