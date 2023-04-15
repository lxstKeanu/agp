/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logoag from "../../images/agp1.png";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hooks/use-lockalstorage";
import i18n from "../../i18n/i18n";

export default function Header() {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "en");

  const handleLenguageChange = () => {
    if (language === "ua") {
      i18n.changeLanguage("en");
      setLanguage("en");
    } else if (language === "en") {
      i18n.changeLanguage("ua");
      setLanguage("ua");
    }
  };
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
        <div className="languages">
          <button className="custom-btn btn-7" onClick={handleLenguageChange}>
            <span>{language === "ua" ? t("ukrainian") : t("english")}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
