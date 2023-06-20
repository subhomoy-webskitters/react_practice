import React, { useState } from "react";
import { AccordineData } from "./AccordineData";
import AccordineContent from "./AccordineContent";

export default function Accordine() {
  const [accordineData] = useState(AccordineData);
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Faq</h1>
      <ul className="card max-width-500">
        {accordineData.map((item) => {
          const { id } = item;
          return <AccordineContent key={id} {...item} />;
        })}
      </ul>
    </>
  );
}
