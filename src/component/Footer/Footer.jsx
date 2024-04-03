import "./Footer.scss";
import { Link } from "react-router-dom";
import BehanceSvg from "../Icon/BehanceSvg";
import XSvg from "../Icon/XSvg";
import InstagramSvg from "../Icon/InstagramSvg";
import FacebookSvg from "../Icon/FacebookSvg";
import LinkedinSvg from "../Icon/LinkedinSvg";
import Logo from "../Logo/Logo";
import { MyUseContext } from "../../context/ContextGlobal";
import GitHubSvg from "../Icon/GitHubSvg";

const Footer = () => {
  const { socialLink } = MyUseContext();
  return (
    <footer id="footer">
      <div className="container container__row">
        <div className="footer">
          
          <div className="footer__menu">
          <Logo type="--dark" />
          <ul className="footer__menu_link">
            <li><Link to="/about">Про мене</Link></li>
            <li><Link to="/services">Послуги</Link></li>
            <li><Link to="/pricing">Ціни</Link></li>
            <li><Link to="/about">Портфоліо</Link></li>
            <li><Link to="/about">Блог</Link></li>
            <li><Link to="/about">Відгуки</Link></li>
            <li><Link to="/about">Технології</Link></li>
            <li><Link to="/about">Контакти</Link></li>
          </ul>
          <ul className="footer__menu_social">
              <li>
                <a href="#" target="__blank"><InstagramSvg width="24px" height="24px"/></a>
              </li>
              <li>
                <a href="#" target="__blank"><FacebookSvg width="24px" height="24px"/></a>
              </li>
              <li>
                <a href="#" target="__blank"><LinkedinSvg width="24px" height="24px"/></a>
              </li>
              <li>
                <a href="#" target="__blank"><XSvg width="24px" height="24px"/></a>
              </li>
              <li>
                <a href="#" target="__blank"><BehanceSvg width="24px" height="24px"/></a>
              </li>
              <li>
                <a href="#" target="__blank"><GitHubSvg width="24px" height="24px"/></a>
              </li>
            </ul>
          </div>
          <div className="footer__copyright">
            <p>© 2024 Copyright, Inc. All rights reserved.</p>
            <ul>
              <li>
               <Link to="/">Політика приватності</Link>
              </li>
              <li>
               <Link to="/">Політика користувача</Link>
              </li><li>
               <Link to="/">Cookies</Link>
              </li>
             
              
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
