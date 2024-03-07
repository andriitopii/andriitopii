import "./Nav.scss";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import MenuSvg from "../Icon/MenuSvg";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState("");
  const toggleMobileMen = () => {
    switch (toggleMenu) {
      case "":
        setToggleMenu("--show");
        break;
      case "--show":
        setToggleMenu("");
        break;
    }
  };
  const asActive = ({ isActive }) =>
    isActive ? "nav__link active-nav-main-link" : "nav__link";
  return (
    <>
      <div className={`nav__mobile-menu nav__mobile-menu${toggleMenu}`}>
        <nav>
          <Link to="/about-me" onClick={() => toggleMobileMen()}>
            About Me
          </Link>
          <Link to="/services" onClick={() => toggleMobileMen()}>
            Services
          </Link>
          <Link to="/pricing" onClick={() => toggleMobileMen()}>
            Pricing
          </Link>
          <Link to="/portfolio" onClick={() => toggleMobileMen()}>
            Portfolio
          </Link>
          <Link to="/blog" onClick={() => toggleMobileMen()}>
            Blog
          </Link>
          <Link to="/reviews" onClick={() => toggleMobileMen()}>
            Reviews
          </Link>
          <Link to="/technology" onClick={() => toggleMobileMen()}>
            Technology
          </Link>
          <Link to="/contact" onClick={() => toggleMobileMen()}>
            Contact
          </Link>
        </nav>
      </div>
      <div className="nav">
        <div className="container">
          <nav className="nav__nav-main">
            <Logo type="--light" />
            <NavLink className={asActive} to="/about-me">
              About Me
            </NavLink>
            <NavLink className={asActive} to="/services">
              Services
            </NavLink>
            <NavLink className={asActive} to="/pricing">
              Pricing
            </NavLink>
            <NavLink className={asActive} to="/portfolio">
              Portfolio
            </NavLink>
            <NavLink className={asActive} to="/blog">
              Blog
            </NavLink>
            <NavLink className={asActive} to="/reviews">
              Reviews
            </NavLink>
            <NavLink className={asActive} to="/technology">
              Technology
            </NavLink>
            <NavLink className={asActive} to="/contact">
              Contact
            </NavLink>
            <button
              type="button"
              className="nav__mobile-menu-btn"
              onClick={() => toggleMobileMen()}
            >
              <MenuSvg />
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
