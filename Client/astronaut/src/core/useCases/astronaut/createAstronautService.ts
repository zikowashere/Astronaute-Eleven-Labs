import axios from "axios";
import Astronaut from "../../types/Astronaut";

export default async function createAstronautService(astronaut: Astronaut) {
  const host = import.meta.env.VITE_HOST;
  try {
    return await axios.post(host, astronaut);
  } catch (error) {
    return Promise.reject(error);
  }
}
