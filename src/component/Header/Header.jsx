import "./Header.scss";
import WebGif from "./webdevgif.gif";
import Button from "../Button/Button";
import LinkedinSvg from "../Icon/LinkedinSvg";
import InstagramSvg from "../Icon/InstagramSvg";
import BehanceSvg from "../Icon/BehanceSvg";
import FacebookSvg from "../Icon/FacebookSvg";
import XSvg from "../Icon/XSvg";
import { MyUseContext } from "../../context/ContextGlobal";
import { Link } from "react-router-dom";
const Header = () => {
  const { socialLink } = MyUseContext();
  return (
    <header id="header" className="header">
      <div className="container container--col">
        <div className="header__content">
          <div className="header__info">
            <h3>Andrii Topii - Skilled Web Developer</h3>
            <h1>Crafting Impactful Websites for Your Digital Success</h1>
            <p>
              Hi, I'm Andrii, your go-to web developer. I specialize in crafting
              engaging landing pages and portfolios that elevate your online
              presence. Hire me to transform your digital vision into reality!
            </p>
            <Button type="btn--animation-blime">Contact me</Button>
          </div>
          <div className="header__media">
            <img src={WebGif} />
          </div>
        </div>
        <div className="header__stripes">
          <div className="container container--jc-sb container--ai-c">
            <div className="header__fact">
              <ul>
                <li>
                  <h1>35+</h1>
                </li>
                <li>
                  <p>PROJECTS</p>
                </li>
              </ul>
              <ul>
                <li>
                  <h1>3+ YEAR'S</h1>
                </li>
                <li>
                  <p>EXPERIENCE</p>
                </li>
              </ul>
            </div>
            <ul className="header__social">
              <li>
                <Link to={socialLink.instagram} target="__blank">
                  <InstagramSvg />
                </Link>
              </li>
              <li>
                <Link to={socialLink.twitter} target="__blank">
                  <XSvg />
                </Link>
              </li>
              <li>
                <Link to={socialLink.facebook} target="__blank">
                  <FacebookSvg />
                </Link>
              </li>
              <li>
                <Link to={socialLink.linkedin} target="__blank">
                  <LinkedinSvg />
                </Link>
              </li>
              <li>
                <Link to={socialLink.github} target="__blank">
                  GitHub
                </Link>
              </li>
              <li>
                <Link to={socialLink.behance} target="__blank">
                  <BehanceSvg />
                </Link>
              </li>
              <li>
                <Link to={socialLink.tiktok} target="__blank">
                  TikTok
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
