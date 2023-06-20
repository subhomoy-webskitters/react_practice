import React, { useState } from "react";
import "./page.css";

export default function Blog() {
  const [imgId, setimgId] = useState(0);
  const [imgSrc, setimgSrc] = useState(`https://picsum.photos/id/${imgId}/600/400`);
  const handelChange = (e) => {
    setimgId(e.target.value);
  };
  const updateImage = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setimgSrc(`https://picsum.photos/id/${imgId}/600/400`);
    }
  };
  return (
    <>
      <h1>Blog Work</h1>
      <form>
        <input type="number" placeholder="Search" value={imgId} onKeyDown={updateImage} onChange={handelChange} />
      </form>

      <figure className="image-holder">
        <img src={imgSrc} alt="" />
      </figure>
    </>
  );
}
