import { Link } from "react-router-dom";
import "./BlogCard.scss";
import CommentsSvg from "../Icon/ComentsSvg";

const BlogCard = (props) => {
  return (
    <article className="blog-article" >
      <div className="blog-article__data">{props.data.day}<span>{props.data.mounth}</span></div>
      <img src={props.imgUrl} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <div className="blog-article__comments">
        <CommentsSvg width="16px" height="16px" /> {props.countComents} Comments
      </div>
      <Link to="/blog">Read more <span></span></Link>
    </article>
  );
};

export default BlogCard;
