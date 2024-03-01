import "./Footer.scss";
import { Link } from "react-router-dom";
import BehanceSvg from "../Icon/BehanceSvg";
import XSvg from "../Icon/XSvg";
import InstagramSvg from "../Icon/InstagramSvg";
import FacebookSvg from "../Icon/FacebookSvg";
import LinkedinSvg from "../Icon/LinkedinSvg";
import Logo from "../Logo/Logo";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container container--col">
        <div className="footer__write-me">
          <p>
            <span className="accent-text"><h2>Write me:</h2></span>
            <a href="mailto:andriitopii@icloud.com">andriitopii@icloud.com</a>
          </p>
          <ul>
            <li>
              <a href="#"><BehanceSvg width="24px" height="24px" /></a>
            </li>
            <li>
              <a href="#"><XSvg width="24px" height="24px" /></a>
            </li>
            <li>
              <a href="#"><InstagramSvg width="24px" height="24px" /></a>
            </li>
            <li>
              <a href="#"><FacebookSvg width="24px" height="24px" /></a>
            </li>
            <li>
              <a href="#"><LinkedinSvg width="24px" height="24px" /></a>
            </li>
          </ul>
        </div>
        <div className="footer__footer-menu">
          <ul>
            <h3>Services</h3>
            <li>
              <Link to="/services/landing-page">Landing page</Link>
            </li>
            <li>
              <Link to="/services/portfolio-site">Portfolio site</Link>
            </li>
            <li>
              <Link to="/services/bussines-site">Bussines site</Link>
            </li>
          </ul>
          <ul>
            <h3>Technology</h3>
            <li>
              <Link to="/">ReactJS</Link>
            </li>
            <li>
              <Link to="/services/landing-page">NodeJS</Link>
            </li>
            <li>
              <Link to="/services/landing-page">Sass</Link>
            </li>
            <li>
              <Link to="/services/landing-page">Firebase</Link>
            </li>
            <li>
              <Link to="/services/landing-page">HTML</Link>
            </li>
            <li>
              <Link to="/services/landing-page">CSS</Link>
            </li>
          </ul>
          <ul>
            <h3>Andrii Topii</h3>
            <li>
              <Link to="/about-me">About me</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
          </ul>
          <div>
            <Logo dark="--light"/>
            
          </div>
        </div>
        <div className="footer__copyright">
          <p>©Copyright 2024 ANDRII TOPII. All Rights Reserved</p>
          <select className="default-select">
            <option value="UA" defaultChecked>
              Українська
            </option>
            <option value="PL">Polski</option>
            <option value="ENG">English</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
