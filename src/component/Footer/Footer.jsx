import "./Footer.scss";
import { Link } from "react-router-dom";
import BehanceSvg from "../Icon/BehanceSvg";
import XSvg from "../Icon/XSvg";
import InstagramSvg from "../Icon/InstagramSvg";
import FacebookSvg from "../Icon/FacebookSvg";
import LinkedinSvg from "../Icon/LinkedinSvg";
import Logo from "../Logo/Logo";
import { MyUseContext } from "../../context/ContextGlobal";

const Footer = () => {
  const{socialLink} = MyUseContext();
  return (
    <footer className="footer">
      <div className="container container__row">
        <div className="footer__col">
          <div className="footer__link">
            <ul>
              <li>
                <ul>
                  <li>
                    <Link to="/about-me">About me</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/reviews">Reviews</Link>
                  </li>
                  <li>
                    <Link to="/technology">Technology</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <Link to="/technology/reactjs">React JS</Link>
                  </li>
                  <li>
                    <Link to="/technology/nodejs">Node JS</Link>
                  </li>
                  <li>
                    <Link to="/technology/sass">Sass</Link>
                  </li>
                  <li>
                    <Link to="/technology/firebase">Firebase</Link>
                  </li>
                  <li>
                    <Link to="/technology/js">Java Script</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <Link to="/cookies">Cookies</Link>
                  </li>
                  <li>
                    <Link to="/about">Terms of use</Link>
                  </li>
                  <li>
                    <Link to="/about">Privacy</Link>
                  </li>
                  <li>
                    <Link to="/partners">Partners</Link>
                  </li>
                  <li>
                    <Link to="/carre">Сareers</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="footer__copyright">
            <p>© Copyright  2024. Andrii Topii</p>
          </div>
        </div>

        <div className="footer__col footer__col--right-bottom-end">
          <ul className="footer__social">
            <li><Link  target="__blank">Instagram</Link></li>
            <li><Link  target="__blank">Twitter</Link></li>
            <li><Link  target="__blank">Facebook</Link></li>
            <li><Link  target="__blank">LinkedIn</Link></li>
            <li><Link  target="__blank">GitHub</Link></li>
            <li><Link  target="__blank">Behance</Link></li>
            <li><Link  target="__blank">TikTok</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
