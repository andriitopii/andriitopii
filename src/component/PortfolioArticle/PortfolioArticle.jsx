import { Link } from "react-router-dom";
import "./PortfolioArticle.scss";
const PortfolioArticle = (props) => {
  return <article className="portfolio-article">
    <img src={props.imgUrl}/>
    <div className="portfolio-article__content">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <Link to="/portfolio">More</Link>
    </div>
  </article>;
};

export default PortfolioArticle;
