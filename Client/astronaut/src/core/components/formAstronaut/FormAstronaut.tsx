import React, { useContext } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./formAstronaut.css";
import formAstronautService from "./formAstronautService";
import { contextForm } from "../../contexts/FormAstronautContext";
import Astronaut from "../../types/Astronaut";

type FormAstronautProps = {
  onFormSubmit: (astronaut: Astronaut) => void;
};

const FormAstronaut = ({ onFormSubmit }: FormAstronautProps) => {
  const { firstName, lastName, email, setFirstName, setLastName, setEmail } =
    useContext(contextForm);

  const formParam = {
    setFirstName: setFirstName,
    setLastName: setLastName,
    setEmail: setEmail,
    firstName: firstName,
    lastName: lastName,
    email: email,
    onFormSubmit,
  };

  const { lastNameHandler, firstNameHandler, emailHandler, submitAstronaut } =
    formAstronautService(formParam);

  return (
    <form onSubmit={submitAstronaut}>
      <div className="form-inputs">
        <TextField
          className="form-text-field"
          label="First Name"
          variant="outlined"
          margin="normal"
          color="warning"
          value={firstName}
          onChange={firstNameHandler}
        />
        <TextField
          className="form-text-field"
          label="Last Name"
          variant="outlined"
          margin="normal"
          color="warning"
          value={lastName}
          onChange={lastNameHandler}
        />
        <TextField
          className="form-text-field"
          label="Email"
          variant="outlined"
          margin="normal"
          color="warning"
          value={email}
          onChange={emailHandler}
        />
      </div>
      <Button
        className="form-submit-button"
        variant="contained"
        color="warning"
        type="submit"
      >
        Add
      </Button>
    </form>
  );
};

export default FormAstronaut;
