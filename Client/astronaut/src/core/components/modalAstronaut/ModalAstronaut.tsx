import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Astronaut from "../../types/Astronaut";

type modalProps = {
  open: boolean;
  firstNameAstronaut: string;
  lastNameAstronaut: string;
  emailAstronaut: string;
  handleClose: () => void;
  onFormSubmit: (astronaut: Astronaut) => void;
  changeFirstName: (newFirstName: string) => void;
  changeLastName: (newLastName: string) => void;
  changeEmail: (newEmail: string) => void;
};

const ModalAstronaut = ({
  open,
  firstNameAstronaut,
  lastNameAstronaut,
  emailAstronaut,
  handleClose,
  onFormSubmit,
  changeFirstName,
  changeLastName,
  changeEmail,
}: modalProps) => {
  const [firstName, setFirstName] = useState(firstNameAstronaut);
  const [lastName, setLastName] = useState(lastNameAstronaut);
  const [email, setEmail] = useState(emailAstronaut);

  const handleSave = () => {
    const astronautToUpdate = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    onFormSubmit(astronautToUpdate);
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Astronaut</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="First Name"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                changeFirstName(e.target.value);
              }}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="lastName"
              label="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                changeLastName(e.target.value);
              }}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                changeEmail(e.target.value);
              }}
              fullWidth
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalAstronaut;
