import React, {useState, useEffect} from "react";
import {FirstName, LastName} from "../../App";

export default function ComC() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `I am Clicking ${count}`;
  });

  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <>
                    <h1>
                      My name is {fname} {lname}
                    </h1>
                    <button
                      type="button"
                      onClick={() => {
                        setCount(count + 1);
                      }}
                    >
                      Click time {count}
                    </button>
                  </>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
}
