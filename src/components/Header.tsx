import { useState } from "react";
import logo from "../images/logo.svg";
import { NavBar } from "./NavBar";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  window.onscroll = () => {scrollHandler()};

  function scrollHandler() {
    if (document.body.scrollTop > 152 || document.documentElement.scrollTop > 152) {
      document.getElementById("logoBar")?.classList.add("scrolled");
      setScrolled(true);
    } else {
      if (scrolled) {
        document.getElementById("logoBar")?.classList.remove("scrolled");
        setScrolled(false)
      };
    }
  }

  return (
    <div id="header">
      <div id="logoBar">
        <img src={logo} />
      </div>
      <NavBar />
    </div>
  );
};
