import { ChangeEvent, FormEvent } from "react";
import FormAstronaut from "../../types/FormAstronaut";

export default function formAstronautService({
  setFirstName,
  setLastName,
  setEmail,
  firstName,
  lastName,
  email,
  onFormSubmit,
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

    onFormSubmit(astronautToAdd);
  };

  return {
    lastNameHandler,
    firstNameHandler,
    emailHandler,
    submitAstronaut,
  };
}
