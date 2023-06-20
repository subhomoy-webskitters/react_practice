import React from "react";
import Card from "./Card";
import { Sdata } from "./Sdata";

export default function Netflix() {
  return (
    <>
      <Card
        key={Sdata[0].id}
        img_src={Sdata[0].series_img}
        series_heading={Sdata[0].series_name}
        series_description={Sdata[0].series_content}
      />
    </>
  );
}
