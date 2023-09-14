import "./header.css";
import astronautImg from "../../../assets/astronaut.jpeg";

const Header = () => {
  return (
    <div className="header">
      <img className="header-img" src={astronautImg} />
      {/* <p className="header-text">Test Technique</p> */}
    </div>
  );
};

export default Header;
