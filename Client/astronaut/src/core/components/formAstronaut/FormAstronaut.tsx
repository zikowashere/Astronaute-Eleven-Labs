import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./formAstronaut.css";
import formAstronautService from "./formAstronautService";
import Astronaut from "../types/Astronaut";
import { useEffect } from "react";
import getAstonautService from "../../services/astronaut/getAtronautService";
import { contextApp } from "../../context/listAstronautContext";

const FormAstronaut = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [astronaut, setAstronaut] = useState<Astronaut>();
  const [formData, setFormData] = useState<boolean>(false);
  const { setListAstronaut } = useContext(contextApp);
  const formParam = {
    setFirstName: setFirstName,
    setLastName: setLastName,
    setEmail: setEmail,
    setAstronaut: setAstronaut,
    setFormData: setFormData,
    firstName: firstName,
    lastName: lastName,
    email: email,
    astronaut: astronaut,
    formData: formData,
  };

  const {
    lastNameHandler,
    firstNameHandler,
    emailHandler,
    submitAstronaut,
    clearData,
  } = formAstronautService(formParam);

  const getListAstronauts = async () => {
    const response = await getAstonautService();
    setListAstronaut(response.data);
  };

  useEffect(() => {
    if (formData) {
      getListAstronauts();
      clearData();
      setFormData(false);
    }
  }, [formData]);

  return (
    <form onSubmit={(e) => submitAstronaut(e)}>
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
