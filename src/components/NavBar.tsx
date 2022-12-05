import { useState } from "react";
import { Search } from "@mui/icons-material";
import { NavMapAbout } from "./NavMap/NavMapAbout"

export const NavBar = () => {
  const [about, setAbout] = useState(true);

const handleAbout = () => {
  setAbout(!about);
}

  return (
    <div id="navbar">
      <div className="cell left"></div>
      <div className="cell center">
        <button onClick={(handleAbout)} className={about ? "active" : undefined}>About SAS</button>
        <button>Sustainability</button>
        <button>Investor relations</button>
        <button>Newsroom</button>
        <button>Career</button>
        <button>Contact</button>
      </div>
      <div className="cell right">
        <Search className="searchIcon" />
      </div>
        {about && <NavMapAbout />}
    </div>
  );
};
