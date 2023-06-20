import React, { useState } from "react";

export default function Form5Content(props) {
  const [line, setLine] = useState(false);
  const lineCut = () => {
    setLine(true);
  };
  return (
    <>
      <li key={props.index + 1}>
        <span style={{ textDecoration: line ? "line-through" : "none" }}>{props.item}</span>
        <button type="button" onClick={lineCut}>
          X
        </button>
      </li>
    </>
  );
}
