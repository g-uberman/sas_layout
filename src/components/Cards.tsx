import { Button } from "@mui/material";

export const Cards = () => {
  return (
    <div id="cardWrapper">
      <div className="card">
        <h2>Latest News</h2>
        card1
        <Button variant="contained" size="large" disableElevation>
          See all events
        </Button>
      </div>
      <div className="card">
        <h2>SAS Events</h2>
        card2
        <Button variant="contained" size="large" disableElevation>
          See all events
        </Button>
      </div>
      <div className="card">
        <h2>Interim Report Q4 2022</h2>
        card3
        <Button variant="contained" size="large" disableElevation>
          Read the report
        </Button>
      </div>
    </div>
  );
};
