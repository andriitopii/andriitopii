import Button from "../Button/Button";
import PortfolioArticle from "../PortfolioArticle/PortfolioArticle";
import "./Portfolio.scss";
import landi from "./Landing.jpg";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container container--col">
        <div className="portfolio">
          <div className="portfolio__text">
            <h1>Мої роботи</h1>
            <p>
              - це мої історії успіху, мозаїка віртуальних шедеврів, що
              відображають мої досвід та технічну майстерність. Від лаконічних
              лендінгів до великих інтернет-магазинів, мої проекти вражають
              своєю красою та ефективністю.
            </p>
            <Button type="green-fill">Детальніше</Button>
          </div>
          <div className="portfolio__content">
            <PortfolioArticle href="/services" img={landi}/>
            <PortfolioArticle img={landi}/>
            <PortfolioArticle img={landi}/>
            <PortfolioArticle img={landi}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
