import { Link } from "react-router-dom";
import "./Blog.scss";
import BlogCard from "../BlogCard/BlogCard";

const Blog = () => {
  return (
    <>
      <section id="blog">
        <div className="container container--col container--background-dark">
          <h1 className="title-section title-section--light">Blog</h1>
          <div className="blog">
            
            
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />

          </div>
          <Link to="/blog" target>
            Більше
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;
