import { Link } from "react-router-dom";
import "./PricingArticle.scss";
import Button from "../Button/Button";
import CheckMarkSvg from "../Icon/CheckMarkSvg";
const PricingArticle = (props) => {
    return ( 
    <article className="pricing-article">
        <h2>#{props.title}</h2>
        <h1>${props.price}</h1>
        <p>{props.desc}</p>
        
        <ul>
            {props.futured.map((item)=><><li key={Math.random()}><CheckMarkSvg />{item}</li></>)}
        </ul>
        <Button type="green-fill">Замовити</Button>
    </article> );
}
 
export default PricingArticle;