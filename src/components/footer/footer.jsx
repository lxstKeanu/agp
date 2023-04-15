/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import logoag from "../../images/agp1.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <div className="logo-ag"></div>
        <NavLink className={"nav-link"}>
          <img className="logo-ag-photo" src={logoag} alt="" />
          <span className="footer-logo-name">Alesia AG Photographer</span>
        </NavLink>
      </div>
      <span className="year-of-creation">©2023</span>
      <div className="footer-by">
        <a
          className="footer-link"
          href="https://t.me/lxstKeanu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="footer-creator">By lxstKeanu</span>
        </a>
      </div>
    </footer>
  );
}
export default Footer;
