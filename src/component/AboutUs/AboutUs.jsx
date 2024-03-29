import { useContext } from "react";
import "./AboutUs.scss";
import Logo from "../Logo/Logo";
import TitleSection from "../TitleSection/TitleSection";
import JavascriptSvg from "../Icon/JavascriptSvg";
import FirebaseSvg from "../Icon/FirebaseSvg";
import NodejsSvg from "../Icon/NodejsSvg";
import ReactSvg from "../Icon/ReactSvg";
import SassSvg from "../Icon/SassSvg";
import HtmlSvg from "../Icon/HtmlSvg";
import CssSvg from "../Icon/CssSvg";
import ExpressSvg from "../Icon/ExpressSvg";
import CheckMarkSvg from "../Icon/CheckMarkSvg";
const AboutUs = () => {
  return (
    <section id="about">
      <div className="container container--col">
        <div className="about">
          <div className="about__block">
            <p className="about__block_text">
              Привіт! Я Andrii Topii, веб-розробник з більш ніж <span>2-річним
              досвідом</span> у цій захоплюючій галузі.
            </p>
          </div>

          <div className="about__block">
            <div className="about__block_media">
              <span>
                <h1>01</h1>
                <h3>FRONT-END</h3>
                <ul>
                  <li><CheckMarkSvg />HTML5</li>
                  <li><CheckMarkSvg />CSS3</li>
                  <li><CheckMarkSvg />JavaScript</li>
                  <li><CheckMarkSvg />React.js</li>
                  <li><CheckMarkSvg />Sass</li>
                  <li><CheckMarkSvg />Responsive Design</li>
                  <li><CheckMarkSvg />Cross-Browser Compatibility</li>
                </ul>
              </span>
              <span>
                <h1>02</h1>
                <h3>BACK-END</h3>
                <ul>
                  <li><CheckMarkSvg />Node.js</li>
                  <li><CheckMarkSvg />MySQL</li>
                  <li><CheckMarkSvg />Express.js</li>
                  <li><CheckMarkSvg />Firebase</li>
                </ul>
              </span>
              <span>
                <h1>03</h1>
                <h3>UI/UX</h3>
                <ul>
                  <li><CheckMarkSvg />User Research</li>
                  <li><CheckMarkSvg />Wireframing</li>
                  <li><CheckMarkSvg />Visual Design</li>
                  <li><CheckMarkSvg />User Testing</li>
                  <li><CheckMarkSvg />Usability Principles</li>
                  <li><CheckMarkSvg />Typography</li>
                </ul>
              </span>
              <span>
                <h1>04</h1>
                <h3>NO-CODE</h3>
                <ul>
                  <li><CheckMarkSvg />Shopify</li>
                  <li><CheckMarkSvg />Webflow</li>
                  <li><CheckMarkSvg />WordPress</li>
                  <li><CheckMarkSvg />Wix</li>
                </ul>
              </span>
            </div>
            
          </div>
          <div className="about__block">
          <p className="about__block_text">
              Моя мета - створювати <span>веб-рішення</span>, які вражають.
            </p>
            

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
