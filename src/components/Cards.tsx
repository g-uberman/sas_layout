import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Cards = () => {
  return (
    <div id="cardWrapper">
      <div className="card news">
        <h3>Latest News</h3>
        <div>
          <Link to="">
            Q4 2022: THE TRANSFORMATION PLAN PROGRESSES AND IMPORTANT GOALS ARE REACHED
          </Link>
          November 30, 2022 08:05 CET
        </div>
        <div>
          <Link to="">
            Q4 2022: TRANSFORMATIONSPLANEN FORTSÄTTER OCH VIKTIGA MÅL NÅS
          </Link>
          November 30, 2022 08:00 CET
        </div>
        <div>
          <Link to="">
            Enighet mellom SAS og kabinforeningene i Norge 22:45
          </Link>
          November 29, 2022
        </div>
        <div>
          <Link to="">CET SAS OPENS NEW ROUTE TO JFK AIRPORT IN NEW YORK</Link>
          November 24, 2022 11:30 CET
        </div>
        <Button variant="contained" size="large">
          See all events
        </Button>
      </div>
      <div className="card events">
        <h3 className="blue">SAS Events</h3>
        <Button variant="contained" size="large">
          See all events
        </Button>
      </div>
      <div className="card report">
        <h3>Interim Report Q4 2022</h3>
        <Button variant="contained" size="large">
          Read the report
        </Button>
      </div>
    </div>
  );
};
