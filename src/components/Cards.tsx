import { Button } from "@mui/material";

export const Cards = () => {
  return (
    <div id="cardWrapper">
      <div className="card">
        <h3>Latest News</h3>
        <Button variant="contained" size="large">
          See all events
        </Button>
      </div>
      <div className="card">
        <h3 className="blue">SAS Events</h3>
        <Button variant="contained" size="large">
          See all events
        </Button>
      </div>
      <div className="card">
        <h3>Interim Report Q4 2022</h3>
        <Button variant="contained" size="large">
          Read the report
        </Button>
      </div>
    </div>
  );
};
