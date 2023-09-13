import "./formAstronaut.css";

const FormAstronaut = () => {
  return (
    <form>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "30%",
        }}
      >
        <div className="form-label">
          <label>First Name:</label>
          <label>Last Name:</label>
          <label>Email:</label>
        </div>
        <div className="form-inputs">
          <input type="text" id="firstName" name="firstName" />
          <input type="text" id="lastName" name="lastName" />
          <input type="text" id="lastName" name="lastName" />
        </div>
      </div>

      <button className="form-submit-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default FormAstronaut;
