import React, { useState } from "react";

export default function Form3() {
  const [item, setItem] = useState({
    fName: "",
  });
  const [list, setList] = useState([]);
  const handler = (e) => {
    const { value, name } = e.target;
    setItem({ [name]: value });
  };
  const addList = () => {
    setList((oldlist) => {
      return [...oldlist, item.fName];
    });
    setItem({ fName: "" });
  };
  const delItem = (e) => {
    e.target.closest("li").remove();
  };
  return (
    <div className="container">
      <div className="todo-container">
        <h1>Todo List</h1>
        <div className="input-holder">
          <input type="text" name="fName" value={item.fName} placeholder="Put todo name" onChange={handler} />
          <button type="button" onClick={addList}>
            +
          </button>
        </div>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index} id={index}>
                {item}
                <button type="button" onClick={delItem}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
