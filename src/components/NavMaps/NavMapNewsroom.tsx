import { ArrowRight } from "@mui/icons-material";

export const NavMapNewsroom = () => {
  return (
    <div id="navMapBackground">
      <div className="navMapWrapper">
        <h4>
          <ArrowRight className="arrow" /> Newsroom
        </h4>
        <div className="navMap">
          <div className="stretcher">
            <ul>
              <li>
                <strong>Press releases</strong>
              </li>
              <li>Capital market</li>
              <li>Traffic figures</li>
              <li>SAS News</li>
              <li>Star Alliance</li>
            </ul>
          </div>
          <div className="stretcher">
            <div className="divider"></div>
            <ul>
              <li>
                <strong>SAS Comments</strong>
              </li>
              <li>
                <strong>Financial reports</strong>
              </li>
              <li>
                <strong>Imagebank</strong>
              </li>
              <li>
                <strong>Media contacts</strong>
              </li>
              <li>
                <strong>Photo permission</strong>
              </li>
            </ul>
          </div>
          <div className="stretcher">
            <div className="divider"></div>
            <ul>
              <li>
                <strong>Sponsorship requests</strong>
              </li>
              <li>
                <strong>Subscribe and follow</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
