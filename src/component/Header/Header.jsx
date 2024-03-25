import "./Header.scss";
import Button from "../Button/Button";
import LinkedinSvg from "../Icon/LinkedinSvg";
import InstagramSvg from "../Icon/InstagramSvg";
import BehanceSvg from "../Icon/BehanceSvg";
import FacebookSvg from "../Icon/FacebookSvg";
import XSvg from "../Icon/XSvg";
import { MyUseContext } from "../../context/ContextGlobal";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Header = () => {
 
  console.log();
  return (
    <header id="header" className="header">
      <div className="container container--col">
        <div className="header__content">
          <ul>
            <li>
              <span>#</span>
              LANDING PAGE
            </li>
            <li>
              <span>#</span>
              ІНТЕРНЕТ МАГАЗИНИ
            </li>
            <li>
              <span>#</span>
              САЙТИ ДЛЯ БІЗНЕСУ
            </li>
          </ul>
          <h1>
            <span tabIndex={0} title="На шляху до успіху вашого бізнесу в інтернеті, я допоможу вам
              досягти вашої">
              На шляху до успіху вашого бізнесу в інтернеті, я допоможу вам
              досягти вашої&ensp;
              <span className="header__content_dynamic-text dynamic-text">
                <span className="dynamic-text__container">
                  <span>переваги</span>
                  <span>інноваційності</span>
                  <span>ефективності</span>
                  <span>унікальності</span>
                  <span>креативності</span>
                </span>
              </span>
            </span>
          </h1>
          <ul className="header__content_social-link">
            <li>
              <a href=""><InstagramSvg width="24px" fill="acc"/></a>
            </li>
            <li>
              <a href=""><FacebookSvg width="24px" fill="acc"/></a>
            </li>
            <li>
              <a href=""><BehanceSvg width="24px" fill="acc"/></a>
            </li>
            <li>
              <a href=""><XSvg width="24px" fill="acc"/></a>
            </li>
          </ul>
          <ul className="header__content_main-btn">
            <li><Button type={"white-solid"}>Замовити</Button></li>
            <li><Button type={"white-transparent"}>Детальніше</Button></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
