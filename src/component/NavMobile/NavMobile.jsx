import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavMobile.scss";
const NavMobile = () => {
  const [menuVisible, setMenuVisible] = useState("--hide");
  const [menuBtn, setMenuBtn] = useState("");

  window.addEventListener("resize", () => {
    setMenuVisible("--hide");
    setMenuBtn("");
  });

  function showMenu() {
    switch (menuBtn) {
      case "nav-mobile-main-btn--when-menu-show":
        setMenuBtn("");
        break;
      case "":
        setMenuBtn("nav-mobile-main-btn--when-menu-show");
        break;
    }
    switch (menuVisible) {
      case "--hide":
        setMenuVisible("--show");
        break;
      case "--show":
        setMenuVisible("--hide");
        break;
    }
  }
  return (
    <>
      <div
        className={`nav-mobile-main-menu nav-mobile-main-menu${menuVisible}`}
      >
        <div className="nav-mobile-main-menu__container">
          <a href="#about" onClick={showMenu}>About Us</a>
          <a href="#services" onClick={showMenu}>Services</a>
          <a href="#portfolio" onClick={showMenu}>Portfolio</a>
          <a href="#pricing" onClick={showMenu}>Pricing</a>
          <a href="#blog" onClick={showMenu}>Blog</a>
          <a href="#reviews" onClick={showMenu}>Reviews</a>
          <a href="#contact" onClick={showMenu}>Contact</a>
        </div>
      </div>
      <button
        className={`nav-mobile-main-btn ${menuBtn}`}
        type="button"
        onClick={showMenu}
      ></button>
    </>
  );
};

export default NavMobile;
