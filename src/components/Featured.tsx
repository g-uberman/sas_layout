import { ArrowForward } from "@mui/icons-material";

export const Featured = () => {
  return (
    <div id="featured">
      <div className="feature">
        <h3>Traffic Program</h3>
      </div>
      <div className="feature">
        <h3>Annual & Sustainability Report FY2021</h3>
      </div>
      <div className="feature">
        <h3>
          Latest Share <br />
          0.57 SEK
        </h3>
        <div id="stockWrapper">
          <div id="arrowWrapper">
            <ArrowForward className="arrowIcon" />
            <div>
              -2.48%
              <br />
              -0.01 SEK
            </div>
          </div>
          <div>
            5 December 2022 at 18:00 CET
            <br />
            SAS AB | Stockholm
          </div>
        </div>
      </div>
    </div>
  );
};
