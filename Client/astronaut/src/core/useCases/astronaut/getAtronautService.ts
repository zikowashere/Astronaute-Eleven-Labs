import axios from "axios";
import Astronaut from "../../types/Astronaut";

export default async function getAstonautService() {
  const host = import.meta.env.VITE_HOST;

  try {
    const response = await axios.get<Astronaut[]>(host);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
