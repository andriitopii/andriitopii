import ServicesArticle from "../ServicesArticle/ServicesArticle";
import "./Services.scss";
import LandingImg from "./img/landing.jpg"
const Services = () => {
    return ( <section id="services" >
    <div className="container container--col">
    <h1 className="title-section title-section--dark">Services</h1>
    <div className="services">
        <ServicesArticle title="LANDING PAGE" />
        <ServicesArticle title="PORTFOLIO SITE" />
        <ServicesArticle title="BUSSINES SITE" />
       
    </div>
    </div>
</section> );
}
 
export default Services;