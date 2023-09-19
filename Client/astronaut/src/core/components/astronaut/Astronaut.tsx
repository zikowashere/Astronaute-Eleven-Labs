import { MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import "./astronaut.css";
import Button from "@mui/material/Button";
import Astronaut from "../../types/Astronaut";
import { useEffect, useState } from "react";
import validate from "../../utils/validation";
import useDeleteAstronaut from "../../hooks/astronaut/useDeleteAstronaut";
import useUpdateAstronaut from "../../hooks/astronaut/useUpdateAstronaut";
import ModalAstronaut from "../modalAstronaut/ModalAstronaut";
import { Card, CardContent } from "@mui/material";
import useToastError from "../../hooks/toastError/useToastError";
import ToastError from "../toastError/ToastError";

type Props = {
  astronaut: Astronaut;
};

const Astronaut = ({ astronaut }: Props) => {
  const [open, setOpen] = useState(false);
  const [firstNameAstronaut, setFirstNameAstronuat] = useState(
    astronaut.firstName,
  );
  const [lastNameAstronaut, setLastNameAstronaut] = useState(
    astronaut.lastName,
  );
  const [emailAstronaut, setEmailAstronaut] = useState(astronaut.email);
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");
  const { showToastMessage } = useToastError(message);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const updateFirstName = (newFirstName: string) => {
    setFirstNameAstronuat(newFirstName);
  };

  const updateLastName = (newLastName: string) => {
    setLastNameAstronaut(newLastName);
  };

  const updateEmail = (newEmail: string) => {
    setEmailAstronaut(newEmail);
  };
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
        firstName: firstNameAstronaut,
        lastName: lastNameAstronaut,
        email: emailAstronaut,
      },
    };

    const validateAstronaut = validate(param.astronaut);
    if (!validateAstronaut.success) {
      setIsValid(!isValid);
      setMessage(JSON.parse(validateAstronaut.error.message)[0].message);
    } else updateAstronautMutate.mutate(param);
  };

  useEffect(() => {
    if (!isValid) {
      showToastMessage();
      setIsValid(true);
    }
  }, [isValid]);

  return (
    <Card className="astronaut">
      <CardContent className="astronaut-informations">
        <div className="astronaut-informations">
          <p className="astronaut-attribut">{astronaut.firstName}</p>
          <p className="astronaut-attribut">{astronaut.lastName}</p>
        </div>
        <div className="astronaut-actions">
          <Button className="button-action" onClick={handleClickOpen}>
            <HiPencil color="#0000FF" size={20} />
          </Button>
          <Button className="button-action" onClick={deleteAstronaut}>
            <MdDelete color="red" size={20} />
          </Button>
        </div>
        <ModalAstronaut
          open={open}
          handleClose={handleClose}
          onFormSubmit={updateAstronaut}
          firstNameAstronaut={firstNameAstronaut}
          lastNameAstronaut={lastNameAstronaut}
          emailAstronaut={emailAstronaut}
          changeFirstName={updateFirstName}
          changeLastName={updateLastName}
          changeEmail={updateEmail}
        />
      </CardContent>
      {!isValid && <ToastError />}
    </Card>
  );
};

export default Astronaut;
