import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import Astronaut from "../components/types/Astronaut";

type Props = {
  children: ReactNode;
};
type listAstronaut = {
  listAstronaut: Astronaut[] | undefined;
  setListAstronaut: Dispatch<SetStateAction<Astronaut[] | undefined>>;
};
export const contextApp = React.createContext<listAstronaut>({
  listAstronaut: [],
  setListAstronaut: () => {},
});

export const ContextAppProvider = ({ children }: Props) => {
  const [listAstronaut, setListAstronaut] = useState<Astronaut[]>();

  return (
    <contextApp.Provider value={{ listAstronaut, setListAstronaut }}>
      {children}
    </contextApp.Provider>
  );
};
