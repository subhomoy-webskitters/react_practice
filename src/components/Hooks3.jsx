import React, { useState } from "react";

export default function Hooks3() {
  let time = new Date().toLocaleTimeString();
  let hour = time.slice(0, 2);
  console.log(hour);
  const [ctime, setTime] = useState(time);
  const timeShow = () => {
    // let hour = new Date().getHours();
    // console.log(hour);
    time = new Date().toLocaleTimeString();
    // setTime((time = new Date().toLocaleTimeString()));
    setTime(time);
  };
  setInterval(timeShow, 1000);

  return (
    <div>
      <h1>{parseInt(ctime) > 12 ? ctime + " PM" : ctime + " AM"}</h1>
    </div>
  );
}
