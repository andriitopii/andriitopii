import { Link } from "react-router-dom";
import "./ServicesArticle.scss";
const ServicesArticle = (props) => {
  return (
    <article
      className="services__article"
      style={{ backgroundImage: `url('${props.img}')` }}
    >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <ul>
        {props.benefit.map((item)=>
             <li key={Math.random()}>{item}</li>
        )}
      </ul>
      <Link to="/service">More</Link>
    </article>
  );
};

export default ServicesArticle;
