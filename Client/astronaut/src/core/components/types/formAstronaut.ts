import { Dispatch, SetStateAction } from "react";
import Astronaut from "./Astronaut";

export default interface FormAstronaut {
  setFirstName: Dispatch<SetStateAction<string>>;
  setLastName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setAstronaut: Dispatch<SetStateAction<Astronaut | undefined>>;
  setFormData: Dispatch<SetStateAction<boolean>>;
  firstName: string;
  lastName: string;
  email: string;
  astronaut?: Astronaut;
  formData: boolean;
}
