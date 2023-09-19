import axios from "axios";
import Astronaut from "../../types/Astronaut";

export default async function updateAstronautService(
  id: unknown,
  astronaut: Astronaut,
) {
  const host = import.meta.env.VITE_HOST;
  try {
    const response = await axios.put<Astronaut>(host + `/${id}`, astronaut);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
