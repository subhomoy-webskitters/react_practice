import React from "react";

export default function Card(props) {
  return (
    <div className="card-item">
      <div className="card">
        <div className="img-holder">
          <img src={props.img_src} alt="" />
        </div>
        <div className="content-holder">
          <h3>{props.series_heading}</h3>
          <p>{props.series_description}</p>
          <a href="https://www.google.com/" className="btn">
            View More
          </a>
        </div>
      </div>
    </div>
  );
}
