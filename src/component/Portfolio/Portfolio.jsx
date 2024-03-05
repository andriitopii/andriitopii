import PortfolioArticle from "../PortfolioArticle/PortfolioArticle";
import "./Portfolio.scss";
const Portfolio = () => {
  const content =
    "Lorem ipsum asdkfjahsdlkjhf as,jkdhgf k  kjhasgdf jlkhsdfkhj g as jhgasd  f";
  return (
    <section id="portfolio">
      <div className="container container--col container--background-dark">
        <h1 className="title-section title-section--light">Portfolio</h1>
        <div className="portfolio">
          <PortfolioArticle
            title="Herhel Boutique"
            content={content}
            imgUrl="https://assets-global.website-files.com/6515a6d5f30daec433d0abe2/6515a6d5f30daec433d0acbb_wf-getstarted-img-marketplace.webp"
          />
          <PortfolioArticle
            title="Herhel Boutique"
            content={content}
            imgUrl="https://assets-global.website-files.com/5e052922ed2a27237b60d8de/652f30cde20b5d83a1c50c7a_Slide%2016_9%20-%2010.webp"
          />
          <PortfolioArticle
            title="Herhel Boutique"
            content={content}
            imgUrl="https://www.techicy.com/wp-content/uploads/2023/11/Website-Templates-that-Convert.png"
          />
          <PortfolioArticle
            title="Herhel Boutique"
            content={content}
            imgUrl="https://saffronavenue.com/wp-content/uploads/2022/09/Stylish-Editorial-Showit-Website-Template-Designers-5-scaled.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
