import React from "react";
import Amazon from "./Amazon";
import Netflix from "./Netflix";

export default function Series() {
  let series = "netflix";
  return (
    <div className="card-holder">
      {/* {Sdata.map((val) => {
        return (
          <Card
            key={val.id}
            img_src={val.series_img}
            series_heading={val.series_name}
            series_description={val.series_content}
          />
        );
      })} */}
      {series === "netflix" ? <Netflix /> : <Amazon />}
    </div>
  );
}
