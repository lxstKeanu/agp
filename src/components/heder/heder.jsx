/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import logoag from "../../images/agp1.jpg";
import LanguageSelect from "../languageSelect";
import { useTranslation } from "react-i18next";
import "./header.css";

export default function Header() {
  const { t } = useTranslation();

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
        <LanguageSelect />
      </div>
    </div>
  );
}
