import { Dispatch, SetStateAction } from "react";
import Astronaut from "./Astronaut";

export default interface FormAstronaut {
  setFirstName: Dispatch<SetStateAction<string>>;
  setLastName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  firstName: string;
  lastName: string;
  email: string;
  onFormSubmit: (astronaut: Astronaut) => void;
}
