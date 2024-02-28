import { Link } from "react-router-dom";
import "./BlogCard.scss";

const BlogCard = () => {
  return (
    <article href="#" className="blog__article-blog-card article-blog-card">
    <div className="article-blog-card__data">
        <b>12</b>
        <span>SEP</span>
    </div>
      <img
        src="https://th.bing.com/th/id/OIG2.mbwEI1Xi_8ewAiNdE5GV?pid=ImgGn"
        className="article-blog-card__img"
      />
      <p className="article-blog-card__comment">
        
        <span className="article-blog-card__comment_icon"></span>
        <span>12</span>
        comment's
      </p>
      <h2 className="article-blog-card__title">Hi this my first blog</h2>
      <p className="article-blog-card__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        corrupti id eligendi hic ipsum! At neque ipsum non error quaerat. Enim
        voluptates temporibus reiciendis est, aperiam repellat consectetur
        cupiditate molestias.
      </p>
      <Link to="/blog/:id" className="article-blog-card__link">
        Read more
      </Link>
    </article>
  );
};

export default BlogCard;
