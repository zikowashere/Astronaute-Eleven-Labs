import React from "react";
import Astronaut from "../astronaut/Astronaut";
import "./listAstronaut.css";

type Astronauts = {
  astronauts: Astronaut[];
};
const ListAstonaut = ({ astronauts }: Astronauts) => {
  return (
    <div className="list-astronaut">
      {astronauts?.map((astronaut) => (
        <Astronaut astronaut={astronaut} />
      ))}
    </div>
  );
};

export default ListAstonaut;
