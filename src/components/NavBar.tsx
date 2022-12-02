import { Search } from '@mui/icons-material';

export const NavBar = () => {
  return (
    <div id="navbar">
      <div className="cell"></div>
      <div className="cell">
        <button>About SAS</button>
        <button>Sustainability</button>
        <button>Investor relations</button>
        <button>Newsroom</button>
        <button>Career</button>
        <button>Contact</button>
      </div>
      <div className="cell"><Search color="primary"/></div>
    </div>
  );
};
