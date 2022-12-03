import logo from "../images/logo.svg";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <div id="header">
      <div id="logoBar">
        <img src={logo} />
      </div>
      <NavBar />
    </div>
  );
};
