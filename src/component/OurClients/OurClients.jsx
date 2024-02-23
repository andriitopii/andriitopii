import "./OurClients.scss";
import herhelbouqtique from "./img/herhelboutique.svg";
const OurClients = () => {
    
  return (
    <section>
      <div className="container container--col">
        <h1 className="title-section">Our clients</h1>
        <div className="our-clients our-clients__container">
          <a href="#"  className="our-clients__item our-clients__item--ani-1">
            <img className="our-clients__logo" src={herhelbouqtique} />
          </a>
          <a href="#" className="our-clients__item our-clients__item--ani-2">
            <img className="our-clients__logo" src={herhelbouqtique} />
          </a>
          <a href="#" className="our-clients__item our-clients__item--ani-3">
            <img className="our-clients__logo" src={herhelbouqtique} />
          </a>
          <a href="#" className="our-clients__item our-clients__item--ani-1">
            <img className="our-clients__logo" src={herhelbouqtique} />
          </a>
          <a href="#" className="our-clients__item our-clients__item--ani-2">
            <img className="our-clients__logo" src={herhelbouqtique} />
          </a>
          <a href="#" className="our-clients__item our-clients__item--ani-3">
            <img className="our-clients__logo" src={herhelbouqtique} />
          </a>
          <a href="#" className="our-clients__item our-clients__item--ani-1">
            <img className="our-clients__logo" src={herhelbouqtique} />
          </a>
          <a href="#" className="our-clients__item our-clients__item--ani-2">
            <img className="our-clients__logo" src={herhelbouqtique} />
          </a>
          <a href="#" className="our-clients__item our-clients__item--ani-3">
            <img className="our-clients__logo" src={herhelbouqtique} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
