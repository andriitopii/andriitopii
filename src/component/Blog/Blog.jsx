import { Link } from "react-router-dom";
import "./Blog.scss";
import BlogCard from "../BlogCard/BlogCard";
import { useEffect, useRef, useState } from "react";
import TitleSection from "../TitleSection/TitleSection";
import Button from "../Button/Button";

const Blog = () => {
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
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
