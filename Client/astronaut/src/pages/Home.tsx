import React, { useContext, useEffect } from "react";
import FormAstronaut from "../core/components/formAstronaut/FormAstronaut";
import Header from "../core/components/header/Header";
import ListAstonaut from "../core/components/listAstronaut/ListAstonaut";
import { useMutation, useQueryClient } from "react-query";
import createAstronautService from "../core/useCases/astronaut/createAstronautService";
import Astronaut from "../core/types/Astronaut";
import { contextForm } from "../core/contexts/FormAstronautContext";
import validate from "../core/utils/validation";
import useToastError from "../core/hooks/toastError/useToastError";
import ToastError from "../core/components/toastError/ToastError";
import useGetAstronaut from "../core/hooks/astronaut/useGetAstronaut";

const Home = () => {
  const queryClient = useQueryClient();
  const { clearData, message, setMessage, isValid, setIsValid } =
    useContext(contextForm);
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
      <FormAstronaut onFormSubmit={handleFormSubmit} />
      <ListAstonaut astronauts={astraunautsList ?? []} />
      {!isValid && <ToastError />}
    </div>
  );
};

export default Home;
