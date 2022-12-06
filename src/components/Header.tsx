import { useState } from "react";
import { NavBar } from "./NavBar";
import { Search, Menu } from "@mui/icons-material";

import logo from "../images/logo.svg";
import { NavAccordion } from "./Navigation/NavAccordion";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  window.onscroll = () => {
    scrollHandler();
  };

  const scrollHandler = () => {
    if (
      document.body.scrollTop > 152 ||
      document.documentElement.scrollTop > 152
    ) {
      document.getElementById("logoBar")?.classList.add("scrolled");
      setScrolled(true);
    } else {
      if (scrolled) {
        document.getElementById("logoBar")?.classList.remove("scrolled");
        setScrolled(false);
      }
    }
  };

  const handleHamburger = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div id="header">
      <div id="logoBar">
        <div className="navCell">
          <Menu className="menuIcon" onClick={handleHamburger} />
        </div>
        <img src={logo} />
        <div className="navCell">
          <Search className="searchIcon" />
        </div>
      </div>
      <div id="accordionWrapper" style={openMenu ? {right: "0"} : {right: "-100vw"}}>
        <NavAccordion />
      </div>
      <NavBar />
    </div>
  );
};
