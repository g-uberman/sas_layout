import { ArrowRight } from "@mui/icons-material";

export const NavMapContact = () => {
  return (
    <div id="navMapBackground">
      <div className="navMapWrapper">
        <h4>
          <ArrowRight className="arrow" /> Contact
        </h4>
        <div className="navMap">
          <div className="stretcher">
            <ul>
              <li>
                <strong>Customer contact</strong>
              </li>
              <li>
                <strong>Media contacts</strong>
              </li>
              <li>
                <strong>Investor relations contacts</strong>
              </li>
              <li>
                <strong>Sustainability contacts</strong>
              </li>
            </ul>
          </div>
          <div className="stretcher">
            <div className="divider"></div>
            <ul>
              <li>
                <strong>Supplier information</strong>
              </li>
              <li>SAS Supplier Code of Conduct</li>
              <li>SAS Group General Terms and Conditions</li>
              <li>
                <strong>Usage of cookies</strong>
              </li>
              <li>
                <strong>Terms and conditions for use of SAS website</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
