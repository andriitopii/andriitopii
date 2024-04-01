import { Link } from "react-router-dom";
import "./BlogCard.scss";
import CommentsSvg from "../Icon/ComentsSvg";
import HtmlSvg from "../Icon/HtmlSvg";

const BlogCard = (props) => {
  return (
    <Link to="/blog" href="" className="blog-card">
      <div className="blog-card__img">
        <img src={props?.img} />
      </div>
      <h1 className="blog-card__title">Що вчити Junior-у в 2024?</h1>
      <p className="blog-card__desk">Чи траплялось вам така ситуація що вам тяжко визначитис що починати вчити?</p>
      <div className="blog-card__footer">
        <span className="blog-card__footer_type">
          <HtmlSvg width="24px" height="24px" />
        </span>
        <ul className="blog-card__footer_hashtag">
          <li>#css</li>
          <li>#html</li>
          <li>#react</li>
        </ul>
      </div>
    </Link>
  );
};

export default BlogCard;
