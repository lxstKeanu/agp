/** @format */

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logoag from "../../images/agp1.jpg";
import { ReactComponent as ArrowUp } from "../../images/up-arrow.svg";
import { ReactComponent as ArrowDown } from "../../images/down-arrow.svg";
import { useTranslation } from "react-i18next";
import "./header.css";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);

  const onChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    for (
      let index = 0;
      index < document.getElementsByClassName("lang").length;
      index++
    ) {
      const element = document.getElementsByClassName("lang")[index];
      if (element.value === i18n.language) {
        element.setAttribute("selected", "true");
      }
    }
  });

  return (
    <div>
      <div className="header">
        <div className="logo">
          <div className="logo-ag"></div>
          <NavLink className={"nav-link"}>
            <img
              className="logo-ag-photo"
              src={logoag}
              alt=" logo Alesia AG Photographer"
            />
            <span className="logo-name">Alesia AG Photographer</span>
          </NavLink>
        </div>
        <div className="nav-btn">
          <NavLink className={"nav-link"}>
            <span className=" btn btn-about me">{t("About me")}</span>
          </NavLink>
          <NavLink className={"nav-link"}>
            <span className=" btn btn-my-works">{t("My works")}</span>
          </NavLink>
        </div>
        <div>
          <form id="form__cover">
            <div id="select-box">
              <input
                type="checkbox"
                id="options-view-button"
                onClick={() => setShow(!show)}
              />
              <div id="select-button" className="section">
                <span className="arrow">
                  {show ? <ArrowUp /> : <ArrowDown />}
                </span>
                <div id="selected-value">
                  <span>{t("language")}</span>
                </div>
              </div>
              <div id="options">
                <div className="option" onChange={onChangeLang}>
                  <input
                    className="s-c top"
                    type="radio"
                    name="platform"
                    value="en"
                  />
                  <span className="label">English</span>
                  <span className="opt-val">English</span>
                </div>
                <div className="option" onChange={onChangeLang}>
                  <input
                    className="s-c top"
                    type="radio"
                    name="platform"
                    value="ua"
                  />
                  <span className="label">Українська</span>
                  <span className="opt-val">Українська</span>
                </div>
                <div className="option" onChange={onChangeLang}>
                  <input
                    className="s-c top"
                    type="radio"
                    name="platform"
                    value="es"
                  />
                  <span className="label">Española</span>
                  <span className="opt-val">Española</span>
                </div>
                <div id="option-bg"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
