import { useState } from "react";
import { Instagram, Twitter, YouTube } from "@mui/icons-material/";
// import TwitterIcon from '@mui/icons-material/Twitter';
// import YouTubeIcon from '@mui/icons-material/YouTube';

export const MediaNavBar = () => {
  const [instagram, setInstagram] = useState(true);
  const [twitter, setTwitter] = useState(false);
  const [youtube, setYoutube] = useState(false);

  return (
    <div id="mediaNavBar">
      <button className={instagram ? "active" : undefined}>
        <div className="iconWrapper">
          <Instagram className="icon" />
        </div>
        Instagram
      </button>
      <button className={twitter ? "active" : undefined}>
        <div className="iconWrapper">
          <Twitter className="icon" />
        </div>
        Twitter
      </button>
      <button className={youtube ? "active" : undefined}>
        <div className="iconWrapper">
          <YouTube className="icon" />
        </div>
        Youtube
      </button>
    </div>
  );
};
