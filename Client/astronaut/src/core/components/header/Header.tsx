import "./header.css";
import astronautImg from "../../../assets/astronaut.png";
import Rocket from "../animation/Rocket";

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="header-img" src={astronautImg} />
        <div className="header-text">
          <p>NASA 🚀</p>
        </div>
        <Rocket />
      </div>
    </>
  );
};

export default Header;
