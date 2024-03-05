import PricingArticle from "../PricingArticle/PricingArticle";
import TitleSection from "../TitleSection/TitleSection";
import "./Pricing.scss";
const Pricing = () => {
  const dataPrice = [
    {
      title: "LANDING PAGE",
      price: 1000,
      desc: "It is a long established fact that a reader will be distracted by the readable content of a ",
      futured: ["One page", "SEO Optimization"],
    },
    {
      title: "PORTFOLIO SITE",
      price: 1200,
      desc: "It is a long established fact that a reader will be distracted by the readable content of a ",
      futured: ["One page", "SEO Optimization"],
    },
    {
      title: "BUSINESS SITE",
      price: 2500,
      desc: "It is a long established fact that a reader will be distracted by the readable content of a ",
      futured: ["One page", "SEO Optimization","One page", "SEO Optimization"],
    }
  ];
  return (
    <section id="pricing">
      <div className="container container--background-light container--col">
        <TitleSection>Pricing</TitleSection>
        <div className="pricing">
          {dataPrice.map((item) => 
            <PricingArticle
              key={item.title}
              title={item.title}
              price={item.price}
              desc={item.desc}
              futured={item.futured}
            ></PricingArticle>
          )}

          
        </div>
      </div>
    </section>
  );
};

export default Pricing;
