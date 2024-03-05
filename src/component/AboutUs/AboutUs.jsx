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
const AboutUs = () => {
  return (
    <section id="about">
      <div className="container container--col">
        <TitleSection>About us</TitleSection>
        <div className="about">
          <div className="about__item about__item--rect about__item--rect--trans">
            <h2>Hi, I'm Andrii Topii and I'm a web developer.</h2>
            <p>
              I specialize in full-cycle website development. My main focus is
              developing landing pages, portfolio sites, and business websites.
            </p>
          </div>

          <div className="about__item about__item--squre">
            <h2>57%</h2>
            <p> 
              I specialize in full-cycle </p>
          </div>
          <div className="about__item about__item--squre">
            <h2>30+</h2>
            <p>
              I specialize in full-cycle </p>
          </div>
          
          <div className="about__item about__item--squre">
          <h2>57%</h2>
            <p>
              I specialize in full-cycle </p>
          </div>
          
          <div className="about__item about__item--squre" >
          <h2>57%</h2>
            <p>
              I specialize in full-cycle </p>
          </div>
          <div className="about__item about__item--rect about__item--rect--black">
            <JavascriptSvg />
            <FirebaseSvg/>
            <NodejsSvg />
            <ReactSvg />
            <SassSvg />
            <HtmlSvg />
            <CssSvg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
