import { Link } from "react-router-dom";
import "./PricingArticle.scss";
const PricingArticle = (props) => {
    return ( 
    <article className="pricing-article">
        <h2>{props.title}</h2>
        <h1>${props.price}</h1>
        <p>{props.desc}</p>
        <Link to="/price">Order</Link>
        <ul>
            {props.futured.map((item)=><li key={item}>{item}</li>)}
        </ul>
        
    </article> );
}
 
export default PricingArticle;