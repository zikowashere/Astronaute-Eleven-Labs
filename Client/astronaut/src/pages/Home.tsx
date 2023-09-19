import React, { useEffect, useState } from "react";
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

const Home = () => {
  const [open, setOpen] = useState(false);
  const [firstNameAstronaut, setFirstNameAstronuat] = useState("");
  const [lastNameAstronaut, setLastNameAstronaut] = useState("");
  const [emailAstronaut, setEmailAstronaut] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addFirstName = (newFirstName: string) => {
    setFirstNameAstronuat(newFirstName);
  };

  const addLastName = (newLastName: string) => {
    setLastNameAstronaut(newLastName);
  };

  const addEmail = (newEmail: string) => {
    setEmailAstronaut(newEmail);
  };
  const clearData = () => {
    setFirstNameAstronuat("");
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
        clearData();
      },
    },
  );

  const handleFormSubmit = (astronaut: Astronaut) => {
    const validateAstronaut = validate(astronaut);
    if (!validateAstronaut.success) {
      setIsValid(!isValid);
      setMessage(JSON.parse(validateAstronaut.error.message)[0].message);
    } else createAstronautMutation.mutate(astronaut);
  };

  useEffect(() => {
    if (!isValid) {
      showToastMessage();
    }
  }, [isValid]);

  return (
    <div>
      <Header />
      <Button onClick={handleClickOpen} variant="outlined">
        Add Astonaute
      </Button>
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
  );
};

export default Home;
