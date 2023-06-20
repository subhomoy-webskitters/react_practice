import React from "react";
import Card from "./Card";
import { Sdata } from "./Sdata";

export default function Amazon() {
  return (
    <div>
      <Card
        key={Sdata[1].id}
        img_src={Sdata[1].series_img}
        series_heading={Sdata[1].series_name}
        series_description={Sdata[1].series_content}
      />
    </div>
  );
}
