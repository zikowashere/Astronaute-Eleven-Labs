import axios from "axios";

export default function deleteAstronautService(id: unknown) {
  try {
    return axios.delete(`http://localhost:3000/api/astronaut/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
}
