import React, { Dispatch, SetStateAction, useState } from "react";
import { Children } from "../types/Children";

type form = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  isValid: boolean;
  setFirstName: Dispatch<SetStateAction<string>>;
  setLastName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setIsValid: Dispatch<SetStateAction<boolean>>;
  setMessage: Dispatch<SetStateAction<string>>;
  clearData: () => void;
};
export const contextForm = React.createContext<form>({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  isValid: true,
  setFirstName: () => {},
  setLastName: () => {},
  setEmail: () => {},
  clearData: () => {},
  setMessage: () => {},
  setIsValid: () => {},
});

export const ContextFormProvider = ({ children }: Children) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");

  const clearData = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <contextForm.Provider
      value={{
        firstName,
        lastName,
        email,
        setFirstName,
        setLastName,
        setEmail,
        clearData,
        message,
        setMessage,
        isValid,
        setIsValid,
      }}
    >
      {children}
    </contextForm.Provider>
  );
};
