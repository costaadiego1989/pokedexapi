import Logo from "../../assets/logo.png";
import { Navbar } from "../Navbar";
import "./style.css";

export const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerContent">
        <img src={Logo} alt="Poke Api" height="60px" />
        <Navbar />
      </div>
    </div>
  );
};
