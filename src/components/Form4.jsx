import React, { useState } from "react";
import Form4Content from "./Form4Content";

export default function Form4() {
  const [item, setItem] = useState({
    fName: "",
  });
  const [list, setList] = useState([]);
  const handler = (e) => {
    const { value, name } = e.target;
    setItem({ [name]: value });
  };
  const commonFunction = () => {
    setList((oldlist) => {
      return [...oldlist, item.fName];
    });
    setItem({ fName: "" });
  };
  const addList = () => {
    commonFunction();
  };
  const enterClick = (e) => {
    if (e.key === "Enter") {
      commonFunction();
    }
  };

  const delItem = (id) => {
    setList((oldlist) => {
      return oldlist.filter((addItm, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="container">
      <div className="todo-container">
        <h1>Todo List</h1>
        <div className="input-holder">
          <input type="text" name="fName" value={item.fName} placeholder="Put todo name" onChange={handler} onKeyDown={enterClick} />
          <button type="button" onClick={addList}>
            +
          </button>
        </div>
        <ul>
          {list.map((item, index) => {
            return <Form4Content item={item} key={index} id={index} delItem={delItem} />;
          })}
        </ul>
      </div>
    </div>
  );
}
