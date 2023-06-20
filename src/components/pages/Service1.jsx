import React from "react";
import {useNavigate} from "react-router-dom";

export default function Service1() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Service 1</h1>
      <button
        type="button"
        // For Go back
        // onClick={() => {
        //   navigate(-1);
        // }}
        onClick={() => {
          navigate("/", {replace: true});
        }}
      >
        Back
      </button>
    </div>
  );
}
