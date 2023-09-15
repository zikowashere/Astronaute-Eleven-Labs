import axios from "axios";

export default async function getAstonautService() {
  try {
    const response = await axios.get("http://localhost:3000/api/astronaut");
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}
