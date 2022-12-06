import { ArrowRight } from "@mui/icons-material";

export const NavMenuCareer = () => {
  return (
    <div id="navMapBackground">
      <div className="navMapWrapper">
        <h4>
          <ArrowRight className="arrow" /> Career
        </h4>
        <div className="navMap">
          <div className="stretcher">
            <ul>
              <li>
                <strong>Working at SAS</strong>
              </li>
              <li>Benefits and compensations</li>
              <li>Learning and development</li>
              <li>Sustainability and innovation</li>
            </ul>
          </div>
          <div className="stretcher">
            <div className="divider"></div>
            <ul>
              <li>
                <strong>Teams</strong>
              </li>
              <li>Airport staff</li>
              <li>Cabin crew</li>
              <li>Corporate office</li>
              <li>Engineering & Maintenance</li>
              <li>IT & Digital</li>
              <li>Pilot</li>
            </ul>
          </div>
          <div className="stretcher">
            <div className="divider"></div>
            <ul>
              <li>
                <strong>Vacancies</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
