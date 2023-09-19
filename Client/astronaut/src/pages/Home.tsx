import React, { useEffect, useMemo, useState } from "react";
import Header from "../core/components/header/Header";
import ListAstonaut from "../core/components/listAstronaut/ListAstonaut";
import { useMutation, useQueryClient } from "react-query";
import createAstronautService from "../core/useCases/astronaut/createAstronautService";
import Astronaut from "../core/types/Astronaut";
import validate from "../core/utils/validation";
import useToastError from "../core/hooks/toastError/useToastError";
import ToastError from "../core/components/toastError/ToastError";
import useGetAstronaut from "../core/hooks/astronaut/useGetAstronaut";
import { Button } from "@mui/material";
import ModalAstronaut from "../core/components/modalAstronaut/ModalAstronaut";
import styles from "./Home.module.css";
import Rocket from "../core/components/animation/Rocket";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [firstNameAstronaut, setFirstNameAstronaut] = useState("");
  const [lastNameAstronaut, setLastNameAstronaut] = useState("");
  const [emailAstronaut, setEmailAstronaut] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    clearData();
    setOpen(false);
  };
  const addFirstName = (newFirstName: string) => {
    setFirstNameAstronaut(newFirstName);
  };

  const addLastName = (newLastName: string) => {
    setLastNameAstronaut(newLastName);
  };

  const addEmail = (newEmail: string) => {
    setEmailAstronaut(newEmail);
  };
  const clearData = () => {
    setFirstNameAstronaut("");
    setLastNameAstronaut("");
    setEmailAstronaut("");
  };
  const queryClient = useQueryClient();
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");
  const { showToastMessage } = useToastError(message);
  const {
    // isLoading: isAstraunautsLoading,
    // isError: isGetAstraunautsError,
    data: astraunautsList,
    // error: getAstraunautsError,
  } = useGetAstronaut();

  const createAstronautMutation = useMutation(
    (newAstronaut: Astronaut) => {
      return createAstronautService(newAstronaut);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("astronauts");
      },
    },
  );

  const handleFormSubmit = (astronaut: Astronaut) => {
    const validateAstronaut = validate(astronaut);
    if (!validateAstronaut.success) {
      setIsValid(!isValid);
      setMessage(JSON.parse(validateAstronaut.error.message)[0].message);
    } else {
      createAstronautMutation.mutate(astronaut);
    }
  };

  useEffect(() => {
    if (!isValid) showToastMessage();
  }, [isValid]);

  return (
    <>
      <div>
        <Header />
        <div className={styles.addbutton}>
          <Button onClick={handleClickOpen} variant="outlined">
            Add Astonaute
          </Button>
        </div>
        <ModalAstronaut
          open={open}
          handleClose={handleClose}
          onFormSubmit={handleFormSubmit}
          firstNameAstronaut={firstNameAstronaut}
          lastNameAstronaut={lastNameAstronaut}
          emailAstronaut={emailAstronaut}
          changeFirstName={addFirstName}
          changeLastName={addLastName}
          changeEmail={addEmail}
        />
        <ListAstonaut astronauts={astraunautsList ?? []} />
        {!isValid && <ToastError />}
      </div>
      {/* <Rocket /> */}
    </>
  );
};

export default Home;
