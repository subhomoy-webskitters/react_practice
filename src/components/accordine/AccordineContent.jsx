import React, { useState } from "react";

export default function AccordineContent({ question, answer }) {
  const [show, setShow] = useState(false);
  const showAnswer = () => {
    setShow(() => !show);
  };
  return (
    <li>
      <h4 className={show ? "active" : ""}>
        <span>{question}</span>
        <button type="button" onClick={showAnswer}>
          {show ? " ➖ " : " ➕ "}
        </button>
      </h4>
      {show ? <p className="active">{answer}</p> : <p>{answer}</p>}
    </li>
  );
}
