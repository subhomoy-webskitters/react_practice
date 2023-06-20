import React, { useState } from "react";

export default function Hooks2() {
  let currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);
  const ShowTime = () => {
    setTime((currentTime = new Date().toLocaleTimeString()));
  };
  return (
    <div>
      <h1>{time}</h1>
      <button type="button" onClick={ShowTime}>
        Click
      </button>
    </div>
  );
}
