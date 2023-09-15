import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import Astronaut from "../types/Astronaut";

type Props = {
  children: ReactNode;
};
type listAstronaut = {
  listAstronaut: Astronaut[];
  setListAstronaut: Dispatch<SetStateAction<Astronaut[]>>;
};
export const contextApp = React.createContext<listAstronaut>({
  listAstronaut: [],
  setListAstronaut: () => {},
});

export const ContextAppProvider = ({ children }: Props) => {
  const [listAstronaut, setListAstronaut] = useState<Astronaut[]>([
    { firstName: "", lastName: "", email: "" },
  ]);

  return (
    <contextApp.Provider value={{ listAstronaut, setListAstronaut }}>
      {children}
    </contextApp.Provider>
  );
};
