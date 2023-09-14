import { ChangeEvent, FormEvent } from "react";
import createAstronautService from "../../services/astronaut/createAstronautService";
import FormAstronaut from "../types/formAstronaut";

export default function formAstronautService({
  setFirstName,
  setLastName,
  setEmail,
  setFormData,
  firstName,
  lastName,
  email,
  formData,
}: FormAstronaut) {
  const firstNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const submitAstronaut = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const astronautToAdd = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    createAstronautService(astronautToAdd);
    setFormData(!formData);
  };
  const clearData = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };
  return {
    lastNameHandler,
    firstNameHandler,
    emailHandler,
    submitAstronaut,
    clearData,
  };
}
