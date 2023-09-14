import { MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import "./astronaut.css";
import Button from "@mui/material/Button";

const Astronaut = () => {
  return (
    <div className="astronaut">
      <div className="astronaut-informations">
        <p className="astronaut-attribut">firstNameAstronaut</p>
        <p className="astronaut-attribut">secondNameAstronaut</p> 
      </div>
      <div className="astronaut-actions">
        <Button className="button-action">
          <MdDelete color="orange" />
        </Button>
        <Button className="button-action">
          <HiPencil color="orange" />
        </Button>
      </div>
    </div>
  );
};

export default Astronaut;
