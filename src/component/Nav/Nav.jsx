import "./Nav.scss";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import MenuSvg from "../Icon/MenuSvg";
import { MyUseContext } from "../../context/ContextGlobal";
import ChangeLang from "../ChangeLang/ChangeLang";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const asActive = ({ isActive }) =>
    isActive ? "active-nav-main-link" : "";

  return (
    <>
      <div className={`nav ${toggleMenu ? "nav--menu-showed" : ""}`}>
        <div className="container">
          <div className="nav__nav-header">
            <Logo onClick={setToggleMenu} direct={"/"} type="--light" />
            <button
              type="button"
              className="nav__btn-menu"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <MenuSvg />
            </button>
          </div>
        </div>
        
        <nav
          onClick={() => setToggleMenu(false)}
          className={`nav__nav-main ${
            toggleMenu ? "nav__nav-main--show" : "nav__nav-main--hide"
          }`}
        >
          <ul>
            <li>
              <span>01</span>
              <NavLink
                onClick={() => setToggleMenu(!toggleMenu)}
                className={asActive}
                to="/about-me"
              >
                About Me
              </NavLink>
            </li>
            <li>
              <span>02</span>
              <NavLink
                onClick={() => setToggleMenu(!toggleMenu)}
                className={asActive}
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <span>03</span>
              <NavLink
                onClick={() => setToggleMenu(!toggleMenu)}
                className={asActive}
                to="/pricing"
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <span>04</span>
              <NavLink
                onClick={() => setToggleMenu(!toggleMenu)}
                className={asActive}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <span>05</span>
              <NavLink
                onClick={() => setToggleMenu(!toggleMenu)}
                className={asActive}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <span>06</span>
              <NavLink
                onClick={() => setToggleMenu(!toggleMenu)}
                className={asActive}
                to="/reviews"
              >
                Reviews
              </NavLink>
            </li>
            <li>
              <span>07</span>
              <NavLink
                onClick={() => setToggleMenu(!toggleMenu)}
                className={asActive}
                to="/technology"
              >
                Technology
              </NavLink>
            </li>
            <li>
              <span>08</span>
              <NavLink
                onClick={() => setToggleMenu(!toggleMenu)}
                className={asActive}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <ChangeLang />
        </nav>
      </div>
    </>
  );
};

export default Nav;
