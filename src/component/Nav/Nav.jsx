import "./Nav.scss";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuSvg from "../Icon/MenuSvg";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState('');
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
  return (
    <>
      <div className={`nav__mobile-menu nav__mobile-menu${toggleMenu}`}>
        <nav>
          <Link to="/about-me"  onClick={() => toggleMobileMen()}>About Me</Link>
          <Link to="/services"  onClick={() => toggleMobileMen()}>Services</Link>
          <Link to="/pricing"  onClick={() => toggleMobileMen()}>Pricing</Link>
          <Link to="/portfolio"  onClick={() => toggleMobileMen()}>Portfolio</Link>
          <Link to="/blog"  onClick={() => toggleMobileMen()}>Blog</Link>
          <Link to="/reviews"  onClick={() => toggleMobileMen()}>Reviews</Link>
          <Link to="/technology"  onClick={() => toggleMobileMen()}>Technology</Link>
          <Link to="/contact" onClick={() => toggleMobileMen()}>Contact</Link>
        </nav>
      </div>
      <div className="nav">
        <div className="container">
          <nav className="nav__nav-main">
            <Link className="nav__link" to="/about-me">
              About Me
            </Link>
            <Link className="nav__link" to="/services">
              Services
            </Link>
            <Link className="nav__link" to="/pricing">
              Pricing
            </Link>
            <Link className="nav__link" to="/portfolio">
              Portfolio
            </Link>
            <Logo />
            <Link className="nav__link" to="/blog">
              Blog
            </Link>
            <Link className="nav__link" to="/reviews">
              Reviews
            </Link>
            <Link className="nav__link" to="/technology">
              Technology
            </Link>
            <Link className="nav__link" to="/contact">
              Contact
            </Link>
            <button
              type="button"
              className="nav__mobile-menu-btn"
              onClick={() => toggleMobileMen()}
            >
              <MenuSvg width="24px" height="24px"/>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
