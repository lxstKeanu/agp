/** @format */

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logoag from "../../images/agp1.jpg";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

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
            <img className="logo-ag-photo" src={logoag} alt="" />
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
          {/* <select
            className="select"
            style={{ width: "100px" }}
            onChange={onChangeLang}
          >
            <option value="en" className="lang">
              English
            </option>
            <option value="ua" className="lang">
              Українська
            </option>
            <option value="es" className="lang">
              Española
            </option>
          </select> */}
          <form id="form__cover">
            <div id="select-box">
              <input type="checkbox" id="options-view-button" />
              <div id="select-button" class="section">
                <div id="selected-value">
                  <span>{t("language")}</span>
                </div>
              </div>
              <div id="options">
                <div class="option" onChange={onChangeLang}>
                  <input
                    class="s-c top"
                    type="radio"
                    name="platform"
                    value="en"
                  />
                  <span class="label">English</span>
                  <span class="opt-val">English</span>
                </div>
                <div class="option" onChange={onChangeLang}>
                  <input
                    class="s-c top"
                    type="radio"
                    name="platform"
                    value="ua"
                  />
                  <span class="label">Українська</span>
                  <span class="opt-val">Українська</span>
                </div>
                <div class="option" onChange={onChangeLang}>
                  <input
                    class="s-c top"
                    type="radio"
                    name="platform"
                    value="es"
                  />
                  <span class="label">Española</span>
                  <span class="opt-val">Española</span>
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
