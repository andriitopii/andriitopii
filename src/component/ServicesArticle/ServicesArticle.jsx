import { Link } from "react-router-dom";
import "./ServicesArticle.scss";
import Button from "../Button/Button";
const ServicesArticle = (props) => {
  return (
    <article
      className="services__article"
      
    >
      
      <h1>#Лендінг-сторінка</h1>
      <ul>
        <li><h3>Для чого?</h3></li>
        <span>/</span>
        <li>Захоплення уваги</li>
        <span>/</span>
        <li>Збільшення конверсії</li>
        <span>/</span>
        <li>Персоналізоване спілкування</li>
        <span>/</span>
        <li>Вимірювання ефективності</li>
      </ul>
      <ul>
        <li><h3>Кому?</h3></li>
        <span>/</span>
        <li>Підприємці та стартапи</li>
        <span>/</span>
        <li>Бренди</li>
        <span>/</span>
        <li>Маркетолог</li>
        <span>/</span>
        <li>Організатори подій</li>
        <span>/</span>
      </ul>
      <p>
        Створіть вражаючі лендінги, що привертають увагу та збільшують продажі.
        Ваша перша зустріч із клієнтом повинна бути незабутньою. <br></br> Готові залучити
        їх у ваш світ?
      </p>
      <Button type="green-stroke-transparent">Так, звісно!</Button>
      
    </article>
  );
};

export default ServicesArticle;
