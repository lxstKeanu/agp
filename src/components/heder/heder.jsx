/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <NavLink className={"nav-link"}>
            <span className="logo-name">AG Photographer</span>
          </NavLink>
        </div>
        <div className="nav-btn">
          <NavLink className={"nav-link"}>
            <span className="btn-about me">about me</span>
          </NavLink>
          <NavLink className={"nav-link"}>
            <span className="btn-my works">my works</span>
          </NavLink>
        </div>
        <div className="languages">
          <span className="ua">UA</span>
          <span className="en">EN</span>
        </div>
      </div>
    </div>
  );
}
