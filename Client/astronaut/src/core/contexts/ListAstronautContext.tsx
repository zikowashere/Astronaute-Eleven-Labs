import React, { Dispatch, SetStateAction, useState } from "react";
import Astronaut from "../types/Astronaut";
import { Children } from "../types/Children";

type listAstronaut = {
  listAstronaut: Astronaut[];
  setListAstronaut: Dispatch<SetStateAction<Astronaut[]>>;
};
export const contextApp = React.createContext<listAstronaut>({
  listAstronaut: [],
  setListAstronaut: () => {},
});

export const ContextAppProvider = ({ children }: Children) => {
  const [listAstronaut, setListAstronaut] = useState<Astronaut[]>([
    { firstName: "", lastName: "", email: "" },
  ]);

  return (
    <contextApp.Provider value={{ listAstronaut, setListAstronaut }}>
      {children}
    </contextApp.Provider>
  );
};
