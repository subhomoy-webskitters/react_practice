import React from "react";
import {useParams} from "react-router-dom";

export default function Service2() {
  const {fname, lname} = useParams();
  return (
    <div>
      <h1>
        Service 2 {fname} {lname}
      </h1>
    </div>
  );
}
