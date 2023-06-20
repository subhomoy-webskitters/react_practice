import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  const [showHide, setshowHide] = useState(false);

  return (
    <>
      <nav>
        <ul className="navigation">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/service">
              Service
              <span
                className="clik-show-hide"
                onClick={() => {
                  setshowHide((prevState) => !prevState);
                }}
              >
                +
              </span>
            </NavLink>
            <ul className={showHide ? "sub-nav active" : "sub-nav"}>
              <li>
                <NavLink to="/service/service1">Service1</NavLink>
              </li>
              <li>
                <NavLink to="/service/service2/sumi/pal">Service2</NavLink>
              </li>
              <li>
                <NavLink to="/service/service3">Service3</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
