import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import "./Nav.scss";
import { useEffect, useRef, useState } from "react";
import NavMobile from "../NavMobile/NavMobile";

const Nav = () => {
  const navElement = useRef(null);
  const rootElement = document.getElementById("root");
  const [darkLogo, setDarkLogo] = useState("--light");
  const [darkBtnOutline, setDarkBtnOutline] = useState("--outline");

  rootElement.addEventListener("scroll", () => {
    const curScroll = rootElement.scrollTop;

    if (curScroll > 700) {
      if (!navElement.current.classList.contains("nav-main--scroll-style")) {
        navElement.current.classList.add("nav-main--scroll-style");
      }
      const endScroll = curScroll + innerHeight;
      const calculateScrollEnd = rootElement.scrollHeight - endScroll;
      if (calculateScrollEnd < 100) {
        setDarkLogo("--light");
        setDarkBtnOutline("--outline")
        return;
      }
      setDarkBtnOutline("--outline-dark")
      setDarkLogo("--dark");
    } else if (curScroll <= 700) {
      if (navElement.current.classList.contains("nav-main--scroll-style")) {
        navElement.current.classList.remove("nav-main--scroll-style");
      }
      setDarkLogo("--light");
      setDarkBtnOutline("--outline")
    }

    const [...allElements] = document.getElementsByTagName("section");

    allElements.forEach((val) => {
      const valPos = val.getBoundingClientRect();
      const [...linkAll] = document.querySelectorAll(".menu-main__item");
      switch (val.getAttribute("id")) {
        case "about":
          if (valPos.y != 0) {
            linkAll.forEach((val) => {
              val.classList.remove("menu-main__item--focus");
            });
          }
          break;
      }
      if (valPos.y === 0) {
        const linkAuto = document.querySelector(
          `[datatypelink="${val.getAttribute("id")}"]`
        );

        linkAll.forEach((val) => {
          val.classList.remove("menu-main__item--focus");
        });

        if (!linkAuto.classList.contains("menu-main__item--focus")) {
          linkAuto.classList.add("menu-main__item--focus");
        }
      }
    });
  });

  const scrollToSection = (id, el) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    const [...allLink] = document.querySelectorAll(".menu-main__item");
    allLink.forEach((val) => {
      if (val.classList.contains("menu-main__item--focus")) {
        val.classList.remove("menu-main__item--focus");
      }
    });

    el.classList.add("menu-main__item--focus");
  };

  return (
    <div className="header__nav-main nav-main" ref={navElement}>
      <Logo dark={darkLogo} />
      <nav className="nav-main__menu-main menu-main">
        <Link
          datatypelink="about"
          className="menu-main__item"
          onClick={(e) => {
            scrollToSection("about", e.target);
          }}
        >
          About Us
        </Link>
        <Link
          datatypelink="services"
          className="menu-main__item"
          onClick={(e) => {
            scrollToSection("services", e.target);
          }}
        >
          Services
        </Link>
        <Link
          className="menu-main__item"
          datatypelink="portfolio"
          onClick={(e) => {
            scrollToSection("portfolio", e.target);
          }}
        >
          Portfolio
        </Link>
        <Link
          className="menu-main__item"
          datatypelink="pricing"
          onClick={(e) => {
            scrollToSection("pricing", e.target);
          }}
        >
          Pricing
        </Link>
        <Link
          className="menu-main__item"
          datatypelink="blog"
          onClick={(e) => {
            scrollToSection("blog", e.target);
          }}
        >
          Blog
        </Link>
        <Link
          className="menu-main__item"
          datatypelink="reviews"
          onClick={(e) => {
            scrollToSection("reviews", e.target);
          }}
        >
          Reviews
        </Link>
        <Link
          className="menu-main__item"
          datatypelink="contact"
          onClick={(e) => {
            scrollToSection("contact", e.target);
          }}
        >
          Contact
        </Link>
      </nav>
      <NavMobile/>
    </div>
  );
};

export default Nav;
