import { Search } from "@mui/icons-material";
import { NavMapAbout } from "./NavMap/NavMapAbout"

export const NavBar = () => {
  return (
    <div id="navbar">
      <div className="cell left"></div>
      <div className="cell center">
        <button>About SAS</button>
        <button>Sustainability</button>
        <button>Investor relations</button>
        <button>Newsroom</button>
        <button>Career</button>
        <button>Contact</button>
      </div>
      <div className="cell right">
        <Search className="searchIcon" />
      </div>
      <div id="navMapBackground">
        <NavMapAbout />
      </div>
    </div>
  );
};
