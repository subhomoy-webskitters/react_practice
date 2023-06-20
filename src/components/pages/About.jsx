import React from "react";
import CommonLayout from "./CommonLayout";
import CmsData from "./CmsData";

export default function About() {
  return (
    <>
      <CommonLayout imgSrc={CmsData.aboutData.banner} title={CmsData.aboutData.title} content={CmsData.aboutData.content} />
    </>
  );
}
