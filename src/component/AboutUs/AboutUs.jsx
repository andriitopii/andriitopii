import { useContext } from "react";
import { MyContext } from "../../context/LangContextProvider";
import "./AboutUs.scss";
import FigmaSvg from "./icon/FIgmaSvg";
import HtmlSvg from "./icon/HtmlSvg";
import CssSvg from "./icon/CssSvg";
import ExpressSvg from "./icon/ExpressSvg";
import FirebaseSvg from "./icon/FirebaseSvg";
import JavascriptSvg from "./icon/JavascriptSvg";
import ReactSvg from "./icon/ReactSvg";
import SassSvg from "./icon/SassSvg";
import NodejsSvg from "./icon/NodejsSvg";
import CheckSvg from "./icon/CheckSvg";
const AboutUs = () => {
  return (
    <section id="about">
      <div className="container container--col">
        <h1 className="title-section title-section--dark">About Us</h1>
        <div className="about">
          <div className="about__hard-skills-container">
            <h2>
              <span className="accent-text">Hard</span> skills
            </h2>
            <ul>
              <li>
                <FigmaSvg />
              </li>
              <li>
                <HtmlSvg />
              </li>
              <li>
                <CssSvg />
              </li>
              <li>
                <ExpressSvg />
              </li>
              <li>
                <FirebaseSvg />
              </li>
              <li>
                <JavascriptSvg />
              </li>
              <li>
                <ReactSvg />
              </li>
              <li>
                <SassSvg />
              </li>
              <li>
                <NodejsSvg />
              </li>
            </ul>
          </div>
          <div className="about__info-container">
            <h2>
              <span className="accent-text">Who</span> i am?
            </h2>
            <p>
              Hi, I'm Andrii, a web developer with a lot of experience in
              creating impressive websites. My professional focus is on creating
              effective landing pages, stylish portfolio websites, and
              functional multi-page business websites. My goal is to provide you
              with customized and innovative solutions to make your web project
              stand out from the competition and attract the attention of your
              target audience.
            </p>
          </div>
          <div className="about__soft-skills-container">
            <h2>
              <span className="accent-text">Soft</span> skills
            </h2>

            <ul>
              <li>
                <span>
                  <CheckSvg width="19px" height="19px" />
                  Empathy
                </span>
              </li>
              <li>
              <span>
                  <CheckSvg width="19px" height="19px" />
                  Responsibility
                </span>
              </li>
              <li>
              <span>
                  <CheckSvg width="19px" height="19px" />
                  Cooperation
                </span>
              </li>
              <li>
              <span>
                  <CheckSvg width="19px" height="19px" />
                  Problem thinking
                </span>
              </li>
              <li>
              <span>
                  <CheckSvg width="19px" height="19px" />
                  Initiative
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
