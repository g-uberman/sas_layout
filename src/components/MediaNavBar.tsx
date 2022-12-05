import { useState } from "react";
import {
    Bungalow,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  YouTube as YoutubeIcon,
} from "@mui/icons-material/";
import { Instagram } from "./SocialMedia/Instagram";
import { Twitter } from "./SocialMedia/Twitter";
import { Youtube } from "./SocialMedia/Youtube";

export const MediaNavBar = () => {
  const [instagram, setInstagram] = useState(true);
  const [twitter, setTwitter] = useState(false);
  const [youtube, setYoutube] = useState(false);

    const handleInstagram = () => {
        setTwitter(false);
        setYoutube(false);
        setInstagram(true);
    }

    const handleTwitter = () => {
        setInstagram(false);
        setYoutube(false);
        setTwitter(true);
    }

    const handleYoutube = () => {
        setInstagram(false);
        setTwitter(false);
        setYoutube(true);
    }

  return (
    <>
      <div id="mediaNavBar">
        <button onClick={handleInstagram} className={instagram ? "active" : undefined}>
          <div className="iconWrapper">
            <InstagramIcon className="icon" />
          </div>
          Instagram
        </button>
        <button onClick={handleTwitter} className={twitter ? "active" : undefined}>
          <div className="iconWrapper">
            <TwitterIcon className="icon" />
          </div>
          Twitter
        </button>
        <button onClick={handleYoutube} className={youtube ? "active" : undefined}>
          <div className="iconWrapper">
            <YoutubeIcon className="icon" />
          </div>
          Youtube
        </button>
      </div>
      <div id="mediaContainer">
        {instagram ? <Instagram /> : null}
        {twitter ? <Twitter /> : null}
        {youtube ? <Youtube /> : null}
      </div>
    </>
  );
};
