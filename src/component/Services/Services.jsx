import { useEffect, useRef, useState } from "react";
import ArrowBackSvg from "../Icon/ArrowBackSvg";
import ArrowForwardSvg from "../Icon/ArrowForwardSvg";
import ServicesArticle from "../ServicesArticle/ServicesArticle";
import "./Services.scss";

const Services = () => {
  const refContainer = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0)
  const [actualLeftScroll, setActualLeftScroll] = useState(0)
  function controlSlider(action) {
    const clientWidth = refContainer.current.clientWidth;
    const scrollWidth = refContainer.current.scrollWidth;
    const scrollLeft = Math.floor(refContainer.current.scrollLeft);
    const maxScroll = scrollWidth - clientWidth;
    setActualLeftScroll(scrollLeft)
    switch (action) {
      case "next":
        {
          if ((maxScroll - scrollLeft) <= 2) {
            refContainer.current.scrollLeft = 0;
            setCurrentSlide(0)
          } else {
            refContainer.current.scrollLeft = scrollLeft + clientWidth;
            setCurrentSlide(currentSlide + 1)
          }
        }
        break;
      case "prev":
        if (scrollLeft === 0) {
          refContainer.current.scrollLeft = maxScroll;
          setCurrentSlide(3)
        } else {
          refContainer.current.scrollLeft = scrollLeft - clientWidth;
          setCurrentSlide(currentSlide - 1)
        }
        break;
        case "scroll":
          {
            if(scrollLeft === 0 || scrollLeft <= 50){
              setCurrentSlide(0)
            }else if(scrollLeft === clientWidth || scrollLeft <= (clientWidth + 50)){
              setCurrentSlide(1)
            } else if((maxScroll - clientWidth ) === scrollLeft || scrollLeft <= (maxScroll - clientWidth + 50)){
              setCurrentSlide(2)
            } else if(scrollLeft === maxScroll || (maxScroll - scrollLeft) <= 50){
              setCurrentSlide(3)
            }

          }
        break;
    }
  }
  useEffect(() => {
    refContainer.current.addEventListener("scroll", () => controlSlider("scroll") 
    )
   
    return ()=>{
      refContainer.current.removeEventListener("scroll",  () => controlSlider("scroll"))
    }
  }, []);

  return (
    <section id="services">
      <div className="container container--col">
        <div className="services">
          <div className="services__slider">
            <button onClick={() => controlSlider("prev")}>
              <ArrowBackSvg width="24px" />
            </button>
            <div ref={refContainer} className="services__slider_container">
              <ServicesArticle />
              <ServicesArticle />
              <ServicesArticle />
              <ServicesArticle />
            </div>
            <button onClick={() => controlSlider("next")}>
              <ArrowForwardSvg width="24px" />
            </button>
            <div className="services__slider_checked">
              <span className={currentSlide === 0 && "current-slided"} ></span>
              <span className={currentSlide === 1 && "current-slided"} ></span>
              <span className={currentSlide === 2 && "current-slided"} ></span>
              <span className={currentSlide === 3 && "current-slided"} ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
