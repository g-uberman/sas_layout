import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material/";

export const Links = () => {
  return (
    <div id="links">
      <ul>
        <li>
          <div className="iconWrapper">
            <Facebook className="icon" />
          </div>
          <div>Like us</div>
        </li>

        <li>
          <div className="iconWrapper">
            <Twitter className="icon" />
          </div>
          <div>#flysas</div>
        </li>

        <li>
          <div className="iconWrapper">
            <Instagram className="icon" />
          </div>
          <div>Follow @SAS</div>
        </li>

        <li>
          <div className="iconWrapper">
            <LinkedIn className="icon" />
          </div>
          <div>Follow us</div>
        </li>

        <li>
          <div className="iconWrapper">
            <YouTube className="icon" />
          </div>
          <div>Subscribe to SAS</div>
        </li>
      </ul>
    </div>
  );
};
