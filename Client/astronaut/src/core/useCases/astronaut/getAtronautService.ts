import axios from "axios";
import Astronaut from "../../types/Astronaut";

export default async function getAstonautService() {
  try {
    const response = await axios.get<Astronaut[]>(
      "http://localhost:3000/api/astronaut",
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
