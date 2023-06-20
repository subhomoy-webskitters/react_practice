import React from "react";

export const SlotContent = (props) => {
  const { x, y, z } = props;
  return (
    <>
      <h1>
        {x === y && y === z ? "This is Matched" : "This is Not Matched"}
        <span style={{ marginLeft: "10px" }}>
          {x} {y} {z}
        </span>
      </h1>
    </>
  );
};

export default function SlotMachine() {
  return (
    <div>
      <SlotContent x="😄" y="😄" z="😄" />
      <SlotContent x="😄" y="😄" z="👍" />
      <SlotContent x="😄" y="😄" z="🥉" />
    </div>
  );
}
