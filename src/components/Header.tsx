import { useState } from "react";
import { NavBar } from "./NavBar";
import { Search, Menu } from "@mui/icons-material";

import logo from "../images/logo.svg";

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
        <div className="navCell"><Menu className="menuIcon"/></div>
        <img src={logo} />
        <div className="navCell"><Search className="searchIcon" /></div>
      </div>
      <NavBar />
    </div>
  );
};
