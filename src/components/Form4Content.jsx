import React from "react";

export default function Form4Content(props) {
  return (
    <>
      <li id={props.id}>
        {props.item}
        <button
          type="button"
          onClick={() => {
            props.delItem(props.id);
          }}
        >
          X
        </button>
      </li>
    </>
  );
}
