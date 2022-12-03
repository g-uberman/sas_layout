import { useState } from "react";
import logo from "../images/logo.svg";
import { NavBar } from "./NavBar";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  window.onscroll = () => {scrollHandler()};

  function scrollHandler() {
    if (document.body.scrollTop > 152 || document.documentElement.scrollTop > 152) {
      setScrolled(true);
    } else {
      if (scrolled) setScrolled(false);
    }
  }

  return (
    <div id="header">
      {!scrolled && (
      <div id="logoBar">
        <img src={logo} />
      </div>
      )}
      {scrolled && (
      <div id="logoBar" className="scrolled">
        <img src={logo} />
      </div>
      )}
      <NavBar />
    </div>
  );
};
