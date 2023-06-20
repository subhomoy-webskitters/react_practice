import React, { useState } from "react";

export default function Form1() {
  const [cname, setCname] = useState();
  const [fullname, setFullName] = useState();
  const handelChange = (e) => {
    setCname(e.target.value);
  };
  const keyPress = (e) => {
    if (e.key === "Enter") {
      setFullName(cname);
    }
  };
  const viewName = (e) => {
    setFullName(cname);
  };
  return (
    <div>
      <h1>Hello,{fullname}</h1>
      <input
        type="text"
        name="cname"
        value={cname}
        placeholder="Your Name"
        onChange={handelChange}
        onKeyDown={keyPress}
      />
      <button type="button" onClick={viewName}>
        Click
      </button>
    </div>
  );
}
