import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./formAstronaut.css";

const FormAstronaut = () => {
  return (
    <form>
      <div className="form-inputs">
        <TextField
          className="form-text-field"
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          margin="normal"
          color="warning"
        />
        <TextField
          className="form-text-field"
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          margin="normal"
          color="warning"
        />
        <TextField
          className="form-text-field"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="normal"
          color="warning"
        />
      </div>
      <Button
        className="form-submit-button"
        variant="contained"
        color="warning"
      >
        Add
      </Button>
    </form>
  );
};

export default FormAstronaut;
