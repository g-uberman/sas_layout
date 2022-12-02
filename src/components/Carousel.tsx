import { Button } from "@mui/material";

export const Carousel = () => {
  return (
    <div id="carousel" className="first">
      <div className="blueBox">
        <div className="white">Interim report Q4</div>
        <div className="gold">2022</div>
      </div>
      <Button variant="contained">Read the report</Button>
      <section>
        <button className="smallSquare"> </button>
        <button className="smallSquare"> </button>
        <button className="smallSquare"> </button>
      </section>
    </div>
  );
};
