import { MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import "./astronaut.css";
import Button from "@mui/material/Button";
import Astronaut from "../types/Astronaut";
import deleteAstronautService from "../../services/astronaut/deleteAstronautService";

type Props = {
  astronaut: Astronaut;
};

const Astronaut = ({ astronaut }: Props) => {
  const deleteAstronaut = async () => {
    await deleteAstronautService(astronaut._id);
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
        <Button className="button-action">
          <HiPencil color="orange" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Astronaut;
