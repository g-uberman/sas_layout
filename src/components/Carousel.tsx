import { useState, useEffect } from "react";
import { Button } from "@mui/material";

export const Carousel = () => {
  const [carousel, setCarousel] = useState(0);
  let timeoutId: any = 0;

  const rotate = () => {
    if (carousel < 2) {
      setCarousel(carousel + 1);
    } else {
      setCarousel(0);
    }
  };

  useEffect(() => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(rotate, 3000);
  }, [carousel]);

  const handleButton = (number: number) => {
    clearTimeout(timeoutId);
    setCarousel(number);
  };

  return (
    <>
      {carousel === 0 && (
        <div id="carousel" className="zero">
          <div className="blueBox">
            <div className="white">
              SAS' business <br /> transformation plan{" "}
            </div>
          </div>
          <Button variant="contained" size="large" disableElevation>Read about the chapter 11 process</Button>
          <div id="carouselControl">
            <button
              className="blueSquare active"
              onClick={() => handleButton(0)}
            ></button>
            <button
              className="blueSquare"
              onClick={() => handleButton(1)}
            ></button>
            <button
              className="blueSquare"
              onClick={() => handleButton(2)}
            ></button>
          </div>
        </div>
      )}

      {carousel === 1 && (
        <div id="carousel" className="one">
          <div className="blueBox">
            <div className="white">Interim report Q4</div>
            <div className="gold">2022</div>
          </div>
          <Button variant="contained" size="large" disableElevation>Read the report</Button>
          <div id="carouselControl">
            <button
              className="blueSquare"
              onClick={() => setCarousel(0)}
            ></button>
            <button
              className="blueSquare active"
              onClick={() => setCarousel(1)}
            ></button>
            <button
              className="blueSquare"
              onClick={() => setCarousel(2)}
            ></button>
          </div>
        </div>
      )}

      {carousel === 2 && (
        <div id="carousel" className="two">
          <div className="blueBox">
            <div className="white">Sustainability</div>
            <div className="gold">at SAS</div>
          </div>
          <Button variant="contained" size="large" disableElevation>Read more</Button>
          <div id="carouselControl">
            <button
              className="blueSquare"
              onClick={() => setCarousel(0)}
            ></button>
            <button
              className="blueSquare"
              onClick={() => setCarousel(1)}
            ></button>
            <button
              className="blueSquare active"
              onClick={() => setCarousel(2)}
            ></button>
          </div>
        </div>
      )}
    </>
  );
};
