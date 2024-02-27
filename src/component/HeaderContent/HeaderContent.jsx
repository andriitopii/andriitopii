import { useState } from "react";
import Button from "../Button/Button";
import "./HeaderContent.scss";
import personImg from "./person.png";
const HeaderContent = () => {
  const [objPos, setObjPos] = useState({})
  let x ;
  let y ;
  window.addEventListener('mousemove', (e)=>{
    x = e.clientX;
    y = e.clientY;
    setObjPos({
      position: 'relative', 
      left: xSlide(x),
      top: xSlide(y),
      transform: `rotate(${xSlide(x)})`
    })
  });
  function xSlide(pos){
    if(pos > 100){
      pos = pos * 0.01;
      return pos;
    }
    if(pos<100){
      return 0;
    }
    
  }

  
  return (
    <div className="header__content-header content-header">
      <h2 className="content-header__hello" style={{left: objPos.left * -1, top: objPos.top * -1}}>Hello</h2>
      <p className="content-header__title" style={objPos}>
        I'm <span>Andrii</span>, <br></br> Fullstack Developer
      </p>
      {/*  */}
      <div className="content-header__content-container content-container">
        <div className="content-header__quote">
          <p >
            I create a web world where every pixel tells a story of success.
            Your website is not only a code, but also a reflection of your
            uniqueness. Entrust your virtual image to a professional and watch
            your idea come to life online.
          </p>
        </div>
        <div className="content-header__rating">
          <h2>
            <b>2+ Year</b> <span>Experinces</span>
          </h2>

          <h2>
          <b>30+</b>  <span>Satisfied customers</span>
          </h2>
          <h2>
          <b>Only new</b> <span>Technologies</span>
          </h2>
        </div>
      </div>
      <div className="content-header__action-header action-header">
        <button className="action-header__btn action-header__btn--portfolio">
          Portfolio
          <span></span>
        </button>
        <button className="action-header__btn action-header__btn--order">
          Order now
        </button>
      </div>
    </div>
  );
};

export default HeaderContent;
