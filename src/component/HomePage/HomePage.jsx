import Pricing from "../Pricing/Pricing";
import Blog from "../Blog/Blog";
import OurClients from "../OurClients/OurClients";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Andrii Topii - Website development from A to Z</title>
        <meta
          name="description"
          content="Опис вашого сайту, який буде відображатися у результатах пошуку."
        />
        <meta
          name="keywords"
          content="Web development, Website development, Turnkey solutions,Website design
,Programming
,UX/UI
,SEO optimization
,Mobile development
,Effective web presence
,Client satisfaction
,IT innovations
,Online visibility
,Technical support
,Website performance
,Customized approach
,Web development technologies
,Modern design
,Rapid development
,Personalized web experience
,Interactive website"
        />
        <meta name="author" content="Andrii Topii" />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Helmet>
      <Header />
      <AboutUs />
      <Services />
      <Portfolio />
      <Pricing />
      <Blog />
      <Reviews />
      <Contact />
    </>
  );
};

export default HomePage;
