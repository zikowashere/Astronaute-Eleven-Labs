import { MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import "./astronaut.css";
import Button from "@mui/material/Button";
import Astronaut from "../../types/Astronaut";
import { useContext } from "react";
import { contextForm } from "../../contexts/FormAstronautContext";
import validate from "../../utils/validation";
import useDeleteAstronaut from "../../hooks/astronaut/useDeleteAstronaut";
import useUpdateAstronaut from "../../hooks/astronaut/useUpdateAstronaut";

type Props = {
  astronaut: Astronaut;
};

const Astronaut = ({ astronaut }: Props) => {
  const {
    firstName,
    lastName,
    email,
    clearData,
    isValid,
    setIsValid,
    setMessage,
  } = useContext(contextForm);
  const { deleteAstronautMutation } = useDeleteAstronaut(astronaut);
  const { updateAstronautMutation } = useUpdateAstronaut();
  const deleteAstronautMutate = deleteAstronautMutation;

  const deleteAstronaut = () => {
    deleteAstronautMutate.mutate();
  };

  const updateAstronautMutate = updateAstronautMutation;

  const updateAstronaut = () => {
    const param = {
      id: astronaut?._id,
      astronaut: {
        firstName,
        lastName,
        email,
      },
    };
    const validateAstronaut = validate(param.astronaut);
    if (!validateAstronaut.success) {
      setIsValid(!isValid);
      setMessage(JSON.parse(validateAstronaut.error.message)[0].message);
    } else updateAstronautMutate.mutate(param);
    clearData();
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
