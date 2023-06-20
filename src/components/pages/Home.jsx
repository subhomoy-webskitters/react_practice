import React from "react";
import CommonLayout from "./CommonLayout";
import CmsData from "./CmsData";

export default function Home() {
  return (
    <>
      <CommonLayout imgSrc={CmsData.homeData.banner} title={CmsData.homeData.title} content={CmsData.homeData.content} />
    </>
  );
}
