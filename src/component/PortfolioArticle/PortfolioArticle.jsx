import { Link } from "react-router-dom";
import "./PortfolioArticle.scss";
const PortfolioArticle = (props) => {
  return <Link to={props?.href} className="portfolio-article" 
  style={{backgroundImage: `url(${props.img})`}}
  >
    <div className="portfolio-article__content">
        <h2>HERHEL BOUTIQUE</h2>
        <p>ІНТЕРНЕТ-МАГАЗИН НА ПЛАТФОРМІ SHOPIFY</p>
    </div>
  </Link>
};

export default PortfolioArticle;
