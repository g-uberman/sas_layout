import { useState } from "react";
import { Search } from "@mui/icons-material";
import { NavMenuAbout } from "./Navigation/NavMenus/NavMenuAbout";
import { NavMenuSustainability } from "./Navigation/NavMenus/NavMenuSustainability";
import { NavMenuInvestors } from "./Navigation/NavMenus/NavMenuInvestors";
import { NavMenuNewsroom } from "./Navigation/NavMenus/NavMenuNewsroom";
import { NavMenuCareer } from "./Navigation/NavMenus/NavMenuCareer";
import { NavMenuContact } from "./Navigation/NavMenus/NavMenuContact";

export const NavBar = () => {
  const [about, setAbout] = useState(false);
  const [sustainability, setSustainability] = useState(false);
  const [investors, setInvestors] = useState(false);
  const [newsroom, setNewsroom] = useState(false);
  const [career, setCareer] = useState(false);
  const [contact, setContact] = useState(false);

  const unmountOthers = (
    exception: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (exception !== setAbout) {
      setAbout(false);
    }
    if (exception !== setSustainability) {
      setSustainability(false);
    }
    if (exception !== setInvestors) {
      setInvestors(false);
    }
    if (exception !== setNewsroom) {
      setNewsroom(false);
    }
    if (exception !== setCareer) {
      setCareer(false);
    }
    if (exception !== setContact) {
      setContact(false);
    }
  };

  const handleNav = (
    section: boolean,
    setSection: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    unmountOthers(setSection);
    setSection(!section);
  };

  return (
    <div id="navbar">
      <div className="cell left"></div>
      <div className="cell center">
        <button
          onClick={() => handleNav(about, setAbout)}
          className={about ? "active" : undefined}
        >
          About SAS
        </button>
        <button
          onClick={() => handleNav(sustainability, setSustainability)}
          className={sustainability ? "active" : undefined}
        >
          Sustainability
        </button>
        <button
          onClick={() => handleNav(investors, setInvestors)}
          className={investors ? "active" : undefined}
        >
          Investor relations
        </button>
        <button
          onClick={() => handleNav(newsroom, setNewsroom)}
          className={newsroom ? "active" : undefined}
        >
          Newsroom
        </button>
        <button
          onClick={() => handleNav(career, setCareer)}
          className={career ? "active" : undefined}
        >
          Career
        </button>
        <button
          onClick={() => handleNav(contact, setContact)}
          className={contact ? "active" : undefined}
        >
          Contact
        </button>
      </div>
      <div className="cell right">
        <Search className="searchIcon" />
      </div>
      {about && <NavMenuAbout />}
      {sustainability && <NavMenuSustainability />}
      {investors && <NavMenuInvestors />}
      {newsroom && <NavMenuNewsroom />}
      {career && <NavMenuCareer />}
      {contact && <NavMenuContact />}
    </div>
  );
};
