import Pricing from "../Pricing/Pricing";
import Blog from "../Blog/Blog";
import OurClients from "../OurClients/OurClients";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";


const Home = () => {
  return (
    <>
      <AboutUs />
      <Services/>
      <Portfolio/>
      <Pricing />
      <Blog />
      <Reviews/>
      <Contact/>
      </>
  )
};

export default Home;
