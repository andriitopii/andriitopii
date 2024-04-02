import { Link } from "react-router-dom";
import "./Blog.scss";
import BlogCard from "../BlogCard/BlogCard";
import { useEffect, useRef, useState } from "react";
import TitleSection from "../TitleSection/TitleSection";
import Button from "../Button/Button";
import ArrowBackSvg from "../Icon/ArrowBackSvg";
import ArrowForwardSvg from "../Icon/ArrowForwardSvg";

const Blog = () => {
  const refBlogSlide = useRef(null)
  function blogSlide(action){

    let scrollLeft = refBlogSlide.current.scrollLeft;
    const clientWidth = refBlogSlide.current.clientWidth;
    const scrollWidth = refBlogSlide.current.scrollWidth;
    const maxScroll = scrollWidth - clientWidth;

    switch(action){
      case "NEXT":{
        if((maxScroll - scrollLeft) <= 2){
          refBlogSlide.current.scrollLeft = 0;
        }else{
          refBlogSlide.current.scrollLeft = scrollLeft + (scrollWidth / 3)
        }

      }
      break;
      case "PREV":{
        if(scrollLeft === 0 || scrollLeft <= 10){
          refBlogSlide.current.scrollLeft = maxScroll;
        } else {
          refBlogSlide.current.scrollLeft = scrollLeft - (scrollWidth / 3);
        }
      }
      break;
    }
  }
  return (
    <>
      <section id="blog">
        <div className="container container--col container--background-dark">
          <div className="blog">
            <div className="blog__text">
              <h1>У світі веб-розробки, кожен день - нова пригода.</h1>
              <p>
                У моєму блозі я ділюся своїм досвідом, відкриттями та ідеями,
                щоб керувати вас у цій захоплюючій подорожі віртуальним світом.
              </p>
              <Button direct="/blog" type="green-stroke-transparent">Читати більше</Button>
            </div>

            <div className="blog__media">
              <button onClick={()=>blogSlide("PREV")}><ArrowBackSvg/></button>
              <div className="blog__media_container" ref={refBlogSlide}>
              <BlogCard />
              <BlogCard />
              <BlogCard />
              </div>
              <button onClick={()=>blogSlide("NEXT")}><ArrowForwardSvg/></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
