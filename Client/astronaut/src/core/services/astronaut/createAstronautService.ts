import axios from "axios";
import Astronaut from "../../types/Astronaut";

export default async function createAstronautService(astronaut: Astronaut) {
  try {
    return await axios.post("http://localhost:3000/api/astronaut", astronaut);
  } catch (error) {
    return Promise.reject(error);
  }
}
