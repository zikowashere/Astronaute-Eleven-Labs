import axios from "axios";

export default function deleteAstronautService(id: unknown) {
  const host = import.meta.env.VITE_HOST;

  try {
    return axios.delete(host + `${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
}
