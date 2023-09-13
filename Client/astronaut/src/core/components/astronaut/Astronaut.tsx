import { MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import "./astronaut.css";

const Astronaut = () => {
  return (
    <div className="astronaut">
      <div className="astronaut-informations">
        <p className="astronaut-attribut">firstNameAstronaut</p>
        <p>secondNameAstronaut</p>
        <p>emailAstronaut</p>
      </div>
      <div className="astronaut-actions">
        <button>
          <MdDelete />
        </button>
        <button>
          <HiPencil />
        </button>
      </div>
    </div>
  );
};

export default Astronaut;
