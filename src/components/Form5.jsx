import React, { useState } from "react";
import Form5Content from "./Form5Content";

export default function Form5() {
  const [cname, setCname] = useState({
    fName: "",
  });
  const [item, setItem] = useState([]);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setCname({ [name]: value });
  };

  const commonFunction = () => {
    setItem((oldlist) => {
      return [...oldlist, cname.fName];
    });
  };

  const addItem = () => {
    commonFunction();
  };
  const addItemEnter = (e) => {
    if (e.key === "Enter") {
      commonFunction();
    }
  };

  return (
    <div>
      <div className="container">
        <div className="todo-container">
          <h1>Todo List</h1>
          <div className="input-holder">
            <input type="text" name="fName" value={cname.fName} placeholder="Put todo name" onKeyDown={addItemEnter} onChange={handelChange} />
            <button type="button" onClick={addItem}>
              +
            </button>
          </div>
          <ul>
            {item.map((item, index) => {
              return <Form5Content item={item} index={index} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
