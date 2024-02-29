import { Link } from "react-router-dom";
import "./Blog.scss";
import BlogCard from "../BlogCard/BlogCard";
import { useEffect, useRef, useState } from "react";

const Blog = () => {
  const refBlog = useRef(null);
  const [slidePos, setSlidePos] = useState(0);
  useEffect(() => {
    setSlidePos(refBlog.current.scrollWidth / 4);
  }, []);
  window.addEventListener('resize',()=>{
    setSlidePos(refBlog.current.scrollWidth / 4);
  })
  function changePos(newpos) {
    refBlog.current.scrollTo({
      left: refBlog.current.scrollLeft + newpos,
      behavior: "smooth",
    });
  }

  return (
    <>
      <section id="blog">
        <div className="container container--col container--background-dark">
          <h1 className="title-section title-section--light">Blog</h1>
          <div className="blog" ref={refBlog}>
            <button
              className="blog__slide-control"
              type="button"
              onClick={() => changePos(slidePos * -1)}
            ></button>  

            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <button
              className="blog__slide-control"
              type="button"
              onClick={() => changePos(slidePos)}
            ></button>
          </div>
          <Link to="/blog" target="true" className="blog__link">
            Більше
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;
