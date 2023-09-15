import { MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import "./astronaut.css";
import Button from "@mui/material/Button";
import Astronaut from "../../types/Astronaut";
import astronautService from "./astronautService";
import { useContext } from "react";
import { contextForm } from "../../contexts/FormAstronautContext";

type Props = {
  astronaut: Astronaut;
};

const Astronaut = ({ astronaut }: Props) => {
  const { firstName, lastName, email } = useContext(contextForm);

  const deleteAstronaut = () => {
    astronautService(astronaut).deleteAstronaut();
  };
  const updateAstronaut = () => {
    astronautService(astronaut).updateAstronaut(firstName, lastName, email);
  };

  return (
    <div className="astronaut">
      <div className="astronaut-informations">
        <p className="astronaut-attribut">{astronaut.firstName}</p>
        <p className="astronaut-attribut">{astronaut.lastName}</p>
      </div>
      <div className="astronaut-actions">
        <Button className="button-action" onClick={deleteAstronaut}>
          <MdDelete color="orange" size={20} />
        </Button>
        <Button className="button-action" onClick={updateAstronaut}>
          <HiPencil color="orange" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Astronaut;
