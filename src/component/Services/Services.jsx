import ServicesArticle from "../ServicesArticle/ServicesArticle";
import "./Services.scss";
import LandingImg from "./img/landing.jpg";
const Services = () => {
  const cont =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reiciendis commodi repellendus architecto aperiam? Saepe quam quod a, rem architecto quas hic sapiente omnis dolorem fugit consequatur quis. Optio, labore.";
  const ben = ['FOR ARTIST', 'ONE PAGE','FOR BIG BUSSINES'];
    return (
    <section id="services">
      <div className="container container--col">
        <h1 className="title-section title-section--dark">Services</h1>
        <div className="services">
          <ServicesArticle title="LANDING PAGE" content={cont} benefit={ben}/>
          <ServicesArticle title="PORTFOLIO SITE" content={cont} benefit={ben}/>
          <ServicesArticle title="BUSSINES SITE" content={cont} benefit={ben}/>
        </div>
      </div>
    </section>
  );
};

export default Services;
