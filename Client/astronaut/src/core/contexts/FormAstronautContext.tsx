import React, { Dispatch, SetStateAction, useState } from "react";
import { Children } from "../types/Children";

type form = {
  firstName: string;
  lastName: string;
  email: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  setLastName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
};
export const contextForm = React.createContext<form>({
  firstName: "",
  lastName: "",
  email: "",
  setFirstName: () => {},
  setLastName: () => {},
  setEmail: () => {},
});

export const ContextFormProvider = ({ children }: Children) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <contextForm.Provider
      value={{
        firstName,
        lastName,
        email,
        setFirstName,
        setLastName,
        setEmail,
      }}
    >
      {children}
    </contextForm.Provider>
  );
};
